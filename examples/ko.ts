export default {
  app: {
    name: "포토-레이트",
    index: {
      slogan: "세계 유일의 문화적 맥락을 설명하는 AI 이미지 번역기",
      description:
          "일본어 메뉴, 아랍어 표지판, 한국어 라벨 등 - 문화적 맥락이 설명된 번역을 받아보세요. 100개 이상의 언어를 지원합니다.",
      startForFreeBtn: "무료로 시작하기",
      blogLink: "블로그",
      loginPromoteMsg: "10회 무료 체험 · 구독 없음 · 사용한 만큼 지불",
      loggingInMsg: "로그인 중입니다...",
      howToUsePhotolate: "포토-레이트 사용 방법",
      howToUsePhotolateStep1: "1단계: 사진 선택 및 텍스트 감지",
      howToUsePhotolateStep1Desc:
        "Azure AI가 제공하는 고급 OCR 기술로 이미지에서 정확하게 텍스트를 추출하며, 인쇄물이나 손글씨의 일본어 한자 및 기타 언어를 감지합니다.",
      howToUsePhotolateStep2: "2단계: 사진 속 텍스트를 원하는 언어로 번역",
      howToUsePhotolateStep2Desc:
        "OpenAI GPT-4o 기반의 최상급 AI가 뛰어난 정확도로 사진 속 텍스트를 번역합니다.",
      howToUsePhotolateStep3: "3단계: 맥락과 배경 정보 제공",
      howToUsePhotolateStep3Desc: "OpenAI GPT-4o가 제공하는 심층적인 통찰력",
      howToUsePhotolateExampleOriginalTextPart1:
        "吾各花京院典明,为吾友阿布德尔耻,为身田吾友汲鲁那雷夫之妹灵魂之安息,我要你以死偿命! ",
      howToUsePhotolateExampleOriginalTextPart2: "花京院典明",
      howToUsePhotolateExampleTranslatedTextPart1:
        "나, 카쿄인 노리아키는 내 친구 압둘을 위해, 그리고 내 친구 죠타로의 여동생의 영혼의 안식을 위해, 네 목숨으로 갚아야 할 것이다!",
      howToUsePhotolateExampleTranslatedTextPart2: "-카쿄인 노리아키",
      howToUsePhotolateExampleBGInfo:
        "이 대사는 만화와 애니메이션 '죠죠의 기묘한 모험'에서 나온 것으로, 강한 우정과 충성심으로 유명한 캐릭터 카쿄인 노리아키를 언급하고 있습니다.",
      featuresTitle: "포토-레이트의 강력한 기능",
      features1: "1. 최첨단 OCR 기술로 텍스트 인식",
      features1Desc:
        "Azure AI가 제공하는 고급 OCR 기술. 여러 언어의 인쇄물과 손글씨를 뛰어난 정확도로 인식합니다.",
      features2: "2. OpenAI GPT-4o의 우수한 번역 기술",
      features2Desc:
        "우리의 최첨단 AI 모델은 구글 번역보다 더 정확한 번역을 제공하며, 100개 이상의 언어를 지원합니다.",
      translationsComparison: "GPT-4o vs 구글 번역",
      comparison: "비교",
      features3: "3. 단순한 단어 번역을 넘어선 맥락 이해",
      features3Desc:
        "AI 기반 이미지 번역기가 단순 번역을 넘어 문화적 통찰력과 숨은 의미를 보여줍니다.",
      features4: "4. 100개 이상의 언어 즉시 번역",
      features4Desc:
        "일본어, 한국어, 중국어, 아랍어 이미지를 100개 이상의 지원 언어로 변환하세요. 포토-레이트로 언어 장벽을 허물어보세요.",
      more100: "100개 이상…",
      priceTitle: "포토-레이트의 간단하고 유연한 가격",
      priceDesc:
        "10장의 무료 사진 번역을 즐기신 후, 사용한 만큼만 지불하세요. 구독이 필요 없습니다.",
      freeTitle: "무료",
      freeSubtitle: "시작하기",
      noSubscriptionMsg: "구독 없음 · 사용한 만큼 지불",
      bonusFeaturesTitle: "보너스 기능",
      features: {
        item1: "10장의 무료 사진 번역",
        item2: "구독이나 약정 없음",
        item3: "사용한 만큼만 지불",
        item4: "필요할 때 사용하고 언제든 중지 가능",
        item5: "Stripe를 통한 안전한 결제",
      },
      bonusFeatures: {
        title: "보너스 기능",
        item1: "최신 AI 기술로 지속적인 업데이트",
        item2: "새로운 기능 요청 가능",
      },
      useCasesTitle: "강력한 활용 사례를 살펴보기",
      faqTitle: "자주 묻는 질문",
    },
    blog: {
      title: "블로그 게시물",
      toc: "목차",
      description:
        "AI 기반 이미지 번역, OCR 기술, 언어 처리에 대한 글을 살펴보세요.",
    },
    home: {
      greeting: "안녕하세요",
      welcomeText: "만나서 반갑습니다",
      creditsNum: "크레딧",
      choosePhotoBtn: "사진 선택",
      rechargeCreditsBtn: "크레딧 충전",
      creditsRunOutMsg: "크레딧이 모두 소진되었습니다. 충전하려면 클릭하세요.",
      processingImageMsg: "이미지 처리 중입니다",
      pleaseWaitMsg: "잠시만 기다려주세요",
      recents: "최근",
      myCredits: "내 크레딧",
      creditsModalTitle: "크레딧 충전",
      loadingPriceMsg: "가격 정보 로딩 중입니다...",
      priceErrorMsg: "잠시 후 다시 시도해주세요.",
      bestDeal: "최고의 거래: 10% 할인",
      justAMomentMsg: "잠시만 기다려주세요",
    },
    translateResult: {
      clickToSelect: "클릭하여 선택",
      autoDetect: "자동 인식",
      translateBtn: "번역",
      translateBtnLoadingState: "번역 중입니다",
      analyzingImageMsg: "이미지 분석 중입니다",
      justAMomentMsg: "잠시만 기다려주세요",
      noTextDetectedMsg:
        "이미지에서 텍스트가 감지되지 않았습니다. 다른 사진을 시도해주세요.",
      errorMsg:
        "사진을 분석하는 중에 문제가 생겼어요. 다른 사진으로 다시 시도해 주세요.",
      recentLanguages: "최근",
      targetLanguage: "번역할 언어",
      backgroundInfo: "문화 배경",
      copied: "복사 완료!",
      copiedFailed: "텍스트를 복사할 수 없습니다",
      feedbackForGood: "도움이 되었다니 다행이네요!",
      feedbackForBad: "소중한 의견 감사합니다. 더 나은 서비스로 보답하겠습니다!",
    },
    paymentResult: {
      paymentComplete: "결제 완료",
      paymentCancelled: "결제 취소",
      paymentSuccessMsg: "결제가 완료되었습니다. 감사합니다!",
      paymentCancelledMsg:
        "결제가 취소되었습니다. 메인 화면으로 돌아가서 다시 시도해 주세요.",
      orderId: "주문 번호",
      backToHome: "처음으로",
    },
  },
  meta: {
    title: "포토레이트: 문화 배경을 설명하는 유일한 AI 사진 번역기",
    description:
      "문화 배경과 함께 정확하게 이미지를 번역하세요 - 구글 번역보다 더 나은 서비스. 일본어 메뉴부터 아랍어 간판, 한국어 라벨까지, 100개 이상의 언어를 지원합니다.",
    og: {
      title: "포토레이트: 문화 배경을 설명하는 유일한 AI 사진 번역기",
      description:
        "문화 배경과 함께 정확하게 이미지를 번역하세요 - 구글 번역보다 더 나은 서비스. 일본어 메뉴부터 아랍어 간판, 한국어 라벨까지, 100개 이상의 언어를 지원합니다.",
    }
  },
  pages: {  
    title: {
      top: "포토레이트: 문화 배경을 설명하는 유일한 AI 사진 번역기",
      blog: "블로그 게시물 | 포토레이트",
    },
  },
  sampleLanguages: {
    ar: { name: "아랍어" },
    bn: { name: "벵골어" },
    zh: { name: "중국어" },
    cs: { name: "체코어" },
    nl: { name: "네덜란드어" },
    en: { name: "영어" },
    fil: { name: "필리핀어" },
    fi: { name: "핀란드어" },
    fr: { name: "프랑스어" },
    de: { name: "독일어" },
    el: { name: "그리스어" },
    he: { name: "히브리어" },
    hi: { name: "힌디어" },
    id: { name: "인도네시아어" },
    it: { name: "이탈리아어" },
    ja: { name: "일본어" },
    ko: { name: "한국어" },
    ms: { name: "말레이어" },
    pl: { name: "폴란드어" },
    pt: { name: "포르투갈어" },
    ro: { name: "루마니아어" },
    ru: { name: "러시아어" },
    es: { name: "스페인어" },
    sw: { name: "스와힐리어" },
    th: { name: "태국어" },
    tr: { name: "터키어" },
    uk: { name: "우크라이나어" },
    vi: { name: "베트남어" },
  },
  faq: {
    accuracy: {
        question: "번역의 정확도는 어떤가요?",
        answer: "저희의 AI 기반 시스템은 대부분의 언어에서 매우 정확한 번역을 제공해요. 품질 향상을 위해 계속 개선하고 있답니다.",
      },
      formats: {
        question: "어떤 이미지 형식을 지원하나요?",
        answer: "JPG, PNG, WEBP, HEIC, GIF 이미지를 모두 번역할 수 있어요. 가장 좋은 결과를 위해서는 텍스트가 잘 보이는 선명한 사진을 사용해 주세요.",
      },
      pricing: {
        question: "무료 체험 이후의 가격은 어떻게 되나요?",
        answer: "10장의 무료 사진 이후에는 이미지 한 장당 0.10달러로 추가 번역을 구매하실 수 있어요. 구독은 필요 없답니다.",
      },
      handwriting: {
        question: "손글씨도 번역할 수 있나요?",
        answer: "네, 저희 OCR 기술은 대부분의 언어에서 인쇄체와 손글씨 모두 인식하고 번역할 수 있어요.",
      },
      speed: {
        question: "번역은 얼마나 빨리 되나요?",
        answer: "대부분의 번역은 이미지 크기와 텍스트 복잡도에 따라 몇 초 안에 완료돼요.",
      },
  },
  ocrSampleImages: {
    chinese: {
        caption: "중국어 문자 타투",
        translation: "미력지",
        backgroundInfo:
          "'미력지'는 아름다움과 지성이 결합된 개념을 나타내며, 주로 브랜딩이나 개인 발전, 미학 관련 논의에서 사용되는 표현이에요.",
        alt: "포토레이트 데모 - 목에 새겨진 '미력지' 타투의 중국어 텍스트 인식, 타투 아트에서 중국어 문자를 정확하게 감지하고 번역하는 모습",
      },
      japanese: {
        caption: "일본 라멘 가게 메뉴",
        translation:
          "긴메다이 비빔면 ▶ 대 1180엔 ▶ 특대 1380엔 / 재료와 굵은 면 모두 넉넉하게 증량 / 보통 590엔. 아이스이도는 이런 '굵은 면'을 비빔면에 사용해요!!",
        backgroundInfo:
          "긴메다이(금눈돔)는 일본 요리에서 인기 있는 생선이에요. '비빔면'(마제소바)은 보통 다양한 토핑과 소스를 면과 함께 즐기는 요리예요. '굵은 면'을 강조한 것은 일본 면 요리에서 중요하게 여기는 식감과 포만감을 나타내요.",
        alt: "포토레이트 데모 - 라멘 가격과 설명이 있는 일본어 메뉴 번역, 한자와 히라가나를 정확하게 인식하는 모습",
      },
      french: {
        caption: "프랑스어로 쓴 선생님의 마음 담긴 편지",
        translation:
          "어린 왕자 2015년 5월 29일 사랑하는 베로니카 나와 함께 프랑스어를 공부해줘서 고마워. 너는 친절하고 지적이구나. Lac-Ouest 고등학교 입학과 앞으로의 삶을 축하해. 사랑한다. 항상 응원하며, 매글레티 선생님 추신. 발렌타인데이에 준 하트 2개를 아직도 간직하고 있단다. 우정에 감사해.",
        backgroundInfo:
          "이 텍스트는 교사가 학생에게 보내는 진심 어린 편지로, Lac-Ouest 고등학교 입학과 삶에 대한 축하와 감사를 표현하고 있습니다. '사랑하는 베로니카'로 시작하여 '항상 응원하며'로 마무리하는 따뜻한 어조는 한국의 스승과 제자 간의 정을 잘 반영하고 있습니다.",
        alt: "Photolate 데모 - 프랑스어 편지 번역으로 프랑스 교육에서의 교사-학생 관계에 대한 문화적 맥락이 담긴 개인적인 서신을 보여줌",
      },
      spanish: {
        caption: "스페인어 손글씨 메모",
        translation:
          "가끔 더 여유롭게 지내려고 노력하지만 난 그다지 재미있지 않아 × 50%. 난 농담을 잘 하는 편이지만 그게 다야. 그리고 내가 좋아하는 노래는 미구엘 앙헬과 그의 그룹이 부른 'Super Peder'이고, 바람처럼 사랑을 보내며.",
        backgroundInfo:
          "'Super Peder'는 노래 제목으로 보이며, 제목이나 아티스트 이름이 잘못 전달되었을 수 있습니다. 농담을 잘 한다는 언급은 가벼운 분위기를 나타내며, '바람처럼 사랑을 보내며'는 노래나 로맨틱한 상황에서 자주 쓰이는 시적 표현입니다.",
        alt: "Photolate 데모 - 줄이 그어진 종이에 쓰여진 손글씨를 보여주는 스페인어 텍스트 인식으로, 여러 텍스트 영역이 강조된 일상적인 손글씨의 정확한 감지를 보여줌",
      },
      german: {
        caption: "시적인 독일어 체중 은유",
        translation: "체중계가 폭풍을 만나버렸다. 증가",
        backgroundInfo:
          "이 텍스트는 폭풍을 은유적으로 사용하여 체중 변화에 대한 혼란이나 걱정을 표현하며, 체중이나 신체 이미지에 대한 개인적인 고민을 반영합니다.",
        alt: "Photolate 데모 - 독일 문학 스타일에 대한 문화적 맥락이 있는 은유적 표현을 보여주는 독일어 시적 텍스트 번역",
      },
      arabic: {
        caption: "사랑을 표현하는 아랍어 문자 타투",
        translation: "사랑해",
        backgroundInfo:
          "'أنا احبك'는 아랍어에서 사랑을 표현하는 가장 보편적인 문구로, 문화와 상황에 관계없이 널리 사용됩니다.",
        alt: "Photolate 데모 - 아랍어의 애정 표현 문화를 보여주는 '사랑해' 문구의 텍스트 인식",
      },
      finnish: {
        caption: "핀란드어 손글씨 편지",
        translation:
          "타박스야, 안녕! 세상에서 가장 긍정적인 것을 소개해줘서 정말 고마워. 그게 나에게 정말 소중해! 그리고 네 은행이 제일 싫어하는 게 내가 제일 좋아하는 걸로 바뀔 거야. 그들이 그걸 내게 준다는 게 너무 좋고 멋져! 사랑해! 뽀뽀뽀 - 알리나",
        backgroundInfo:
          "이 텍스트는 알리나라는 친구가 보낸 편안한 어조의 메시지입니다. 격식 없는 말투와 '뽀뽀뽀'같은 표현은 친밀한 관계를 보여주며, 이는 친구 사이의 애정 어린 편지에서 흔히 볼 수 있는 특징입니다.",
        alt: "Photolate 데모 - 핀란드식 의사소통 스타일에 대한 문화적 맥락과 함께 친근한 글쓰기를 보여주는 핀란드어 일상 메시지 번역",
      },
      russian: {
        caption: "러시아어 인쇄된 설명서",
        translation:
          "수성 아크릴 분산액으로 만든 장식용 테두리는 면직물과 실크 원단에 그림을 그릴 때 입체적인 디자인을 만들고 물감이 섞이는 것을 방지합니다. 세탁하고 다림질한 원단에 테두리를 그리고 3시간 동안 말리세요. 그 다음 천용 물감을 칠하세요. 테두리는 완성된 그림을 장식하는 데도 사용할 수 있습니다. 그림을 24시간 동안 말리세요. 면직물에 알맞은 온도로 스팀 없이 5분간 다림질하되, 면직물을 덮어서 하세요. 다림질 48시간 후에는 30°C에서 40°C 사이의 물로 중성세제를 사용해 세탁할 수 있으나, 세게 비틀거나 짜지 마세요. 노즐은 물로 씻어 보관하세요.",
        backgroundInfo:
          "이 텍스트는 공예와 섬유 예술에서 자주 사용되는 특수 천용 물감이나 테두리 물감 사용법을 설명하는 안내문입니다. DIY와 섬유 예술 분야의 일반적인 작업 방식을 잘 보여줍니다.",
        alt: "Photolate 데모 - 키릴 문자의 정확한 인식과 함께 상세한 천 물감 사용법을 보여주는 러시아어 설명서 번역",
      },
  },
  sampleTranslations: {
    japanese: {
        gpt4oTranslation: "능력이 있는 자의 책임을 다하고, 한결같은 사랑의 마음으로 세상에 헌신하는 것 — 이것이 '기사도'다.",
        googleTranslation: "능력이 있는 자의 책임을 다하고 강한 영적 사랑으로 세상에 헌신하는 '기사도'를 향해.",
        comparison: "GPT4o의 번역이 더 자연스럽고 명확하며 '이것이 기사도다'라는 결론적 표현이 좋습니다. 구글의 번역은 불명확하고 어색합니다.",
      },
      french: {
        gpt4oTranslation: "아기 [비공개]는 자연분만으로 태어났습니다. 신생아 검사 결과 정상이며, 키와 체중 모두 정상 범위입니다.",
        googleTranslation: "아기 [비공개] 질식 분만. 신생아 검사 정상. 체중 및 신장 변화 정상.",
        comparison: "GPT4o의 번역은 부드럽고 이해하기 쉽습니다. 구글의 번역은 너무 의학적이고 딱딱한 용어를 사용했습니다.",
      },
      chinese: {
        gpt4oTranslation: "돌격!",
        googleTranslation: "오리 가",
        comparison: "GPT4o는 '돌격!'이라는 실제 의미를 정확히 파악했습니다. 구글은 글자 그대로 번역해 의미를 놓쳤습니다.",
      }
  },
  useCases: {
    travel: {
        title: "여행",
        description: "외국 메뉴, 도로 표지판, 관광 정보를 바로 찍어서 번역하세요. 이제 언어 때문에 고생하지 마세요!",
      },
      business: {
        title: "비즈니스",
        description: "명함, 계약서, 제품 라벨을 언제 어디서나 캡처하고 번역하세요. 글로벌 무역에서의 언어 장벽을 극복하세요.",
      },
      education: {
        title: "교육",
        description: "교과서 페이지, 강의 슬라이드, 연구 논문을 사진 한 장으로 번역하세요. 언어 장벽 없이 학습하세요.",
      },
      socialMedia: {
        title: "소셜 미디어",
        description: "SNS의 밈(meme), 캡션, 댓글을 번역하세요. 스크린샷부터 만화까지 쉽게 번역할 수 있습니다. 세계적인 트렌드와 쉽게 소통하세요.",
      },
  }
};