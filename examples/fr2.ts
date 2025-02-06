export default {
  app: {
    name: "Photolate",
    index: {
      slogan : "Le seul traducteur d'images IA qui explique le contexte culturel",
      description :
          "Des menus japonais, des panneaux en arabe ou des étiquettes coréennes - obtenez des traductions avec leur contexte culturel expliqué. Compatible avec plus de 100 langues.",
      startForFreeBtn : "Commencer gratuitement",
      blogLink : "Blog",

      loginPromoteMsg : "10 essais gratuits • Sans abonnement • Paiement à l'utilisation",
      loggingInMsg : "Connexion en cours...",

      howToUsePhotolate : "Comment utiliser Photolate",
      howToUsePhotolateStep1 : "Étape 1 : Choisir la photo et détecter le texte",
      howToUsePhotolateStep1Desc :
        "OCR avancé basé sur Azure AI qui extrait précisément le texte des images, détectant les kanji japonais et d'autres langues, en version imprimée ou manuscrite.",
      howToUsePhotolateStep2 : "Étape 2 : Traduire le texte de l'image dans votre langue",
      howToUsePhotolateStep2Desc :
        "IA de pointe utilisant OpenAI GPT-4o pour des traductions d'une précision supérieure.",

      howToUsePhotolateStep3 : "Étape 3 : Fournir le contexte et l'arrière-plan",
      howToUsePhotolateStep3Desc : "Analyses approfondies utilisant OpenAI GPT-4o",

      howToUsePhotolateExampleOriginalTextPart1 :
        "吾各花京院典明,为吾友阿布德尔耻,为身田吾友汲鲁那雷夫之妹灵魂之安息,我要你以死偿命! ",
      howToUsePhotolateExampleOriginalTextPart2 : "花京院典明",
      howToUsePhotolateExampleTranslatedTextPart1 :
        "Moi, Kakyoin Noriaki, je vengerai mon ami Abdoel, et pour la paix de l'âme de la sœur de mon ami Jotaro, je veux que tu paies de ta vie !",
      howToUsePhotolateExampleTranslatedTextPart2 : "-Kakyoin Noriaki",
      howToUsePhotolateExampleBGInfo :
        "Cette citation est tirée du manga et de l'anime 'JoJo's Bizarre Adventure', faisant spécifiquement référence au personnage de Kakyoin Noriaki, connu pour son fort sens de l'amitié et sa loyauté.",

      featuresTitle : "Les atouts de Photolate",
      features1 : "1. Reconnaissance de texte OCR de pointe",
      features1Desc :
        "OCR avancé utilisant Azure AI. Reconnaît le texte des images, imprimé et manuscrit, dans plusieurs langues avec une précision exceptionnelle.",
      features2 : "2. Traductions supérieures avec OpenAI GPT-4o",
      features2Desc :
        "Notre modèle d'IA de pointe offre des traductions plus précises que Google Translate, prenant en charge plus de 100 langues.",
      translationsComparison : "GPT-4o vs Google Translate",
      comparison : "Comparaison",
      features3 : "3. Comprendre le contexte, pas seulement les mots",
      features3Desc :
        "Notre traducteur d'images basé sur l'IA révèle les références culturelles et les significations cachées au-delà de la simple traduction.",
      features4 : "4. Traduire instantanément dans plus de 100 langues",
      features4Desc :
        "Utilisez notre traducteur pour convertir des images en japonais, coréen, chinois et arabe dans n'importe laquelle des 100+ langues prises en charge. Surmontez les barrières linguistiques avec Photolate.",
      more100 : "Plus de 100 autres...",

      priceTitle : "Une tarification simple et flexible pour Photolate",
      priceDesc :
        "Profitez de 10 traductions de photos gratuites, puis payez simplement à l'utilisation. Aucun abonnement requis.",
      freeTitle : "Gratuit",
      freeSubtitle : "pour commencer",
      noSubscriptionMsg : "Sans abonnement • Paiement à l'utilisation",
      bonusFeaturesTitle : "Avantages supplémentaires",
      features : {
        item1 : "10 traductions de photos gratuites",
        item2 : "Sans abonnement ni engagement",
        item3 : "Payez uniquement ce que vous utilisez",
        item4 : "Utilisez le service selon vos besoins, suspendez l'utilisation à tout moment",
        item5 : "Paiements sécurisés via Stripe",
      },
      bonusFeatures : {
        title : "Avantages supplémentaires",
        item1 : "Mises à jour continues avec les technologies d'IA les plus récentes",
        item2 : "Suggérez de nouvelles fonctionnalités",
      },useCasesTitle : "Découvrez nos différentes applications",
      faqTitle : "Foire aux questions",
    },
    blog: {
      title : "Blog",
      toc : "Table des matières",
      description :
        "Explorez les articles sur la traduction d'images par IA, la technologie OCR et le traitement des langues.",
    },
    home: {
      greeting : "Bonjour",
      welcomeText : "Enchanté(e)",
      creditsNum : "Crédits",
      choosePhotoBtn : "Choisir une photo",
      rechargeCreditsBtn : "Acheter des crédits",
      creditsRunOutMsg : "Vos crédits sont épuisés. Cliquez pour en acheter.",
      processingImageMsg : "Traitement de l'image en cours",
      pleaseWaitMsg : "Veuillez patienter",
      recents : "Récents",
      myCredits : "Mes crédits",
      creditsModalTitle : "Achat de crédits",
      loadingPriceMsg : "Chargement des tarifs...",
      priceErrorMsg : "Veuillez patienter un moment et réessayer.",
      bestDeal : "Offre la plus avantageuse : -10%",
      justAMomentMsg : "Un instant...",
    },
    translateResult: {
      clickToSelect : "Cliquez pour sélectionner",
      autoDetect : "Détection automatique",
      translateBtn : "Traduire",
      translateBtnLoadingState : "Traduction en cours",
      analyzingImageMsg : "Analyse de l'image en cours",
      justAMomentMsg : "Un instant",
      noTextDetectedMsg :
        "Aucun texte détecté dans l'image. Veuillez essayer une autre photo.",
      errorMsg :
        "Une erreur s'est produite lors de l'analyse de la photo. Veuillez essayer une autre photo.",
      recentLanguages : "Récents",
      targetLanguage : "Langue cible",
      backgroundInfo : "Contexte",
      copied : "Copié !",
      copiedFailed : "Échec de la copie du texte",
      feedbackForGood : "Heureux d'avoir pu vous aider !",
      feedbackForBad : "Merci pour votre retour. Nous travaillerons à nous améliorer !",
    },
    paymentResult: {
      paymentComplete : "Paiement effectué",
      paymentCancelled : "Paiement annulé",
      paymentSuccessMsg : "Merci ! Votre paiement a été effectué avec succès.",
      paymentCancelledMsg :
        "Votre paiement a été annulé. Retournez à l'accueil pour réessayer ultérieurement.",
      orderId : "Numéro de commande",
      backToHome : "Retour à l'accueil",
    },
  },
  meta: {
    title : "Photolate : Le seul traducteur d'images par IA avec contexte culturel",
    description :
      "Traduisez des images avec précision et contexte culturel - mieux que Google Translate. Des menus japonais aux panneaux arabes et étiquettes coréennes, dans plus de 100 langues.",
    og: {
      title : "Photolate : Le seul traducteur d'images par IA avec contexte culturel",
      description :
        "Traduisez des images avec précision et contexte culturel - mieux que Google Translate. Des menus japonais aux panneaux arabes et étiquettes coréennes, dans plus de 100 langues.",
    }
  },
  pages: {  
    title: {
      top : "Photolate : Le seul traducteur d'images par IA avec contexte culturel",
      blog : "Blog | Photolate",
    },
  },
  sampleLanguages: {
    ar: { name : "arabe" },
    bn: { name : "bengali" },
    zh: { name : "chinois" },
    cs: { name : "tchèque" },
    nl: { name : "néerlandais" },
    en: { name : "anglais" },
    fil: { name : "philippin" },
    fi: { name : "finnois" },
    fr: { name : "français" },
    de: { name : "allemand" },
    el: { name : "grec" },
    he: { name : "hébreu" },
    hi: { name : "hindi" },
    id: { name : "indonésien" },
    it: { name : "italien" },
    ja: { name : "japonais" },
    ko: { name : "coréen" },
    ms: { name : "malais" },
    pl: { name : "polonais" },
    pt: { name : "portugais" },
    ro: { name : "roumain" },
    ru: { name : "russe" },
    es: { name : "espagnol" },
    sw: { name : "swahili" },
    th: { name : "thaï" },
    tr: { name : "turc" },
    uk: { name : "ukrainien" },
    vi: { name : "vietnamien" },
  },
  faq: {
    accuracy: {
        question : "Quelle est la précision des traductions ?",
        answer : "Notre système alimenté par l'IA fournit des traductions très précises pour la plupart des langues, avec des améliorations continues pour optimiser la qualité.",
      },
      formats: {
        question : "Quels formats d'image sont pris en charge ?",
        answer : "Traduisez facilement les images JPG, PNG, WEBP, HEIC et GIF. Pour de meilleurs résultats, utilisez des images nettes avec du texte lisible.",
      },
      pricing: {
        question : "Comment fonctionne la tarification après l'essai gratuit ?",
        answer : "Après 10 photos gratuites, vous pouvez acheter des traductions supplémentaires à 0,10 $ par image, sans abonnement requis.",
      },
      handwriting: {
        question : "Puis-je traduire du texte manuscrit ?",
        answer : "Oui, notre technologie OCR peut reconnaître et traduire le texte imprimé et manuscrit dans la plupart des langues.",
      },
      speed: {
        question : "Quelle est la rapidité des traductions ?",
        answer : "La plupart des traductions sont effectuées en quelques secondes, selon la taille de l'image et la complexité du texte.",
      },
  },
  ocrSampleImages: {
    chinese: {
        caption : "Tatouage en caractères chinois",
        translation : "Beauté Intelligence",
        backgroundInfo :"Le terme '美力智' fait référence au concept de beauté combinée à l'intelligence, souvent utilisé dans le marketing ou les discussions autour du développement personnel et de l'esthétique.",
        alt: "Démo Photolate - Reconnaissance de texte chinois montrant un tatouage '美力智' sur le cou, démontrant une détection et une traduction précises des caractères chinois dans l'art du tatouage",
      },
      japanese: {
        caption: "Menu d'un restaurant de ramen japonais",
        translation:
          "Mazesoba au Kinmedai ▶ Grande portion 1180 yens ▶ Très grande portion 1380 yens / Les ingrédients et les nouilles extra épaisses sont servis en quantité généreuse / Portion normale 590 yens. Aisui-do utilise ces 'nouilles extra épaisses' pour leurs mazesoba !",
        backgroundInfo:
          "Le Kinmedai (dorade à œil d'or) est un poisson populaire dans la cuisine japonaise, et le mazesoba (nouilles mélangées) est un plat qui comprend généralement une variété de garnitures et de sauces combinées avec des nouilles. La mention de 'nouilles extra épaisses' suggère une attention particulière à la texture et à la consistance généreuse, caractéristiques de nombreux plats de nouilles japonais.",
        alt: "Démo Photolate - Traduction de menu japonais montrant les prix et descriptions de ramen, reconnaissant avec précision les caractères kanji et hiragana",
      },
      french: {
        caption: "Lettre émouvante d'un professeur en français",
        translation:
          "Le Petit Prince 29 mai 2015 Ma chère Veronica, Merci d'avoir étudié le français avec moi. Tu es gentille et intelligente. Félicitations pour ton entrée au lycée Lac-Ouest et pour la vie. Je t'aime. Sincèrement, Mme Maglety P.S. J'ai toujours les 2 cœurs que tu m'as donnés à la Saint-Valentin ; merci pour ton amitié.",
        backgroundInfo:
          "Ce texte est une lettre émouvante d'un professeur à son élève, exprimant de la gratitude et des vœux pour son entrée au lycée Lac-Ouest et pour la vie. L'utilisation de 'Ma chère Veronica' et 'Sincèrement,' indique un ton formel et sincère, typique des lettres ou notes formelles.",
        alt: "Démo Photolate - Traduction de lettre française montrant une correspondance personnelle avec contexte culturel sur les relations enseignant-élève dans l'éducation française",
      },
      spanish: {
        caption: "Note manuscrite en espagnol",
        translation:
          "Parfois j'essaie d'être plus décontracté mais je ne suis pas très drôle × 50%. Je suis très rigolo mais c'est tout. Et la chanson que j'aime est 'Super Peder' de Miguel Ángel et son groupe, et un baiser au vent.",
        backgroundInfo:
          "La phrase 'Super Peder' semble faire référence à une chanson, possiblement une mauvaise interprétation d'un titre ou d'un nom d'artiste. La mention d'être rigolo suggère un ton léger, et le baiser au vent est une expression poétique souvent utilisée dans les chansons ou les contextes romantiques.",
        alt: "Démo Photolate - Reconnaissance de texte espagnol montrant des notes manuscrites sur papier ligné, démontrant une détection précise de l'écriture manuscrite décontractée avec plusieurs régions de texte mises en évidence",
      },
      german: {
        caption: "Métaphore poétique allemande sur le poids",
        translation: "Une tempête se déchaîne sur ma balance. Une augmentation",
        backgroundInfo:
          "Le texte utilise métaphoriquement une tempête pour décrire le tumulte ou le chaos, possiblement en relation avec le poids ou la mesure, ce qui peut refléter des luttes personnelles avec l'image corporelle ou la santé.",
        alt: "Démo Photolate - Traduction de texte poétique allemand montrant une expression métaphorique avec contexte culturel sur le style littéraire allemand",
      },
      arabic: {
        caption: "Tatouage de caractères arabes exprimant l'amour",
        translation: "Je t'aime",
        backgroundInfo:
          "La phrase 'أنا احبك' est une expression d'affection courante en arabe, largement utilisée dans diverses cultures et contextes.",
        alt: "Démo Photolate - Reconnaissance de texte arabe montrant l'expression courante 'Je t'aime' avec contexte culturel sur les expressions d'affection en arabe",
      },
      finnish: {
        caption: "Lettre manuscrite en finnois",
        translation:
          "Tarbox Salut ! Merci de m'avoir fait découvrir l'une des choses les plus positives au monde. C'est si important pour moi ! Et ce que tu m'as montré va devenir mon préféré. C'est bien et c'est merveilleux qu'ils me donnent ça ! Je t'aime ! Bisous - Alina",
        backgroundInfo:
          "Le texte est un message décontracté, probablement d'une amie nommée Alina, exprimant de la gratitude et de l'affection. Le ton informel et l'utilisation de 'Bisous' suggèrent une relation proche, typique dans une correspondance amicale ou affectueuse.",
        alt: "Démo Photolate - Traduction de message décontracté finnois montrant une écriture informelle avec contexte culturel sur le style de communication finnois",
      },
      russian: {
        caption: "Instructions imprimées en russe",
        translation:
          "Le contour pour arts décoratifs à base de dispersion acrylique aqueuse est destiné à créer des motifs tridimensionnels et à empêcher le mélange des peintures lors de la peinture sur tissus en coton et en soie. Appliquez le contour sur le tissu lavé et repassé, et laissez sécher pendant 3 heures. Appliquez la peinture pour tissu. Le contour peut également être utilisé pour embellir des peintures finies. Laissez sécher la peinture pendant 24 heures. Repassez sans vapeur pendant 5 minutes à travers un tissu en coton à une température adaptée au tissu en coton. Après 48 heures de repassage, le lavage de l'article avec des détergents doux à une température de 30 °C à 40 °C est permis sans action mécanique forte. Rincez la buse à l'eau. À conserver.",
        backgroundInfo:
          "Ce texte présente des instructions pour l'utilisation d'un type spécifique de peinture pour tissu ou de contour, couramment utilisé dans l'artisanat et les arts textiles. Il reflète des pratiques typiques dans la décoration textile DIY et artistique.",
        alt: "Démo Photolate - Traduction d'instructions techniques russes montrant des directives détaillées de peinture sur tissu avec reconnaissance précise des caractères cyrilliques",
      },
  },
  sampleTranslations: {
    japanese: {
        gpt4oTranslation: "Accomplir les responsabilités de ceux qui possèdent, et se dévouer au monde avec un esprit d'amour inébranlable — voici la 'Chevalerie'.",
        comparaison : "La traduction de GPT4o est plus claire et plus fluide, se terminant par 'c'est la Chevalerie.' La version de Google est moins claire et maladroite.",
      },
      french: {
        gpt4oTranslation : "Nouveau-né [données masquées] par accouchement naturel. L'examen néonatal est normal. La croissance staturo-pondérale est normale.",
        googleTranslation : "Nouveau-né [données masquées] accouché par voie vaginale. L'examen néonatal est normal. L'évolution du poids et de la taille est correcte.",
        comparison : "La traduction de GPT4o est claire et facile à comprendre. La version de Google utilise des termes plus techniques qui pourraient être moins accessibles.",
      },
      chinese: {
        gpt4oTranslation : "À l'attaque !",
        googleTranslation : "« Va Canard »",
        comparison : "GPT4o capture précisément le sens avec 'À l'attaque !' Le « Va Canard » littéral de Google passe à côté du sens.",
      }
  },
  useCases: {
    travel: {
        title : "Voyage",
        description : "Prenez en photo et traduisez instantanément les menus étrangers, les panneaux de signalisation et les informations touristiques. Ne vous perdez plus jamais dans la traduction !",
      },
      business: {
        title : "Entreprise",
        description : "Capturez et traduisez les cartes de visite, les contrats et les étiquettes de produits en mobilité. Brisez les barrières linguistiques dans le commerce mondial.",
      },
      education: {
        title : "Éducation",
        description : "Traduisez les pages de manuels, les diapositives de cours et les articles de recherche en un simple clic. Apprenez sans limites linguistiques.",
      },
      socialMedia: {
        title : "Réseaux sociaux",
        description : "Traduisez les mèmes, les légendes et les commentaires des publications mondiales. Traduisez facilement depuis une copie d'écran ou une image de manga. Restez facilement connecté aux tendances et conversations mondiales.",
      }
  },
  jsonld: {
    software: {
      name : "Photolate",
      description :
        "Photolate est le seul traducteur de texte à partir d'images qui fournit un contexte culturel, vous aidant à comprendre tout, des menus coréens aux panneaux de signalisation japonais et aux documents russes. Notre technologie d'IA, dotée d'OCR avancé et de GPT-4o, vous permet de traduire le texte de n'importe quelle copie d'écran ou fichier image avec des perspectives culturelles. Commencez avec 10 crédits gratuits pour des traductions instantanées et précises.",
      offerDescription :
        "Commencez avec 10 crédits gratuits. Des crédits supplémentaires sont disponibles à l'achat pour continuer à profiter de nos services de traduction complets.",
      features: [
        "OCR avancé pour la reconnaissance précise du texte manuscrit et imprimé",
        "Sélection interactive du texte pour une traduction ciblée",
        "Prise en charge de plus de 100 langues",
        "Contexte culturel riche et informations contextuelles",
        "Alimenté par des modèles d'IA avancés comme GPT-4o",
        "Traduction instantanée du texte dans les images",
        "Interface conviviale avec sélection de texte flexible",
      ],
      priceSpecifications: [
        {
          type : "version gratuite",
          price : "0",
          description : "Crédits initiaux gratuits pour les nouveaux utilisateurs",
          unitText : "10 crédits",
        },
        {
          type : "payant",
          price : "1",
          description : "Crédits supplémentaires pour une utilisation continue",
          unitText : "10 crédits",
        },
      ],
      organization : "Photolate",
    },
  },
};