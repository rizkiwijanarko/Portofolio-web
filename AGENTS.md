# Agent Skills

## Issue tracker

Issues and specs live in GitHub Issues, managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

## Triage labels

The five canonical triage labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

## Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root, created lazily by `/domain-modeling`. See `docs/agents/domain.md`.

---

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Visual testing

Use `agent-browser` (CDP-based Chrome automation) to inspect and verify the site's look and behavior — not headless Chrome flags or Puppeteer scripts.

- `agent-browser open <url>` — navigate (local `http://localhost:4321/Portofolio-web/` or the live site)
- `agent-browser screenshot` — capture the current view; the PNG lands in `~/.agent-browser/tmp/screenshots/`
- `agent-browser snapshot` — accessibility-tree snapshot with `@eN` refs for structure checks and interaction
- `agent-browser click @eN` / `fill @eN "text"` — interact via refs
- `agent-browser close` — always close when done

For any change affecting look, layout, or a11y: screenshot before/after, verify with the vision tool, and check the snapshot for heading structure and link/button names. Prefer `agent-browser` over screenshots-only checks — the a11y snapshot catches what pixels miss.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
