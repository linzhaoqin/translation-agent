export default {
  app: {
    name: "Photolate",
    index: {
      slogan: "Az egyetlen MI-alapú képfordító, amely elmagyarázza a kulturális hátteret",
      description:
          "Legyen szó japán étlapokról, arab feliratokról vagy koreai címkékről - kulturális háttérinformációval együtt kapja meg a fordításokat. Több mint 100 nyelven működik.",
      startForFreeBtn: "Ingyenes kezdés",
      blogLink: "Blog",
      loginPromoteMsg: "10 ingyenes próba · Nincs előfizetés · Fizessen használat szerint",
      loggingInMsg: "Bejelentkezés...",
      howToUsePhotolate: "Hogyan használja a Photolate-ot",
      howToUsePhotolateStep1: "1. lépés: Válasszon fotót és ismerje fel a szöveget",
      howToUsePhotolateStep1Desc:
        "Az Azure MI által működtetett fejlett OCR pontosan kivonja a szöveget a képből, felismerve a japán kandzsit és más nyelveket, legyen az nyomtatott vagy kézírásos.",
      howToUsePhotolateStep2: "2. lépés: Fordítsa le a képen lévő szöveget az Ön nyelvére",
      howToUsePhotolateStep2Desc:
        "Csúcstechnológiás MI, amely a képeken lévő szöveget fordítja, az OpenAI GPT-4o által működtetve a kiváló pontosság érdekében.",
      howToUsePhotolateStep3: "3. lépés: Kontextus és háttér biztosítása",
      howToUsePhotolateStep3Desc: "Mélyreható elemzés az OpenAI GPT-4o által",
      howToUsePhotolateExampleOriginalTextPart1:
        "吾各花京院典明,为吾友阿布德尔耻,为身田吾友汲鲁那雷夫之妹灵魂之安息,我要你以死偿命! ",
      howToUsePhotolateExampleOriginalTextPart2: "花京院典明",
      howToUsePhotolateExampleTranslatedTextPart1:
        "Én, Kakyoin Noriaki, megbosszulom a barátomat, Abdoelt, és a barátom, Jotaro húgának lelki békéjéért azt akarom, hogy az életeddel fizess!",
      howToUsePhotolateExampleTranslatedTextPart2: "-Kakyoin Noriaki",
      howToUsePhotolateExampleBGInfo:
        "Ez az idézet a 'JoJo's Bizarre Adventure' mangából és animéből származik, konkrétan Kakyoin Noriaki karakterére utal, aki erős baráti érzéseiről és hűségéről ismert.",
      featuresTitle: "Hogyan segít Önnek a Photolate",
      features1: "1. Legkorszerűbb OCR szövegfelismerés",
      features1Desc:
        "Az Azure MI által működtetett fejlett OCR. Felismeri a szöveget a képekről, legyen az nyomtatott vagy kézírásos, több nyelven, kivételes pontossággal.",
      features2: "2. Kiváló fordítások OpenAI GPT-4o-val",
      features2Desc:
        "Csúcstechnológiás MI-modellünk pontosabb fordításokat nyújt, mint a Google Fordító, több mint 100 nyelvet támogatva.",
      translationsComparison: "GPT-4o vs Google Fordító",
      comparison: "Összehasonlítás",
      features3: "3. Értse meg a kontextust, ne csak a szavakat",
      features3Desc:
        "MI-alapú képfordítónk feltárja a kulturális jelentéseket és rejtett tartalmakat az egyszerű fordításon túl.",
      features4: "4. Fordítson azonnal 100+ nyelven",
      features4Desc:
        "Használja fordítónkat japán, koreai, kínai és arab képek bármely támogatott nyelvre való fordításához a 100+ nyelvből. Törje át a nyelvi korlátokat a Photolate-tal.",
      more100: "További 100+...",
      priceTitle: "Egyszerű, rugalmas árazás",
      priceDesc:
        "Próbálja ki 10 ingyenes képfordítással, majd fizessen használat szerint. Nincs szükség előfizetésre.",
      freeTitle: "Ingyenes",
      freeSubtitle: "kezdésnek",
      noSubscriptionMsg: "Nincs előfizetés · Fizessen használat szerint",
      bonusFeaturesTitle: "Extra funkciók",
      features: {
        item1: "10 ingyenes képfordítás",
        item2: "Nincs előfizetés vagy kötelezettség",
        item3: "Csak azért fizet, amit használ",
        item4: "Használja amikor szüksége van rá, szüneteltesse bármikor",
        item5: "Biztonságos fizetés Stripe-on keresztül",
      },
      bonusFeatures: {
        title: "Extra funkciók",
        item1: "Folyamatos frissítések a legújabb MI-technológiával",
        item2: "Új funkciók igénylése",
      },
      useCasesTitle: "Ismerje meg, mire használhatja",
      faqTitle: "Gyakran Ismételt Kérdések",
    },
    blog: {
      title: "Blogbejegyzések",
      toc: "Tartalomjegyzék",
      description:
        "Fedezzen fel cikkeket az MI-alapú képfordításról, OCR-technológiáról és nyelvfeldolgozásról.",
    },
    home: {
      greeting: "Szia",
      welcomeText: "Örvendek",
      creditsNum: "Pontok",
      choosePhotoBtn: "Fotó választása",
      rechargeCreditsBtn: "Pontok feltöltése",
      creditsRunOutMsg: "Elfogytak a pontjai. Kattintson a feltöltéshez.",
      processingImageMsg: "Kép feldolgozása",
      pleaseWaitMsg: "Kérem várjon",
      recents: "Legutóbb használt",
      myCredits: "Pontjaim",
      creditsModalTitle: "Pontok feltöltése",
      loadingPriceMsg: "Árinformációk betöltése...",
      priceErrorMsg: "Kérjük, várjon egy kicsit és próbálja újra.",
      bestDeal: "Legjobb ajánlat: 10% megtakarítás",
      justAMomentMsg: "Egy pillanat...",
    },
    translateResult: {
      clickToSelect: "Kattintson a kiválasztáshoz",
      autoDetect: "Nyelv automatikus felismerése",
      translateBtn: "Fordítás",
      translateBtnLoadingState: "fordítás",
      analyzingImageMsg: "Kép elemzése",
      justAMomentMsg: "Egy pillanat",
      noTextDetectedMsg:
        "Nem található szöveg a képen. Kérjük, próbálkozzon másik fotóval.",
      errorMsg:
        "Hiba történt a fotó elemzése közben. Kérjük, próbálkozzon másik fotóval.",
      recentLanguages: "Legutóbb használt nyelvek",
      targetLanguage: "Célnyelv",
      backgroundInfo: "Háttérinformáció",
      copied: "Másolva!",
      copiedFailed: "Nem sikerült másolni a szöveget",
      feedbackForGood: "Örülünk, hogy segíthettünk!",
      feedbackForBad: "Köszönjük a visszajelzést. Folyamatosan fejlesztjük szolgáltatásunkat!",
    },
    paymentResult: {
      paymentComplete: "Fizetés befejezve",
      paymentCancelled: "Fizetés megszakítva",
      paymentSuccessMsg: "Köszönjük! A fizetés sikeres volt.",
      paymentCancelledMsg:
        "A fizetés megszakítva. Vissza a kezdőlapra az újrapróbáláshoz.",
      orderId: "Rendelés-azonosító",
      backToHome: "Vissza a kezdőlapra",
    },
  },
  meta: {
    title: "Photolate: Az egyetlen MI-alapú képfordító kulturális háttérinformációval",
    description:
      "Fordítson képeket pontosan kulturális háttérinformációval - jobb, mint a Google Fordító. Japán étlapoktól arab feliratokig és koreai címkékig, 100+ nyelven.",
    og: {
      title: "Photolate: Az egyetlen MI-alapú képfordító kulturális háttérinformációval",
      description:
        "Fordítson képeket pontosan kulturális háttérinformációval - jobb, mint a Google Fordító. Japán étlapoktól arab feliratokig és koreai címkékig, 100+ nyelven.",
    }
  },
  pages: {  
    title: {
      top: "Photolate: Az egyetlen MI-alapú képfordító kulturális háttérinformációval",
      blog: "Blogbejegyzések | Photolate",
    },
  },
  sampleLanguages: {
    ar: { name: "Arab" },
    bn: { name: "Bengáli" },
    zh: { name: "Kínai" },
    cs: { name: "Cseh" },
    nl: { name: "Holland" },
    en: { name: "Angol" },
    fil: { name: "Filippínó" },
    fi: { name: "Finn" },
    fr: { name: "Francia" },
    de: { name: "Német" },
    el: { name: "Görög" },
    he: { name: "Héber" },
    hi: { name: "Hindi" },
    id: { name: "Indonéz" },
    it: { name: "Olasz" },
    ja: { name: "Japán" },
    ko: { name: "Koreai" },
    ms: { name: "Maláj" },
    pl: { name: "Lengyel" },
    pt: { name: "Portugál" },
    ro: { name: "Román" },
    ru: { name: "Orosz" },
    es: { name: "Spanyol" },
    sw: { name: "Szuahéli" },
    th: { name: "Thai" },
    tr: { name: "Török" },
    uk: { name: "Ukrán" },
    vi: { name: "Vietnámi" },
  },
  faq: {
    accuracy: {
        question: "Mennyire pontosak a fordítások?",
        answer: "MI-alapú rendszerünk rendkívül pontos fordításokat biztosít a legtöbb nyelven, folyamatos fejlesztésekkel a minőség javítása érdekében.",
      },
      formats: {
        question: "Milyen képformátumokat támogat?",
        answer: "Fordítson JPG, PNG, WEBP, HEIC és GIF képeket könnyedén. A legjobb eredményekért használjon tiszta, jól olvasható szöveget tartalmazó képeket.",
      },
      pricing: {
        question: "Hogyan működik az árazás az ingyenes próbaidőszak után?",
        answer: "10 ingyenes fotó után további fordításokat vásárolhat képenként 0,10 dollárért, előfizetés nélkül.",
      },
      handwriting: {
        question: "Tudok kézírásos szöveget fordítani?",
        answer: "Igen, OCR-technológiánk felismeri és lefordítja mind a nyomtatott, mind a kézírásos szöveget a legtöbb nyelven.",
      },
      speed: {
        question: "Milyen gyorsak a fordítások?",
        answer: "A legtöbb fordítás másodperceken belül elkészül, a kép méretétől és a szöveg összetettségétől függően.",
      },
  },
  ocrSampleImages: {
    chinese: {
        caption: "Kínai karakteres tetoválás",
        translation: "Szépség és Intelligencia",
        backgroundInfo:
          "A '美力智' kifejezés, amely a szépség és intelligencia kombinációját jelenti, gyakran jelenik meg márkázásban, illetve a személyes fejlődésről és esztétikáról szóló diskurzusokban.",
        alt: "Photolate demo - kínai szövegfelismerés: '美力智' tetoválás nyakon, bemutatva a kínai karakterek pontos felismerését és fordítását tetoválás formájában",
      },
      japanese: {
        caption: "Japán Ramen Étterem Menü",
        translation:
          "Kinmedai tészta mix ▶ Nagy adag 1180 JEN ▶ Extra nagy adag 1380 JEN / Mind a hozzávalók, mind az extra vastag tészta mennyisége bőségesen megnövelve / Normál méret 590 JEN. Az Aisui-do ilyen 'extra vastag tésztát' használ a kevert tésztáihoz!!",
        backgroundInfo:
          "A Kinmedai (aranyozott szemű vörösdurbincs) kedvelt hal a japán konyhában, a 'kevert tészta' (mazesoba) pedig olyan étel, amelyre jellemző a különféle feltétek és szószok tésztával való kombinálása. Az 'extra vastag tészta' említése a textúra és tartalmasság hangsúlyozására szolgál, ami megszokott elem számos japán tésztaételnél.",
        alt: "Photolate demo - japán menü fordítás: ramen árak és leírások, pontos kanji és hiragana karakter-felismeréssel",
      },
      french: {
        caption: "Tanár szívhez szóló francia levele",
        translation:
          "A Kis Herceg 2015. május 29. Kedves Veronika! Köszönöm, hogy velem tanultad a franciát. Kedves és intelligens vagy. Gratulálok a Lac-Ouest Gimnáziumhoz és az élethez. Szeretlek. Őszinte tisztelettel, Maglety tanárnő U.i. Még mindig megvan a 2 szív, amit Valentin-napkor adtál; köszönöm a barátságodat.",
        backgroundInfo:
          "Ez egy szívhez szóló levél egy tanártól diákjának, amelyben kifejezi megbecsülését és jókívánságait a Lac-Ouest Gimnáziumban való kezdéshez és az élethez. A 'Kedves Veronika' megszólítás és a 'Sincèrement' (Őszinte tisztelettel) záróformula a francia levelezésben megszokott hivatalos, mégis meghitt hangnemet tükrözi.",
        alt: "Photolate demo - francia levél fordítás: személyes levelezés, betekintéssel a francia oktatási rendszer tanár-diák kapcsolataiba",
      },
      spanish: {
        caption: "Spanyol kézírásos jegyzet",
        translation:
          "Néha próbálok lazább lenni, de nem vagyok túl vicces × 50%. Nagyon viccelődős vagyok, de ennyi. És a dal, amit szeretek, a 'Super Peder' (eredeti spanyol cím) Miguel Ángeltől és csapatától, és egy csók a szélnek.",
        backgroundInfo:
          "A 'Super Peder' feltehetően egy dal címe, valószínűleg egy név vagy előadó félreértelmezése. A viccelődős természet említése könnyed hangvételre utal, míg a szélnek küldött csók olyan költői kifejezés, amely gyakran fordul elő spanyol dalokban és romantikus szövegkörnyezetben.",
        alt: "Photolate demo - spanyol szövegfelismerés: kézírásos jegyzetek vonalas papíron, többszörös szövegrészlet pontos felismerésével",
      },
      german: {
        caption: "Költői német súly metafora",
        translation: "Vihar tombol a mérlegemen. Egy növekedés",
        backgroundInfo:
          "A szöveg a vihart metaforaként használja a belső nyugtalanság vagy káosz kifejezésére, vélhetően a testsúllyal vagy méréssel kapcsolatos személyes küzdelmek megjelenítésére.",
        alt: "Photolate demo - német költői szöveg fordítás: metaforikus kifejezés a német irodalmi stílus jellegzetességeivel",
      },
      arabic: {
        caption: "Arab karakteres szerelmes tetoválás",
        translation: "Szeretlek",
        backgroundInfo:
          "Az 'أنا احبك' kifejezés, amely a szeretet kinyilvánításának általános formája az arabban, számos kultúrában és kontextusban használatos.",
        alt: "Photolate demo - arab szövegfelismerés: a 'Szeretlek' kifejezés kulturális vonatkozásaival az arab nyelvben",
      },
      finnish: {
        caption: "Finn kézírásos levél",
        translation:
          "Tarbox Szia! Köszönöm, hogy bemutattad nekem a világ egyik legpozitívabb dolgát. Annyira fontos nekem! És a bankod legkevésbé kedveltje lesz az én kedvencem. Jó és csodálatos, hogy ezt adják nekem! Szeretlek! Ölellek-csókollak - Alina",
        backgroundInfo:
          "A szöveg egy közvetlen üzenet, feltehetően egy Alina nevű baráttól, amely hálát és szeretetet fejez ki. A közvetlen hangnem és az 'Xoxo' használata szoros baráti kapcsolatra utal, ami jellemző a finn baráti levelezésben.",
        alt: "Photolate demo - finn informális üzenet fordítás: közvetlen stílusú írás a finn kommunikációs sajátosságokkal",
      },
      russian: {
        caption: "Orosz nyomtatott utasítások",
        translation:
          "A vízbázisú akril diszperzión alapuló dekoratív és alkalmazott kreatív kontúr háromdimenziós minták létrehozására és a festékek keveredésének megakadályozására szolgál pamut- és selyemszövetek festésekor. Vigye fel a kontúrt a mosott és vasalt szövetre, és hagyja száradni 3 órán át. Vigye fel a textil festéket. A kontúr használható kész festmények díszítésére is. Hagyja száradni a festést 24 órán át. Vasalja gőz nélkül 5 percig pamutszöveten keresztül, pamutszövethez megfelelő hőmérsékleten. A vasalás után 48 órával a termék mosható enyhe mosószerekkel 30-40 °C-os hőmérsékleten, erős mechanikai hatás nélkül. Öblítse le a szórófejet vízzel. Tárolja.",
        backgroundInfo:
          "Ez egy speciális textil festék vagy kontúr használati útmutatója, amely a kézművességben és textilművészetben használatos. A leírás jól tükrözi a DIY és művészi textildíszítés szakmai gyakorlatát.",
        alt: "Photolate demo - orosz technikai útmutató fordítás: részletes textil festési instrukciók cirill karakterek precíz felismerésével",
      },
  },
  sampleTranslations: {
    japanese: {
        gpt4oTranslation: "Teljesítsd a birtoklók felelősségét, és szenteld magad a világnak állhatatos szeretettel — ez a Lovagi Erény.",
        googleTranslation: "A Lovagi Erény felé, ami a tehetősek felelősségének teljesítése és az önfeláldozás a világért erős spirituális szeretettel.",
        comparison: "A GPT4o fordítása gördülékenyebb és érthetőbb, határozott záró kifejezéssel. A Google fordítása körülményes és kevésbé természetes.",
      },
      french: {
        gpt4oTranslation: "Baba [törölve] természetes szüléssel. Az újszülött vizsgálata normális. A magasság- és súlynövekedés megfelelő.",
        googleTranslation: "Baba [törölve] hüvelyi úton született. Újszülött vizsgálat normális. Súly és magasság evolúció megfelelő.",
        comparison: "A GPT4o fordítása közérthetőbb és természetesebb. A Google verziója orvosi szaknyelvet használ, ami nehezebben érthető.",
      },
      chinese: {
        gpt4oTranslation: "Támadás!",
        googleTranslation: "Menj Kacsa",
        comparison: "A GPT4o helyesen adja vissza a jelentést. A Google szó szerinti fordítása teljesen elvéti az eredeti üzenetet.",
      }
  },
  useCases: {
    travel: {
        title: "Utazás",
        description: "Fotózd le és fordítsd le azonnal a külföldi menüket, utcai táblákat és turisztikai információkat. Soha többé ne vessz el a fordításban!",
      },
      business: {
        title: "Üzlet",
        description: "Rögzítsd és fordítsd le a névjegykártyákat, szerződéseket és termékcímkéket útközben. Lépd át a nyelvi akadályokat a nemzetközi kereskedelemben.",
      },
      education: {
        title: "Oktatás",
        description: "Fordítsd le a tankönyvoldalakat, előadás-diákat és kutatási dokumentumokat egy gyors fotóval. Tanulj nyelvi korlátok nélkül.",
      },
      socialMedia: {
        title: "Közösségi média",
        description: "Fordítsd le a mémeket, képaláírásokat és kommenteket a globális posztokból. Könnyedén fordíts képernyőfotókat vagy manga képeket. Kapcsolódj be a világméretű trendekbe és beszélgetésekbe egyszerűen.",
      },
  }
};