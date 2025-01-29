export default {
  app: {
    name: "Photolate",
    index: {
      slogan: "唯一提供文化背景解释的AI图像翻译器",
      description:
          "无论是日本菜单、阿拉伯标识还是韩文标签 - 获取带文化背景解释的翻译。支持100多种语言。",
      startForFreeBtn: "免费开始",
      blogLink: "博客",

      loginPromoteMsg: "10次免费试用•无需订阅•随用随付",
      loggingInMsg: "正在登录...",

      howToUsePhotolate: "如何使用Photolate",
      howToUsePhotolateStep1: "第一步：选择照片和检测文本",
      howToUsePhotolateStep1Desc:
        "由Azure AI驱动的高级OCR技术精确提取图像中的文本，可识别日语汉字和其他语言，无论是印刷体还是手写体。",
      howToUsePhotolateStep2: "第二步：将图片文本翻译成您的语言",
      howToUsePhotolateStep2Desc:
        "由OpenAI GPT-4o驱动的顶级AI，提供精准的图片文本翻译。",

      howToUsePhotolateStep3: "第三步：提供背景和上下文",
      howToUsePhotolateStep3Desc: "由OpenAI GPT-4o提供深入见解",

      howToUsePhotolateExampleOriginalTextPart1:
        "吾各花京院典明,为吾友阿布德尔耻,为身田吾友汲鲁那雷夫之妹灵魂之安息,我要你以死偿命! ",
      howToUsePhotolateExampleOriginalTextPart2: "花京院典明",
      howToUsePhotolateExampleTranslatedTextPart1:
        "我，花京院典明，将为我的朋友阿布德尔报仇，为了我朋友承太郎的妹妹的灵魂安息，我要你用生命来偿还！",
      howToUsePhotolateExampleTranslatedTextPart2: "-花京院典明",
      howToUsePhotolateExampleBGInfo:
        "这句话出自漫画和动画《JOJO的奇妙冒险》，特别提到了花京院典明这个角色，他以强烈的友情和忠诚感著称。",

      featuresTitle: "Photolate为您提供的强大功能",
      features1: "1. 领先的OCR文本识别技术",
      features1Desc:
        "由Azure AI驱动的高级OCR技术。以卓越的准确度识别多种语言的图像文本，包括印刷体和手写体。",
      features2: "2. 采用OpenAI GPT-4o的优质翻译",
      features2Desc:
        "我们的尖端AI模型提供比谷歌翻译更准确的翻译，支持100多种语言。",
      translationsComparison: "GPT-4o对比谷歌翻译",
      comparison: "对比",
      features3: "3. 理解上下文，不止于字面含义",
      features3Desc:
        "我们的AI驱动图像翻译器揭示超越简单翻译的文化洞察和深层含义。",
      features4: "4. 即时翻译100多种语言",
      features4Desc:
        "使用我们的翻译器将日语、韩语、中文和阿拉伯语图像转换成100多种支持语言中的任何一种。用Photolate突破语言壁垒。",
      more100: "100多种语言...",

      priceTitle: "Photolate简单灵活的定价方案",
      priceDesc:
        "享受10次免费照片翻译，之后采用简单的按次付费方式。无需订阅。",
      freeTitle: "免费",
      freeSubtitle: "开始使用",
      noSubscriptionMsg: "无需订阅•随用随付",
      bonusFeaturesTitle: "额外功能",
      features: {
        item1: "10次免费照片翻译",
        item2: "无需订阅或长期承诺",
        item3: "只为使用付费",
        item4: "随用随停",
        item5: "通过Stripe安全支付",
      },
      bonusFeatures: {
        title: "额外功能",
        item1: "持续引入最新AI技术",
        item2: "支持功能定制",
      },useCasesTitle: "探索强大的应用场景",
      faqTitle: "常见问题",
    },
    blog: {
      title: "博客文章",
      toc: "目录",
      description:
        "探索有关AI图像翻译、OCR技术和语言处理的文章。",
    },
    home: {
      greeting: "你好",
      welcomeText: "很高兴见到你",
      creditsNum: "积分",
      choosePhotoBtn: "选择照片",
      rechargeCreditsBtn: "充值积分",
      creditsRunOutMsg: "您的积分已用完，点击充值",
      processingImageMsg: "正在处理图片",
      pleaseWaitMsg: "请稍候",
      recents: "最近记录",
      myCredits: "我的积分",
      creditsModalTitle: "充值积分",
      loadingPriceMsg: "正在加载价格信息⋯⋯",
      priceErrorMsg: "请稍后重试",
      bestDeal: "最优惠，节省10%",
      justAMomentMsg: "请稍候⋯⋯",
    },
    translateResult: {
      clickToSelect: "点击选择",
      autoDetect: "自动检测",
      translateBtn: "翻译",
      translateBtnLoadingState: "翻译中",
      analyzingImageMsg: "正在分析图片",
      justAMomentMsg: "请稍候",
      noTextDetectedMsg:
        "未在图片中检测到文字，请尝试其他照片",
      errorMsg:
        "照片分析失败，请尝试其他照片",
      recentLanguages: "最近记录",
      targetLanguage: "目标语言",
      backgroundInfo: "背景信息",
      copied: "已复制！",
      copiedFailed: "复制文本失败",
      feedbackForGood: "很高兴能帮到您！",
      feedbackForBad: "感谢您的反馈，我们会努力改进！",
    },
    paymentResult: {
      paymentComplete: "支付完成",
      paymentCancelled: "支付已取消",
      paymentSuccessMsg: "谢谢！您的付款已成功",
      paymentCancelledMsg:
        "支付已取消，请返回首页重试",
      orderId: "订单编号",
      backToHome: "返回首页",
    },
  },
  meta: {
    title: "Photolate：唯一能解释文化背景的AI图片翻译器",
    description:
      "通过文化背景准确翻译图片 - 比谷歌翻译更好。从日语菜单到阿拉伯语标志和韩语标签，支持超过100种语言。",
    og: {
      title: "Photolate：唯一能解释文化背景的AI图片翻译器",
      description:
        "通过文化背景准确翻译图片 - 比谷歌翻译更好。从日语菜单到阿拉伯语标志和韩语标签，支持超过100种语言。",
    }
  },
  pages: {  
    title: {
      top: "Photolate：唯一能解释文化背景的AI图片翻译器",
      blog: "博客文章 | Photolate",
    },
  },
  sampleLanguages: {
    ar: { name: "阿拉伯语" },
    bn: { name: "孟加拉语" },
    zh: { name: "中文" },
    cs: { name: "捷克语" },
    nl: { name: "荷兰语" },
    en: { name: "英语" },
    fil: { name: "菲律宾语" },
    fi: { name: "芬兰语" },
    fr: { name: "法语" },
    de: { name: "德语" },
    el: { name: "希腊语" },
    he: { name: "希伯来语" },
    hi: { name: "印地语" },
    id: { name: "印尼语" },
    it: { name: "意大利语" },
    ja: { name: "日语" },
    ko: { name: "韩语" },
    ms: { name: "马来语" },
    pl: { name: "波兰语" },
    pt: { name: "葡萄牙语" },
    ro: { name: "罗马尼亚语" },
    ru: { name: "俄语" },
    es: { name: "西班牙语" },
    sw: { name: "斯瓦希里语" },
    th: { name: "泰语" },
    tr: { name: "土耳其语" },
    uk: { name: "乌克兰语" },
    vi: { name: "越南语" },
  },
  faq: {
    accuracy: {
        question: "翻译准确度如何？",
        answer: "我们的AI驱动系统为大多数语言提供高度准确的翻译，并不断改进以提高质量。",
      },
      formats: {
        question: "支持哪些图片格式？",
        answer: "轻松翻译JPG、PNG、WEBP、HEIC和GIF图片。为获得最佳效果，请使用文字清晰可读的图片。",
      },
      pricing: {
        question: "免费试用后如何收费？",
        answer: "10张免费照片后，每张图片收费0.10美元，无需订阅。",
      },
      handwriting: {
        question: "能翻译手写文字吗？",
        answer: "是的，我们的OCR技术可以识别和翻译大多数语言的印刷文字和手写文字。",
      },
      speed: {
        question: "翻译速度有多快？",
        answer: "大多数翻译在几秒钟内完成，具体取决于图片大小和文字复杂程度。",
      },
  },
  ocrSampleImages: {
    chinese: {
        caption: "中文字符纹身",
        translation: "美丽智慧",
        backgroundInfo:"美力智"一词可以指美丽与智慧的结合概念，常用于品牌推广或个人发展和美学的讨论中。",
        alt: "Photolate演示 - 中文文字识别展示颈部'美力智'纹身，展示了纹身艺术中汉字的准确检测和翻译",
      },
      japanese: {
        caption: "日本拉面店菜单",
        translation:
          "金目鯛拌面 ▶ 大份1180日元 ▶ 超大份1380日元 / 超粗面条和配料都会大量增加 / 普通份590日元。爱水堂正是使用这种'超粗面条'来制作他们的拌面！！",
        backgroundInfo:
          "金目鯛（金眼鲷）是日本料理中常见的鱼类，而'拌面'（mazesoba）是一种通常配有各种配料和酱料的面食。提到'超粗面条'体现了对口感和饱腹感的重视，这在许多日本面食中很常见。",
        alt: "Photolate演示 - 日本菜单翻译显示拉面价格和描述，准确识别汉字和平假名字符",
      },
      french: {
        caption: "法语教师的暖心信",
        translation:
          "小王子 2015年5月29日 亲爱的维罗妮卡：感谢你和我一起学习法语。你善良又聪明。祝贺你进入拉克韦斯特高中，也祝愿你前程似锦。我爱你。此致，马格莱蒂夫人。附：我还珍藏着你在情人节送给我的两颗心；感谢你的友谊。",
        backgroundInfo:
          "这是一封教师写给学生的暖心信，表达了对学生进入拉克韦斯特高中和未来生活的祝福与感激。使用'亲爱的维罗妮卡'和'此致'等用语体现了正式且真挚的语气，这在正式信件或便条中很典型。",
        alt: "Photolate演示 - 法语信件翻译展示个人通信，包含关于法国教育中师生关系的文化背景",
      },
      spanish: {
        caption: "西班牙手写便条",
        translation:
          "有时我试图变得更随意，但只有一半成功。我很爱开玩笑，也仅此而已。我最喜欢的歌是米格尔·安赫尔和他乐队的'Super Peder'，轻吻随风。",
        backgroundInfo:
          "'Super Peder'似乎指的是一首歌，可能是对歌名或艺术家名字的误解。提到爱开玩笑表明轻松的语气，而'轻吻随风'是歌曲或浪漫场合中常见的诗意表达。",
        alt: "Photolate演示 - 西班牙文本识别显示横线纸上的手写笔记，展示了准确检测多个文本区域的随意手写",
      },
      german: {
        caption: "德语体重隐喻诗",
        translation: "一场风暴正在我的体重秤上肆虐。一个增长",
        backgroundInfo:
          "这段文字借用风暴来比喻混乱或动荡，可能暗指体重或测量带来的困扰，反映了个人对身体形象或健康的忧虑。",
        alt: "Photolate演示 - 德语诗意文本翻译展示隐喻表达，包含德国文学风格的文化背景",
      },
      arabic: {
        caption: "阿拉伯文爱情纹身",
        translation: "我爱你",
        backgroundInfo:
          "'أنا احبك'是阿拉伯语中表达爱意的经典用语，在不同文化背景和场合中都广泛使用。",
        alt: "Photolate演示 - 阿拉伯文本识别显示常见短语'我爱你'，包含阿拉伯语情感表达的文化背景",
      },
      finnish: {
        caption: "芬兰手写信",
        translation:
          "Tarbox，你好！谢谢你向我介绍世界上最积极的事物之一，这对我意义重大！你银行最不喜欢的将成为我的最爱，他们愿意给我这个真是太棒了！爱你！亲亲 - 阿丽娜",
        backgroundInfo:
          "这是一封来自名叫阿丽娜的朋友的随笔，字里行间流露着感激和深情。信中使用的非正式语气和'亲亲'等表达方式，体现了亲密的朋友关系，这在私人通信中很常见。",
        alt: "Photolate演示 - 芬兰随笔翻译展示非正式写作风格，包含芬兰沟通方式的文化背景",
      },
      russian: {
        caption: "俄语印刷说明书",
        translation:
          "这种基于水性丙烯酸分散体的装饰创意轮廓用于制作三维设计，并防止在棉麻和丝绸织物上绘画时颜料混合。将其涂抹在洗净并熨烫过的织物上，晾干3小时后涂抹织物颜料。该轮廓也可用于装饰完成的画作。画作需晾干24小时。通过棉布以适合棉织物的温度进行5分钟无蒸汽熨烫。熨烫48小时后，可在30°C至40°C的温度下用温和清洁剂轻柔清洗。用水冲洗喷嘴后储存。",
        backgroundInfo:
          "这是一份专业的织物颜料使用说明书，常见于手工艺和纺织艺术领域。文中详细说明了DIY纺织品装饰的标准工序和注意事项。",
        alt: "Photolate演示 - 俄语技术说明书翻译展示详细的织物绘画指南，准确识别西里尔字母",
      },
  },
  sampleTranslations: {
    japanese: {
        gpt4oTranslation: "所谓骑士精神，就是履行有能者的责任，以坚定的爱之精神献身于世界。",
        googleTranslation: "所谓骑士精神，就是履行有能者的责任，以坚定的精神之爱献身于世界。",comparison: "GPT4o的翻译更清晰流畅，以'这就是武士道精神'作为结尾。谷歌的版本不够清晰且不够流畅。",
      },
      french: {
        gpt4oTranslation: "婴儿[已隐藏]经自然分娩。新生儿检查正常。身高体重发育正常。",
        googleTranslation: "婴儿[已隐藏]经自然分娩。新生儿检查正常。体重和身高进展正常。",
        comparison: "GPT4o的翻译清晰易懂。谷歌的版本使用了更多专业术语，不够通俗易懂。",
      },
      chinese: {
        gpt4oTranslation: "冲锋！",
        googleTranslation: "去鸭",
        comparison: "GPT4o准确捕捉到了'冲锋'的军事含义。谷歌的直译'去鸭'完全理解错误。",
      }
  },
  useCases: {
    travel: {
        title: "旅行",
        description: "即时拍摄并翻译外国菜单、街道指示和旅游信息。告别语言障碍！",
      },
      business: {
        title: "商务",
        description: "随拍随译名片、合同和产品标签。突破全球贸易中的语言壁垒。",
      },
      education: {
        title: "教育",
        description: "快速拍照翻译教科书、课程资料、讲义和研究论文。学习不受语言限制。",
      },
      socialMedia: {
        title: "社交媒体",
        description: "翻译全球帖子中的网络梗图、文字说明和评论。轻松翻译截图或漫画内容。无障碍连接全球趋势和对话。",
      },
  },
  jsonld: {
    software: {
      name: "Photolate",
      description:
        "Photolate图像翻译专家是唯一一个提供文化解读的图片文字翻译器，帮助你理解从韩国菜单到日本街道指示和俄罗斯文档的一切内容。我们的AI技术配备先进的OCR和GPT-4o，让你能够翻译任何截图或图片文件并获得深入的文化背景。新用户可获得10次免费使用机会，享受即时准确的翻译。",
      offerDescription:
        "新用户可获得10次免费使用机会。可随时购买额外使用次数，继续享受全面翻译服务。",
      features: [
        "先进的OCR技术，精确识别手写和印刷文字",
        "智能文本选择，实现精准翻译",
        "支持100多种语言",
        "丰富的文化背景解读",
        "采用GPT-4o等先进AI模型",
        "图片文字即时翻译",
        "便捷的界面，灵活的文本选择",
      ],
      priceSpecifications: [
        {
          type: "free",
          price: "0",
          description: "新用户初始免费次数",
          unitText: "10次使用",
        },
        {
          type: "paid",
          price: "1",
          description: "继续使用的额外次数",
          unitText: "10次使用",
        },
      ],
      organization: "Photolate图像翻译专家",
    },
  },
};