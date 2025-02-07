import os
from translation_agent.utils import debug_chunk_split

def main():
    # 配置测试文件路径
    test_file = "sample-texts/en.ts"  # 要测试的文件路径
    max_tokens = 2000                  # 最大token数
    
    # 获取绝对路径
    script_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_dir, test_file)
    
    print(f"🔧 准备测试分块逻辑 - {os.path.basename(file_path)}")
    
    try:
        # 读取测试文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"\n📄 文件内容长度: {len(content)} 字符")
        print(f"🔢 最大Token数: {max_tokens}")
        print("="*50)
        
        # 执行分块测试
        debug_chunk_split(
            source_file_path=file_path,
            text=content,
            max_tokens=max_tokens
        )
        
    except FileNotFoundError:
        print(f"❌ 文件未找到: {file_path}")
    except Exception as e:
        print(f"❌ 测试失败: {str(e)}")

if __name__ == "__main__":
    print("🚀 启动分块测试...")
    main()
    print("\n✅ 测试完成")