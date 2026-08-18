# Survey: Free Static Hosting Options

**Ticket:** [GitHub issue #2 — "Survey free static hosting options"](https://github.com/rizkiwijanarko/Portofolio-web/issues/2) (wayfinder research)
**Date:** 2026
**Scope:** Free-only hosting for a small static portfolio (likely [Astro](https://astro.build/), possibly Next.js static export). Repo: `rizkiwijanarko/Portofolio-web`. A custom domain is undecided but possible later.

---

## GitHub Pages

- **Free:** Free forever on GitHub Free for public repos. No credit card; nothing to outgrow.
- **Custom domain:** Yes — with automatic HTTPS; set via repo settings + `CNAME` file.
- **CI/CD:** Yes — the repo *is* the deployment unit. A GitHub Actions workflow (e.g. `actions/deploy-pages`) rebuilds and republishes on every push. Astro and Next static export both supported. Public-repo Actions minutes are free.
- **Limits:** Published site ≤ 1 GB; **soft** 100 GB/month bandwidth; **soft** 10 builds/hour (not enforced when building via a custom Actions workflow); deployments time out at 10 min; one user/org site per account (project sites unlimited).
- **Gotchas:** Terms prohibit commercial use (fine for a personal portfolio). Overages are handled by email/rate-limit — never billed, never paused. Builds consume your GitHub Actions quota (free on public repos).
- **Sources:** [GitHub Pages limits (official)](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

## Netlify Free

- **Free:** $0 "forever", no card. ⚠️ Since Sept 4 2025, new accounts run on **credits**: 300/month shared across bandwidth (20 credits/GB), production deploys (15 each), requests (2 per 10k), compute. That's **≤ ~15 GB bandwidth/month** — far below the old legacy 100 GB + 300 build-min tier (kept only by pre-Sept-2025 accounts).
- **Custom domain:** Yes — with SSL, free.
- **CI/CD:** Yes — git-connected auto-deploy from GitHub; unlimited branch/PR previews.
- **Limits:** 300 credits/month is a **hard** cap shared between deploys and bandwidth; 1 concurrent build.
- **Gotchas:** When credits run out the **site pauses until next month** (no bill, but downtime) — and all projects on the account pause together. Daily deploys alone would exhaust the allowance. Weakest fit for a set-and-forget static portfolio.
- **Sources:** [Netlify pricing (official)](https://www.netlify.com/pricing/), [Introducing Netlify's Free plan (official)](https://www.netlify.com/blog/introducing-netlify-free-plan/), [Netlify free tier explained 2026 (independent)](https://supadrop.host/blog/netlify-pricing-free-tier-limits/)

## Cloudflare Pages Free

- **Free:** $0, no card. Pro ($20/mo) only adds more builds/concurrency — unneeded here.
- **Custom domain:** Yes — up to 100 custom domains per project, automatic SSL, free Cloudflare DNS.
- **CI/CD:** Yes — connect the GitHub repo, set the build command, every push deploys; per-commit preview URLs; unlimited seats.
- **Limits:** 500 builds/month (1 at a time); **unlimited static requests**; **unlimited bandwidth**; unlimited sites. Effectively no ceiling for a small portfolio (~16 builds/day).
- **Gotchas:** Only binds if you add serverless Functions (drawn from the Workers quota: 100k requests/day free). A pure static site uses none. No DNS cost.
- **Sources:** [Cloudflare Pages (official pricing)](https://pages.cloudflare.com/), [Pages limits (official docs)](https://developers.cloudflare.com/pages/platform/limits/), [Cloudflare free tier limits (independent)](https://eastondev.com/blog/en/posts/dev/20260526-cloudflare-free-limits/)

## Vercel Hobby

- **Free:** $0 Hobby plan, no card; restricted to **personal, non-commercial** use (fine here).
- **Custom domain:** Yes — up to 50 domains per project, automatic TLS. Hobby can't connect to **Git repos owned by organizations** (personal accounts only).
- **CI/CD:** Yes — git-connected auto-deploy, PR/commit previews, 100 deployments/day.
- **Limits:** 100 GB Fast Data Transfer/month; 6,000 build-execution minutes/month (~100 hours — the ticket's "100 build hours" is the common rounding); 1M edge requests; 1M function invocations; 100 builds/hour; 45-min max build.
- **Gotchas:** Hitting a Hobby limit pauses that feature until the 30-day cycle resets (no billing, no grace). A static site uses a few build minutes/month, so limits rarely bind; the org-repo restriction only bites if the repo moves under a GitHub org.
- **Sources:** [Vercel Hobby plan (official)](https://vercel.com/docs/plans/hobby), [Vercel limits (official)](https://vercel.com/docs/limits), [Vercel Hobby limits (independent)](https://costbench.com/software/developer-tools/vercel/free-plan/)

---

## Recommendation: **GitHub Pages** for v1

1. **100% free CI/CD from the existing GitHub repo.** The site already lives at `github.com/rizkiwijanarko/Portofolio-web`; Pages builds and publishes straight from it via Actions — no second account, no dashboard, no card. Push → deployed.
2. **Limits are irrelevant at portfolio scale, with zero overage risk.** 1 GB size and a *soft* 100 GB/month cap are far above portfolio traffic, and GitHub Pages can neither bill you nor pause your site — an overage is a polite email. Contrast Netlify, whose hard credit cap pauses the site.
3. **Custom domain later is low-friction.** Adding one later is a repo setting + DNS `CNAME` with automatic HTTPS; the default `username.github.io` URL costs nothing and needs no migration.

**Runner-up:** Cloudflare Pages — equally free with unlimited bandwidth and generous 500 builds/month; the better pick if the site ever grows serverless needs or the user prefers Cloudflare's edge/analytics.

**Watch-outs:** keep the portfolio personal (Pages' terms exclude commercial SaaS); note the one-user-site-per-account limit; if a pre-Sept-2025 Netlify account already exists, its legacy 100 GB free tier is worth keeping — otherwise skip Netlify for a static portfolio.
