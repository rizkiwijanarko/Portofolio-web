import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicRoot = path.join(root, 'public');
const projectsRoot = path.join(root, 'src', 'content', 'projects');
const missing = [];
let checked = 0;

const checkAsset = (asset, source) => {
  if (!asset || /^https?:\/\//i.test(asset)) return;

  const relative = asset.replace(/^\/+/, '').split('/').join(path.sep);
  const target = path.join(publicRoot, relative);
  checked += 1;
  if (!fs.existsSync(target)) {
    missing.push(`${source} -> ${asset}`);
  }
};

checkAsset('/Kharisma_Rizki_Wijanarko_CV.pdf', 'résumé download');

for (const filename of fs.readdirSync(projectsRoot).filter((name) => name.endsWith('.mdx'))) {
  const filepath = path.join(projectsRoot, filename);
  const source = fs.readFileSync(filepath, 'utf8');
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/m)?.[1] ?? '';
  const previewAvailable = /^previewAvailable:\s*true\s*$/m.test(frontmatter);

  if (previewAvailable) {
    const preview = frontmatter.match(/^preview:\s*["']([^"']+)["']\s*$/m)?.[1];
    if (!preview) {
      missing.push(`${filename} -> previewAvailable is true but preview is missing`);
    } else {
      checkAsset(preview, filename);
    }
  }

  for (const match of source.matchAll(/<PublicImage\b[\s\S]*?\bsrc\s*=\s*["']([^"']+)["'][\s\S]*?\/>/g)) {
    checkAsset(match[1], filename);
  }
}

if (missing.length) {
  console.error('Asset validation failed:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Asset validation passed: ${checked} local assets checked.`);
