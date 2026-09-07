import type { TranslationDictionary } from "../types";

export const zh: TranslationDictionary = {
  locale: "zh",
  localeName: "中文",
  seo: {
    title: "YAMURA - 高端全屋定制家具",
    description:
      "来自波兰的高端定制家具设计与制造工坊，专注住宅、公寓、办公及商业空间。传承欧洲精湛木作工艺，融合东方严谨细节。"
  },
  common: {
    skipToContent: "跳转至主要内容",
    homeAriaLabel: "YAMURA - 首页",
    mainNavAriaLabel: "主导航",
    mobileNavAriaLabel: "移动端导航",
    footerNavAriaLabel: "页脚导航",
    legalNavAriaLabel: "法律条款与隐私",
    quoteButton: "预约定制咨询",
    menuButton: "菜单",
    close: "关闭",
    allRightsReserved: "版权所有。",
    privacyPolicy: "隐私政策",
    terms: "服务条款",
    cookieSettings: "Cookie 设置",
    provenance: "波兰独立品牌 · 本地工坊精制 · 东方精细工艺",
    ordersLabel: "业务咨询",
    phoneLabel: "联系电话",
    locationLabel: "服务区域",
    headquartersLabel: "工坊地址",
    findUsLabel: "关注我们",
    mapAddressLabel: "地图导航",
    openInGoogleMaps: "在 Google 地图中打开"
  },
  navigation: [
    { label: "品牌故事", href: "/zh/o-nas/" },
    { label: "定制服务", href: "/zh/#oferta" },
    { label: "精选案例", href: "/zh/realizacje/" },
    { label: "工艺流程", href: "/zh/#proces" },
    { label: "Yamura PRO", href: "/zh/yamura-pro/" },
    { label: "联系我们", href: "/zh/kontakt/" }
  ],
  hero: {
    title: "匠心定制<br />专属于您的空间",
    description:
      "我们融合优雅美学、实用功能与精湛手工艺，为您量身打造完美契合空间的定制家具。",
    provenance: "波兰匠造 · 严谨细节",
    ctaButton: "探索品牌",
    arrowAriaLabel: "浏览定制服务"
  },
  categories: {
    eyebrow: "定制范围",
    title: "全屋定制空间",
    description:
      "从初期概念设计到最终安装 — 为高端住宅、办公空间及商业项目提供精益求精的全方位定制木作方案。",
    items: [
      {
        title: "高端橱柜",
        slug: "kuchnie",
        image: "/images/categories/kuchnie-projekt.webp",
        alt: "带有中岛台和整墙定制柜的现代厨房"
      },
      {
        title: "客厅空间",
        slug: "salony",
        image: "/images/categories/salony-projekt.webp",
        alt: "配有定制电视背景墙与储物系统的客厅"
      },
      {
        title: "卫浴空间",
        slug: "lazienki",
        image: "/images/categories/lazienki-projekt.webp",
        alt: "带有波浪纹格栅细节的高级定制浴室柜"
      },
      {
        title: "办公空间",
        slug: "biura",
        image: "/images/categories/biura-projekt.webp",
        alt: "兼具格调与实用功能的定制办公家具"
      },
      {
        title: "收纳系统",
        slug: "inne",
        image: "/images/categories/inne-projekt.webp",
        alt: "针对多功能空间的定制衣帽间与嵌入式收纳柜"
      }
    ]
  },
  benefits: {
    ariaLabel: "选择 YAMURA 的理由",
    items: [
      {
        title: "量身专属设计",
        text: "深度贴合您的空间与生活需求",
        icon: "plan"
      },
      {
        title: "严选顶级品质",
        text: "精选耐用环保板材与坚固五金",
        icon: "quality"
      },
      {
        title: "全流程管家服务",
        text: "从方案深化到最终专业落地安装",
        icon: "service"
      },
      {
        title: "工坊手工精造",
        text: "本地独立工坊，传承木作匠心",
        icon: "local"
      }
    ]
  },
  brandManifest: {
    label: "YAMURA | Made in Poland",
    title: "欧洲精湛木作.<br />东方极简与精细文化.",
    description:
      "YAMURA 是一家在波兰本地设立并拥有独立生产工坊的定制品牌。我们汲取东方严谨与自律的精神，将至臻至美的工艺贯穿于每一个细节之中。",
    principlesAriaLabel: "YAMURA 品牌基石",
    principles: [
      {
        number: "01",
        title: "独立品牌",
        text: "深耕波兰本地、自主运营的高品质独立品牌。"
      },
      {
        number: "02",
        title: "实体工坊",
        text: "由经验丰富的匠人在自有工坊精工细作。"
      },
      {
        number: "03",
        title: "极致细节",
        text: "极简形态、规范流程与对微小细节的执着追求。"
      }
    ]
  },
  projects: {
    eyebrow: "精选案例",
    title: "多元空间. 统一至高标准.",
    description:
      "品鉴 YAMURA 精选定制作品：现代厨房、整墙收纳、全屋木作及商业空间。",
    filtersAriaLabel: "案例分类筛选",
    filterAll: "全部",
    filters: {
      Wszystkie: "全部",
      Kuchnie: "厨房",
      Zabudowy: "定制收纳",
      Wnętrza: "室内空间",
      Komercyjne: "商业空间"
    },
    showMore: "加载更多案例",
    showLess: "收起",
    openProjectAria: "查看案例详情",
    dialogAria: "案例图片预览",
    dialogCloseAria: "关闭预览",
    dialogPrevAria: "上一个案例",
    dialogNextAria: "下一个案例"
  },
  process: {
    eyebrow: "服务流程",
    title: "从初次沟通到最终完美落地.",
    steps: [
      {
        number: "01",
        title: "需求沟通",
        text: "深入了解您的功能需求、空间规划与预算期望。"
      },
      {
        number: "02",
        title: "精准实测",
        text: "专业工程师进行现场毫米级精准测量与空间评估。"
      },
      {
        number: "03",
        title: "方案深化与报价",
        text: "出具专业设计方案、选定材质与清晰透明的报价单。"
      },
      {
        number: "04",
        title: "工坊精工制造",
        text: "在独立工坊中严格按照工艺标准进行下料与精细组装。"
      },
      {
        number: "05",
        title: "专业现场安装",
        text: "按约定期限由自有专业团队安全送达并精密安装。"
      }
    ]
  },
  contactCTA: {
    title: "对您的新空间已有构想？",
    description:
      "告诉我们您的需求，我们将为您量身定制最完美的家居解决方案。",
    consultationButton: "预约定制咨询",
    emailButton: "发送邮件咨询"
  },
  contactForm: {
    eyebrow: "项目咨询",
    title: "畅聊您的定制需求.",
    intro: "请留下关键信息，我们将在第一时间回复您并推进下一步方案。",
    labels: {
      name: "姓名",
      email: "电子邮箱",
      phone: "联系电话",
      projectType: "定制类型",
      projectTypeSelect: "请选择",
      projectTypeOptions: {
        kitchen: "厨房空间",
        livingRoom: "客厅家具",
        bathroom: "卫浴空间",
        office: "办公家具",
        other: "其他定制柜"
      },
      location: "项目所在城市/区域",
      message: "详细需求描述",
      consent:
        "我同意根据隐私政策处理个人信息以用于回复本次咨询。",
      submit: "提交咨询",
      submitting: "正在提交..."
    },
    status: {
      success: "感谢您的留言，我们已成功收到您的需求。",
      error: "提交失败，请稍后重试或直接通过邮件与我们联系。",
      mailtoNotice: "正在调起您的邮件客户端。"
    }
  },
  cookieConsent: {
    ariaLabel: "隐私设置",
    label: "您的隐私",
    title: "Cookie 政策说明",
    description:
      "我们使用保障网站基础运行的必要技术。在您同意的情况下，我们还会使用 Google Analytics 4 与 Meta 营销工具以改善体验。",
    necessaryOnly: "仅允许必要",
    customize: "自定义设置",
    acceptAll: "全部接受",
    centerLabel: "隐私偏好中心",
    centerTitle: "选择同意范围",
    centerDescription: "您可以随时通过页脚的设置选项修改您的偏好。",
    necessaryTitle: "必要技术",
    necessaryDesc: "用于记录您的隐私选择并保障网站的基础功能与安全。",
    necessaryAlwaysActive: "始终激活",
    necessaryAria: "必要 Cookie 始终保持激活",
    analyticsTitle: "数据分析",
    analyticsDesc: "使用 Google Analytics 4 统计访问量与浏览行为。",
    marketingTitle: "营销推广",
    marketingDesc: "使用 Meta 工具评估广告效果并提供精准推广。",
    back: "返回",
    save: "保存设置"
  },
  inspirationPrompt: {
    eyebrow: "空间灵感",
    title: "风靡全球的日式极简 (Japandi)",
    p1: "正在寻找装修设计灵感？欢迎浏览我们在 Pinterest 上的精彩案例图库。",
    p2: "如果您希望将这些设计在您的家中变为现实，请立即联系我们。",
    pinterestButton: "在 Pinterest 上获取灵感",
    contactButton: "立即联系咨询"
  },
  contactPage: {
    eyebrow: "联系我们",
    title: "项目方案咨询与精准报价",
    description: "描述您的空间大小、定制范围与期望交付时间，我们将竭诚为您服务。",
    detailsTitle: "与我们探讨您的专属空间方案。"
  },
  aboutPage: {
    seoTitle: "品牌故事 - YAMURA | 波兰高端定制家具工坊",
    seoDescription:
      "了解 YAMURA 的创立故事：十余年定制家具经验、匠人精神、与顶尖设计师的紧密合作及对细节的执着追求。",
    heroEyebrow: "关于我们",
    heroTitle: "YAMURA 的品牌故事",
    heroSubtitle: "匠心工艺、沉淀时光与十余年的专注积累。",
    leadEyebrow: "初心",
    leadTitle: "一切始于微小的热爱。",
    chapter1: {
      number: "01",
      label: "起步之路",
      paragraphs: [
        "十多年前，当我们刚踏入定制家具领域时，甚至还没有一个值得记住的品牌名称。但我们拥有比名字更珍贵的东西——一份永不满足的好奇心，以及哪怕无人注视也要将每一处细节做到极致的执念。",
        "最初的作品十分朴实，犹如一篇未展开的故事开篇。几块木板、一个清晰的构想，以及远多于现成答案的疑问。正是在工作台上，而不是在教科书里，我们获得了真正的专业技艺。每一个微小失误都成为木头上的教训，而每一次成功都为我们推开了以往未曾敢想的大门。",
        "随着时间推移，小额订单逐渐让位于那些看似不可能完成的复杂项目。非标准尺寸、目录之外的独特造型、让许多同行望而却步的特殊材料——我们选择迎难而上，因为最美妙的作品往往诞生于常规框架的终点。"
      ]
    },
    chapter2: {
      number: "02",
      label: "我们的标准",
      paragraphs: [
        "我们明白，千篇一律的现成方案很难真正满足人们的个性化需求。因此，我们把每一个项目都当作第一个作品来对待——不带偏见，寻找那种不仅能填满空间，更能赋予空间独特灵魂的形式。",
        "多年来，我们以打磨名贵木材般的耐心完善工作的每一个阶段：从与客户的深度交流、木材挑选，到家具交付新家前的最后微调。我们深知，真正的工艺不在于夸张的姿态，而在于那些一旦缺失便顿感遗憾的微小细节之中。",
        "最宝贵的收获来自与我们同行的人——把空间梦想托付给我们的客户，以及与我们共同挑战复杂大作的设计师团队。特别是与室内建筑师的合作，让我们学会了像阅读故事一样理解施工图纸，并像尊重自己的手艺一样敬畏他人的设计构想。",
        "我们学会了多倾听、少说空话。一件优秀的家具绝非始于木匠的固有偏见，而是始于对使用者真实需求的深刻理解。信任的建立比最精密的榫卯结构更需要时间，而摧毁它却轻而易举。"
      ]
    },
    chapter3: {
      number: "03",
      label: "YAMURA 的诞生",
      paragraphs: [
        "经过无数次试验、调整与静默的坚持——无论是在充满木香的工作台前，还是在彻夜讨论的图纸桌旁——终于孕育出了我们渴望与更多人分享的结晶：YAMURA 应运而生。",
        "我们不是在谈判桌上被策划出来的快餐品牌。我们生长于弥漫着新鲜锯木香气的车间，生长于飘落的水泥地木屑，生长于那些唯有我们知晓、却对我们意义非凡的微小修正之中。",
        "YAMURA 是这段历程的凝结。这也是我们的郑重承诺：对待未来的每一个项目，都将保持与最初一样的耐心与专注。"
      ]
    },
    finale: {
      line1: "耐心有着自己的形态。",
      line2: "我们用了十余年时间，在一块块木板上学习赋予它形状。",
      line3: "今天，我们已准备好将这份温度带入您的空间。"
    }
  },
  projectsPage: {
    seoTitle: "精选案例 - YAMURA 高端定制家具",
    seoDescription:
      "YAMURA 定制案例合集：现代厨房、客厅背景墙、浴室柜、衣帽间及高管办公空间。",
    heroEyebrow: "案例图库",
    heroTitle: "精选定制家具项目",
    heroSubtitle:
      "涵盖自然原木、现代高光、大胆色系、豪华卫浴与高级办公空间的多元风格展示。"
  },
  proPage: {
    seoTitle: "YAMURA PRO - 建筑师与室内设计师 B2B 合作计划",
    seoDescription:
      "YAMURA PRO 为设计事务所与独立设计师提供全流程落地制造支持：图纸技术审核、精细报价、工坊制造与现场安装。",
    heroEyebrow: "面向建筑师与室内设计师",
    heroTitle: "YAMURA PRO",
    heroClaim: "您的设计构想. 我们的精准落地.",
    heroLead:
      "可靠的 B2B 深度制造伙伴，协助您将图纸转化为完美实景，全程保障您的设计原创权与客户关系主导权。",
    modelButton: "了解合作模式",
    offerButton: "查看 Dealshare 合作页面",
    operatorLabel: "合作运营支持",
    operatorAria: "由 Dealshare 运营支持的 YAMURA PRO 计划",
    introEyebrow: "协同落地",
    introTitle: "您负责设计. 我们负责匠心实现.",
    introLead:
      "YAMURA PRO 专为需要可靠落地伙伴的设计机构而设。我们深刻理解图纸意图，并将其精准转化为生产制造工艺，无缝衔接设计、生产、物流与精密安装环节。",
    pillarsAria: "YAMURA PRO 核心合作板块",
    pillars: [
      {
        number: "01",
        title: "图纸技术审核",
        text: "在投入生产前，对设计图纸、五金方案、材料选型及工艺节点进行严密预审。"
      },
      {
        number: "02",
        title: "明细报价与工期",
        text: "梳理施工范围，出具透明详细的造价清单并制定严谨的节点推进计划。"
      },
      {
        number: "03",
        title: "实体制造与安装",
        text: "严格按照确认图纸，对工坊加工、干线物流及现场组装实施全权质量负责。"
      },
      {
        number: "04",
        title: "交付后长期保障",
        text: "项目交付后，我们持续提供五金调试、质保维护及后续增项支持。"
      }
    ],
    modelEyebrow: "权责分明的高效协作",
    modelTitle: "一个项目. 三大清晰角色.",
    modelRoles: [
      {
        number: "01",
        label: "设计机构",
        title: "设计创意与客户主导",
        text: "主导客户沟通，确立整体空间美学方案与设计决策。"
      },
      {
        number: "02",
        label: "YAMURA",
        title: "工艺工程与家具制造",
        text: "深化工艺方案，负责成本核算、精细制造、现场安装与终身品质把控。"
      },
      {
        number: "03",
        label: "Dealshare",
        title: "B2B 商务与流程管理",
        text: "协助梳理项目需求，标准化 B2B 合作流程并提供高效商务对接支持。"
      }
    ],
    gainsEyebrow: "设计师权益",
    gainsTitle: "为您的设计工作室赋能的实力制造后盾.",
    gains: [
      "完整保留项目署名权，完全掌控与业主的沟通主导权。",
      "拥有专属专业团队，一站式搞定深化、生产与现场精装。",
      "实时掌握明确的施工范围、费用清单与工期节点进展。",
      "支持单项定制项目委托，亦可建立长期稳定的定点制造伙伴关系。"
    ],
    handoffEyebrow: "合作运营支持",
    handoffTitle: "YAMURA PRO 详细方案已上线 Dealshare 平台.",
    handoffText:
      "您可以在 Dealshare 平台查阅完整的合作细则、服务流程，并填写简易需求表以启动具体项目或长期合作洽谈。",
    handoffButton: "在 Dealshare 上查看详情",
    faqEyebrow: "常见问题",
    faqTitle: "开启合作前的解答.",
    faqs: [
      {
        question: "YAMURA 会直接介入我与客户的沟通吗？",
        answer:
          "我们不会强加单一模式。合作初期将共同确认沟通准则，确保设计机构始终保持客户主导地位与全面的设计掌控权。"
      },
      {
        question: "在哪个阶段介入项目最为理想？",
        answer:
          "在深化施工图锁定之前介入能产生最大价值。当然我们也承接现成施工图的报价与制造，越早介入越有利于规避后期成本变动。"
      },
      {
        question: "你们是否承接由第三方设计机构完成的图纸？",
        answer:
          "是的。我们专注于将各类设计师与建筑师的方案精准转化为生产工艺并负责高标准落地。"
      },
      {
        question: "如何开启第一次合作？",
        answer:
          "访问 Dealshare 上的 YAMURA PRO 页面并填写简短的项目需求。我们将迅速评估并与您探讨具体报价、工艺咨询或长期战略合作。"
      }
    ]
  }
};
