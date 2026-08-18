// Give Mermaid SVGs explicit intrinsic dimensions so they render in <img>
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'public', 'projects', 'orla');
for (const f of readdirSync(dir).filter((f) => f.endsWith('.svg'))) {
  const p = join(dir, f);
  let c = readFileSync(p, 'utf8');
  const vb = c.match(/viewBox="([^"]+)"/);
  if (!vb) { console.log('SKIP (no viewBox)', f); continue; }
  const nums = vb[1].trim().split(/\s+/).map(Number);
  const vw = nums[2], vh = nums[3];
  if (!Number.isFinite(vw) || !Number.isFinite(vh)) { console.log('BAD viewBox', f, vb[1]); continue; }
  const ratio = vh / vw;
  const w = 1400;
  const h = Math.round(1400 * ratio);
  c = c.replace(/width="[^"]*"/, `width="${w}" height="${h}"`);
  writeFileSync(p, c);
  console.log('FIXED', f, `${w}x${h}`);
}
