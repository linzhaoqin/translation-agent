import os

import translation_agent as ta


def save_translation(translation, output_file):
    """Save translation to file."""
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(f"{translation}")


if __name__ == "__main__":
    # Configuration
    source_lang = "English"
    target_lang = "Spanish"
    country = "Spain"
    input_file = "sample-texts/how-to-translate-images.md"
    output_file = "how-to-translate-images-es.md"  # 你可以直接修改这个文件名

    # Get file paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_path = os.path.join(script_dir, input_file)
    output_path = os.path.join(script_dir, output_file)

    # Read source text
    with open(input_path, encoding="utf-8") as file:
        source_text = file.read()

    print(f"Source text:\n\n{source_text}\n{'='*50}\n")

    # Get translation
    translation = ta.translate(
        source_lang=source_lang,
        target_lang=target_lang,
        source_text=source_text,
        country=country,
    )

    print(f"Translation:\n\n{translation}\n{'='*50}\n")

    # Save to output file
    save_translation(translation, output_path)
    print(f"\nTranslation saved to: {output_path}")
