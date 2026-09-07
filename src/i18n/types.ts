export type Locale = "pl" | "en" | "de" | "ko" | "zh" | "ja";

export interface NavItem {
  label: string;
  href: string;
}

export interface CategoryItem {
  title: string;
  slug: string;
  image: string;
  alt: string;
}

export interface BenefitItem {
  title: string;
  text: string;
  icon: "plan" | "quality" | "service" | "local";
}

export interface ProcessStepItem {
  number: string;
  title: string;
  text: string;
}

export interface ProPillarItem {
  number: string;
  title: string;
  text: string;
}

export interface ProFaqItem {
  question: string;
  answer: string;
}

export interface TranslationDictionary {
  locale: Locale;
  localeName: string;
  seo: {
    title: string;
    description: string;
  };
  common: {
    skipToContent: string;
    homeAriaLabel: string;
    mainNavAriaLabel: string;
    mobileNavAriaLabel: string;
    footerNavAriaLabel: string;
    legalNavAriaLabel: string;
    quoteButton: string;
    menuButton: string;
    close: string;
    allRightsReserved: string;
    privacyPolicy: string;
    terms: string;
    cookieSettings: string;
    provenance: string;
    ordersLabel: string;
    phoneLabel: string;
    locationLabel: string;
    headquartersLabel: string;
    findUsLabel: string;
    mapAddressLabel: string;
    openInGoogleMaps: string;
  };
  navigation: NavItem[];
  hero: {
    title: string;
    description: string;
    provenance: string;
    ctaButton: string;
    arrowAriaLabel: string;
  };
  categories: {
    eyebrow?: string;
    title: string;
    description: string;
    items: CategoryItem[];
  };
  benefits: {
    ariaLabel: string;
    items: BenefitItem[];
  };
  brandManifest: {
    label: string;
    title: string;
    description: string;
    principlesAriaLabel: string;
    principles: Array<{
      number: string;
      title: string;
      text: string;
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    filtersAriaLabel: string;
    filterAll: string;
    filters: Record<string, string>;
    showMore: string;
    showLess: string;
    openProjectAria: string;
    dialogAria: string;
    dialogCloseAria: string;
    dialogPrevAria: string;
    dialogNextAria: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: ProcessStepItem[];
  };
  contactCTA: {
    title: string;
    description: string;
    consultationButton: string;
    emailButton: string;
  };
  contactForm: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      projectType: string;
      projectTypeSelect: string;
      projectTypeOptions: {
        kitchen: string;
        livingRoom: string;
        bathroom: string;
        office: string;
        other: string;
      };
      location: string;
      message: string;
      consent: string;
      submit: string;
      submitting: string;
    };
    status: {
      success: string;
      error: string;
      mailtoNotice: string;
    };
  };
  cookieConsent: {
    ariaLabel: string;
    label: string;
    title: string;
    description: string;
    necessaryOnly: string;
    customize: string;
    acceptAll: string;
    centerLabel: string;
    centerTitle: string;
    centerDescription: string;
    necessaryTitle: string;
    necessaryDesc: string;
    necessaryAlwaysActive: string;
    necessaryAria: string;
    analyticsTitle: string;
    analyticsDesc: string;
    marketingTitle: string;
    marketingDesc: string;
    back: string;
    save: string;
  };
  inspirationPrompt: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    pinterestButton: string;
    contactButton: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    detailsTitle: string;
  };
  aboutPage: {
    seoTitle: string;
    seoDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    leadEyebrow: string;
    leadTitle: string;
    chapter1: {
      number: string;
      label: string;
      paragraphs: string[];
    };
    chapter2: {
      number: string;
      label: string;
      paragraphs: string[];
    };
    chapter3: {
      number: string;
      label: string;
      paragraphs: string[];
    };
    finale: {
      line1: string;
      line2: string;
      line3: string;
    };
  };
  projectsPage: {
    seoTitle: string;
    seoDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
  };
  proPage: {
    seoTitle: string;
    seoDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroClaim: string;
    heroLead: string;
    modelButton: string;
    offerButton: string;
    operatorLabel: string;
    operatorAria: string;
    introEyebrow: string;
    introTitle: string;
    introLead: string;
    pillarsAria: string;
    pillars: ProPillarItem[];
    modelEyebrow: string;
    modelTitle: string;
    modelRoles: Array<{
      number: string;
      label: string;
      title: string;
      text: string;
    }>;
    gainsEyebrow: string;
    gainsTitle: string;
    gains: string[];
    handoffEyebrow: string;
    handoffTitle: string;
    handoffText: string;
    handoffButton: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: ProFaqItem[];
  };
}
