# Static-Site Framework Survey (2026)

**Ticket:** GitHub issue #5 — "Survey the static-site landscape" · **Branch:** `research/static-site-landscape`
**Question:** which framework for a content-driven (Markdown/MDX case studies), near-zero-JS, free-hosted, clean portfolio built from scratch?
**Verdict:** **Use Astro (v7.x).** Plain HTML/CSS/JS is the fallback if the toolchain itself is unwanted; Gatsby and Next.js are not the right fit.

## Astro — recommended

**Maintenance/ecosystem: healthy and accelerating.** Astro 6.0 shipped March 10, 2026 with a rebuilt dev server, Fonts API, CSP, and stable Live Content Collections ([Astro 6.0](https://astro.build/blog/astro-6/)); Astro 7 shipped June 22, 2026 as a speed release — Rust compiler, Rust Markdown pipeline, Vite 8/Rolldown — with 15–61% faster production builds ([What's new — June 2026](https://astro.build/blog/whats-new-june-2026/), [Astro 7](https://morello.dev/blog/astro-7)). npm `latest` is **7.2.2** (verified via [npm registry](https://registry.npmjs.org/astro/latest)); adopters include Mattel and Garmin.

**Content authoring: purpose-built.** [Content Collections](https://docs.astro.build/en/guides/content-collections/) give typed, schema-validated (Zod 4) content from Markdown/MDX/Markdoc/YAML/JSON with build-time loaders — ideal for case-study-rich project pages — and [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) is first-class. This is Astro's stated niche: "the web framework for content-driven websites."

**Static output & free hosting: ideal.** `astro build` emits plain HTML/CSS/JS with **zero JavaScript by default**; interactivity is opt-in via islands. Output drops unchanged onto GitHub Pages, Netlify, Cloudflare Pages, or Vercel free tiers — no server, no adapter, no paid plan.

**Complexity: low-to-moderate.** No GraphQL layer, no hydration-by-default, no server runtime to reason about — a smaller mental model than Gatsby's or Next.js's.

## Next.js — viable but wrong fit

Next.js 16 (October 21, 2025, [announcement](https://nextjs.org/blog/next-16)) added Cache Components, stable Turbopack, React Compiler support, and supports fully static sites via `output: 'export'` + `generateStaticParams` ([Static Exports](https://nextjs.org/docs/pages/guides/static-exports)), deployable to any free static host.

But its center of gravity is server-first (React Server Components, caching, proxy middleware); static export drops features (no ISR, image optimization, middleware). The content story is manual (`@next/mdx`, hand-rolled routing) versus Astro's content layer, JS ships by default unless you actively avoid client components, and the mental model is heavier than a content site warrants. Fine for a full app; overkill for a portfolio.

## Gatsby — still in maintenance mode

**Correction to the ticket:** Gatsby's last meaningful release was **not** January 2025. Verified via the GitHub releases API ([releases](https://github.com/gatsbyjs/gatsby/releases)): `gatsby@5.16.0` shipped **Jan 26, 2026** (React 19 + Node 24 support — [v5.16 notes](https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/)), then `5.16.1` (Feb 10, 2026).

So Gatsby is **not dead — but still stalled**: after Netlify's February 2023 acquisition and core-team departures ([analysis](https://stackmaven.io/tools/gatsby/), [community discussion](https://github.com/gatsbyjs/gatsby/discussions/39062)), the cadence is maintenance patches only. No v6, no roadmap; React 19 support arrived ~15 months late and is partial (metadata hoisting disabled; experimental Partial Hydration incompatible with React 19). Gatsby Cloud is being folded into Netlify Cloud ([notice](https://www.netlify.com/blog/gatsby-cloud-evolution.md)). Content authoring is decent but gated behind the heavy GraphQL data layer and webpack builds. Starting a new project on a maintenance-mode framework in 2026 is an unnecessary risk.

## Plain HTML/CSS/JS — the zero-build option

No build step, no dependencies, maximal durability; trivially deployable to any free host ([zero-build case](https://troiana.net/insights/how-to-ship-a-static-site-with-zero-build-step/)). It suits a tiny site or an explicit "no toolchain ever" goal. It does **not** fit a case-study-rich portfolio: dozens of project pages with repeating structure mean hand-maintained duplication — no components, no data layer, no Markdown rendering, no RSS/sitemap generation. The maintenance cost quickly exceeds the toolchain cost, and Astro keeps nearly all the plain-HTML benefits (static output, near-zero JS, full design control) while removing that duplication.

## Comparison

| | Astro 7 | Next.js 16 | Gatsby 5.16 | Plain HTML/CSS/JS |
|---|---|---|---|---|
| Default JS shipped | **0** (islands opt-in) | High (server-first) | High (React hydration) | 0 |
| Markdown/MDX story | **First-class content layer** | Manual (`@next/mdx`) | Good (MDX + GraphQL) | None |
| Free static host fit | **Perfect** (pure static) | Good (`output: 'export'`, feature cuts) | Good (pure static) | Perfect |
| Maintenance (2026) | Active (two majors in 2026) | Active (Vercel) | Maintenance-only, no v6 | N/A (no deps) |
| Complexity | Low–moderate | High | High | Lowest, but highest site-maintenance |

## Recommendation: Astro

1. **Near-zero JS by default, by design** — Astro ships zero client JS unless you opt in with islands; a clean, non-noisy, mostly-static case-study site is exactly its target use case.
2. **The best Markdown/MDX authoring story** — schema-validated Content Collections plus a first-class MDX integration map directly onto case-study-rich project pages, built from scratch, with no GraphQL or data-fetching ceremony.
3. **Effortless free static hosting with a healthy ecosystem** — pure static output deploys to GitHub Pages/Netlify/Cloudflare Pages/Vercel free tiers with no server, while the project stays actively developed (two majors in 2026) — unlike Gatsby, which remains in maintenance mode even after React 19 support.

If the toolchain itself is ever deemed unacceptable, the fallback is plain HTML/CSS/JS with a tiny generator — not Next.js or Gatsby.

---

### Sources
- [Astro 6.0 announcement](https://astro.build/blog/astro-6/)
- [What's new in Astro — June 2026 (Astro 7)](https://astro.build/blog/whats-new-june-2026/)
- [Astro 7: What's New, What's Faster (morello.dev)](https://morello.dev/blog/astro-7)
- [Astro — npm registry (7.2.2)](https://registry.npmjs.org/astro/latest)
- [Astro Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
- [@astrojs/mdx docs](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Next.js 16 announcement](https://nextjs.org/blog/next-16)
- [Next.js Static Exports guide](https://nextjs.org/docs/pages/guides/static-exports)
- [Gatsby v5.16 release notes (Jan 26, 2026)](https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/)
- [Gatsby GitHub releases](https://github.com/gatsbyjs/gatsby/releases)
- [Gatsby: React static-site framework … now in maintenance mode (stackmaven.io)](https://stackmaven.io/tools/gatsby/)
- [Is GatsbyJS Officially Dead? (GitHub discussion #39062)](https://github.com/gatsbyjs/gatsby/discussions/39062)
- [Netlify: Gatsby Cloud evolution notice](https://www.netlify.com/blog/gatsby-cloud-evolution.md)
- [How to Ship a Static Site With Zero Build Step (troiana.net)](https://troiana.net/insights/how-to-ship-a-static-site-with-zero-build-step/)
