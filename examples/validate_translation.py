import os
import translation_agent.utils as ta_utils


def main():
    # 配置校验文件路径
    source_file = "sample-texts/en.ts"  # 源文件路径
    translated_file = "ca-es.ts"           # 已翻译文件路径

    # 获取绝对路径
    script_dir = os.path.dirname(os.path.abspath(__file__))
    source_path = os.path.join(script_dir, source_file)
    translated_path = os.path.join(script_dir, translated_file)

    print(f"正在校验翻译文件: {translated_path}")
    print(f"对照源文件: {source_path}\n")

    try:
        # 执行独立校验
        ta_utils.standalone_validate(
            source_path=source_path,
            translated_path=translated_path
        )
    except Exception as e:
        print(f"校验过程中发生错误: {str(e)}")


if __name__ == "__main__":
    main()
