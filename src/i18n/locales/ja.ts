import type { TranslationDictionary } from "../types";

export const ja: TranslationDictionary = {
  locale: "ja",
  localeName: "日本語",
  seo: {
    title: "YAMURA - オーダーメイド特注家具",
    description:
      "住宅、マンション、オフィス、商業空間のためのポーランド製高級オーダーメイド家具。職人の手仕事と日本の美意識・細部へのこだわりを融合。"
  },
  common: {
    skipToContent: "本文へスキップ",
    homeAriaLabel: "YAMURA - ホーム",
    mainNavAriaLabel: "メインナビゲーション",
    mobileNavAriaLabel: "モバイルナビゲーション",
    footerNavAriaLabel: "フッターナビゲーション",
    legalNavAriaLabel: "法的通知およびプライバシーポリシー",
    quoteButton: "お見積り・ご相談",
    menuButton: "メニュー",
    close: "閉じる",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "プライバシーポリシー",
    terms: "利用規約",
    cookieSettings: "Cookie設定",
    provenance: "ポーランド企業 · 自社工房製作 · 妥協なき精度",
    ordersLabel: "ご注文・ご相談",
    phoneLabel: "お電話",
    locationLabel: "活動拠点",
    headquartersLabel: "本社・工房所在地",
    findUsLabel: "SNS",
    mapAddressLabel: "アクセス",
    openInGoogleMaps: "Google マップで見る"
  },
  navigation: [
    { label: "ブランドについて", href: "/ja/o-nas/" },
    { label: "オーダー家具", href: "/ja/#oferta" },
    { label: "施工実績", href: "/ja/realizacje/" },
    { label: "製作プロセス", href: "/ja/#proces" },
    { label: "Yamura PRO", href: "/ja/yamura-pro/" },
    { label: "お問い合わせ", href: "/ja/kontakt/" }
  ],
  hero: {
    title: "空間と調和する<br />世界に一つの特注家具",
    description:
      "洗練された美学、機能性、そして最高峰の職人技を融合し、お客様の空間にぴったりと馴染む家具をお仕立てします。",
    provenance: "ポーランド製 · 日本の精緻な職人技",
    ctaButton: "私たちについて",
    arrowAriaLabel: "サービス内容を見る"
  },
  categories: {
    eyebrow: "製作ラインナップ",
    title: "オーダーメイド家具",
    description:
      "設計から製作、最終施工まで — 住まい、オフィス、店舗空間のための特注家具を細部まで一切の妥協なくお届けします。",
    items: [
      {
        title: "キッチン",
        slug: "kuchnie",
        image: "/images/categories/kuchnie-projekt.webp",
        alt: "アイランドと壁面収納を備えたモダンなオーダーキッチン"
      },
      {
        title: "リビング",
        slug: "salony",
        image: "/images/categories/salony-projekt.webp",
        alt: "特注テレビボードと壁面パネルを配したリビング空間"
      },
      {
        title: "サニタリー",
        slug: "lazienki",
        image: "/images/categories/lazienki-projekt.webp",
        alt: "スリット加工を施した特注洗面化粧台キャビネット"
      },
      {
        title: "オフィス",
        slug: "biura",
        image: "/images/categories/biura-projekt.webp",
        alt: "空間効率と格式を高めるオーダーメイドオフィス家具"
      },
      {
        title: "その他造作収納",
        slug: "inne",
        image: "/images/categories/inne-projekt.webp",
        alt: "間取りに合わせたウォークインクローゼットおよび壁面造作収納"
      }
    ]
  },
  benefits: {
    ariaLabel: "YAMURAが選ばれる理由",
    items: [
      {
        title: "完全自由設計",
        text: "ライフスタイルと間取りに寄り添う設計",
        icon: "plan"
      },
      {
        title: "最高峰の品質",
        text: "厳選素材と堅牢な木工構造",
        icon: "quality"
      },
      {
        title: "一貫対応",
        text: "プランニングから現場施工まで自社完結",
        icon: "service"
      },
      {
        title: "自社工房による製作",
        text: "職人の確かな手仕事によるローカル製作",
        icon: "local"
      }
    ]
  },
  brandManifest: {
    label: "YAMURA | Made in Poland",
    title: "ポーランドの木工技術.<br />日本の緻密なディテール文化.",
    description:
      "YAMURAはポーランド国内の自社工房で一つひとつ丁寧に家具を仕立てる独立系ブランドです。東洋の規律と精緻な美意識を宿し、見えない細部に至るまで完璧を追求しています。",
    principlesAriaLabel: "YAMURAのブランド理念",
    principles: [
      {
        number: "01",
        title: "独立系ブランド",
        text: "ポーランドで創業し自社で育まれた信頼のブランド。"
      },
      {
        number: "02",
        title: "自社工房製作",
        text: "お客様の空間に寄り添い、工房から直接お届けします。"
      },
      {
        number: "03",
        title: "日本の精緻な美意識",
        text: "無駄のない造形美、厳格なプロセス、細部への情熱。"
      }
    ]
  },
  projects: {
    eyebrow: "施工実績",
    title: "多彩な空間. 唯一の品質基準.",
    description:
      "YAMURAが手掛けた特注キッチン、造作家具、インテリア、商業空間の厳選プロジェクトをご覧ください。",
    filtersAriaLabel: "実績カテゴリーフィルター",
    filterAll: "すべて",
    filters: {
      Wszystkie: "すべて",
      Kuchnie: "キッチン",
      Zabudowy: "造作収納",
      Wnętrza: "インテリア",
      Komercyjne: "商業空間"
    },
    showMore: "もっと見る",
    showLess: "閉じる",
    openProjectAria: "プロジェクト詳細を開く",
    dialogAria: "写真プレビュー",
    dialogCloseAria: "プレビューを閉じる",
    dialogPrevAria: "前の写真",
    dialogNextAria: "次の写真"
  },
  process: {
    eyebrow: "製作プロセス",
    title: "最初のご相談からお引き渡しまで.",
    steps: [
      {
        number: "01",
        title: "ヒアリング",
        text: "お客様のご要望、空間の寸法、理想のデザインを丁寧にお伺いします。"
      },
      {
        number: "02",
        title: "現地採寸",
        text: "ミリ単位の精密採寸を行い、空間の構造的特徴を把握します。"
      },
      {
        number: "03",
        title: "設計・お見積り",
        text: "詳細図面の作成、素材選定、透明性のあるお見積りをご提案します。"
      },
      {
        number: "04",
        title: "自社工房製作",
        text: "熟練職人が細部まで丹精を込めて家具を製作します。"
      },
      {
        number: "05",
        title: "お届け・施工",
        text: "予定期日に合わせて安全にお届けし、責任を持って組み立て・設置します。"
      }
    ]
  },
  contactCTA: {
    title: "新しい空間の構想はお持ちですか？",
    description:
      "お客様の理想の空間についてぜひお聞かせください。最適な特注プランをご提案いたします。",
    consultationButton: "ご相談を予約する",
    emailButton: "メールで問い合わせる"
  },
  contactForm: {
    eyebrow: "プロジェクトのお問い合わせ",
    title: "理想の空間についてお聞かせください.",
    intro: "基本情報をご入力いただければ、担当者より迅速にご案内いたします。",
    labels: {
      name: "お名前",
      email: "メールアドレス",
      phone: "お電話番号",
      projectType: "ご希望のカテゴリー",
      projectTypeSelect: "選択してください",
      projectTypeOptions: {
        kitchen: "キッチン",
        livingRoom: "リビング家具",
        bathroom: "サニタリー・洗面",
        office: "オフィス家具",
        other: "その他特注造作"
      },
      location: "施工場所（市区町村 / エリア）",
      message: "ご要望・メッセージ",
      consent:
        "お問い合わせ対応のための個人情報取り扱いに同意します（プライバシーポリシーに基づく）。",
      submit: "送信する",
      submitting: "送信中..."
    },
    status: {
      success: "ありがとうございます。お問い合わせを受け付けました。",
      error: "送信に失敗しました。時間をおいて再送いただくか、直接メールでお問い合わせください。",
      mailtoNotice: "メールソフトを起動します。"
    }
  },
  cookieConsent: {
    ariaLabel: "プライバシー設定",
    label: "プライバシー",
    title: "Cookieの使用について",
    description:
      "当サイトでは基本機能の維持に必要な技術を使用しています。同意いただいた場合、利便性向上のためのGoogle Analytics 4およびMeta広告ツールを利用します。",
    necessaryOnly: "必須のみ許可",
    customize: "詳細設定",
    acceptAll: "すべて同意",
    centerLabel: "プライバシーセンター",
    centerTitle: "同意範囲の選択",
    centerDescription: "フッターのCookie設定よりいつでも変更が可能です。",
    necessaryTitle: "必須Cookie",
    necessaryDesc: "サイトの正常な表示およびセキュリティ確保に必要なCookieです。",
    necessaryAlwaysActive: "常に有効",
    necessaryAria: "必須Cookieは常に有効です",
    analyticsTitle: "アクセス解析",
    analyticsDesc: "Google Analytics 4による利用状況の計測。",
    marketingTitle: "マーケティング",
    marketingDesc: "Metaツールによる広告効果の測定と最適化。",
    back: "戻る",
    save: "設定を保存"
  },
  inspirationPrompt: {
    eyebrow: "インテリアのインスピレーション",
    title: "自然と調和する Japandi スタイル",
    p1: "インテリアのアイデアをお探しですか？YAMURAのPinterestで特注家具やスタイリングのヒントを見つけてみてください。",
    p2: "理想の家具を実際に製作したい場合は、ぜひお気軽にお問い合わせください。",
    pinterestButton: "Pinterestを見る",
    contactButton: "お問い合わせ"
  },
  contactPage: {
    eyebrow: "お問い合わせ",
    title: "お見積りおよび個別相談",
    description: "空間の広さ、ご希望の家具、スケジュールなどをお知らせください。次のステップをご案内いたします。",
    detailsTitle: "理想の空間について、お聞かせください。"
  },
  aboutPage: {
    seoTitle: "私たちについて - YAMURA | 特注オーダー家具ブランド",
    seoDescription:
      "YAMURAの歩み：十数年にわたる特注家具の設計・製作実績、職人技、建築家・デザイナーとの協業、細部へのこだわり。",
    heroEyebrow: "私たちについて",
    heroTitle: "YAMURAの物語",
    heroSubtitle: "職人技、忍耐、そして十数年にわたり積み重ねてきた確かな経験。",
    leadEyebrow: "原点",
    leadTitle: "小さな工房から始まった挑戦.",
    chapter1: {
      number: "01",
      label: "最初の一歩",
      paragraphs: [
        "十数年前、私たちが特注家具の世界に足を踏み入れたとき、まだ語るに足るブランド名はありませんでした。しかし、それ以上に価値あるものを持っていました — 飽くなき好奇心と、誰も見ていなくともすべての細部を完璧に仕上げようとする執念です。",
        "初期の仕事は、まだ書かれていない物語の始まりのようにささやかなものでした。数枚の木板、シンプルな構想、そして答えよりも多い疑問。教科書ではなく作業台の上でこそ、私たちは本物の知恵を体得しました。すべての失敗は木に刻まれた教訓となり、すべての成功はかつて開く勇気のなかった新たな扉を開いてくれました。",
        "やがて小さな受注は、当初は不可能に思えた挑戦的なプロジェクトへと道を譲りました。規格外の寸法、既製カタログにはない形状、多くの工房が匙を投げるような新素材。私たちはそれらに真正面から向き合いました — なぜなら、真に美しいものは既成概念の枠を超えた先で生まれるからです。"
      ]
    },
    chapter2: {
      number: "02",
      label: "私たちの基準",
      paragraphs: [
        "私たちは、既成の画一的なソリューションが人の真のニーズを満たすことは稀であると学びました。だからこそ、すべてのプロジェクトを最初の仕事であるかのように始めます — 先入観を持たず、空間を満たすだけでなく、そこに命を吹き込む造形を探求します。",
        "木肌を丁寧に磨き上げるように、長年にわたり仕事の全工程を磨き上げてきました — お客様との対話や素材選びから、新しい住まいにお届けする直前の最終微調整に至るまで。真の手仕事とは大げさな身振りにあるのではなく、失われて初めて気づくような見えないディテールに宿ることを知っています。",
        "最も尊い教訓は人々から得ました — 夢を託してくださったお客様、そして共に大きな現場を成し遂げてきたパートナーたち。特にインテリアデザイナーや建築家との協業を通じて、私たちは図面を単なる数字の羅列ではなく物語として読み解き、他者のデザイン構想を自らの職人技と同じように尊重することを学びました。",
        "語るよりも耳を傾けることを覚えました。優れた家具は職人の思い込みからではなく、相手の真の願いを深く理解することから始まります。信頼はどんなに複雑な仕口よりも時間をかけて築かれ、失うのは一瞬です。"
      ]
    },
    chapter3: {
      number: "03",
      label: "YAMURAの誕生",
      paragraphs: [
        "工房の作業台で、そして打ち合わせのテーブルで重ねた試行錯誤と静かな実りから、より広い世界へ届けたいブランドが育ちました。こうして YAMURA は誕生しました。",
        "私たちは会議室のテーブルで机上計算されたブランドではありません。切りたての木材の香り、床に積もるおがくず、そして私たちしか知らない、しかし私たちにとってすべてを意味するミリ単位の調整の中から生まれました。",
        "YAMURA はこの歩みの結晶です。そして、これから出会うすべてのプロジェクトに対し、最初の仕事と同じ誠実さと情熱を持って向き合うという誓いです。"
      ]
    },
    finale: {
      line1: "忍耐と情熱には、確かな形がある。",
      line2: "私たちは十数年にわたり、板材の一枚一枚にその形を吹き込む術を学んできました。",
      line3: "いま、お客様の空間にその価値をお届けします。"
    }
  },
  projectsPage: {
    seoTitle: "施工実績 - YAMURA 特注家具",
    seoDescription:
      "YAMURAが製作した厳選オーダーメイド家具：キッチン、リビング、サニタリー、オフィス家具。",
    heroEyebrow: "施工実績",
    heroTitle: "厳選特注家具プロジェクト",
    heroSubtitle:
      "無垢材の温もり、洗練されたモダンホワイト、個性的なアクセントカラー、高級サニタリーなど多彩なスタイルをご覧ください。"
  },
  proPage: {
    seoTitle: "YAMURA PRO - 建築家・インテリアデザイナー向けB2B協業プログラム",
    seoDescription:
      "YAMURA PROは建築事務所および空間デザイナーのための特注家具製作パートナーシップです：図面検証、積算・見積り、家具製作、現場施工。",
    heroEyebrow: "建築家・空間デザイナーの皆様へ",
    heroTitle: "YAMURA PRO",
    heroClaim: "あなたのデザイン構想を、完璧な現実へ。",
    heroLead:
      "設計図面から最終施工まで、クリエイティブな意図と施主様との信頼関係を守りながら、確実な造作クオリティを実現するB2Bパートナーシップです。",
    modelButton: "協業モデルを見る",
    offerButton: "Dealshare提携ページへ",
    operatorLabel: "提携運営",
    operatorAria: "Dealshareを通じて運営されるYAMURA PROプログラム",
    introEyebrow: "確かな具現化",
    introTitle: "デザインに専念してください。製作は私たちが完遂します。",
    introLead:
      "YAMURA PROは、図面の意図を的確に汲み取り、それを高精度の製作技術へ昇華できる信頼できるパートナーを求める設計事務所のために生まれました。構想が製作・物流・現場施工と交差するすべての領域を支えます。",
    pillarsAria: "YAMURA PROの4つの柱",
    pillars: [
      {
        number: "01",
        title: "図面技術レビュー",
        text: "製作に入る前に、意匠図面、金物、素材選定、納まり詳細をプロの視点で事前精査します。"
      },
      {
        number: "02",
        title: "明瞭な積算と工程管理",
        text: "施工範囲を整理し、明瞭な見積書と確実なマイルストーン工程表を策定します。"
      },
      {
        number: "03",
        title: "自社製作と専門施工",
        text: "承認図面に基づき、自社工房での製作、物流、現場組み立てまで全責任を持って完遂します。"
      },
      {
        number: "04",
        title: "引き渡し後のアフターサポート",
        text: "お引き渡し後も金物の調整やメンテナンス、追加のご要望に迅速に対応します。"
      }
    ],
    modelEyebrow: "明確な役割分担",
    modelTitle: "ひとつのプロジェクト。3つの専門的役割。",
    modelRoles: [
      {
        number: "01",
        label: "設計・デザイン事務所",
        title: "空間構想とクライアント対応",
        text: "施主様との対話をリードし、空間コンセプトと美的な意思決定を主導します。"
      },
      {
        number: "02",
        label: "YAMURA",
        title: "エンジニアリングと家具製作",
        text: "納まりを検証し、積算、精緻な製作、現場施工、品質保証を一貫して担当します。"
      },
      {
        number: "03",
        label: "Dealshare",
        title: "B2B提携マネジメント",
        text: "プロジェクト要件の整理、契約条件の調整、スムーズなB2B協業プロセスを支援します。"
      }
    ],
    gainsEyebrow: "デザイナー様へのメリット",
    gainsTitle: "デザインスタジオの可能性を広げる製作パートナー.",
    gains: [
      "デザインの著作性とクライアントとの主導権を完全に保持できます。",
      "ひとつの専任チームが図面検証から製作、現場据え付けまでワンストップで対応。",
      "明確な工事範囲、適正なコスト、進行状況を常にリアルタイムで把握可能。",
      "単発の特注案件のご依頼はもちろん、長期的な定点製作パートナーシップも歓迎します。"
    ],
    handoffEyebrow: "提携運営",
    handoffTitle: "YAMURA PROの詳細情報はDealshareにてご覧いただけます。",
    handoffText:
      "Dealshareの特設ページにて、協業の詳細フローやヒアリングシートをご確認いただけます。",
    handoffButton: "Dealshareで提携詳細を見る",
    faqEyebrow: "よくあるご質問",
    faqTitle: "協業開始前のQ&A.",
    faqs: [
      {
        question: "YAMURAが施主様と直接連絡を取ることはありますか？",
        answer:
          "一方的な連絡はいたしません。設計事務所様がクライアントとの主導権を維持できるよう、事前に連絡ルールを取り決めた上で進行します。"
      },
      {
        question: "どの段階で相談するのが最も効果的ですか？",
        answer:
          "実施図面が確定する前の基本設計段階でのご相談が最もコスト・納まりの両面で効果的です。もちろん完成図面からの積算・製作も承っております。"
      },
      {
        question: "外部のデザイナーや設計事務所が作成した図面でも製作できますか？",
        answer:
          "はい、可能です。デザイナー様の意図を正確に読み取り、製作・施工用の詳細図へと落とし込んで忠実に製作します。"
      },
      {
        question: "どのように協業をスタートすればよいですか？",
        answer:
          "DealshareのYAMURA PROページより簡単なプロジェクト概要をお送りください。個別案件のお見積りや技術相談、継続的なパートナーシップについてご案内いたします。"
      }
    ]
  }
};
