import type { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  locale: "en",
  localeName: "English",
  seo: {
    title: "YAMURA - Custom Made Furniture",
    description:
      "Polish design and manufacture of bespoke custom furniture for homes, apartments, offices, and commercial spaces. Local craftsmanship and Japanese precision."
  },
  common: {
    skipToContent: "Skip to content",
    homeAriaLabel: "YAMURA - Home page",
    mainNavAriaLabel: "Main navigation",
    mobileNavAriaLabel: "Mobile navigation",
    footerNavAriaLabel: "Footer navigation",
    legalNavAriaLabel: "Legal & privacy",
    quoteButton: "Get a quote",
    menuButton: "Menu",
    close: "Close",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    cookieSettings: "Cookie Settings",
    provenance: "Polish Company · Polish Manufacturing · Japanese Precision",
    ordersLabel: "Orders",
    phoneLabel: "Phone",
    locationLabel: "Location",
    headquartersLabel: "Headquarters",
    findUsLabel: "Find Us",
    mapAddressLabel: "Location Map",
    openInGoogleMaps: "Open in Google Maps"
  },
  navigation: [
    { label: "About us", href: "/en/o-nas/" },
    { label: "Offer", href: "/en/#oferta" },
    { label: "Projects", href: "/en/realizacje/" },
    { label: "Process", href: "/en/#proces" },
    { label: "Yamura PRO", href: "/en/yamura-pro/" },
    { label: "Contact", href: "/en/kontakt/" }
  ],
  hero: {
    title: "Crafting furniture<br />tailored to you",
    description:
      "We design and manufacture bespoke furniture blending refined aesthetics, functionality, and master craftsmanship.",
    provenance: "Polish Brand · Japanese Precision",
    ctaButton: "Our Story",
    arrowAriaLabel: "Explore our offer"
  },
  categories: {
    eyebrow: "Our Offer",
    title: "Bespoke Furniture",
    description:
      "From initial concept to final assembly — comprehensive custom furniture for residences, offices, and commercial spaces with attention to every detail.",
    items: [
      {
        title: "Kitchens",
        slug: "kuchnie",
        image: "/images/categories/kuchnie-projekt.webp",
        alt: "Custom kitchen design with island and bespoke cabinetry"
      },
      {
        title: "Living Rooms",
        slug: "salony",
        image: "/images/categories/salony-projekt.webp",
        alt: "Living room design with custom TV media wall unit"
      },
      {
        title: "Bathrooms",
        slug: "lazienki",
        image: "/images/categories/lazienki-projekt.webp",
        alt: "Bespoke bathroom design with fluted vanity unit"
      },
      {
        title: "Offices",
        slug: "biura",
        image: "/images/categories/biura-projekt.webp",
        alt: "Modern office design with tailored bespoke furniture"
      },
      {
        title: "Other Spaces",
        slug: "inne",
        image: "/images/categories/inne-projekt.webp",
        alt: "Bespoke storage and custom joinery solutions"
      }
    ]
  },
  benefits: {
    ariaLabel: "Why collaborate with YAMURA",
    items: [
      {
        title: "Individual Design",
        text: "Tailored precisely to your needs",
        icon: "plan"
      },
      {
        title: "Premium Quality",
        text: "Durable materials & solid craftsmanship",
        icon: "quality"
      },
      {
        title: "End-to-End Service",
        text: "From concept to flawless installation",
        icon: "service"
      },
      {
        title: "Polish Craft & Production",
        text: "Local manufacturing with dedication",
        icon: "local"
      }
    ]
  },
  brandManifest: {
    label: "YAMURA | Made in Poland",
    title: "Polish Craftsmanship.<br />Japanese Culture of Detail.",
    description:
      "YAMURA is an independent Polish brand with local in-house production. Inspired by Far Eastern discipline and meticulous precision, we ensure perfection in every single detail.",
    principlesAriaLabel: "Brand Foundations of YAMURA",
    principles: [
      {
        number: "01",
        title: "Polish Capital",
        text: "An independent brand developed and managed in Poland."
      },
      {
        number: "02",
        title: "Local Manufacturing",
        text: "Furniture produced locally, close to clients and their interiors."
      },
      {
        number: "03",
        title: "Japanese Precision",
        text: "Simplicity of form, rigorous processes, and care for detail."
      }
    ]
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Diverse interiors. One standard of excellence.",
    description:
      "Explore selected YAMURA projects: bespoke kitchens, built-ins, full interior joinery, and commercial spaces.",
    filtersAriaLabel: "Project filters",
    filterAll: "All",
    filters: {
      Wszystkie: "All",
      Kuchnie: "Kitchens",
      Zabudowy: "Built-ins",
      Wnętrza: "Interiors",
      Komercyjne: "Commercial"
    },
    showMore: "Show more projects",
    showLess: "Show less",
    openProjectAria: "View project",
    dialogAria: "Project preview",
    dialogCloseAria: "Close preview",
    dialogPrevAria: "Previous project",
    dialogNextAria: "Next project"
  },
  process: {
    eyebrow: "Our Process",
    title: "From initial consultation to final installation.",
    steps: [
      {
        number: "01",
        title: "Consultation",
        text: "We understand your expectations, spatial requirements, and project scope."
      },
      {
        number: "02",
        title: "Measurement",
        text: "We conduct precise on-site measurements and analyze architectural constraints."
      },
      {
        number: "03",
        title: "Design & Quote",
        text: "We prepare the technical design, select fine materials, and present transparent costs."
      },
      {
        number: "04",
        title: "Manufacturing",
        text: "We craft each furniture element with meticulous care and precision."
      },
      {
        number: "05",
        title: "Installation",
        text: "We deliver and professionally assemble the complete joinery on schedule."
      }
    ]
  },
  contactCTA: {
    title: "Have a vision for your space?",
    description:
      "Tell us what you need. We will craft a bespoke solution tailored to your interior.",
    consultationButton: "Schedule consultation",
    emailButton: "Write to us"
  },
  contactForm: {
    eyebrow: "Project Inquiry",
    title: "Tell us about your space.",
    intro: "Share the key details. We will respond promptly and outline the next step.",
    labels: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      projectType: "Project Type",
      projectTypeSelect: "Select",
      projectTypeOptions: {
        kitchen: "Kitchen",
        livingRoom: "Living Room",
        bathroom: "Bathroom",
        office: "Office",
        other: "Other Joinery"
      },
      location: "Project Location (City / Region)",
      message: "Message",
      consent:
        "I agree to the processing of personal data to respond to my inquiry in accordance with the Privacy Policy.",
      submit: "Send Inquiry",
      submitting: "Sending..."
    },
    status: {
      success: "Thank you. Your message has been sent successfully.",
      error: "Failed to send message. Please try again or contact us directly.",
      mailtoNotice: "Opening message in your email client."
    }
  },
  cookieConsent: {
    ariaLabel: "Privacy settings",
    label: "Your Privacy",
    title: "Cookie Settings",
    description:
      "We use necessary cookies for website operation. With your consent, we also utilize GA4 analytics and Meta advertising tools. You can accept all, reject optional, or adjust preferences.",
    necessaryOnly: "Only Necessary",
    customize: "Customize",
    acceptAll: "Accept All",
    centerLabel: "Privacy Center",
    centerTitle: "Select Consent Scope",
    centerDescription: "You can modify your optional preferences anytime via the footer link.",
    necessaryTitle: "Necessary",
    necessaryDesc: "Store your privacy preferences and ensure core website functionality.",
    necessaryAlwaysActive: "Always active",
    necessaryAria: "Necessary cookies are always active",
    analyticsTitle: "Analytics",
    analyticsDesc: "Measure website usage and performance via Google Analytics 4.",
    marketingTitle: "Marketing",
    marketingDesc: "Measure ad campaigns and tailor marketing via Meta tools.",
    back: "Back",
    save: "Save Preferences"
  },
  inspirationPrompt: {
    eyebrow: "Interiors & Inspiration",
    title: "The Japandi style endures",
    p1: "Looking for interior inspiration? Visit our Pinterest board to discover refined custom furniture and styling ideas.",
    p2: "Ready to bring bespoke furniture into your home? Get in touch — we build custom pieces matching your vision.",
    pinterestButton: "Pinterest Inspirations",
    contactButton: "Contact Us"
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Project Consultation & Quote",
    description: "Describe your space, scope of work, and preferred timeline. We will get back to you with the next step.",
    detailsTitle: "Let's talk about your project."
  },
  aboutPage: {
    seoTitle: "About Us - YAMURA | Polish Bespoke Furniture Brand",
    seoDescription:
      "Discover the story of YAMURA: over a decade of experience in designing and manufacturing custom furniture, authentic craftsmanship, and meticulous detail.",
    heroEyebrow: "About Us",
    heroTitle: "The YAMURA Story",
    heroSubtitle: "Craftsmanship, patience, and over a decade of dedicated experience.",
    leadEyebrow: "The Beginning",
    leadTitle: "It started with something small.",
    chapter1: {
      number: "01",
      label: "First Steps",
      paragraphs: [
        "Over a decade ago, when we took our first steps into the world of custom joinery, we did not yet have a brand name to remember. Instead, we held something far more valuable: an unyielding curiosity and the determination to execute every detail with excellence, even when no one was watching.",
        "Our earliest projects were modest beginnings of an unwritten story. A few wooden boards, a clear intention, and more questions than ready-made answers. It was on the workbench, rather than through textbooks, that we gained genuine expertise. Every error became a lesson engraved in wood, and every success unlocked doors we previously would never have dared to cross.",
        "Over time, small commissions gave way to ambitious projects that once seemed nearly impossible. Non-standard dimensions, geometries absent from catalogs, and complex materials where other workshops hesitated. We leaned in — because true beauty is born where conventional templates end."
      ]
    },
    chapter2: {
      number: "02",
      label: "Our Standard",
      paragraphs: [
        "We learned that off-the-shelf solutions rarely accommodate real human needs. Therefore, we approach each project as if it were our first — without preconceived notions, seeking a form that not only fills a room but sets its emotional tone.",
        "Over the years, we refined every stage of our craft with the same patience required to sand fine hardwood — from the initial client dialogue and timber selection to the final adjustments before placing the finished piece in its new home. True craftsmanship is not found in grand gestures, but in subtle details that go unnoticed until they are absent.",
        "Our most valuable lessons came from people — clients who entrusted us with their dreams, and partners with whom we undertook projects requiring multiple hands. We owe a particular debt to interior designers. Collaborating with them taught us to read technical drawings like a story and to respect an external design vision as dearly as our own craftsmanship.",
        "We learned to listen more attentively than we speak. A fine piece of furniture begins not with the carpenter's preconceived idea, but with a deeply understood human need. Trust takes longer to build than the most complex wood joint — and is far easier to lose."
      ]
    },
    chapter3: {
      number: "03",
      label: "Birth of YAMURA",
      paragraphs: [
        "From years of trials, setbacks, and quiet victories — both at the workbench and across the design table — emerged something we wished to share more widely. Thus, YAMURA was born.",
        "We are not a corporate brand fabricated around a boardroom table. We grew from a workshop scented with freshly sawn wood, from sawdust settling on the concrete floor, and from minute refinements known only to us that meant the world.",
        "YAMURA is the synthesis of this journey. And our solemn promise that every subsequent project will be treated with the same dedication and patience as our very first."
      ]
    },
    finale: {
      line1: "Patience has its own shape.",
      line2: "We spent over a decade learning to give it form, board by board.",
      line3: "Today, we are ready to bring it into your space."
    }
  },
  projectsPage: {
    seoTitle: "Projects - YAMURA Bespoke Furniture",
    seoDescription:
      "Selected custom furniture projects by YAMURA: kitchens, living rooms, bathrooms, wardrobes, and executive offices crafted with highest precision.",
    heroEyebrow: "Portfolio",
    heroTitle: "Selected Custom Furniture Projects",
    heroSubtitle:
      "Design directions across our portfolio: natural wood, sleek light finishes, bold color palettes, luxury bathrooms, offices, and walk-in closets."
  },
  proPage: {
    seoTitle: "YAMURA PRO - B2B Partnership for Architects & Designers",
    seoDescription:
      "YAMURA PRO provides execution partnership for architectural studios and interior designers: technical verification, precise quotes, manufacturing, and installation.",
    heroEyebrow: "For Architects & Interior Designers",
    heroTitle: "YAMURA PRO",
    heroClaim: "Your Concept. Our Flawless Execution.",
    heroLead:
      "A dedicated B2B partnership that guides your project from blueprints to finished installation without sacrificing control over your creative vision or client relationship.",
    modelButton: "Discover the Collaboration Model",
    offerButton: "View Dealshare Offer",
    operatorLabel: "Managed via",
    operatorAria: "YAMURA PRO offer managed through Dealshare",
    introEyebrow: "Collaborative Execution",
    introTitle: "You design. We deliver the craftsmanship.",
    introLead:
      "YAMURA PRO was created for design studios seeking a reliable partner who reads technical drawings with insight, respects design intent, and translates it flawlessly into production technology. We step in where design meets manufacturing, logistics, and precision installation.",
    pillarsAria: "YAMURA PRO Collaboration Pillars",
    pillars: [
      {
        number: "01",
        title: "Technical Verification",
        text: "We review documentation, fittings, materials, and construction details before anything enters production."
      },
      {
        number: "02",
        title: "Transparent Quote & Schedule",
        text: "We structure the full scope, prepare itemized pricing, and establish a dependable timeline for each phase."
      },
      {
        number: "03",
        title: "Production & Assembly",
        text: "We take full responsibility for manufacturing, transport logistics, and on-site assembly matching approved drawings."
      },
      {
        number: "04",
        title: "Post-Completion Care",
        text: "Following handover, we remain available for adjustments, warranty servicing, or subsequent additions."
      }
    ],
    modelEyebrow: "Clear Division of Responsibility",
    modelTitle: "One Project. Three Well-Defined Roles.",
    modelRoles: [
      {
        number: "01",
        label: "Studio",
        title: "Vision & Relationship",
        text: "You guide the client, create the concept, and direct aesthetic decisions."
      },
      {
        number: "02",
        label: "YAMURA",
        title: "Technology & Execution",
        text: "We engineer solutions, calculate pricing, manufacture, install, and guarantee quality."
      },
      {
        number: "03",
        label: "Dealshare",
        title: "Partnership Management",
        text: "Dealshare structures the brief, qualifies project criteria, and manages B2B partnership onboarding."
      }
    ],
    gainsEyebrow: "Studio Benefits",
    gainsTitle: "An execution partner empowering your design studio.",
    gains: [
      "You retain full project authorship and client relationship control.",
      "A single dedicated team handles engineering, manufacturing, and fit-out.",
      "You receive clear, timely updates on scope, cost estimates, and progress.",
      "Submit individual bespoke projects or establish long-term manufacturing partnership."
    ],
    handoffEyebrow: "Managed via",
    handoffTitle: "Detailed YAMURA PRO offer is available on Dealshare.",
    handoffText:
      "There you will find the complete partnership scope, workflow overview, and a brief form to initiate project discussions or ongoing studio collaboration.",
    handoffButton: "View Offer on Dealshare",
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Before We Begin.",
    faqs: [
      {
        question: "Does YAMURA take over communication with my client?",
        answer:
          "We do not impose a single communication model. We establish contact guidelines at the outset so your studio maintains relationship leadership and complete creative oversight."
      },
      {
        question: "At what stage should we submit a project?",
        answer:
          "We provide the greatest value before executive drawings are finalized, though we also quote completed designs. Early engagement helps optimize technical details and avoid costly adjustments."
      },
      {
        question: "Do you manufacture designs prepared by third-party architectural studios?",
        answer:
          "Yes. We specialize in producing from designer and architect blueprints, supplementing them with production-ready engineering and fitting specifications."
      },
      {
        question: "How do we get started?",
        answer:
          "Visit the YAMURA PRO page on Dealshare and complete the short brief. Based on your input, we will discuss specific project pricing, technical advice, or ongoing contract manufacturing."
      }
    ]
  }
};
