import os

import translation_agent as ta


locales = [
  {
    "code": "en",
    "name": "English",
    "language": "en-US",
    "dir": "ltr",
    "file": "en.ts",
    "flag": "🇺🇸",
    "country": "United States",
  },
  {
    "code": "de",
    "name": "Deutsch",
    "language": "de-DE",
    "dir": "ltr",
    "file": "de.ts",
    "flag": "🇩🇪",
    "country": "Germany",
  },
  {
    "code": "fr",
    "name": "Français",
    "language": "fr-FR",
    "dir": "ltr",
    "file": "fr.ts",
    "flag": "🇫🇷",
    "country": "France",
  },
  {
    "code": "it",
    "name": "Italiano",
    "language": "it-IT",
    "dir": "ltr",
    "file": "it.ts",
    "flag": "🇮🇹",
    "country": "Italy",
  },
  {
    "code": "ru",
    "name": "Русский",
    "language": "ru-RU",
    "dir": "ltr",
    "file": "ru.ts",
    "flag": "🇷🇺",
    "country": "Russia",
  },
  {
    "code": "nl",
    "name": "Nederlands",
    "language": "nl-NL",
    "dir": "ltr",
    "file": "nl.ts",
    "flag": "🇳🇱",
    "country": "Netherlands",
  },
  {
    "code": "sv",
    "name": "Svenska",
    "language": "sv-SE",
    "dir": "ltr",
    "file": "sv.ts",
    "flag": "🇸🇪",
    "country": "Sweden",
  },
  {
    "code": "es",
    "name": "Español",
    "language": "es-ES",
    "dir": "ltr",
    "file": "es.ts",
    "flag": "🇪🇸",
    "country": "Spain",
  },
  {
    "code": "ca-es",
    "name": "Català",
    "language": "ca-ES",
    "dir": "ltr",
    "file": "ca-es.ts",
    "flag": "🇪🇸",
    "country": "Spain (Catalonia)",
  },
  {
    "code": "da",
    "name": "Dansk",
    "language": "da-DK",
    "dir": "ltr",
    "file": "da.ts",
    "flag": "🇩🇰",
    "country": "Denmark",
  },
  {
    "code": "nb",
    "name": "Norsk",
    "language": "nb-NO",
    "dir": "ltr",
    "file": "nb.ts",
    "flag": "🇳🇴",
    "country": "Norway",
  },
  {
    "code": "fi",
    "name": "Suomen kieli",
    "language": "fi-FI",
    "dir": "ltr",
    "file": "fi.ts",
    "flag": "🇫🇮",
    "country": "Finland",
  },
  {
    "code": "pl",
    "name": "Polski",
    "language": "pl-PL",
    "dir": "ltr",
    "file": "pl.ts",
    "flag": "🇵🇱",
    "country": "Poland",
  },
  {
    "code": "cs",
    "name": "Čeština",
    "language": "cs-CZ",
    "dir": "ltr",
    "file": "cs.ts",
    "flag": "🇨🇿",
    "country": "Czech Republic",
  },
  {
    "code": "pt",
    "name": "Português",
    "language": "pt-PT",
    "dir": "ltr",
    "file": "pt.ts",
    "flag": "🇵🇹",
    "country": "Portugal",
  },
  {
    "code": "pt-br",
    "name": "Português (Brasil)",
    "language": "pt-BR",
    "dir": "ltr",
    "file": "pt-br.ts",
    "flag": "🇧🇷",
    "country": "Brazil",
  },
  {
    "code": "hu",
    "name": "Magyar",
    "language": "hu-HU",
    "dir": "ltr",
    "file": "hu.ts",
    "flag": "🇭🇺",
    "country": "Hungary",
  },
  {
    "code": "el",
    "name": "Ελληνικά",
    "language": "el-GR",
    "dir": "ltr",
    "file": "el.ts",
    "flag": "🇬🇷",
    "country": "Greece",
  },
  {
    "code": "ro",
    "name": "Română",
    "language": "ro-RO",
    "dir": "ltr",
    "file": "ro.ts",
    "flag": "🇷🇴",
    "country": "Romania",
  },
  {
    "code": "sk",
    "name": "Slovensky",
    "language": "sk-SK",
    "dir": "ltr",
    "file": "sk.ts",
    "flag": "🇸🇰",
    "country": "Slovakia",
  },
  {
    "code": "bg",
    "name": "Български",
    "language": "bg-BG",
    "dir": "ltr",
    "file": "bg.ts",
    "flag": "🇧🇬",
    "country": "Bulgaria",
  },
  {
    "code": "hr",
    "name": "Hrvatski",
    "language": "hr-HR",
    "dir": "ltr",
    "file": "hr.ts",
    "flag": "🇭🇷",
    "country": "Croatia",
  },
  {
    "code": "uk",
    "name": "Українська",
    "language": "uk-UA",
    "dir": "ltr",
    "file": "uk.ts",
    "flag": "🇺🇦",
    "country": "Ukraine",
  },
  {
    "code": "ja",
    "name": "日本語",
    "language": "ja-JP",
    "dir": "ltr",
    "file": "ja.ts",
    "flag": "🇯🇵",
    "country": "Japan",
  },
  {
    "code": "ko",
    "name": "한국어",
    "language": "ko-KR",
    "dir": "ltr",
    "file": "ko.ts",
    "flag": "🇰🇷",
    "country": "South Korea",
  },
  {
    "code": "zh",
    "name": "简体中文",
    "language": "zh-CN",
    "dir": "ltr",
    "file": "zh.ts",
    "flag": "🇨🇳",
    "country": "China",
  },
  {
    "code": "zh-hant",
    "name": "繁體中文",
    "language": "zh-Hant",
    "dir": "ltr",
    "file": "zh-hant.ts",
    "flag": "🇭🇰",
    "country": "Hong Kong",
  },
];


def save_translation(translation, output_file):
    """Save translation to file."""
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(f"{translation}")


def translate_to_languages(start_index=0, end_index=None, source_locale_code="en"):
    """
    翻译到指定范围内的语言
    
    参数:
        start_index: 开始的语言索引（包含）
        end_index: 结束的语言索引（不包含），如果为None则翻译到最后
        source_locale_code: 源语言代码，默认为'en'（英语）
    """
    # 获取源语言信息
    source_locale = next((loc for loc in locales if loc["code"] == source_locale_code), None)
    if not source_locale:
        print(f"错误：找不到源语言代码 '{source_locale_code}'")
        return
    
    # 确定结束索引
    if end_index is None:
        end_index = len(locales)
    
    # 限制索引范围
    start_index = max(0, min(start_index, len(locales) - 1))
    end_index = max(start_index + 1, min(end_index, len(locales)))
    
    # 获取文件路径
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = f"sample-texts/{source_locale['file']}"
    input_path = os.path.join(script_dir, input_file)
    
    # 读取源文本
    with open(input_path, encoding="utf-8") as file:
        source_text = file.read()
    
    print(f"源语言: {source_locale['name']} ({source_locale['country']})")
    print(f"源文件: {input_path}")
    print(f"将翻译到 {end_index - start_index} 种语言\n{'-'*50}")
    
    # 遍历指定范围的语言进行翻译
    for i in range(start_index, end_index):
        # 跳过源语言
        if locales[i]["code"] == source_locale_code:
            continue
        
        target_locale = locales[i]
        output_file = target_locale["file"]
        output_path = os.path.join(script_dir, output_file)
        
        print(f"\n翻译到: {target_locale['name']} ({target_locale['country']})")
        
        # 获取翻译
        translation = ta.translate(
            source_lang=source_locale["name"],
            target_lang=target_locale["name"],
            source_text=source_text,
            country=target_locale["country"],
            source_file_path=input_path
        )
        
        # 保存到输出文件
        save_translation(translation, output_path)
        print(f"翻译已保存到: {output_path}")
    
    print(f"\n{'-'*50}\n所有翻译任务完成！")


if __name__ == "__main__":
    # 示例用法:
    
    # 1. 翻译到前5种语言
    # translate_to_languages(start_index=0, end_index=5)
    
    # 2. 翻译到第6-10种语言
    # translate_to_languages(start_index=5, end_index=10)
    
    # 3. 翻译到所有语言
    # translate_to_languages()
    
    # 4. 从特定索引开始翻译到最后
    # translate_to_languages(start_index=20)
    
    # 默认示例：翻译一部分语言
    # 失败的序号： 3 
    translate_to_languages(start_index=1, end_index=3, source_locale_code="en")
