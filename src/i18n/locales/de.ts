import type { TranslationDictionary } from "../types";

export const de: TranslationDictionary = {
  locale: "de",
  localeName: "Deutsch",
  seo: {
    title: "YAMURA - Maßgefertigte Möbel",
    description:
      "Polnisches Unternehmen für Planung und Fertigung individueller Maßmöbel für Wohnungen, Häuser, Büros und Gewerberäume. Lokale Handwerkskunst und japanische Präzision."
  },
  common: {
    skipToContent: "Zum Inhalt springen",
    homeAriaLabel: "YAMURA - Startseite",
    mainNavAriaLabel: "Hauptnavigation",
    mobileNavAriaLabel: "Mobile Navigation",
    footerNavAriaLabel: "Fußzeilennavigation",
    legalNavAriaLabel: "Rechtliches & Datenschutz",
    quoteButton: "Projekt anfragen",
    menuButton: "Menü",
    close: "Schließen",
    allRightsReserved: "Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzerklärung",
    terms: "AGB",
    cookieSettings: "Cookie-Einstellungen",
    provenance: "Polnisches Unternehmen · Polnische Fertigung · Japanische Präzision",
    ordersLabel: "Bestellungen",
    phoneLabel: "Telefon",
    locationLabel: "Standort",
    headquartersLabel: "Unternehmenssitz",
    findUsLabel: "Folgen Sie uns",
    mapAddressLabel: "Anfahrtskarte",
    openInGoogleMaps: "In Google Maps öffnen"
  },
  navigation: [
    { label: "Über uns", href: "/de/o-nas/" },
    { label: "Angebot", href: "/de/#oferta" },
    { label: "Projekte", href: "/de/realizacje/" },
    { label: "Ablauf", href: "/de/#proces" },
    { label: "Yamura PRO", href: "/de/yamura-pro/" },
    { label: "Kontakt", href: "/de/kontakt/" }
  ],
  hero: {
    title: "Möbel nach Maß,<br />perfekt auf Sie abgestimmt",
    description:
      "Wir entwerfen und fertigen individuelle Maßmöbel, die erlesene Ästhetik, Funktionalität und höchste Handwerksqualität vereinen.",
    provenance: "Polnische Marke · Japanische Präzision",
    ctaButton: "Über uns",
    arrowAriaLabel: "Zu unserem Angebot"
  },
  categories: {
    eyebrow: "Unser Angebot",
    title: "Möbel nach Maß",
    description:
      "Vom ersten Entwurf bis zur fertigen Montage — ganzheitliche Möbelfertigung für Wohnungen, Büros und gewerbliche Objekte mit Liebe zum Detail.",
    items: [
      {
        title: "Küchen",
        slug: "kuchnie",
        image: "/images/categories/kuchnie-projekt.webp",
        alt: "Küchenplanung mit Kücheninsel und maßgefertigter Schrankwand"
      },
      {
        title: "Wohnzimmer",
        slug: "salony",
        image: "/images/categories/salony-projekt.webp",
        alt: "Wohnzimmerplanung mit maßgefertigter TV-Wandverkleidung"
      },
      {
        title: "Badezimmer",
        slug: "lazienki",
        image: "/images/categories/lazienki-projekt.webp",
        alt: "Badezimmerplanung mit geriffeltem Waschtischschrank"
      },
      {
        title: "Büros",
        slug: "biura",
        image: "/images/categories/biura-projekt.webp",
        alt: "Büroplanung mit maßgefertigten Büromöbeln"
      },
      {
        title: "Sonstiges",
        slug: "inne",
        image: "/images/categories/inne-projekt.webp",
        alt: "Individuelle Schrankeinbauten und maßgefertigte Möbel"
      }
    ]
  },
  benefits: {
    ariaLabel: "Vorteile der Zusammenarbeit mit YAMURA",
    items: [
      {
        title: "Individueller Entwurf",
        text: "Exakt auf Ihre Anforderungen abgestimmt",
        icon: "plan"
      },
      {
        title: "Höchste Qualität",
        text: "Langlebige Materialien und solide Verarbeitung",
        icon: "quality"
      },
      {
        title: "Komplettservice",
        text: "Von der Konzeption bis zur fachgerechten Montage",
        icon: "service"
      },
      {
        title: "Polnische Fertigung",
        text: "Eigene Werkstatt und regionale Handarbeit",
        icon: "local"
      }
    ]
  },
  brandManifest: {
    label: "YAMURA | Hergestellt in Polen",
    title: "Polnische Handwerkskunst.<br />Japanische Detailkultur.",
    description:
      "YAMURA ist ein unabhängiges polnisches Unternehmen mit lokaler eigener Produktion. Aus fernöstlicher Tradition schöpfen wir Disziplin und Präzision, die wir in jedem einzelnen Detail verwirklichen.",
    principlesAriaLabel: "Markenfundamente von YAMURA",
    principles: [
      {
        number: "01",
        title: "Polnisches Kapital",
        text: "Eine unabhängige, in Polen gegründete und geführte Marke."
      },
      {
        number: "02",
        title: "Eigene Fertigung",
        text: "Möbel vor Ort gefertigt — nah an unseren Kunden und ihren Räumen."
      },
      {
        number: "03",
        title: "Japanische Präzision",
        text: "Schlichte Formen, kompromisslose Prozesse und Sorgfalt im Detail."
      }
    ]
  },
  projects: {
    eyebrow: "Projekte",
    title: "Vielfältige Räume. Ein Qualitätsstandard.",
    description:
      "Entdecken Sie ausgewählte YAMURA Projekte: Maßküchen, Einbaumöbel, ganzheitliche Innenausbauten und gewerbliche Räume.",
    filtersAriaLabel: "Projektfilter",
    filterAll: "Alle",
    filters: {
      Wszystkie: "Alle",
      Kuchnie: "Küchen",
      Zabudowy: "Einbauten",
      Wnętrza: "Innenräume",
      Komercyjne: "Gewerblich"
    },
    showMore: "Mehr Projekte anzeigen",
    showLess: "Weniger anzeigen",
    openProjectAria: "Projekt öffnen",
    dialogAria: "Projektansicht",
    dialogCloseAria: "Ansicht schließen",
    dialogPrevAria: "Vorheriges Projekt",
    dialogNextAria: "Nächstes Projekt"
  },
  process: {
    eyebrow: "Unser Ablauf",
    title: "Vom ersten Gespräch bis zur fertigen Montage.",
    steps: [
      {
        number: "01",
        title: "Beratung",
        text: "Wir erfassen Ihre Wünsche, räumlichen Gegebenheiten und den gewünschten Projektumfang."
      },
      {
        number: "02",
        title: "Aufmaß",
        text: "Wir nehmen präzise Maße und analysieren architektonische Möglichkeiten."
      },
      {
        number: "03",
        title: "Planung & Angebot",
        text: "Wir erstellen die Konzeption, wählen hochwertige Materialien und präsentieren ein transparentes Angebot."
      },
      {
        number: "04",
        title: "Fertigung",
        text: "Wir fertigen jedes Möbelstück in meisterhafter Präzision in unserer Werkstatt."
      },
      {
        number: "05",
        title: "Montage",
        text: "Wir liefern und montieren den gesamten Einbau termingerecht und sauber vor Ort."
      }
    ]
  },
  contactCTA: {
    title: "Haben Sie eine Idee für Ihre Räume?",
    description:
      "Erzählen Sie uns von Ihrem Vorhaben. Wir erarbeiten eine maßgeschneiderte Lösung für Ihr Interieur.",
    consultationButton: "Beratung vereinbaren",
    emailButton: "Schreiben Sie uns"
  },
  contactForm: {
    eyebrow: "Projektanfrage",
    title: "Erzählen Sie uns von Ihrem Projekt.",
    intro: "Teilen Sie uns die wichtigsten Eckdaten mit. Wir antworten zeitnah mit den nächsten Schritten.",
    labels: {
      name: "Vor- und Nachname",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      projectType: "Projektart",
      projectTypeSelect: "Auswählen",
      projectTypeOptions: {
        kitchen: "Küche",
        livingRoom: "Wohnzimmer",
        bathroom: "Badezimmer",
        office: "Büro",
        other: "Sonstiger Einbau"
      },
      location: "Realisierungsort (Stadt / Region)",
      message: "Nachricht",
      consent:
        "Ich stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage gemäß der Datenschutzerklärung zu.",
      submit: "Anfrage senden",
      submitting: "Wird gesendet..."
    },
    status: {
      success: "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
      error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
      mailtoNotice: "Öffne Nachricht in Ihrem E-Mail-Programm."
    }
  },
  cookieConsent: {
    ariaLabel: "Datenschutzeinstellungen",
    label: "Ihre Privatsphäre",
    title: "Cookie-Einstellungen",
    description:
      "Wir verwenden für den Betrieb der Website erforderliche Technologien. Mit Ihrer Zustimmung nutzen wir zudem Google Analytics 4 und Meta-Werbetools. Sie können alle akzeptieren, optionale ablehnen oder Einstellungen anpassen.",
    necessaryOnly: "Nur notwendige",
    customize: "Einstellungen",
    acceptAll: "Alle akzeptieren",
    centerLabel: "Datenschutz-Center",
    centerTitle: "Umfang der Einwilligung wählen",
    centerDescription: "Optionale Einstellungen können Sie jederzeit über die Fußzeile der Seite ändern.",
    necessaryTitle: "Notwendig",
    necessaryDesc: "Speichern Ihre Datenschutzauswahl und gewährleisten grundlegende Website-Funktionen.",
    necessaryAlwaysActive: "Immer aktiv",
    necessaryAria: "Notwendige Cookies sind immer aktiv",
    analyticsTitle: "Analytisch",
    analyticsDesc: "Ermöglichen die Messung der Websitenutzung mittels Google Analytics 4.",
    marketingTitle: "Marketing",
    marketingDesc: "Ermöglichen die Reichweitenmessung und zielgerichtete Werbung über Meta-Tools.",
    back: "Zurück",
    save: "Auswahl speichern"
  },
  inspirationPrompt: {
    eyebrow: "Interieur & Inspiration",
    title: "Der Japandi-Stil begeistert",
    p1: "Suchen Sie Inspiration für Ihr Interieur? Entdecken Sie auf unserem Pinterest-Kanal Ideen für individuelle Möbel und Raumkonzepte.",
    p2: "Möchten Sie maßgefertigte Möbel für Ihr Zuhause realisieren? Kontaktieren Sie uns — wir fertigen nach Ihren individuellen Wünschen.",
    pinterestButton: "Inspirationen auf Pinterest",
    contactButton: "Kontakt aufnehmen"
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Beratung und Kostenvoranschlag",
    description: "Beschreiben Sie Ihre Räume, den Leistungsumfang und Ihren Wunschtermin. Wir melden uns umgehend bei Ihnen.",
    detailsTitle: "Lassen Sie uns über Ihr Projekt sprechen."
  },
  aboutPage: {
    seoTitle: "Über uns - YAMURA | Polnische Manufaktur für Maßmöbel",
    seoDescription:
      "Erfahren Sie mehr über die Geschichte von YAMURA: über ein Jahrzehnt Erfahrung in Planung und Bau maßgefertigter Möbel, Handwerkskunst und Liebe zum Detail.",
    heroEyebrow: "Über uns",
    heroTitle: "Die YAMURA Geschichte",
    heroSubtitle: "Handwerk, Geduld und über ein Jahrzehnt gewachsene Erfahrung.",
    leadEyebrow: "Der Anfang",
    leadTitle: "Es begann mit etwas Kleinem.",
    chapter1: {
      number: "01",
      label: "Erste Schritte",
      paragraphs: [
        "Vor über zehn Jahren, als wir unsere ersten Schritte in die Welt individueller Maßmöbel machten, hatten wir noch keinen einprägsamen Markennamen. Wir besaßen etwas viel Wertvolleres: eine unstillbare Neugier und die feste Entschlossenheit, jede Arbeit perfekt auszuführen — selbst wenn noch niemand darauf achtete.",
        "Die ersten Aufträge waren bescheiden wie der Beginn einer noch ungeschriebenen Geschichte. Ein paar Bretter, eine klare Idee und mehr Fragen als fertige Antworten. In der Werkstatt, nicht in Lehrbüchern, eigneten wir uns echtes Wissen an. Jeder Fehler war eine ins Holz geschriebene Lektion, und jeder Erfolg öffnete Türen, die wir zuvor nie zu durchschreiten gewagt hätten.",
        "Mit der Zeit wichen kleinere Aufträge anspruchsvollen Projekten, die zunächst fast unmöglich schienen: ungewöhnliche Maße, Formen jenseits von Standardkatalogen und Materialien, vor denen manch andere Werkstatt kapitulierte. Wir gingen näher heran — denn die schönsten Dinge entstehen dort, wo gewohnte Muster enden."
      ]
    },
    chapter2: {
      number: "02",
      label: "Eigener Standard",
      paragraphs: [
        "Wir lernten schnell, dass Standardlösungen den wahren Bedürfnissen der Menschen selten gerecht werden. Deshalb beginnen wir jedes Projekt so, als wäre es unser erstes — unvoreingenommen, auf der Suche nach einer Form, die einen Raum nicht nur ausfüllt, sondern ihm seine unverwechselbare Seele verleiht.",
        "Über die Jahre hinweg verfeinerten wir jeden einzelnen Arbeitsschritt mit derselben Geduld, mit der man edles Holz schleift — vom vertrauensvollen Kundengespräch und der Materialauswahl bis zum letzten Feinschliff vor der Übergabe des Möbelstücks. Echtes Handwerk zeigt sich nicht in großen Gesten, sondern in Details, die erst auffallen, wenn sie fehlen.",
        "Die wertvollsten Lektionen verdanken wir den Menschen — Kunden, die uns ihre Träume anvertrauten, und Partnern, mit denen wir gemeinsam Großes schufen. Besonderer Dank gilt den Innenarchitekten: Durch die enge Zusammenarbeit lernten wir, technische Zeichnungen wie eine Geschichte zu lesen und fremde gestalterische Visionen ebenso zu achten wie unser eigenes Handwerk.",
        "Wir haben gelernt, aufmerksamer zuzuhören als zu sprechen. Ein hervorragendes Möbelstück beginnt nicht mit dem Einfall des Schreiners, sondern mit dem tiefen Verständnis für die Bedürfnisse des Gegenübers. Vertrauen wächst langsamer als die anspruchsvollste Holzverbindung — und ist viel schneller verloren."
      ]
    },
    chapter3: {
      number: "03",
      label: "Die Entstehung von YAMURA",
      paragraphs: [
        "Aus Jahren des Erprobens, kleiner Rückschläge und stiller Triumphe — an der Werkbank wie am Besprechungstisch — entstand etwas, das wir mit einer größeren Welt teilen wollten: YAMURA wurde geboren.",
        "Wir sind keine Marke, die am Verhandlungstisch entworfen wurde. Wir sind aus einer Werkstatt gewachsen, die nach frisch gesägtem Holz duftet, aus Sägespänen auf dem Boden und aus jenen feinen Korrekturen, von denen außer uns niemand wusste, die für uns aber die Welt bedeuteten.",
        "YAMURA ist die Summe dieses Weges. Und das Versprechen, jedem weiteren Projekt dieselbe Hingabe und Geduld zu widmen wie unserem allerersten."
      ]
    },
    finale: {
      line1: "Geduld hat ihre eigene Form.",
      line2: "Wir haben über ein Jahrzehnt gelernt, sie Brett für Brett zu gestalten.",
      line3: "Heute sind wir bereit, diese Form in Ihre Räume zu bringen."
    }
  },
  projectsPage: {
    seoTitle: "Projekte - YAMURA Maßmöbel",
    seoDescription:
      "Ausgewählte Maßmöbel-Projekte von YAMURA: Küchen, Wohnzimmer, Bäder, Büros und Ankleiden mit höchster Präzision gefertigt.",
    heroEyebrow: "Projekte",
    heroTitle: "Ausgewählte Maßmöbel-Projekte",
    heroSubtitle:
      "Stilrichtungen aus unserem Portfolio: Naturholz, helle Einbauten, ausdrucksstarke Fronten, exklusive Bäder, Büros und Ankleidezimmer."
  },
  proPage: {
    seoTitle: "YAMURA PRO - B2B-Kooperation für Architekten & Planer",
    seoDescription:
      "YAMURA PRO bietet professionelle Fertigungspartnerschaft für Architekturbüros und Innenarchitekten: technische Prüfung, Kalkulation, Möbelbau und Montage.",
    heroEyebrow: "Für Architekten und Innenarchitekten",
    heroTitle: "YAMURA PRO",
    heroClaim: "Ihre Konzeption. Unsere meisterhafte Ausführung.",
    heroLead:
      "Eine verlässliche B2B-Partnerschaft, die Ihr Projekt vom Plan bis zur fertigen Montage begleitet — ohne Kontrollverlust über Vision und Kundenbeziehung.",
    modelButton: "Kooperationsmodell kennenlernen",
    offerButton: "Zum Dealshare-Angebot",
    operatorLabel: "Betreut durch",
    operatorAria: "YAMURA PRO Angebot betreut durch Dealshare",
    introEyebrow: "Gemeinsame Realisierung",
    introTitle: "Sie gestalten. Wir liefern die meisterhafte Ausführung.",
    introLead:
      "YAMURA PRO wurde für Designstudios geschaffen, die einen Partner brauchen, der Pläne versteht, gestalterische Absichten respektiert und diese präzise in Fertigungstechnologie umsetzt. Wir greifen dort ein, wo Konzept auf Produktion, Logistik und Montage trifft.",
    pillarsAria: "Leistungsumfang von YAMURA PRO",
    pillars: [
      {
        number: "01",
        title: "Technische Prüfung",
        text: "Wir prüfen Dokumentation, Materialien und Ausführungsdetails, bevor das Projekt in Produktion geht."
      },
      {
        number: "02",
        title: "Kalkulation & Zeitplan",
        text: "Wir strukturieren den Leistungsumfang, erstellen eine transparente Preiskalkulation und fixieren den Ablauf."
      },
      {
        number: "03",
        title: "Produktion & Montage",
        text: "Wir übernehmen die volle Verantwortung für Fertigung, Logistik und fachgerechte Montage nach Plan."
      },
      {
        number: "04",
        title: "Betreuung nach Fertigstellung",
        text: "Auch nach der Übergabe stehen wir für Feineinstellungen, Wartung oder Ergänzungen verlässlich bereit."
      }
    ],
    modelEyebrow: "Klare Aufgabenverteilung",
    modelTitle: "Ein Projekt. Drei klar definierte Rollen.",
    modelRoles: [
      {
        number: "01",
        label: "Architekturbüro",
        title: "Vision & Kundenführung",
        text: "Sie führen den Kunden, entwerfen das Raumkonzept und treffen ästhetische Entscheidungen."
      },
      {
        number: "02",
        label: "YAMURA",
        title: "Technik & Ausführung",
        text: "Wir prüfen Lösungen, kalkulieren, produzieren, montieren und bürgen für höchste Qualität."
      },
      {
        number: "03",
        label: "Dealshare",
        title: "Kooperationsmanagement",
        text: "Dealshare strukturiert das Briefing, qualifiziert das Vorhaben und begleitet den B2B-Prozess."
      }
    ],
    gainsEyebrow: "Vorteile für Planungsbüros",
    gainsTitle: "Ein starker Partner, der Ihre Planung optimal unterstützt.",
    gains: [
      "Sie behalten die volle Urheberschaft und die direkte Kundenbeziehung.",
      "Ein einziges eingespieltes Team verantwortet technische Vorbereitung und Bau.",
      "Sie erhalten klare Informationen zu Leistungsumfang, Kosten und Baufortschritt.",
      "Reichen Sie einzelne individuelle Projekte ein oder etablieren Sie eine feste Partnerschaft."
    ],
    handoffEyebrow: "Betreut durch",
    handoffTitle: "Das detaillierte YAMURA PRO Angebot finden Sie auf Dealshare.",
    handoffText:
      "Dort finden Sie den vollständigen Leistungsumfang, den Prozessablauf und das Briefing-Formular für konkrete Projekte oder eine langfristige Zusammenarbeit.",
    handoffButton: "Angebot auf Dealshare ansehen",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Bevor wir starten.",
    faqs: [
      {
        question: "Übernimmt YAMURA den direkten Kontakt zu meinem Kunden?",
        answer:
          "Wir schreiben kein starres Schema vor. Zu Beginn stimmen wir die Kommunikationsregeln so ab, dass Ihr Büro stets die Gesprächsführung und volle Kontrolle behält."
      },
      {
        question: "In welcher Phase sollte ein Projekt eingereicht werden?",
        answer:
          "Am meisten Mehrwert bieten wir vor Abschluss der Ausführungsplanung, kalkulieren aber auch fertig ausgearbeitete Projekte. Je früher wir einbezogen werden, desto einfacher lassen sich spätere Anpassungen vermeiden."
      },
      {
        question: "Realisieren Sie Projekte anderer Planungsbüros?",
        answer:
          "Ja. Wir arbeiten auf Basis der Pläne von Designern und Architekten und ergänzen diese um die werktechnischen Details für Produktion und Montage."
      },
      {
        question: "Wie startet die Zusammenarbeit?",
        answer:
          "Rufen Sie das YAMURA PRO Angebot auf Dealshare auf und füllen Sie das kurze Briefing aus. Auf dieser Basis besprechen wir das weitere Vorgehen."
      }
    ]
  }
};
