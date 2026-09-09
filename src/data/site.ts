export const site = {
  name: "YAMURA",
  owner: "Michał Szwankowski",
  url: "https://yamura.pl",
  ordersEmail: "meble@yamura.pl",
  officialEmail: "biuro@yamura.pl",
  phone: "+48 694 942 645",
  phoneHref: "+48694942645",
  location: "Chorzów / Śląskie",
  registeredAddress: {
    street: "Gabriela Narutowicza 15",
    postalCode: "41-503",
    city: "Chorzów",
    country: "Polska"
  },
  nip: "6272468482",
  regon: "540280719",
  map: {
    address: "Gabriela Narutowicza 15, 41-503 Chorzów",
    embedUrl:
      "https://www.google.com/maps?q=Gabriela%20Narutowicza%2015%2C%2041-503%20Chorz%C3%B3w&output=embed",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gabriela%20Narutowicza%2015%2C%2041-503%20Chorz%C3%B3w"
  },
  socialMedia: [
    { name: "Pinterest", icon: "pinterest", url: "https://pl.pinterest.com/yamurameble/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/yamuradesign/" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/profile.php?id=61592926465245" }
  ],
  pro: {
    dealshareOfferUrl: "https://dealshare.pl/oferty/yamura-pro"
  },
  footerText:
    "Polska firma projektująca i produkująca meble na wymiar do domów, mieszkań, biur i lokali komercyjnych.",
  seo: {
    title: "YAMURA - meble na wymiar",
    description:
      "Polska firma projektująca i produkująca meble na wymiar do domów, mieszkań, biur i lokali komercyjnych. Lokalna produkcja i japońska precyzja."
  }
} as const;
