# Portfolio Website

Personal engineering portfolio website built with [Astro](https://astro.build), featuring structured case studies, resume data, and project showcases.

## 📁 Repository Structure

```text
├── public/                     # Static files served directly at root
│   ├── assets/                 # Site-wide media (e.g. my_photo.jpg)
│   ├── previews/               # Project card preview cards (SVG/JPG)
│   └── projects/               # Web-optimized case-study images (/projects/<id>/...)
│       ├── ningsih-app/
│       └── orla/
├── src/                        # Astro application source code
│   ├── components/             # Reusable Astro components
│   ├── content/                # Astro Content Collections (markdown/MDX)
│   │   ├── projects/           # Long-form case studies (*.mdx)
│   │   └── writing/            # Technical articles (*.md)
│   ├── data/                   # Structured data collections (resume.yaml)
│   ├── layouts/                # Astro layout templates
│   ├── pages/                  # Route entrypoints
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/           # /projects list and /projects/[id] detail routes
│   │   ├── resume/
│   │   ├── writing/
│   │   └── index.astro
│   ├── styles/                 # Global styling
│   └── content.config.ts       # Content schema & loaders definition
├── sources/                    # Raw project artifacts & sources of truth
│   ├── master-resume.yaml      # Master resume source
│   ├── ningsih-app/            # Original repo exports, uncompressed assets, and README
│   └── orla-ecommerce/         # Original repo exports, uncompressed diagrams, and README
├── scripts/                    # Build & asset optimization scripts
└── docs/                       # Architectural & agent documentation
```

### Directory Roles at a Glance

- **`src/content/projects/`**: Case study MDX files powering dynamic routes.
- **`src/pages/projects/`**: Astro pages defining `/projects` and `/projects/[id]`.
- **`public/projects/`**: Web-ready, compressed static images referenced inside case studies.
- **`public/previews/`**: Card preview thumbnails used on the home and project catalog pages.
- **`sources/`**: Raw upstream artifacts, diagrams, original READMEs, and master resume.

## 🧞 Development Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `http://localhost:4321` |
| `npm run build` | Builds static site bundle to `./dist/` |
| `npm run preview` | Previews the production build locally |

