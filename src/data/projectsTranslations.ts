import type { Locale } from "../i18n/types";

export interface ProjectTranslation {
  title: string;
  category: string;
  alt: string;
}

export const categoryTranslations: Record<Locale, Record<string, string>> = {
  pl: {
    Kuchnie: "Kuchnie",
    Zabudowy: "Zabudowy",
    Wnętrza: "Wnętrza",
    Komercyjne: "Komercyjne"
  },
  en: {
    Kuchnie: "Kitchens",
    Zabudowy: "Built-ins",
    Wnętrza: "Interiors",
    Komercyjne: "Commercial"
  },
  de: {
    Kuchnie: "Küchen",
    Zabudowy: "Einbauten",
    Wnętrza: "Innenräume",
    Komercyjne: "Gewerblich"
  },
  ko: {
    Kuchnie: "주방 가구",
    Zabudowy: "맞춤 수납장",
    Wnętrza: "실내 공간",
    Komercyjne: "상업 공간"
  },
  ja: {
    Kuchnie: "キッチン",
    Zabudowy: "造作収納",
    Wnętrza: "インテリア",
    Komercyjne: "商業空間"
  },
  zh: {
    Kuchnie: "高端橱柜",
    Zabudowy: "定制收纳",
    Wnętrza: "室内空间",
    Komercyjne: "商业空间"
  }
};

export const projectTranslations: Record<number, Record<Locale, ProjectTranslation>> = {
  1: {
    ja: {
      title: "ワインレッドのモジュール式展示ブース",
      category: "商業空間",
      alt: "工房で製作中のホワイト＆バーガンディカラーのモジュール式展示ブース。"
    },
    pl: {
      title: "Stanowiska ekspozycyjne w kolorze burgundowym",
      category: "Komercyjne",
      alt: "Modułowe stanowiska ekspozycyjne w bieli i burgundzie podczas przygotowania w pracowni."
    },
    en: {
      title: "Modular Burgundy Display Stations",
      category: "Commercial",
      alt: "Modular display stations in white and burgundy during preparation in the workshop."
    },
    de: {
      title: "Modulare Ausstellungsstände in Burgundrot",
      category: "Gewerblich",
      alt: "Modulare Ausstellungsstände in Weiß und Burgundrot während der Vorbereitung in der Werkstatt."
    },
    ko: {
      title: "버건디 컬러 모듈형 전시 쇼케이스",
      category: "상업 공간",
      alt: "자체 공방에서 제작 중인 화이트 & 버건디 모듈형 상업 전시 부스."
    },
    zh: {
      title: "勃艮第红模块化商业展台",
      category: "商业空间",
      alt: "工坊制作中的白红双色模块化商业展台。"
    }
  },
  2: {
    ja: {
      title: "ブラック＆ナチュラルウッドのオーダーキッチン",
      category: "キッチン",
      alt: "天井高までぴったり収めたブラック＆ライトウッドのモダンな特注キッチン。"
    },
    pl: {
      title: "Kuchnia w czerni i jasnym drewnie",
      category: "Kuchnie",
      alt: "Nowoczesna kuchnia na wymiar w czerni i jasnym drewnie z zabudową pod sufit."
    },
    en: {
      title: "Kitchen in Black and Natural Wood",
      category: "Kitchens",
      alt: "Modern bespoke kitchen in black and light wood with full-height ceiling cabinetry."
    },
    de: {
      title: "Küche in Schwarz und hellem Naturholz",
      category: "Küchen",
      alt: "Moderne Maßküche in Schwarz und hellem Holz mit deckenhohen Einbauschränken."
    },
    ko: {
      title: "매트 블랙 & 내추럴 우드 맞춤 주방",
      category: "주방 가구",
      alt: "천장까지 이어지는 수납장을 갖춘 블랙 & 내추럴 우드 모던 맞춤 주방."
    },
    zh: {
      title: "哑光黑与原木风极简橱柜",
      category: "高端橱柜",
      alt: "通顶设计的现代黑木拼色全屋定制厨房。"
    }
  },
  3: {
    ja: {
      title: "LED照明付きガラスディスプレイ什器",
      category: "商業空間",
      alt: "下部収納キャビネットとLED間接照明を備えた特注ガラス展示ケース。"
    },
    pl: {
      title: "Witryna ekspozycyjna z oświetleniem",
      category: "Komercyjne",
      alt: "Szklana witryna ekspozycyjna z podświetleniem LED i zabudową dolną."
    },
    en: {
      title: "Illuminated Retail Glass Showcase",
      category: "Commercial",
      alt: "Glass display showcase with integrated LED illumination and bottom storage cabinetry."
    },
    de: {
      title: "Beleuchtete Ausstellungsvitrine",
      category: "Gewerblich",
      alt: "Glas-Ausstellungsvitrine mit integrierter LED-Beleuchtung und Unterschrank."
    },
    ko: {
      title: "LED 조명 내장 유리 전시 진열장",
      category: "상업 공간",
      alt: "하부 수납장과 일체형 LED 라인 조명이 적용된 고급 유리 쇼케이스."
    },
    zh: {
      title: "带 LED 灯带的高端玻璃展柜",
      category: "商业空间",
      alt: "带底部储物柜与隐藏式 LED 照明的定制玻璃展示柜。"
    }
  },
  4: {
    ja: {
      title: "商業施設内アイランド型店舗ブース",
      category: "商業空間",
      alt: "バーガンディのアクセントと強化ガラスショーケースを備えたホワイト商業ブース。"
    },
    pl: {
      title: "Stoisko handlowe w galerii",
      category: "Komercyjne",
      alt: "Białe stoisko handlowe z burgundowymi detalami i szklanymi gablotami."
    },
    en: {
      title: "Retail Island Booth in Shopping Mall",
      category: "Commercial",
      alt: "White commercial kiosk booth with burgundy accents and tempered glass cases."
    },
    de: {
      title: "Verkaufsinsel im Einkaufszentrum",
      category: "Gewerblich",
      alt: "Weißer Verkaufsstand mit burgunderroten Akzenten und Glasvitrinen."
    },
    ko: {
      title: "쇼핑몰 중앙 아일랜드 매장 부스",
      category: "상업 공간",
      alt: "화이트 바탕에 버건디 포인트와 강화유리 진열대를 갖춘 상업용 부스."
    },
    zh: {
      title: "商场中岛定制零售专柜",
      category: "商业空间",
      alt: "白色基调搭配酒红细节点缀的商场高端展台。"
    }
  },
  5: {
    ja: {
      title: "納品前の大型商業用カウンター収納",
      category: "商業空間",
      alt: "引き出し収納と明るいフロントパネルで仕上げられた施工前の大型商業用什器。"
    },
    pl: {
      title: "Zabudowa komercyjna przed montażem",
      category: "Komercyjne",
      alt: "Długa zabudowa komercyjna z szufladami i jasnymi frontami przygotowana do montażu."
    },
    en: {
      title: "Commercial Cabinetry Pre-Installation",
      category: "Commercial",
      alt: "Long commercial cabinetry with storage drawers and light fronts prepared for on-site fit-out."
    },
    de: {
      title: "Gewerblicher Einbau vor der Montage",
      category: "Gewerblich",
      alt: "Lange gewerbliche Schrankwand mit Schubladen und hellen Fronten vor dem Einbau."
    },
    ko: {
      title: "상업용 롱 서랍 카운터 시스템",
      category: "상업 공간",
      alt: "서랍 수납공간과 밝은 톤 패널로 완성된 시공 전 대형 상업 가구."
    },
    zh: {
      title: "商业长条储物柜系统",
      category: "商业空间",
      alt: "多抽屉配置、浅色面板的商用储物柜成品。"
    }
  },
  6: {
    ja: {
      title: "ライトオークとマットブラックのキッチン",
      category: "キッチン",
      alt: "明るい木目パネルとブラックワークトップを組み合わせたオーダーメイドキッチン。"
    },
    pl: {
      title: "Kuchnia z jasnym drewnem i czernią",
      category: "Kuchnie",
      alt: "Kuchnia na wymiar z jasnymi drewnianymi frontami, czarnym blatem i czarną zabudową."
    },
    en: {
      title: "Kitchen with Light Oak & Matte Black",
      category: "Kitchens",
      alt: "Custom kitchen featuring light timber fronts, black quartz worktops and matte black surrounds."
    },
    de: {
      title: "Küche in Eiche hell und Mattschwarz",
      category: "Küchen",
      alt: "Maßgefertigte Küche mit hellen Holzfronten, schwarzer Arbeitsplatte und schwarzem Korpus."
    },
    ko: {
      title: "화이트 오크 & 블랙 상판 비스포크 주방",
      category: "주방 가구",
      alt: "밝은 원목 결 도어와 블랙 인조대리석 상판이 돋보이는 맞춤 주방."
    },
    zh: {
      title: "浅橡木与纯黑台面定制橱柜",
      category: "高端橱柜",
      alt: "浅色木纹门板结合黑色石英石台面的定制厨房。"
    }
  },
  7: {
    ja: {
      title: "幾何学ミラーパネル付き壁面造作",
      category: "造作収納",
      alt: "幾何学的なグリッドデザインとミラー装飾を施したウッドウォールユニット。"
    },
    pl: {
      title: "Zabudowa ścienna z lustrzanymi detalami",
      category: "Zabudowy",
      alt: "Drewniana zabudowa ścienna z geometrycznym podziałem i lustrzanymi akcentami."
    },
    en: {
      title: "Wall Unit with Mirror Elements",
      category: "Built-ins",
      alt: "Architectural wooden wall panelling with geometric grid layout and mirror inserts."
    },
    de: {
      title: "Wandverkleidung mit Spiegelelementen",
      category: "Einbauten",
      alt: "Holzwandverkleidung mit geometrischer Aufteilung und eingelassenen Spiegelakzenten."
    },
    ko: {
      title: "기하학 패턴 미러 아트월 수납장",
      category: "맞춤 수납장",
      alt: "기하학적 라인 분할과 거울 인서트가 조화로운 원목 아트월 수납 유닛."
    },
    zh: {
      title: "拼镜几何造型木质背景墙",
      category: "定制收纳",
      alt: "带有几何分割和镜面嵌件的定制木质整墙收纳。"
    }
  },
  8: {
    ja: {
      title: "屋根裏傾斜天井に合わせたTVボード収納",
      category: "造作収納",
      alt: "傾斜天井の形状に沿ってグレーと木目で仕立てた屋根裏メディア収納。"
    },
    pl: {
      title: "Zabudowa RTV na poddaszu",
      category: "Zabudowy",
      alt: "Zabudowa RTV i przechowywania na poddaszu w szarościach i drewnie."
    },
    en: {
      title: "Attic TV & Media Storage Unit",
      category: "Built-ins",
      alt: "Attic TV and media storage joinery in subtle grey and warm wood tones."
    },
    de: {
      title: "Dachgeschoss-TV-Möbelwand",
      category: "Einbauten",
      alt: "TV- und Stauraumlösung für Dachschrägen in Grau- und Naturholztönen."
    },
    ko: {
      title: "다락방 경사면 맞춤 TV 거실장",
      category: "맞춤 수납장",
      alt: "그레이와 우드 톤으로 경사 천장에 맞춤 제작된 다락방 미디어 수납장."
    },
    zh: {
      title: "斜顶阁楼多功能电视柜",
      category: "定制收纳",
      alt: "契合阁楼斜顶结构的灰木配色电视储物柜。"
    }
  },
  9: {
    ja: {
      title: "ネイビーのオープンニッチ付き壁面収納",
      category: "造作収納",
      alt: "ホワイトをベースに深みのあるネイビーのオープンフレームを配した特注造作家具。"
    },
    pl: {
      title: "Zabudowa z niebieskimi wnękami",
      category: "Zabudowy",
      alt: "Biała zabudowa na wymiar z granatowymi wnękami i dużym otwartym modułem."
    },
    en: {
      title: "Custom Unit with Navy Niches",
      category: "Built-ins",
      alt: "White custom built-in unit with deep navy niches and large open architectural frame."
    },
    de: {
      title: "Maßeinbau mit blauen Nischen",
      category: "Einbauten",
      alt: "Weißer Maßeinbau mit tiefblauen Nischen und großzügigem offenem Rahmenelement."
    },
    ko: {
      title: "딥 네이비 오픈 선반 빌트인 수납장",
      category: "맞춤 수납장",
      alt: "화이트 베이스에 딥 네이비 오픈형 프레임이 포인트인 맞춤 가구."
    },
    zh: {
      title: "藏青色开放格定制组合柜",
      category: "定制收纳",
      alt: "纯白柜体搭配深蓝色开放格的现代收纳系统。"
    }
  },
  10: {
    ja: {
      title: "ターコイズ＆ホワイトの屋根裏モジュール家具",
      category: "造作収納",
      alt: "ターコイズのアクセントウォールとホワイトモジュールで構成された屋根裏家具。"
    },
    pl: {
      title: "Zabudowa na poddaszu w turkusie i bieli",
      category: "Zabudowy",
      alt: "Modułowa zabudowa meblowa na poddaszu w bieli z turkusową ścianą akcentową."
    },
    en: {
      title: "Attic Modular Unit in Turquoise & White",
      category: "Built-ins",
      alt: "Modular attic furniture unit in satin white with turquoise feature wall."
    },
    de: {
      title: "Dachgeschoss-Einbau in Türkis und Weiß",
      category: "Einbauten",
      alt: "Modularer Dachausbau in Weiß mit türkisfarbener Akzentwand."
    },
    ko: {
      title: "터콰이즈 & 화이트 다락 맞춤 시스템",
      category: "맞춤 수납장",
      alt: "다락방 공간에 맞춘 화이트 모듈과 산뜻한 터콰이즈 포인트 가구."
    },
    zh: {
      title: "白与绿松石色模块化阁楼家具",
      category: "定制收纳",
      alt: "白色模块化组合搭配绿松石色背景的阁楼空间方案。"
    }
  },
  11: {
    ja: {
      title: "空間を仕切るオープンシェルフパーテーション",
      category: "造作収納",
      alt: "圧迫感を与えずに空間を優しくゾーニングするホワイト＆ターコイズの飾り棚。"
    },
    pl: {
      title: "Regał dzielący przestrzeń",
      category: "Zabudowy",
      alt: "Ażurowy regał dzielący przestrzeń w bieli i turkusie."
    },
    en: {
      title: "Room Divider Open Shelving",
      category: "Built-ins",
      alt: "Openwork room divider shelving system in white and turquoise."
    },
    de: {
      title: "Raumteiler-Regalsystem",
      category: "Einbauten",
      alt: "Offenes Raumteiler-Regal zur Zonierung in Weiß und Türkis."
    },
    ko: {
      title: "공간 분리형 오픈 파티션 책장",
      category: "맞춤 수납장",
      alt: "답답함 없이 공간을 자연스럽게 분리해 주는 화이트 & 터콰이즈 파티션 수납장."
    },
    zh: {
      title: "隔断式通透开放格置物架",
      category: "定制收纳",
      alt: "兼具空间分区与置物功能的白色通透隔断架。"
    }
  },
  12: {
    ja: {
      title: "屋根裏ベッドルームのビルトイン収納",
      category: "造作収納",
      alt: "斜め天井のデッドスペースを余すことなく活用した寝室用壁面収納。"
    },
    pl: {
      title: "Zabudowa sypialni na poddaszu",
      category: "Zabudowy",
      alt: "Zabudowa sypialni na poddaszu z białymi modułami i turkusowymi akcentami."
    },
    en: {
      title: "Attic Bedroom Built-In Cabinetry",
      category: "Built-ins",
      alt: "Attic bedroom built-in cabinetry with white modular units and turquoise accents."
    },
    de: {
      title: "Schlafzimmereinbau im Dachgeschoss",
      category: "Einbauten",
      alt: "Maßgefertigte Schlafzimmermöbel im Dachgeschoss in Weiß mit türkisen Details."
    },
    ko: {
      title: "다락방 침실 빌트인 수납 솔루션",
      category: "맞춤 수납장",
      alt: "죽은 공간 없이 수납 효율을 극대화한 다락 침실 맞춤장."
    },
    zh: {
      title: "阁楼卧室嵌入式定制柜",
      category: "定制收纳",
      alt: "充分利用斜顶空间的白色卧室定制储物系统。"
    }
  },
  13: {
    ja: {
      title: "ホワイト・ウッド・ブラックの調和キッチン",
      category: "キッチン",
      alt: "ブラック家電と温もりある木製バックパネルが映えるホワイトオーダーキッチン。"
    },
    pl: {
      title: "Kuchnia w bieli, drewnie i czerni",
      category: "Kuchnie",
      alt: "Biała kuchnia na wymiar z czarnymi AGD i ciepłym drewnianym panelem nad blatem."
    },
    en: {
      title: "Kitchen in White, Timber & Black",
      category: "Kitchens",
      alt: "White custom kitchen with matte black appliances and warm wooden wall panel."
    },
    de: {
      title: "Küche in Weiß, Holz und Schwarz",
      category: "Küchen",
      alt: "Weiße Einbauküche nach Maß mit schwarzen Geräten und warmer Holz-Rückwand."
    },
    ko: {
      title: "화이트 & 우드 패널 모던 키친",
      category: "주방 가구",
      alt: "블랙 빌트인 가전과 원목 미드웨이 패널이 아늑함을 주는 맞춤 주방."
    },
    zh: {
      title: "白木黑三色轻奢现代厨房",
      category: "高端橱柜",
      alt: "白色柜门配黑色嵌入式电器与温馨木质护墙板。"
    }
  },
  14: {
    ja: {
      title: "屋根裏のベッドルームインテリア",
      category: "インテリア",
      alt: "ビルトインベッドとネイビーの壁面ニッチを備えた明るい屋根裏寝室。"
    },
    pl: {
      title: "Sypialnia na poddaszu",
      category: "Wnętrza",
      alt: "Jasna sypialnia na poddaszu z łóżkiem w zabudowie i granatowymi wnękami."
    },
    en: {
      title: "Bespoke Attic Bedroom Interior",
      category: "Interiors",
      alt: "Bright attic bedroom with built-in bed platform and contrasting navy niches."
    },
    de: {
      title: "Schlafzimmer-Ausbau im Dachgeschoss",
      category: "Innenräume",
      alt: "Helles Dachgeschoss-Schlafzimmer mit Einbaubett und tiefblauen Nischen."
    },
    ko: {
      title: "다락방 맞춤 평상형 침실 인테리어",
      category: "실내 공간",
      alt: "빌트인 침대 프레임과 네이비 벽면 수납이 조화로운 밝은 침실."
    },
    zh: {
      title: "全景采光阁楼定制卧室",
      category: "室内空间",
      alt: "带地台床与藏青色嵌入式壁龛的采光阁楼卧室。"
    }
  },
  15: {
    ja: {
      title: "収納一体型の特注小上がりベッド",
      category: "インテリア",
      alt: "グレーのアクセント壁面とネイビーの埋め込み収納を備えたホワイトステージベッド。"
    },
    pl: {
      title: "Łóżko w zabudowie z niebieskimi wnękami",
      category: "Wnętrza",
      alt: "Białe łóżko w zabudowie na poddaszu z szarą ścianą i granatowymi wnękami."
    },
    en: {
      title: "Integrated Bed Platform with Storage",
      category: "Interiors",
      alt: "White custom bed platform with grey accent wall and navy recessed compartments."
    },
    de: {
      title: "Integriertes Podestbett mit Stauraum",
      category: "Innenräume",
      alt: "Weißes Einbaubett im Dachgeschoss mit grauer Wand und blauen Nischen."
    },
    ko: {
      title: "수납형 빌트인 평상 침대 프레임",
      category: "실내 공간",
      alt: "하부 및 헤드 수납공간을 일체형으로 설계한 맞춤형 침대."
    },
    zh: {
      title: "带壁龛的多功能地台床",
      category: "室内空间",
      alt: "一体化地台床设计，侧面设深蓝色嵌入式收纳空间。"
    }
  },
  16: {
    ja: {
      title: "レンガ壁を望む幾何学フレーム造作",
      category: "インテリア",
      alt: "レンガの壁面を美しく切り取るホワイト造作フレームの納まりディテール。"
    },
    pl: {
      title: "Detal zabudowy na poddaszu",
      category: "Wnętrza",
      alt: "Detal białej zabudowy z dużym otworem i widokiem na ceglaną ścianę."
    },
    en: {
      title: "Architectural Attic Framing Detail",
      category: "Interiors",
      alt: "Close-up detail of white custom joinery with large geometric opening revealing brick wall."
    },
    de: {
      title: "Architektonisches Dachgeschoss-Detail",
      category: "Innenräume",
      alt: "Detail des weißen Maßeinbaus mit großer Öffnung und Blick auf die Ziegelwand."
    },
    ko: {
      title: "벽돌 질감과 어우러진 건축적 가구 디테일",
      category: "실내 공간",
      alt: "공간의 개방감을 살려주는 기하학적 프레임 맞춤 가구 디테일."
    },
    zh: {
      title: "建筑感框景定制家具细节",
      category: "室内空间",
      alt: "白色木作大开口框架与复古砖墙对景的精细收口。"
    }
  },
  17: {
    ja: {
      title: "無垢材ローテーブル（収納棚付き）",
      category: "インテリア",
      alt: "下部にオープンシェルフを備えた幾何学フォルムのハンドクラフト木製コーヒーテーブル。"
    },
    pl: {
      title: "Drewniany stolik z półką",
      category: "Wnętrza",
      alt: "Prosty drewniany stolik z otwartą półką i geometryczną formą."
    },
    en: {
      title: "Handcrafted Wooden Coffee Table",
      category: "Interiors",
      alt: "Solid wood coffee table with lower open storage shelf and clean geometric design."
    },
    de: {
      title: "Massivholz-Couchtisch mit Ablage",
      category: "Innenräume",
      alt: "Schlichter Holzbeistelltisch mit offener Ablage und klarer Formsprache."
    },
    ko: {
      title: "하부 선반 일체형 솔리드 우드 소파 테이블",
      category: "실내 공간",
      alt: "군더더기 없는 미니멀한 기하학적 조형미를 지닌 원목 테이블."
    },
    zh: {
      title: "双层极简原木茶几",
      category: "室内空间",
      alt: "线条纯粹、带开放储物隔板的原木咖啡几。"
    }
  },
  18: {
    ja: {
      title: "店舗用サービス＆受付カウンター",
      category: "商業空間",
      alt: "木製フロント、ガラススクリーン、耐久性の高い天板を備えた商業用レセプションカウンター。"
    },
    pl: {
      title: "Lada do lokalu usługowego",
      category: "Komercyjne",
      alt: "Lada usługowa z drewnianymi frontami, szklanym przeszkleniem i jasnym blatem."
    },
    en: {
      title: "Commercial Reception & Service Counter",
      category: "Commercial",
      alt: "Service counter with natural timber fronts, glass sneeze screen and quartz work surface."
    },
    de: {
      title: "Service- und Empfangstheke",
      category: "Gewerblich",
      alt: "Bedientheke mit Holzfronten, Glasscheibe und strapazierfähiger heller Arbeitsfläche."
    },
    ko: {
      title: "매장용 원목 서비스 리셉션 카운터",
      category: "상업 공간",
      alt: "원목 마감과 유리 가림막, 견고한 상판으로 완성된 상업용 안내 데스크."
    },
    zh: {
      title: "商用原木接待与服务吧台",
      category: "商业空间",
      alt: "木饰面柜身、带透明玻璃挡板的高端商用服务前台。"
    }
  },
  19: {
    ja: {
      title: "木製バックパネルが美しいモダンキッチン",
      category: "キッチン",
      alt: "ブラックビルトイン機器とシームレスな木製バックパネルが調和するホワイトキッチン。"
    },
    pl: {
      title: "Kuchnia z drewnianym panelem",
      category: "Kuchnie",
      alt: "Nowoczesna biała kuchnia z czarnym AGD i poziomym drewnianym panelem nad blatem."
    },
    en: {
      title: "Kitchen with Continuous Timber Splashback",
      category: "Kitchens",
      alt: "Modern white kitchen with black appliances and continuous wooden splashback panel."
    },
    de: {
      title: "Küche mit durchgehendem Holzpaneel",
      category: "Küchen",
      alt: "Moderne weiße Küche mit schwarzen Geräten und fugenlosem Holzpaneel-Spritzschutz."
    },
    ko: {
      title: "우드 백스플래시 포인트 모던 주방",
      category: "주방 가구",
      alt: "연속적인 나뭇결 패널로 벽면을 마감하여 포근함을 더한 화이트 주방."
    },
    zh: {
      title: "带一体木饰面墙板的现代厨房",
      category: "高端橱柜",
      alt: "白色整体橱柜，台面上方采用连续的原木护墙背板。"
    }
  },
  20: {
    ja: {
      title: "水栓・IHと木製パネルの取り合いディテール",
      category: "キッチン",
      alt: "ブラックシンク、IHヒーター、木製パネルの精密な目地と収まり。"
    },
    pl: {
      title: "Detal kuchni z drewnianym panelem",
      category: "Kuchnie",
      alt: "Detal kuchni z czarnym zlewem, płytą i ciepłym drewnianym panelem."
    },
    en: {
      title: "Kitchen Joinery & Fixtures Detail",
      category: "Kitchens",
      alt: "Kitchen detail showing black granite sink, induction hob and warm timber finish."
    },
    de: {
      title: "Küchendetail mit Spüle und Kochfeld",
      category: "Küchen",
      alt: "Küchendetail mit schwarzer Granitspüle, Induktionsfeld und warmer Holzverkleidung."
    },
    ko: {
      title: "인덕션 & 싱크볼 정밀 마감 디테일",
      category: "주방 가구",
      alt: "블랙 싱크볼, 인덕션과 목재 벽면 패널의 정밀한 이음새 디테일."
    },
    zh: {
      title: "水槽与炉灶收口精细细节",
      category: "高端橱柜",
      alt: "黑色花岗岩水槽、电磁炉与实木面板接缝的精细工艺。"
    }
  },
  21: {
    ja: {
      title: "ナチュラルウッドとブラックのコントラストキッチン",
      category: "キッチン",
      alt: "豊かな木目フロントとシックなブラック天板の対比が美しい特注キッチン。"
    },
    pl: {
      title: "Kuchnia z jasnym drewnem i czernią",
      category: "Kuchnie",
      alt: "Kuchnia na wymiar z jasnymi frontami drewnianymi i czarnymi blatami."
    },
    en: {
      title: "Natural Wood & Contrast Kitchen",
      category: "Kitchens",
      alt: "Custom kitchen with light wood grain fronts and sleek black work surfaces."
    },
    de: {
      title: "Maßküche in Naturholz und Schwarz",
      category: "Küchen",
      alt: "Maßgefertigte Küche mit hellen Holzmaserungs-Fronten und schwarzen Arbeitsflächen."
    },
    ko: {
      title: "내추럴 오크 & 슬림 블랙 상판 주방",
      category: "주방 가구",
      alt: "풍부한 나무 질감과 시크한 블랙 상판이 대조를 이루는 프리미엄 주방."
    },
    zh: {
      title: "原木纹理与黑曜石质感橱柜",
      category: "高端橱柜",
      alt: "细腻浅木纹柜门与沉稳黑台面相得益彰的高端定制。"
    }
  },
  22: {
    ja: {
      title: "傾斜天井下のローボードTVユニット",
      category: "造作収納",
      alt: "低い天井高に最適化された木製ローキャビネットとすっきりとしたTV壁面。"
    },
    pl: {
      title: "Ścianka RTV na poddaszu",
      category: "Zabudowy",
      alt: "Ścianka RTV na poddaszu z zabudową i niską szafką w drewnie."
    },
    en: {
      title: "Sloped Ceiling Media Unit",
      category: "Built-ins",
      alt: "Sloped ceiling media feature wall with integrated storage and low timber console."
    },
    de: {
      title: "TV-Wand für Dachschräge",
      category: "Einbauten",
      alt: "An die Dachschräge angepasste TV-Wand mit Einbauschrank und niedrigem Holz-Sideboard."
    },
    ko: {
      title: "경사 천장 맞춤 로우 콘솔 TV장",
      category: "맞춤 수납장",
      alt: "낮은 층고를 완벽하게 활용하여 미니멀하게 설계한 우드 거실장."
    },
    zh: {
      title: "斜顶定制低矮地柜电视墙",
      category: "定制收纳",
      alt: "精准贴合阁楼斜面的低矮原木地柜与整洁电视墙。"
    }
  },
  23: {
    ja: {
      title: "屋根裏主寝室のモジュール式ワードローブ",
      category: "造作収納",
      alt: "衣類や小物を効率よく整理できるホワイト＆ターコイズのモジュール収納。"
    },
    pl: {
      title: "Modułowa zabudowa sypialni",
      category: "Zabudowy",
      alt: "Biało-turkusowa modułowa zabudowa sypialni na poddaszu."
    },
    en: {
      title: "Modular Attic Wardrobe & Storage",
      category: "Built-ins",
      alt: "White and turquoise modular storage wardrobe in attic master bedroom."
    },
    de: {
      title: "Modulare Dachgeschoss-Schrankwand",
      category: "Einbauten",
      alt: "Weiß-türkise modulare Schrankeinbauten im Dachgeschoss-Schlafzimmer."
    },
    ko: {
      title: "다락방 안방 모듈형 맞춤 붙박이장",
      category: "맞춤 수납장",
      alt: "의류 및 소품 수납을 완벽히 정리할 수 있는 모듈형 옷장 시스템."
    },
    zh: {
      title: "阁楼卧室模块化衣柜系统",
      category: "定制收纳",
      alt: "白色搭配松石绿的高效收纳模块化衣橱。"
    }
  },
  24: {
    ja: {
      title: "大型ミラー引き戸の天井高ワードローブ",
      category: "造作収納",
      alt: "空間を広く見せる全面ミラーのスライドドアを備えた壁面ピッタリのクローゼット。"
    },
    pl: {
      title: "Szafa z drzwiami lustrzanymi",
      category: "Zabudowy",
      alt: "Szafa na wymiar z białym frontem i dużym lustrem w drzwiach przesuwnych."
    },
    en: {
      title: "Sliding Mirror Door Wardrobe",
      category: "Built-ins",
      alt: "Floor-to-ceiling custom wardrobe with white frame and full mirror sliding panel."
    },
    de: {
      title: "Schiebetürenschrank mit Vollspiegel",
      category: "Einbauten",
      alt: "Deckenhoher Einbau-Kleiderschrank mit weißem Korpus und großem Spiegelschiebeelement."
    },
    ko: {
      title: "전신 거울 슬라이딩 도어 붙박이장",
      category: "맞춤 수납장",
      alt: "공간을 넓어 보이게 하는 대형 전신 거울 슬라이딩 맞춤 옷장."
    },
    zh: {
      title: "通顶移门全身镜大衣柜",
      category: "定制收纳",
      alt: "白色框架搭配大面积穿衣镜移门的定制衣柜。"
    }
  },
  25: {
    ja: {
      title: "LED間接照明付きモノトーン壁面収納",
      category: "造作収納",
      alt: "洗練されたブラック＆ホワイトの扉と暖色系LEDライン照明が美しい壁面ユニット。"
    },
    pl: {
      title: "Zabudowa ścienna z podświetleniem",
      category: "Zabudowy",
      alt: "Nowoczesna zabudowa ścienna z czarno-białymi frontami i ciepłym podświetleniem LED."
    },
    en: {
      title: "LED Backlit Architectural Wall Unit",
      category: "Built-ins",
      alt: "Modern architectural wall unit with monochrome fronts and ambient warm LED lighting."
    },
    de: {
      title: "LED-hinterleuchtete Wandschrankwand",
      category: "Einbauten",
      alt: "Moderne Wandschrankwand in Schwarz-Weiß mit stimmungsvoller warmer LED-Hinterleuchtung."
    },
    ko: {
      title: "앰비언트 간접조명 일체형 벽면장",
      category: "맞춤 수납장",
      alt: "블랙 & 화이트의 세련된 대비와 은은한 LED 무드등이 적용된 벽면 수납장."
    },
    zh: {
      title: "带氛围灯光的轻奢整墙收纳柜",
      category: "定制收纳",
      alt: "黑白极简配色，带暖光隐藏式 LED 氛围灯带的整墙柜。"
    }
  },
  26: {
    ja: {
      title: "LED照明付きガラスショーケース商業ブース",
      category: "商業空間",
      alt: "高輝度LEDガラスケースと鍵付き引き出し収納を備えたアイランド型商業ブース。"
    },
    pl: {
      title: "Stoisko z podświetlanymi witrynami",
      category: "Komercyjne",
      alt: "Rozbudowane stoisko handlowe z podświetlanymi szklanymi witrynami i zabudową szufladową."
    },
    en: {
      title: "Retail Showcase Booth with LED Glass Displays",
      category: "Commercial",
      alt: "Comprehensive retail kiosk with illuminated glass display showcases and lockable drawers."
    },
    de: {
      title: "Verkaufsstand mit beleuchteten Glasvitrinen",
      category: "Gewerblich",
      alt: "Repräsentativer Verkaufsstand mit LED-beleuchteten Vitrinen und abschließbaren Schubladen."
    },
    ko: {
      title: "보석/액세서리 상업용 아일랜드 부스",
      category: "상업 공간",
      alt: "고급 상품 디스플레이를 위한 LED 쇼케이스와 보안 수납 서랍이 완비된 부스."
    },
    zh: {
      title: "带锁具与照明的珠宝商用展台",
      category: "商业空间",
      alt: "配高透光 LED 发光展柜与防盗抽屉的商用陈列展岛。"
    }
  },
  27: {
    ja: {
      title: "カフェ・飲食店向けバーカウンター造作",
      category: "商業空間",
      alt: "木製ルーバー仕上げとガラスショーケースを組み込んだ飲食店用バーカウンター。"
    },
    pl: {
      title: "Zabudowa lokalu gastronomicznego",
      category: "Komercyjne",
      alt: "Zabudowa lokalu gastronomicznego z drewnianymi frontami i szklaną witryną."
    },
    en: {
      title: "Restaurant & Cafe Bar Fit-out",
      category: "Commercial",
      alt: "Bespoke restaurant bar furniture with vertical timber slats and glass food showcase."
    },
    de: {
      title: "Gastronomie- und Bartresenausbau",
      category: "Gewerblich",
      alt: "Maßgefertigte Bartheke für Gastronomie mit Holzfronten und integrierter Glasvitrine."
    },
    ko: {
      title: "카페 & 비스트로 맞춤형 바 카운터",
      category: "상업 공간",
      alt: "원목 템바보드 마감과 디저트 쇼케이스가 매립된 상업용 바 데스크."
    },
    zh: {
      title: "餐饮咖啡厅定制吧台与展示柜",
      category: "商业空间",
      alt: "实木栅栏格栅工艺结合食品冷藏展示柜的定制吧台。"
    }
  },
  28: {
    ja: {
      title: "ブラック目地とスクエアミラーの木製壁面パネル",
      category: "造作収納",
      alt: "シャドウジョイントと幾何学スクエアミラーを埋め込んだ高級木製アートウォール。"
    },
    pl: {
      title: "Drewniana zabudowa ścienna",
      category: "Zabudowy",
      alt: "Drewniana zabudowa ścienna z czarnymi podziałami i kwadratowymi lustrzanymi detalami."
    },
    en: {
      title: "Geometric Wood Panelling Wall Unit",
      category: "Built-ins",
      alt: "Feature timber wall unit with black shadow joints and geometric square mirror inserts."
    },
    de: {
      title: "Geometrische Holz-Wandverkleidung",
      category: "Einbauten",
      alt: "Holz-Wandgestaltung mit Schattenfugen und quadratischen Spiegelakzenten."
    },
    ko: {
      title: "블랙 섀도우 조인트 원목 벽체 패널",
      category: "맞춤 수납장",
      alt: "정교한 블랙 메지 라인과 사각 브론즈경이 매립된 최고급 원목 벽체 인테리어."
    },
    zh: {
      title: "黑缝工艺方镜几何木质整墙",
      category: "定制收纳",
      alt: "精细黑色阴影缝收口，点缀方形装饰镜的高级实木墙作。"
    }
  },
  29: {
    ja: {
      title: "ミニマルな木製サービス＆オーダーカウンター",
      category: "商業空間",
      alt: "ナチュラルウッドの質感、明るいカウンター天板、黒板サインを備えた店舗用什器。"
    },
    pl: {
      title: "Minimalistyczna lada do lokalu",
      category: "Komercyjne",
      alt: "Minimalistyczna lada w drewnie z jasnym blatem, szklaną osłoną i pustymi czarnymi tablicami."
    },
    en: {
      title: "Minimalist Timber Service Counter",
      category: "Commercial",
      alt: "Minimalist natural wood counter with light top, glass screen and black chalkboards."
    },
    de: {
      title: "Minimalistische Holz-Bedientheke",
      category: "Gewerblich",
      alt: "Minimalistische Massivholz-Theke mit heller Platte, Glasschutz und schwarzen Kreidetafeln."
    },
    ko: {
      title: "내추럴 원목 미니멀 서비스 카운터",
      category: "상업 공간",
      alt: "밝은 석재 상판과 메뉴 보드가 결합된 친환경 원목 상업용 카운터."
    },
    zh: {
      title: "极简原木商用点餐收银吧台",
      category: "商业空间",
      alt: "自然原木质感，配备亮色台面与定制黑板菜单牌的收银服务台。"
    }
  },
  30: {
    ja: {
      title: "自社工房 — 厳密な木材の裁断工程",
      category: "製作工程",
      alt: "工房内でスライディングソーを用いてミリ単位の精度で板材を加工する風景。"
    },
    pl: {
      title: "Pracownia — cięcie materiału",
      category: "Proces",
      alt: "Piła formatowa i płyta w trakcie przygotowania elementów meblowych w pracowni."
    },
    en: {
      title: "Workshop — Precision Material Cutting",
      category: "Process",
      alt: "Sliding table saw and panel board during furniture element preparation in workshop."
    },
    de: {
      title: "Werkstatt — Präziser Zuschnitt",
      category: "Ablauf",
      alt: "Formatkreissäge und Platte bei der Vorbereitung von Möbelelementen in der Werkstatt."
    },
    ko: {
      title: "자체 공방 — 정밀 재단 공정",
      category: "제작 과정",
      alt: "슬라이딩 재단기를 통해 오차 없이 목재 패널을 가공 중인 공방 현장."
    },
    zh: {
      title: "独立工坊 — 精密数控裁板工序",
      category: "工艺流程",
      alt: "工坊中使用重型推台锯进行毫米级板材精确下料。"
    }
  }
};
