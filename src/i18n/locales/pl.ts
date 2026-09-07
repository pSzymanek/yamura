import type { TranslationDictionary } from "../types";

export const pl: TranslationDictionary = {
  locale: "pl",
  localeName: "Polski",
  seo: {
    title: "YAMURA - meble na wymiar",
    description:
      "Polska firma projektująca i produkująca meble na wymiar do domów, mieszkań, biur i lokali komercyjnych. Lokalna produkcja i japońska precyzja."
  },
  common: {
    skipToContent: "Przejdź do treści",
    homeAriaLabel: "YAMURA - strona główna",
    mainNavAriaLabel: "Nawigacja główna",
    mobileNavAriaLabel: "Nawigacja mobilna",
    footerNavAriaLabel: "Nawigacja w stopce",
    legalNavAriaLabel: "Dokumenty i prywatność",
    quoteButton: "Wyceń projekt",
    menuButton: "Menu",
    close: "Zamknij",
    allRightsReserved: "Wszystkie prawa zastrzeżone.",
    privacyPolicy: "Polityka prywatności",
    terms: "Regulamin",
    cookieSettings: "Ustawienia cookies",
    provenance: "Polska firma · Polska produkcja · Japońska precyzja",
    ordersLabel: "Zamówienia",
    phoneLabel: "Telefon",
    locationLabel: "Lokalizacja",
    headquartersLabel: "Siedziba",
    findUsLabel: "Znajdź nas",
    mapAddressLabel: "Mapa dojazdu",
    openInGoogleMaps: "Otwórz w Google Maps"
  },
  navigation: [
    { label: "O nas", href: "/o-nas/" },
    { label: "Oferta", href: "/#oferta" },
    { label: "Realizacje", href: "/realizacje/" },
    { label: "Proces", href: "/#proces" },
    { label: "Yamura PRO", href: "/yamura-pro/" },
    { label: "Kontakt", href: "/kontakt/" }
  ],
  hero: {
    title: "Tworzymy meble<br />dopasowane do Ciebie",
    description:
      "Projektujemy i produkujemy meble, które łączą estetykę, funkcjonalność i najwyższą jakość wykonania.",
    provenance: "Polska marka · Japońska precyzja",
    ctaButton: "Poznaj nas",
    arrowAriaLabel: "Przejdź do oferty"
  },
  categories: {
    eyebrow: "Oferta",
    title: "Meble na wymiar",
    description:
      "Od projektu po montaż - kompleksowa realizacja mebli do domu, biura i przestrzeni komercyjnych. Z dbałością o każdy detal.",
    items: [
      {
        title: "Kuchnie",
        slug: "kuchnie",
        image: "/images/categories/kuchnie-projekt.webp",
        alt: "Plansza projektowa kuchni z wyspą i zabudową na wymiar"
      },
      {
        title: "Salony",
        slug: "salony",
        image: "/images/categories/salony-projekt.webp",
        alt: "Plansza projektowa salonu z zabudową ściany telewizyjnej"
      },
      {
        title: "Łazienki",
        slug: "lazienki",
        image: "/images/categories/lazienki-projekt.webp",
        alt: "Plansza projektowa łazienki z ryflowaną szafką"
      },
      {
        title: "Biura",
        slug: "biura",
        image: "/images/categories/biura-projekt.webp",
        alt: "Plansza projektowa biura z meblami wykonywanymi na wymiar"
      },
      {
        title: "Inne",
        slug: "inne",
        image: "/images/categories/inne-projekt.webp",
        alt: "Plansza projektowa różnych zabudów meblowych na wymiar"
      }
    ]
  },
  benefits: {
    ariaLabel: "Korzyści współpracy z YAMURA",
    items: [
      {
        title: "Indywidualny projekt",
        text: "Dopasowany do Twoich potrzeb",
        icon: "plan"
      },
      {
        title: "Wysoka jakość",
        text: "Trwałe materiały i solidne wykonanie",
        icon: "quality"
      },
      {
        title: "Kompleksowa obsługa",
        text: "Od koncepcji po montaż",
        icon: "service"
      },
      {
        title: "Polska marka i produkcja",
        text: "Polska firma i lokalne wykonanie",
        icon: "local"
      }
    ]
  },
  brandManifest: {
    label: "YAMURA | Wyprodukowano w Polsce",
    title: "Polskie rzemiosło.<br />Japońska kultura detalu.",
    description:
      "YAMURA to polska firma i lokalnie realizowana produkcja. Z dalekowschodnich tradycji czerpiemy podejście do dyscypliny i precyzji, którą zapewniamy w każdym detalu naszych realizacji.",
    principlesAriaLabel: "Fundamenty marki YAMURA",
    principles: [
      {
        number: "01",
        title: "Polski kapitał",
        text: "Niezależna marka rozwijana i zarządzana w Polsce."
      },
      {
        number: "02",
        title: "Polska produkcja",
        text: "Meble wykonywane lokalnie, blisko klientów i ich wnętrz."
      },
      {
        number: "03",
        title: "Japońska precyzja",
        text: "Prostota formy, konsekwencja procesu i dbałość o detal."
      }
    ]
  },
  projects: {
    eyebrow: "Realizacje",
    title: "Różne wnętrza. Jeden standard wykonania.",
    description:
      "Zobacz wybrane realizacje YAMURA: kuchnie, zabudowy, wnętrza i przestrzenie komercyjne wykonane na wymiar.",
    filtersAriaLabel: "Filtry realizacji",
    filterAll: "Wszystkie",
    filters: {
      Wszystkie: "Wszystkie",
      Kuchnie: "Kuchnie",
      Zabudowy: "Zabudowy",
      Wnętrza: "Wnętrza",
      Komercyjne: "Komercyjne"
    },
    showMore: "Pokaż więcej realizacji",
    showLess: "Pokaż mniej",
    openProjectAria: "Otwórz realizację",
    dialogAria: "Podgląd realizacji",
    dialogCloseAria: "Zamknij podgląd",
    dialogPrevAria: "Poprzednia realizacja",
    dialogNextAria: "Następna realizacja"
  },
  process: {
    eyebrow: "Jak pracujemy",
    title: "Od pierwszej rozmowy do gotowego montażu.",
    steps: [
      {
        number: "01",
        title: "Rozmowa",
        text: "Poznajemy Twoje potrzeby, przestrzeń i oczekiwany zakres realizacji."
      },
      {
        number: "02",
        title: "Pomiar",
        text: "Wykonujemy dokładne pomiary i analizujemy możliwości wnętrza."
      },
      {
        number: "03",
        title: "Projekt i wycena",
        text: "Przygotowujemy koncepcję, dobieramy materiały i przedstawiamy koszt realizacji."
      },
      {
        number: "04",
        title: "Produkcja",
        text: "Wykonujemy meble z dbałością o każdy detal."
      },
      {
        number: "05",
        title: "Montaż",
        text: "Dostarczamy i montujemy gotową zabudowę w ustalonym terminie."
      }
    ]
  },
  contactCTA: {
    title: "Masz pomysł na swoje wnętrze?",
    description:
      "Opowiedz nam, czego potrzebujesz. Przygotujemy rozwiązanie dopasowane do Twojej przestrzeni.",
    consultationButton: "Umów konsultację",
    emailButton: "Napisz do nas"
  },
  contactForm: {
    eyebrow: "Zapytanie o realizację",
    title: "Opowiedz nam o swojej przestrzeni.",
    intro: "Przekaż najważniejsze informacje. Odpowiemy i ustalimy kolejny krok.",
    labels: {
      name: "Imię i nazwisko",
      email: "E-mail",
      phone: "Telefon",
      projectType: "Rodzaj realizacji",
      projectTypeSelect: "Wybierz",
      projectTypeOptions: {
        kitchen: "Kuchnia",
        livingRoom: "Salon",
        bathroom: "Łazienka",
        office: "Biuro",
        other: "Inna zabudowa"
      },
      location: "Miejsce realizacji",
      message: "Wiadomość",
      consent:
        "Akceptuję przetwarzanie danych w celu odpowiedzi na zapytanie zgodnie z polityką prywatności.",
      submit: "Wyślij zapytanie",
      submitting: "Wysyłanie..."
    },
    status: {
      success: "Dziękujemy. Wiadomość została wysłana.",
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.",
      mailtoNotice: "Otwieramy wiadomość w Twoim programie pocztowym."
    }
  },
  cookieConsent: {
    ariaLabel: "Ustawienia prywatności",
    label: "Twoja prywatność",
    title: "Ustawienia cookies",
    description:
      "Używamy technologii niezbędnych do działania strony. Za Twoją zgodą możemy także używać analityki GA4 oraz narzędzi reklamowych Meta. Możesz zaakceptować wszystkie, odrzucić opcjonalne lub wybrać ustawienia.",
    necessaryOnly: "Tylko niezbędne",
    customize: "Wybierz ustawienia",
    acceptAll: "Akceptuję wszystkie",
    centerLabel: "Centrum prywatności",
    centerTitle: "Wybierz zakres zgody",
    centerDescription: "Ustawienia opcjonalne możesz zmienić w dowolnym momencie z poziomu stopki strony.",
    necessaryTitle: "Niezbędne",
    necessaryDesc: "Zapamiętują wybór prywatności i zapewniają podstawowe działanie serwisu.",
    necessaryAlwaysActive: "Zawsze aktywne",
    necessaryAria: "Cookies niezbędne są zawsze aktywne",
    analyticsTitle: "Analityczne",
    analyticsDesc: "Pozwalają mierzyć korzystanie ze strony za pomocą Google Analytics 4.",
    marketingTitle: "Marketingowe",
    marketingDesc: "Pozwalają mierzyć kampanie i dopasowywać reklamy za pomocą narzędzi Meta.",
    back: "Wróć",
    save: "Zapisz wybór"
  },
  inspirationPrompt: {
    eyebrow: "Wnętrza i inspiracje",
    title: "Moda na japandi trwa",
    p1: "Szukasz inspiracji do swojego wnętrza? Zajrzyj na nasz Pinterest i odkryj pomysły na meble oraz aranżacje.",
    p2: "A jeśli chcesz, żebyśmy wykonali takie meble dla Ciebie, skontaktuj się z nami. Tworzymy meble według Twojej wizji.",
    pinterestButton: "Inspiracje na Pinterest",
    contactButton: "Skontaktuj się z nami"
  },
  contactPage: {
    eyebrow: "Kontakt",
    title: "Wycena i konsultacja projektu",
    description: "Opisz przestrzeń, zakres prac i termin. Odezwiemy się z kolejnym krokiem.",
    detailsTitle: "Porozmawiajmy o Twojej realizacji."
  },
  aboutPage: {
    seoTitle: "O nas - YAMURA | Polska marka mebli na wymiar",
    seoDescription:
      "Poznaj historię YAMURA: kilkanaście lat doświadczenia w projektowaniu i produkcji mebli na wymiar, rzemiosło, współpraca z projektantami i dbałość o detal.",
    heroEyebrow: "O nas",
    heroTitle: "Historia YAMURA",
    heroSubtitle: "Rzemiosło, cierpliwość i kilkanaście lat doświadczenia.",
    leadEyebrow: "Początek",
    leadTitle: "Zaczęło się od czegoś małego.",
    chapter1: {
      number: "01",
      label: "Pierwsze kroki",
      paragraphs: [
        "Kilkanaście lat temu, gdy stawialiśmy pierwsze kroki w świecie mebli na wymiar, nie mieliśmy jeszcze marki wartej zapamiętania. Mieliśmy za to coś cenniejszego — ciekawość, która nie dawała nam spokoju, i upór, by robić wszystko dobrze, nawet gdy nikt jeszcze na to nie patrzył.",
        "Pierwsze realizacje były skromne niczym początek nieopowiedzianej historii. Kilka desek, prosty zamysł i więcej pytań niż gotowych odpowiedzi. To właśnie dzięki nim, a nie podręcznikom, zdobywaliśmy prawdziwą wiedzę. Każdy błąd był lekcją zapisaną w drewnie, a każdy sukces otwierał drzwi, których wcześniej nie odważylibyśmy się przekroczyć.",
        "Z czasem drobne zlecenia ustępowały miejsca realizacjom, które początkowo wydawały się niemal niemożliwe. Nietypowe wymiary, formy niemieszczące się w katalogach i materiały, przy których niejeden warsztat rozkładał ręce. My podchodziliśmy do nich bliżej — bo najpiękniejsze rzeczy rodzą się zwykle tam, gdzie kończą się utarte schematy."
      ]
    },
    chapter2: {
      number: "02",
      label: "Własny standard",
      paragraphs: [
        "Nauczyliśmy się, że standardowe rozwiązania rzadko odpowiadają prawdziwym potrzebom człowieka. Dlatego każdy projekt zaczynamy tak, jakby był pierwszym — bez uprzedzeń, poszukując formy, która nie tylko wypełni przestrzeń, ale nada jej właściwy ton.",
        "Przez lata doskonaliliśmy każdy etap pracy z taką samą cierpliwością, z jaką szlifuje się drewno — od rozmowy z klientem i wyboru materiałów po ostatnie poprawki przed oddaniem mebla w nowy dom. Wiemy, że rzemiosło nie kryje się w wielkich gestach, lecz w detalach, których nikt nie zauważa, dopóki ich nie zabraknie.",
        "Najcenniejsze lekcje przynieśli nam jednak ludzie — klienci, którzy powierzali nam swoje potrzeby i marzenia, oraz partnerzy, z którymi podejmowaliśmy się projektów przerastających jedną parę rąk. Szczególnie wiele zawdzięczamy projektantom wnętrz. Dzięki współpracy z nimi nauczyliśmy się czytać rysunek techniczny jak opowieść, a nie tylko zbiór liczb, oraz szanować cudzą wizję tak samo jak własne rzemiosło.",
        "Nauczyliśmy się słuchać uważniej niż mówić. Dobry mebel zaczyna się bowiem nie od pomysłu stolarza, lecz od właściwie zrozumianej potrzeby drugiego człowieka. Zaufanie buduje się wolniej niż najbardziej skomplikowane połączenie — i znacznie łatwiej je stracić."
      ]
    },
    chapter3: {
      number: "03",
      label: "Narodziny YAMURA",
      paragraphs: [
        "Z lat prób, potknięć i cichych zwycięstw — tych przy warsztacie i tych przy stole rozmów — wyrosło coś, czym chcieliśmy podzielić się szerzej. Tak narodziła się Yamura.",
        "Nie jesteśmy marką stworzoną przy stole negocjacyjnym. Wyrośliśmy z warsztatu pachnącego świeżo ciętym drewnem, z trocin osiadających na podłodze i z poprawek, o których nikt poza nami nie wiedział, a które znaczyły dla nas wszystko.",
        "Yamura jest sumą tej drogi. I obietnicą, że każdy kolejny projekt potraktujemy z taką samą cierpliwością jak pierwszy."
      ]
    },
    finale: {
      line1: "Cierpliwość ma swój kształt.",
      line2: "Uczyliśmy się go nadawać przez kilkanaście lat, deska po desce.",
      line3: "Dziś jesteśmy gotowi nadać go Twojej przestrzeni."
    }
  },
  projectsPage: {
    seoTitle: "Realizacje YAMURA - meble na wymiar",
    seoDescription:
      "Wybrane projekty mebli na wymiar YAMURA: kuchnie, salony, łazienki, biura i garderoby wykonane z najwyższą precyzją.",
    heroEyebrow: "Realizacje",
    heroTitle: "Wybrane projekty mebli na wymiar",
    heroSubtitle:
      "Przykładowe kierunki stylistyczne: drewno, jasne zabudowy, kolorowe fronty, łazienki, biura i garderoby."
  },
  proPage: {
    seoTitle: "YAMURA PRO - współpraca dla architektów i projektantów",
    seoDescription:
      "YAMURA PRO to współpraca wykonawcza dla biur architektonicznych i projektantów wnętrz: weryfikacja techniczna, wycena, produkcja i montaż mebli na wymiar.",
    heroEyebrow: "Dla architektów i projektantów",
    heroTitle: "YAMURA PRO",
    heroClaim: "Twoja koncepcja. Nasze wykonanie.",
    heroLead:
      "Partnerstwo B2B, które pomaga przeprowadzić projekt od dokumentacji do gotowego montażu bez utraty kontroli nad wizją i relacją z klientem.",
    modelButton: "Poznaj model współpracy",
    offerButton: "Przejdź do oferty",
    operatorLabel: "Obsługiwane przez",
    operatorAria: "Oferta YAMURA PRO obsługiwana przez Dealshare",
    introEyebrow: "Wspólna realizacja",
    introTitle: "Projektujesz. My dowozimy wykonanie.",
    introLead:
      "YAMURA PRO powstała dla pracowni, które potrzebują partnera potrafiącego czytać dokumentację, rozumieć intencję projektową i przełożyć ją na technologię wykonania. Wchodzimy tam, gdzie koncepcja spotyka produkcję, logistykę i montaż.",
    pillarsAria: "Zakres współpracy YAMURA PRO",
    pillars: [
      {
        number: "01",
        title: "Weryfikacja techniczna",
        text: "Sprawdzamy dokumentację, materiały i detale wykonawcze, zanim projekt trafi do produkcji."
      },
      {
        number: "02",
        title: "Wycena i harmonogram",
        text: "Porządkujemy zakres realizacji, przygotowujemy wycenę i ustalamy realny plan kolejnych etapów."
      },
      {
        number: "03",
        title: "Produkcja i montaż",
        text: "Bierzemy odpowiedzialność za wykonanie, logistykę i montaż zgodny z zaakceptowaną dokumentacją."
      },
      {
        number: "04",
        title: "Opieka po realizacji",
        text: "Po odbiorze pozostajemy dostępni w sprawach wymagających regulacji, serwisu lub uzupełnień."
      }
    ],
    modelEyebrow: "Jasny podział odpowiedzialności",
    modelTitle: "Jedna realizacja. Trzy dobrze określone role.",
    modelRoles: [
      {
        number: "01",
        label: "Pracownia",
        title: "Wizja i relacja",
        text: "Prowadzisz klienta, tworzysz koncepcję i podejmujesz decyzje estetyczne."
      },
      {
        number: "02",
        label: "YAMURA",
        title: "Technologia i wykonanie",
        text: "Weryfikujemy rozwiązania, wyceniamy, produkujemy, montujemy i odpowiadamy za jakość."
      },
      {
        number: "03",
        label: "Dealshare",
        title: "Obsługa współpracy",
        text: "Dealshare porządkuje brief, kwalifikuje projekt i prowadzi dalszy proces kontaktu dotyczący oferty B2B."
      }
    ],
    gainsEyebrow: "Korzyści dla pracowni",
    gainsTitle: "Partner wykonawczy, który wspiera Twój projekt.",
    gains: [
      "Zachowujesz autorstwo projektu i prowadzisz relację ze swoim klientem.",
      "Masz jeden zespół odpowiedzialny za techniczne przygotowanie i wykonanie mebli.",
      "Otrzymujesz czytelne informacje o zakresie, kosztach i postępie realizacji.",
      "Możesz zgłaszać zarówno pojedyncze projekty, jak i stałą współpracę wykonawczą."
    ],
    handoffEyebrow: "Obsługiwane przez",
    handoffTitle: "Szczegółowa oferta YAMURA PRO jest dostępna w Dealshare.",
    handoffText:
      "Tam znajdziesz pełny zakres współpracy, przebieg procesu i brief, od którego możemy rozpocząć rozmowę o konkretnym projekcie albo stałej obsłudze Twojej pracowni.",
    handoffButton: "Zobacz ofertę w Dealshare",
    faqEyebrow: "Najczęstsze pytania",
    faqTitle: "Zanim zaczniemy.",
    faqs: [
      {
        question: "Czy YAMURA przejmuje kontakt z moim klientem?",
        answer:
          "Nie narzucamy jednego modelu komunikacji. Na początku ustalamy zasady kontaktu tak, aby pracownia zachowała prowadzenie relacji i pełną kontrolę nad projektem."
      },
      {
        question: "Na jakim etapie najlepiej zgłosić projekt?",
        answer:
          "Najwięcej możemy wnieść jeszcze przed zamknięciem dokumentacji wykonawczej, ale wyceniamy również projekty gotowe do realizacji. Im wcześniej zobaczymy założenia, tym łatwiej ograniczyć późniejsze korekty."
      },
      {
        question: "Czy realizujecie projekty przygotowane przez inną pracownię?",
        answer:
          "Tak. Pracujemy na dokumentacji projektantów i architektów, uzupełniając ją o ustalenia techniczne potrzebne do produkcji i montażu."
      },
      {
        question: "Jak rozpocząć współpracę?",
        answer:
          "Przejdź do oferty YAMURA PRO w Dealshare i uzupełnij krótki brief. Na jego podstawie ustalimy, czy chodzi o wycenę konkretnego projektu, konsultację techniczną czy stałą obsługę wykonawczą."
      }
    ]
  }
};
