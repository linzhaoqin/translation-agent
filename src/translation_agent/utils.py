import os
from typing import List, Union, Any
import time
import re
import ast
from datetime import datetime
import json

import anthropic
import tiktoken
from dotenv import load_dotenv
from icecream import ic
from langchain_text_splitters import RecursiveCharacterTextSplitter


load_dotenv()  # read local .env file

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")


# client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

client = anthropic.Anthropic(
    api_key=ANTHROPIC_API_KEY,
)

MAX_TOKENS_PER_CHUNK = 1000  # 输入分块的最大token数
MAX_OUTPUT_TOKENS = 8192      # API返回内容的最大token限制
# https://docs.anthropic.com/en/docs/about-claude/models#model-comparison-table


def is_json_like_file(file_path: str) -> bool:
    """判断是否为类JSON文件（.json, .ts, .js等）"""
    json_like_extensions = {'.json', '.ts', '.js'}
    return os.path.splitext(file_path)[1].lower() in json_like_extensions


def validate_json_keys(
    source_content: str,
    translated_content: str,
    source_file: str
):
    """校验翻译后的键值完整性（宽松模式）"""
    def extract_keys(content: str) -> set:
        """提取TS文件中的所有键路径"""
        key_paths = set()
        stack = []

        # 使用正则匹配键值对
        pattern = re.compile(
            r'(\w+)\s*:\s*([\'\"].*?[\'\"]|{|\d+|\[)',  # 匹配 key: value 结构
            re.DOTALL
        )

        lines = content.split('\n')
        for line in lines:
            # 跳过注释行
            if line.strip().startswith('//'):
                continue

            # 匹配键
            match = pattern.search(line)
            if match:
                key = match.group(1)
                value_indicator = match.group(2)

                # 处理嵌套结构
                if value_indicator == '{':
                    stack.append(key)
                elif stack:
                    current_path = '.'.join(stack + [key])
                    key_paths.add(current_path)
                else:
                    key_paths.add(key)

            # 检测结构结束
            if '}' in line and stack:
                stack.pop()

        return key_paths

    try:
        # 提取源文件和翻译文件的键路径
        source_keys = extract_keys(source_content)
        translated_keys = extract_keys(translated_content)

        # 计算差异
        missing_keys = source_keys - translated_keys
        extra_keys = translated_keys - source_keys

        # 生成报告
        report = [
            "=== 键值校验报告 ===",
            f"源文件: {os.path.basename(source_file)}",
            f"检查时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
        ]

        if missing_keys:
            report.append("=== 缺失的键值 ===")
            report.extend(sorted(f"- {key}" for key in missing_keys))

        if extra_keys:
            report.append("\n=== 多余的键值 ===")
            report.extend(sorted(f"- {key}" for key in extra_keys))

        if not missing_keys and not extra_keys:
            report.append("✅ 所有键值匹配完整")

        # 输出并保存报告
        print('\n'.join(report))
        save_validation_report('\n'.join(report))

    except Exception as e:
        print(f"❌ 校验失败: {str(e)}")


def save_validation_report(report_content: str):
    """保存校验报告到文件"""
    try:
        # 创建 reports 目录
        report_dir = "validation_reports"
        os.makedirs(report_dir, exist_ok=True)

        # 生成带时间戳的文件名
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"key_validation_{timestamp}.txt"
        filepath = os.path.join(report_dir, filename)

        # 写入文件
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(report_content)

        print(f"校验报告已保存至: {filepath}")

    except Exception as e:
        print(f"保存报告失败: {str(e)}")


def get_completion(
    prompt: str,
    system_message: str = "You are a helpful assistant.",
    model: str = "claude-3-7-sonnet-20250219",
    temperature: float = 0.3,
    json_mode: bool = False,
) -> Union[str, dict]:
    """
    Generate a completion using the Anthropic API.

    Args:
        prompt (str): The user's prompt or query.
        system_message (str, optional): The system message to set the context for the assistant.
            Defaults to "You are a helpful assistant.".
        model (str, optional): The name of the Anthropic model to use for generating the completion.
            Defaults to "claude-3-5-sonnet-20241022".
        temperature (float, optional): The sampling temperature for controlling the randomness of the generated text.
            Defaults to 0.3.
        json_mode (bool, optional): Whether to return the response in JSON format.
            Defaults to False.

    Returns:
        Union[str, dict]: The generated completion.
            If json_mode is True, returns the complete API response as a dictionary.
            If json_mode is False, returns the generated text as a string.
    """

    # 新增请求信息打印
    print("\n=== API REQUEST ===")
    print(f"System Message: {system_message[:50]}{'...' if len(system_message) > 50 else ''}")
    print(f"\nUser Prompt ({len(prompt)} chars):\n{'-'*40}")
    print(f"{prompt[:50]}{'...' if len(prompt) > 50 else ''}")  # 只展示前50个字符
    print("-"*40)
    print(f"Model: {model}")
    print(f"Temperature: {temperature}")
    print(f"Max Tokens: {MAX_OUTPUT_TOKENS}")
    print("="*40 + "\n")

    # Sleep for 10 seconds before each API call
    # time.sleep(10)
    # print("Sleeping for 10 seconds before each API call")

    response = client.messages.create(
        model=model,
        max_tokens=MAX_OUTPUT_TOKENS,  # 改为使用新的输出限制
        temperature=temperature,
        system=system_message,
        messages=[
            {"role": "user", "content": prompt}
        ],
    )
    return response.content[0].text


def one_chunk_initial_translation(
    source_lang: str, target_lang: str, source_text: str
) -> str:
    """
    Translate the entire text as one chunk using an LLM.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language for translation.
        source_text (str): The text to be translated.

    Returns:
        str: The translated text.
    """

    system_message = f"You are an expert linguist, specializing in translation from {
        source_lang} to {target_lang}."

    translation_prompt = f"""This is an {source_lang} to {target_lang} translation, please provide the {target_lang} translation for this text. \
Do not provide any explanations or text apart from the translation. PRESERVE ALL KEYS BEFORE COLONS.

The source text delimited by XML tags <SOURCE_TEXT></SOURCE_TEXT> are as follows:
<SOURCE_TEXT>
{source_text}
</SOURCE_TEXT>

"""

    translation = get_completion(
        translation_prompt, system_message=system_message)
    print("\nInitial translation completed")
    print(f"Translation length: {len(translation)} characters")

    return translation


def one_chunk_reflect_on_translation(
    source_lang: str,
    target_lang: str,
    source_text: str,
    translation_1: str,
    country: str = "",
) -> str:
    """
    Use an LLM to reflect on the translation, treating the entire text as one chunk.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language of the translation.
        source_text (str): The original text in the source language.
        translation_1 (str): The initial translation of the source text.
        country (str): Country specified for the target language.

    Returns:
        str: The LLM's reflection on the translation, providing constructive criticism and suggestions for improvement.
    """

    system_message = f"You are an expert linguist specializing in translation from {source_lang} to {target_lang}. \
You will be provided with a source text and its translation and your goal is to improve the translation."

    if country != "":
        reflection_prompt = f"""Your task is to carefully read a source text and a translation from {source_lang} to {target_lang}, and then give constructive criticism and helpful suggestions to improve the translation. \
The final style and tone of the translation should match the style of {target_lang} colloquially spoken in {country}.

The source text and initial translation, delimited by XML tags <SOURCE_TEXT></SOURCE_TEXT> and <TRANSLATION></TRANSLATION>, are as follows:

<SOURCE_TEXT>
{source_text}
</SOURCE_TEXT>

<TRANSLATION>
{translation_1}
</TRANSLATION>

When writing suggestions, pay attention to whether there are ways to improve the translation's \n\
(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),\n\
(ii) fluency (by applying {target_lang} grammar, spelling and punctuation rules, and ensuring there are no unnecessary repetitions),\n\
(iii) style (by ensuring the translations reflect the style of the source text and take into account any cultural context),\n\
(iv) terminology (by ensuring terminology use is consistent and reflects the source text domain; and by only ensuring you use equivalent idioms {target_lang}).\n\

Write a list of specific, helpful and constructive suggestions for improving the translation.
Each suggestion should address one specific part of the translation.
Output only the suggestions and nothing else.

When writing suggestions, ensure keys (before colon) remain unchanged. Focus on value translations:"""

    else:
        reflection_prompt = f"""Your task is to carefully read a source text and a translation from {source_lang} to {target_lang}, and then give constructive criticisms and helpful suggestions to improve the translation. \

The source text and initial translation, delimited by XML tags <SOURCE_TEXT></SOURCE_TEXT> and <TRANSLATION></TRANSLATION>, are as follows:

<SOURCE_TEXT>
{source_text}
</SOURCE_TEXT>

<TRANSLATION>
{translation_1}
</TRANSLATION>

When writing suggestions, pay attention to whether there are ways to improve the translation's \n\
(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),\n\
(ii) fluency (by applying {target_lang} grammar, spelling and punctuation rules, and ensuring there are no unnecessary repetitions),\n\
(iii) style (by ensuring the translations reflect the style of the source text and take into account any cultural context),\n\
(iv) terminology (by ensuring terminology use is consistent and reflects the source text domain; and by only ensuring you use equivalent idioms {target_lang}).\n\

Write a list of specific, helpful and constructive suggestions for improving the translation.
Each suggestion should address one specific part of the translation.
Output only the suggestions and nothing else.

When writing suggestions, ensure keys (before colon) remain unchanged. Focus on value translations:"""

    reflection = get_completion(
        reflection_prompt, system_message=system_message)

    # 只保留完整反思结果打印
    print("\n=== 专家修改建议 ===")
    print(reflection)  # 打印完整的反思结果
    print("="*50)

    # 计算建议数量但不单独打印
    suggestions = [s.strip() for s in reflection.split('\n') if s.strip()]
    print(f"生成 {len(suggestions)} 条建议")

    return reflection


def one_chunk_improve_translation(
    source_lang: str,
    target_lang: str,
    source_text: str,
    translation_1: str,
    reflection: str,
) -> str:
    """
    Use the reflection to improve the translation, treating the entire text as one chunk.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language for the translation.
        source_text (str): The original text in the source language.
        translation_1 (str): The initial translation of the source text.
        reflection (str): Expert suggestions and constructive criticism for improving the translation.

    Returns:
        str: The improved translation based on the expert suggestions.
    """

    system_message = f"You are an expert linguist, specializing in translation editing from {
        source_lang} to {target_lang}."

    prompt = f"""Your task is to carefully read, then edit, a translation from {source_lang} to {target_lang}, taking into
account a list of expert suggestions and constructive criticisms.

The source text, the initial translation, and the expert linguist suggestions are delimited by XML tags <SOURCE_TEXT></SOURCE_TEXT>, <TRANSLATION></TRANSLATION> and <EXPERT_SUGGESTIONS></EXPERT_SUGGESTIONS> \
as follows:

<SOURCE_TEXT>
{source_text}
</SOURCE_TEXT>

<TRANSLATION>
{translation_1}
</TRANSLATION>

<EXPERT_SUGGESTIONS>
{reflection}
</EXPERT_SUGGESTIONS>

Please take into account the expert suggestions when editing the translation. Edit the translation by ensuring:

(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),
(ii) fluency (by applying {target_lang} grammar, spelling and punctuation rules and ensuring there are no unnecessary repetitions), \
(iii) style (by ensuring the translations reflect the style of the source text)
(iv) terminology (inappropriate for context, inconsistent use), or
(v) other errors.

Output only the new translation and nothing else."""

    translation_2 = get_completion(prompt, system_message)
    print("\nImprovement completed")
    print(f"Final translation length: {len(translation_2)} characters")

    return translation_2


def one_chunk_translate_text(
    source_lang: str, target_lang: str, source_text: str, country: str = ""
) -> str:
    """
    Translate a single chunk of text from the source language to the target language.

    This function performs a two-step translation process:
    1. Get an initial translation of the source text.
    2. Reflect on the initial translation and generate an improved translation.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language for the translation.
        source_text (str): The text to be translated.
        country (str): Country specified for the target language.
    Returns:
        str: The improved translation of the source text.
    """
    translation_1 = one_chunk_initial_translation(
        source_lang, target_lang, source_text
    )

    reflection = one_chunk_reflect_on_translation(
        source_lang, target_lang, source_text, translation_1, country
    )
    translation_2 = one_chunk_improve_translation(
        source_lang, target_lang, source_text, translation_1, reflection
    )

    return translation_2


def num_tokens_in_string(
    input_str: str, encoding_name: str = "cl100k_base"
) -> int:
    """
    Calculate the number of tokens in a given string using a specified encoding.

    Args:
        str (str): The input string to be tokenized.
        encoding_name (str, optional): The name of the encoding to use. Defaults to "cl100k_base",
            which is the most commonly used encoder (used by GPT-4).

    Returns:
        int: The number of tokens in the input string.

    Example:
        >>> text = "Hello, how are you?"
        >>> num_tokens = num_tokens_in_string(text)
        >>> print(num_tokens)
        5
    """
    encoding = tiktoken.get_encoding(encoding_name)
    num_tokens = len(encoding.encode(input_str))
    return num_tokens


def multichunk_initial_translation(
    source_lang: str, target_lang: str, source_text_chunks: List[str]
) -> List[str]:
    """
    Translate a text in multiple chunks from the source language to the target language.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language for translation.
        source_text_chunks (List[str]): A list of text chunks to be translated.

    Returns:
        List[str]: A list of translated text chunks.
    """

    system_message = f"You are an expert linguist, specializing in translation from {
        source_lang} to {target_lang}."

    translation_prompt = """Your task is to provide a professional translation from {source_lang} to {target_lang} of PART of a text.

The source text snippet below, delimited by XML tags <SOURCE_TEXT> and </SOURCE_TEXT>, contains only a portion of the full document with some context.
Translate only the part within this snippet delimited by <TRANSLATE_THIS> and </TRANSLATE_THIS>. You can use the surrounding text as context, but do not translate any of the other text. Do not output anything other than the translation of the indicated part of the text.

<SOURCE_TEXT>
{tagged_text}
</SOURCE_TEXT>

To reiterate, you should translate only this part of the text, shown here again between <TRANSLATE_THIS> and </TRANSLATE_THIS>:
<TRANSLATE_THIS>
{chunk_to_translate}
</TRANSLATE_THIS>

Output only the translation of the portion you are asked to translate, and nothing else.
"""

    translation_chunks = []
    for i in range(len(source_text_chunks)):
        # 有限上下文窗口
        context_window = 1  # 前后各保留1个块作为上下文
        start_idx = max(0, i - context_window)
        end_idx = min(len(source_text_chunks), i + context_window + 1)

        tagged_text = (
            "".join(source_text_chunks[start_idx:i])
            + "<TRANSLATE_THIS>"
            + source_text_chunks[i]
            + "</TRANSLATE_THIS>"
            + "".join(source_text_chunks[i+1:end_idx])
        )

        prompt = translation_prompt.format(
            source_lang=source_lang,
            target_lang=target_lang,
            tagged_text=tagged_text,
            chunk_to_translate=source_text_chunks[i],
        )

        translation = get_completion(prompt, system_message=system_message)
        translation_chunks.append(translation)

    return translation_chunks


def multichunk_reflect_on_translation(
    source_lang: str,
    target_lang: str,
    source_text_chunks: List[str],
    translation_1_chunks: List[str],
    country: str = "",
) -> List[str]:
    """
    Provides constructive criticism and suggestions for improving a partial translation.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language of the translation.
        source_text_chunks (List[str]): The source text divided into chunks.
        translation_1_chunks (List[str]): The translated chunks corresponding to the source text chunks.
        country (str): Country specified for the target language.

    Returns:
        List[str]: A list of reflections containing suggestions for improving each translated chunk.
    """

    system_message = f"You are an expert linguist specializing in translation from {source_lang} to {target_lang}. \
You will be provided with a source text and its translation and your goal is to improve the translation."

    if country != "":
        reflection_prompt = """Your task is to carefully read a source text and part of a translation of that text from {source_lang} to {target_lang}, and then give constructive criticisms and helpful suggestions for improving the translation.
The final style and tone of the translation should match the style of {target_lang} colloquially spoken in {country}.

The source text snippet below, delimited by XML tags <SOURCE_TEXT> and </SOURCE_TEXT>, contains only a portion of the full document.
The part that has been translated is delimited by <TRANSLATE_THIS> and </TRANSLATE_THIS> within the source text. You can use the surrounding text as context for critiquing the translated part.

<SOURCE_TEXT>
{tagged_text}
</SOURCE_TEXT>

To reiterate, only part of the text is being translated, shown here again between <TRANSLATE_THIS> and </TRANSLATE_THIS>:
<TRANSLATE_THIS>
{chunk_to_translate}
</TRANSLATE_THIS>

The translation of the indicated part, delimited below by <TRANSLATION> and </TRANSLATION>, is as follows:
<TRANSLATION>
{translation_1_chunk}
</TRANSLATION>

When writing suggestions, pay attention to whether there are ways to improve the translation's:\n\
(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),\n\
(ii) fluency (by applying {target_lang} grammar, spelling and punctuation rules, and ensuring there are no unnecessary repetitions),\n\
(iii) style (by ensuring the translations reflect the style of the source text and take into account any cultural context),\n\
(iv) terminology (by ensuring terminology use is consistent and reflects the source text domain; and by only ensuring you use equivalent idioms {target_lang}).\n\

Write a list of specific, helpful and constructive suggestions for improving the translation.
Each suggestion should address one specific part of the translation.
Output only the suggestions and nothing else."""

    else:
        reflection_prompt = """Your task is to carefully read a source text and part of a translation of that text from {source_lang} to {target_lang}, and then give constructive criticism and helpful suggestions for improving the translation.

The source text snippet below, delimited by XML tags <SOURCE_TEXT> and </SOURCE_TEXT>, contains only a portion of the full document.
The part that has been translated is delimited by <TRANSLATE_THIS> and </TRANSLATE_THIS> within the source text. You can use the surrounding text as context for critiquing the translated part.

<SOURCE_TEXT>
{tagged_text}
</SOURCE_TEXT>

To reiterate, only part of the text is being translated, shown here again between <TRANSLATE_THIS> and </TRANSLATE_THIS>:
<TRANSLATE_THIS>
{chunk_to_translate}
</TRANSLATE_THIS>

The translation of the indicated part, delimited below by <TRANSLATION> and </TRANSLATION>, is as follows:
<TRANSLATION>
{translation_1_chunk}
</TRANSLATION>

When writing suggestions, pay attention to whether there are ways to improve the translation's:\n\
(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),\n\
(ii) fluency (by applying {target_lang} grammar, spelling and punctuation rules, and ensuring there are no unnecessary repetitions),\n\
(iii) style (by ensuring the translations reflect the style of the source text and take into account any cultural context),\n\
(iv) terminology (by ensuring terminology use is consistent and reflects the source text domain; and by only ensuring you use equivalent idioms {target_lang}).\n\

Write a list of specific, helpful and constructive suggestions for improving the translation.
Each suggestion should address one specific part of the translation.
Output only the suggestions and nothing else."""

    reflection_chunks = []
    for i in range(len(source_text_chunks)):
        # 有限上下文窗口
        context_window = 1  # 前后各保留1个块作为上下文
        start_idx = max(0, i - context_window)
        end_idx = min(len(source_text_chunks), i + context_window + 1)

        tagged_text = (
            "".join(source_text_chunks[start_idx:i])
            + "<TRANSLATE_THIS>"
            + source_text_chunks[i]
            + "</TRANSLATE_THIS>"
            + "".join(source_text_chunks[i+1:end_idx])
        )
        if country != "":
            prompt = reflection_prompt.format(
                source_lang=source_lang,
                target_lang=target_lang,
                tagged_text=tagged_text,
                chunk_to_translate=source_text_chunks[i],
                translation_1_chunk=translation_1_chunks[i],
                country=country,
            )
        else:
            prompt = reflection_prompt.format(
                source_lang=source_lang,
                target_lang=target_lang,
                tagged_text=tagged_text,
                chunk_to_translate=source_text_chunks[i],
                translation_1_chunk=translation_1_chunks[i],
            )

        reflection = get_completion(prompt, system_message=system_message)
        
        # 只保留完整反思结果打印
        print(f"\n=== 块 #{i+1} 专家修改建议 ===")
        print(reflection)  # 打印完整的反思结果
        print("="*50)
        
        # 计算建议数量但不单独打印
        suggestions = [s.strip() for s in reflection.split('\n') if s.strip()]
        print(f"\n块 #{i+1} 生成 {len(suggestions)} 条建议")
        
        reflection_chunks.append(reflection)

    return reflection_chunks


def multichunk_improve_translation(
    source_lang: str,
    target_lang: str,
    source_text_chunks: List[str],
    translation_1_chunks: List[str],
    reflection_chunks: List[str],
) -> List[str]:
    """
    Improves the translation of a text from source language to target language by considering expert suggestions.

    Args:
        source_lang (str): The source language of the text.
        target_lang (str): The target language for translation.
        source_text_chunks (List[str]): The source text divided into chunks.
        translation_1_chunks (List[str]): The initial translation of each chunk.
        reflection_chunks (List[str]): Expert suggestions for improving each translated chunk.

    Returns:
        List[str]: The improved translation of each chunk.
    """

    system_message = f"You are an expert linguist, specializing in translation editing from {
        source_lang} to {target_lang}."

    improvement_prompt = """Your task is to carefully read, then improve, a translation from {source_lang} to {target_lang}, taking into
account a set of expert suggestions and constructive criticisms. Below, the source text, initial translation, and expert suggestions are provided.

The source text snippet below, delimited by XML tags <SOURCE_TEXT> and </SOURCE_TEXT>, contains only a portion of the full document.
The part that has been translated is delimited by <TRANSLATE_THIS> and </TRANSLATE_THIS> within the source text. You can use the surrounding text as context, but need to provide a translation only of the part indicated by <TRANSLATE_THIS> and </TRANSLATE_THIS>.

<SOURCE_TEXT>
{tagged_text}
</SOURCE_TEXT>

To reiterate, only part of the text is being translated, shown here again between <TRANSLATE_THIS> and </TRANSLATE_THIS>:
<TRANSLATE_THIS>
{chunk_to_translate}
</TRANSLATE_THIS>

The translation of the indicated part, delimited below by <TRANSLATION> and </TRANSLATION>, is as follows:
<TRANSLATION>
{translation_1_chunk}
</TRANSLATION>

The expert translations of the indicated part, delimited below by <EXPERT_SUGGESTIONS> and </EXPERT_SUGGESTIONS>, are as follows:
<EXPERT_SUGGESTIONS>
{reflection_chunk}
</EXPERT_SUGGESTIONS>

Taking into account the expert suggestions rewrite the translation to improve it, paying attention
to whether there are ways to improve the translation's

(i) accuracy (by correcting errors of addition, mistranslation, omission, or untranslated text),
(ii) fluency (by applying {target_lang} grammar, spelling and punctuation rules and ensuring there are no unnecessary repetitions), \
(iii) style (by ensuring the translations reflect the style of the source text)
(iv) terminology (inappropriate for context, inconsistent use), or
(v) other errors.

Output only the new translation of the indicated part and nothing else."""

    translation_2_chunks = []
    for i in range(len(source_text_chunks)):
        # 有限上下文窗口
        context_window = 1  # 前后各保留1个块作为上下文
        start_idx = max(0, i - context_window)
        end_idx = min(len(source_text_chunks), i + context_window + 1)

        tagged_text = (
            "".join(source_text_chunks[start_idx:i])
            + "<TRANSLATE_THIS>"
            + source_text_chunks[i]
            + "</TRANSLATE_THIS>"
            + "".join(source_text_chunks[i+1:end_idx])
        )

        prompt = improvement_prompt.format(
            source_lang=source_lang,
            target_lang=target_lang,
            tagged_text=tagged_text,
            chunk_to_translate=source_text_chunks[i],
            translation_1_chunk=translation_1_chunks[i],
            reflection_chunk=reflection_chunks[i],
        )

        translation_2 = get_completion(prompt, system_message=system_message)
        translation_2_chunks.append(translation_2)

    return translation_2_chunks


def multichunk_translation(
    source_lang, target_lang, source_text_chunks, country: str = ""
):
    """
    Improves the translation of multiple text chunks based on the initial translation and reflection.

    Args:
        source_lang (str): The source language of the text chunks.
        target_lang (str): The target language for translation.
        source_text_chunks (List[str]): The list of source text chunks to be translated.
        translation_1_chunks (List[str]): The list of initial translations for each source text chunk.
        reflection_chunks (List[str]): The list of reflections on the initial translations.
        country (str): Country specified for the target language
    Returns:
        List[str]: The list of improved translations for each source text chunk.
    """

    translation_1_chunks = multichunk_initial_translation(
        source_lang, target_lang, source_text_chunks
    )

    reflection_chunks = multichunk_reflect_on_translation(
        source_lang,
        target_lang,
        source_text_chunks,
        translation_1_chunks,
        country,
    )

    translation_2_chunks = multichunk_improve_translation(
        source_lang,
        target_lang,
        source_text_chunks,
        translation_1_chunks,
        reflection_chunks,
    )

    return translation_2_chunks


def calculate_chunk_size(token_count: int, token_limit: int) -> int:
    """
    Calculate the chunk size based on the token count and token limit.

    Args:
        token_count (int): The total number of tokens.
        token_limit (int): The maximum number of tokens allowed per chunk.

    Returns:
        int: The calculated chunk size.

    Description:
        This function calculates the chunk size based on the given token count and token limit.
        If the token count is less than or equal to the token limit, the function returns the token count as the chunk size.
        Otherwise, it calculates the number of chunks needed to accommodate all the tokens within the token limit.
        The chunk size is determined by dividing the token limit by the number of chunks.
        If there are remaining tokens after dividing the token count by the token limit,
        the chunk size is adjusted by adding the remaining tokens divided by the number of chunks.

    Example:
        >>> calculate_chunk_size(1000, 500)
        500
        >>> calculate_chunk_size(1530, 500)
        389
        >>> calculate_chunk_size(2242, 500)
        496
    """

    if token_count <= token_limit:
        return token_count

    num_chunks = (token_count + token_limit - 1) // token_limit
    chunk_size = token_count // num_chunks

    remaining_tokens = token_count % token_limit
    if remaining_tokens > 0:
        chunk_size += remaining_tokens // num_chunks

    return chunk_size


def translate(
    source_lang,
    target_lang,
    source_text,
    country,
    max_tokens=MAX_TOKENS_PER_CHUNK,
    source_file_path: str = None
):
    """Translate the source_text from source_lang to target_lang"""

    num_tokens_in_text = num_tokens_in_string(source_text)

    ic(num_tokens_in_text)

    if num_tokens_in_text < max_tokens:
        ic("Translating text as a single chunk")

        final_translation = one_chunk_translate_text(
            source_lang, target_lang, source_text, country
        )

        # 新增校验逻辑
        if source_file_path and is_json_like_file(source_file_path):
            validate_json_keys(
                source_content=source_text,
                translated_content=final_translation,
                source_file=source_file_path
            )

        return final_translation

    else:
        ic("Translating text as multiple chunks")

        token_size = calculate_chunk_size(
            token_count=num_tokens_in_text, token_limit=max_tokens
        )

        ic(token_size)

        # 新增JSON类文件处理逻辑
        if is_json_like_file(source_file_path):
            # 改进后的结构感知分割器
            text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
                model_name="gpt-4",
                separators=[
                    "\n},\n",    # 对象结束并有下一个元素
                    "\n}\n",     # 对象结束
                    "},\n",      # 行内对象结束
                    ",\n    ",   # 同级别键值分隔（缩进4个空格）
                    ",\n  ",     # 同级别键值分隔（缩进2个空格）
                    ",\n",       # 键值对结束时分割
                    "\n"         # 最后在换行处分割
                ],
                chunk_size=token_size,
                chunk_overlap=0,
                keep_separator=True
            )
        else:
            # 原有通用分割逻辑
            text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
                model_name="gpt-4",
                chunk_size=token_size,
                chunk_overlap=0,
            )

        source_text_chunks = text_splitter.split_text(source_text)

        # 简单打印分块信息以便调试
        print(f"文本被分成了{len(source_text_chunks)}个块")

        translation_2_chunks = multichunk_translation(
            source_lang, target_lang, source_text_chunks, country
        )

        final_translation = "".join(translation_2_chunks) if isinstance(
            translation_2_chunks, list) else translation_2_chunks

        # 新增校验逻辑
        if source_file_path and is_json_like_file(source_file_path):
            validate_json_keys(
                source_content=source_text,
                translated_content=final_translation,
                source_file=source_file_path
            )

        return final_translation


def standalone_validate(source_path: str, translated_path: str) -> None:
    """
    独立校验已翻译文件的键值完整性

    Args:
        source_path: 源文件路径 (如 en.ts)
        translated_path: 翻译文件路径 (如 fr.ts)
    """
    try:
        with open(source_path, 'r', encoding='utf-8') as f:
            source_content = f.read()

        with open(translated_path, 'r', encoding='utf-8') as f:
            translated_content = f.read()

        validate_json_keys(
            source_content=source_content,
            translated_content=translated_content,
            source_file=source_path
        )

    except FileNotFoundError as e:
        print(f"❌ 文件未找到: {str(e)}")
    except Exception as e:
        print(f"❌ 校验失败: {str(e)}")


def debug_chunk_split(source_file_path: str, text: str, max_tokens: int = 500):
    """快速验证分块逻辑的调试函数"""
    from langchain_text_splitters import RecursiveCharacterTextSplitter

    token_size = calculate_chunk_size(num_tokens_in_string(text), max_tokens)

    if is_json_like_file(source_file_path):
        splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
            model_name="gpt-4",
            separators=[
                "\n}\n",     # 优先在对象结束时分割
                ",\n",       # 其次在键值对结束时分割
                "\n"         # 最后在换行处分割（保持顺序）
            ],
            chunk_size=token_size,
            chunk_overlap=0,
            keep_separator=True
        )
    else:
        splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
            model_name="gpt-4",
            chunk_size=token_size,
            chunk_overlap=0,
        )

    chunks = splitter.split_text(text)

    # 打印分块诊断信息
    print(f"\n🔍 分块诊断（共 {len(chunks)} 个块）")
    for i, chunk in enumerate(chunks, 1):
        print(f"\n▋▋▋ 块 #{i} [长度: {len(chunk)} 字符] ▋▋▋")
        print("-"*50)  # 添加分隔线
        print(chunk)    # 直接打印完整内容
        print("-"*50)  # 添加分隔线
        print("─── 结构检查 ───")
        print(f"• 括号平衡: {check_balanced_brackets(chunk)}")
        print(f"• 包含完整键值对: {has_complete_keyvalue(chunk)}")
        print("▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋")


def check_balanced_brackets(text: str) -> bool:
    stack = []
    for char in text:
        if char == '{':
            stack.append('}')
        elif char == '[':
            stack.append(']')
        elif stack and char == stack[-1]:
            stack.pop()
    return not stack


def has_complete_keyvalue(text: str) -> bool:
    lines = text.split('\n')
    return all(':' in line for line in lines if line.strip() and not line.strip().endswith(('{', '}', '[', ']')))
