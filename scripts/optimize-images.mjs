// Optimize preview + case-study images for web (resize + compress)
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = join(root, 'public', 'projects');

const jobs = [
  // previews (16:10 cards, ~1200px wide)
  ['public/previews/ningsih-app.jpg', 'public/previews/ningsih-app.jpg', 1200, 80],
  ['public/previews/orla.jpg', 'public/previews/orla.jpg', 1200, 80],
  // ningsih-app case study
  ['public/projects/ningsih-app/architecture.jpg', join(out, 'ningsih-app/architecture.jpg'), 1400, 80],
  ['public/projects/ningsih-app/how-it-works.jpg', join(out, 'ningsih-app/how-it-works.jpg'), 1400, 80],
  ['public/projects/ningsih-app/agentic-lifecycle.jpg', join(out, 'ningsih-app/agentic-lifecycle.jpg'), 1400, 80],
  ['public/projects/ningsih-app/screen-home.png', join(out, 'ningsih-app/screen-home.png'), 700, 80],
  ['public/projects/ningsih-app/screen-chat.png', join(out, 'ningsih-app/screen-chat.png'), 700, 80],
  ['public/projects/ningsih-app/screen-goals.png', join(out, 'ningsih-app/screen-goals.png'), 700, 80],
  ['public/projects/ningsih-app/screen-focus.png', join(out, 'ningsih-app/screen-focus.png'), 700, 80],
  ['public/projects/ningsih-app/screen-habits.png', join(out, 'ningsih-app/screen-habits.png'), 700, 80],
  // orla case study
  ['public/projects/orla/storefront.png', join(out, 'orla/storefront.png'), 1400, 80],
  ['public/projects/orla/product-detail.png', join(out, 'orla/product-detail.png'), 1400, 80],
  ['public/projects/orla/checkout.png', join(out, 'orla/checkout.png'), 1400, 80],
  ['public/projects/orla/payment.png', join(out, 'orla/payment.png'), 1400, 80],
  ['public/projects/orla/account.png', join(out, 'orla/account.png'), 1400, 80],
  ['public/projects/orla/admin.png', join(out, 'orla/admin.png'), 1400, 80],
];

for (const [src, dest, width, quality] of jobs) {
  const srcPath = join(root, src);
  const destPath = dest === src ? srcPath : dest;
  const finalDest = destPath.replace(/\.png$/, '.jpg');
  mkdirSync(dirname(finalDest), { recursive: true });
  const tmp = finalDest + '.tmp';
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(tmp);
  // atomic replace
  const { renameSync, rmSync } = await import('node:fs');
  rmSync(finalDest, { force: true });
  renameSync(tmp, finalDest);
  console.log('done', finalDest);
}
