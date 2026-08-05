import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

type PhotoAsset = {
  id: string;
  file: string;
  credit: string;
  source: string;
  width: number;
  height: number;
};

type LocalImageAsset = {
  input: string;
  file: string;
};

const root = process.cwd();
const logoSources = {
  light: "C:/Users/poczt/Downloads/ChatGPT Image 30 lip 2026, 12_51_05 (1).png",
  dark: "C:/Users/poczt/Downloads/ChatGPT Image 30 lip 2026, 12_51_05 (2).png"
};

const heroSource = "C:/Users/poczt/Downloads/ChatGPT Image 31 lip 2026, 13_11_25.png";

const categorySources: LocalImageAsset[] = [
  {
    input: "C:/Users/poczt/Downloads/ChatGPT Image 5 sie 2026, 12_40_55.png",
    file: "public/images/categories/kuchnie-projekt.webp"
  },
  {
    input: "C:/Users/poczt/Downloads/ChatGPT Image 5 sie 2026, 12_40_51.png",
    file: "public/images/categories/salony-projekt.webp"
  },
  {
    input: "C:/Users/poczt/Downloads/ChatGPT Image 5 sie 2026, 12_40_47.png",
    file: "public/images/categories/lazienki-projekt.webp"
  },
  {
    input: "C:/Users/poczt/Downloads/ChatGPT Image 5 sie 2026, 12_40_43.png",
    file: "public/images/categories/biura-projekt.webp"
  },
  {
    input: "C:/Users/poczt/Downloads/ChatGPT Image 5 sie 2026, 12_40_33.png",
    file: "public/images/categories/inne-projekt.webp"
  }
];

const photos: PhotoAsset[] = [
  {
    id: "19878503",
    file: "public/images/projects/kuchnia-dab.webp",
    credit: "Lisa Anna / Pexels",
    source: "https://www.pexels.com/photo/kitchen-interior-with-oak-wood-furniture-19878503/",
    width: 920,
    height: 720
  },
  {
    id: "6489108",
    file: "public/images/projects/jasny-apartament.webp",
    credit: "Max Vakhtbovych / Pexels",
    source: "https://www.pexels.com/photo/modern-room-with-cupboards-and-wardrobe-6489108/",
    width: 760,
    height: 620
  },
  {
    id: "7746034",
    file: "public/images/projects/zielona-kuchnia.webp",
    credit: "Max Vakhtbovych / Pexels",
    source: "https://www.pexels.com/photo/an-interior-of-a-home-7746034/",
    width: 760,
    height: 620
  },
  {
    id: "30369259",
    file: "public/images/projects/lazienka-minimal.webp",
    credit: "Puscas Adryan / Pexels",
    source: "https://www.pexels.com/photo/elegant-modern-bathroom-vanity-design-30369259/",
    width: 760,
    height: 620
  },
  {
    id: "6782465",
    file: "public/images/projects/garderoba-grafit.webp",
    credit: "Max Vakhtbovych / Pexels",
    source: "https://www.pexels.com/photo/house-interior-with-wardrobe-with-cabinets-and-shelves-6782465/",
    width: 760,
    height: 620
  },
  {
    id: "33827327",
    file: "public/images/projects/biuro-zolty-akcent.webp",
    credit: "Capture Crew / Pexels",
    source: "https://www.pexels.com/photo/modern-office-interior-with-yellow-sofa-33827327/",
    width: 760,
    height: 620
  },
  {
    id: "7746589",
    file: "public/images/projects/terakota.webp",
    credit: "Max Vakhtbovych / Pexels",
    source: "https://www.pexels.com/photo/kitchen-with-red-wooden-cabinet-near-fireplace-7746589/",
    width: 760,
    height: 620
  },
  {
    id: "7746072",
    file: "public/images/projects/salon-ryflowany.webp",
    credit: "Max Vakhtbovych / Pexels",
    source: "https://www.pexels.com/photo/sink-and-closets-in-kitchen-7746072/",
    width: 760,
    height: 620
  },
  {
    id: "7483049",
    file: "public/images/projects/pracownia.webp",
    credit: "cottonbro studio / Pexels",
    source: "https://www.pexels.com/photo/carpenter-making-a-furniture-7483049/",
    width: 780,
    height: 920
  }
];

async function ensureDirFor(filePath: string) {
  await mkdir(path.dirname(path.join(root, filePath)), { recursive: true });
}

async function transparentLogo(input: string, output: string) {
  await ensureDirFor(output);
  const source = sharp(input).ensureAlpha();
  const metadata = await source.metadata();
  const { data, info } = await source.raw().toBuffer({ resolveWithObject: true });
  const bg = [data[0], data[1], data[2]];
  const threshold = 40;

  for (let index = 0; index < data.length; index += 4) {
    const distance =
      Math.abs(data[index] - bg[0]) + Math.abs(data[index + 1] - bg[1]) + Math.abs(data[index + 2] - bg[2]);
    if (distance < threshold) data[index + 3] = 0;
  }

  await sharp(data, { raw: info })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 4 })
    .resize({ width: 520, withoutEnlargement: true })
    .png()
    .toFile(path.join(root, output));

  if (!metadata.width || !metadata.height) {
    throw new Error(`Cannot read logo metadata for ${input}`);
  }
}

async function downloadPhoto(asset: PhotoAsset) {
  await ensureDirFor(asset.file);
  const url = `https://images.pexels.com/photos/${asset.id}/pexels-photo-${asset.id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 Yamura asset preparation" },
    redirect: "follow"
  });

  if (!response.ok) {
    throw new Error(`Photo download failed ${asset.id}: ${response.status}`);
  }

  const input = Buffer.from(await response.arrayBuffer());
  await sharp(input)
    .resize(asset.width, asset.height, { fit: "cover" })
    .webp({ quality: 82 })
    .toFile(path.join(root, asset.file));
}

async function prepareHero() {
  const output = "public/images/hero/kuchnia-salon.webp";
  await ensureDirFor(output);
  await sharp(heroSource)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(path.join(root, output));
}

async function prepareCategory(asset: LocalImageAsset) {
  await ensureDirFor(asset.file);
  await sharp(asset.input)
    .resize(760, 500, {
      fit: "contain",
      background: { r: 247, g: 244, b: 240, alpha: 1 }
    })
    .webp({ quality: 88 })
    .toFile(path.join(root, asset.file));
}

async function writeCredits() {
  const lines = [
    "# Image credits",
    "",
    "Zdjecia demonstracyjne zapisane lokalnie w `public/images/`. Przed publikacja warto podmienic je na prawdziwe realizacje YAMURA.",
    "",
    "- public/images/hero/kuchnia-salon.webp: wizualizacja dostarczona przez klienta",
    ...categorySources.map((asset) => `- ${asset.file}: wizualizacja dostarczona przez klienta`),
    ...photos.map((photo) => `- ${photo.file}: ${photo.credit} - ${photo.source}`)
  ];
  await writeFile(path.join(root, "IMAGE_CREDITS.md"), `${lines.join("\n")}\n`, "utf8");
}

await Promise.all(categorySources.map(prepareCategory));

if (!process.argv.includes("--categories-only")) {
  await transparentLogo(logoSources.dark, "public/images/logo/yamura-dark.png");
  await transparentLogo(logoSources.light, "public/images/logo/yamura-light.png");
  await prepareHero();
  await Promise.all(photos.map(downloadPhoto));
}

await writeCredits();
