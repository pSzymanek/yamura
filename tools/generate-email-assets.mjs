import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outputDirectory = path.resolve("public/api/email-assets");

const icons = {
  instagram: `
    <rect x="6" y="6" width="28" height="28" rx="6" fill="none" stroke="#171513" stroke-width="2.4"/>
    <circle cx="20" cy="20" r="6.5" fill="none" stroke="#171513" stroke-width="2.4"/>
    <circle cx="28.5" cy="11.5" r="1.7" fill="#171513"/>
  `,
  facebook: `
    <path d="M23.7 35V22h4.4l.7-5.1h-5.1v-3.3c0-1.5.5-2.5 2.6-2.5h2.8V6.5c-.5-.1-2.1-.2-4.1-.2-4.1 0-6.9 2.5-6.9 7.1v3.5h-4.6V22h4.6v13h5.6Z" fill="#171513"/>
  `,
  pinterest: `
    <path d="M20 5.8a14.2 14.2 0 0 0-5.2 27.3c-.2-2.3 0-5 .7-7.2l1.8-7.8s-.5-1.2-.5-2.8c0-2.7 1.5-4.7 3.5-4.7 1.7 0 2.5 1.2 2.5 2.7 0 1.7-1 4-1.7 6.3-.5 1.8 1 3.3 2.8 3.3 3.3 0 5.8-3.5 5.8-8.5 0-4.5-3.2-7.7-7.8-7.7-5.3 0-8.5 4-8.5 8.2 0 1.7.7 3.3 1.7 4.2.2.2.2.3.2.7l-.7 2.5c-.2.8-.8 1-1.5.7-2.7-1.2-4.3-4.7-4.3-7.7 0-6.2 4.5-11.7 12.8-11.7 6.7 0 11.8 4.7 11.8 11 0 6.5-4.2 11.8-9.8 11.8-2 0-3.8-1-4.5-2.3l-1.2 4.7c-.5 2.2-2 4.7-3 6.2 1.5.5 3.2.8 5 .8a14.2 14.2 0 0 0 0-28.3Z" fill="#171513"/>
  `
};

await fs.mkdir(outputDirectory, { recursive: true });

for (const [name, markup] of Object.entries(icons)) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" fill="#d9bc92"/>
      ${markup}
    </svg>
  `;

  await sharp(Buffer.from(svg)).png().toFile(path.join(outputDirectory, `${name}.png`));
}
