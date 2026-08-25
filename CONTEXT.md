# Portfolio Website

A content-driven portfolio website that positions its owner as an AI Engineer delivering end-to-end AI product engineering for founders and small businesses, while supporting AI Engineer job applications. Content is sourced from the resume and real artifacts, never fabricated.

## Language

**Portfolio**:
The website itself — a collection of pages (Home, Projects, Experience, Writing, Resume, Contact) that present the owner's engineering capability.
_Avoid_: CV site, personal site

**Project (case study)**:
A buildable product or piece of research featured on the site with a full detail page: problem, what was built, role, evidence, status, technical decisions, and next step.
_Avoid_: Work, Portfolio item, Showcase piece

**Project card**:
A summary entry for a project on the Projects page — title, one-line summary, tech stack, status, CTA. Cards link to a case study when one exists, else to GitHub where public.
_Avoid_: Project tile, Listing entry

**Featured product**:
A Project elevated to full case-study status. The current selected set is Ningsih, VentureForge, Orla, and Rizclone; other projects remain accessible as secondary work or résumé entries.
_Avoid_: Major project, Headline project

**Product preview**:
A screenshot or visual showing how an app looks — the primary visual for a Project card or the opening visual on a case-study page. Architecture diagrams are secondary depth, optional inside case-study pages.
_Avoid_: App screenshot, Preview image

**Product-experience screenshot**:
A screenshot showing a product interaction or workflow inside a case study, used as evidence of what was built rather than as the project’s opening preview.
_Avoid_: Product image, UI image

**Source of truth**:
The canonical factual assets (raw materials in `sources/`, master resume, CV PDF, professional photo, architecture diagrams, screenshots, logos) from which all site content is derived. Missing content becomes a TODO placeholder, never a fabrication.
_Avoid_: Reference material, Truth data

**Master résumé**:
The comprehensive factual record of the owner's experiences, projects, skills, and credentials. It is a source document, not necessarily the public website résumé or a role-specific application résumé.
_Avoid_: Public résumé, Application résumé

**Personal SaaS**:
An independently owned SaaS product built and operated by its creator. Ningsih is a personal SaaS built by a solo developer.
_Avoid_: Independent product

**Client website**:
A website built for a paying client. Orla.co is a public client website for a women's clothing business, currently a functional staging build awaiting client deployment; private operational records remain redacted.
_Avoid_: Personal project, Internal client system

**Application résumé**:
A tailored résumé created from the master résumé for a specific job or role. It may select and emphasize different evidence without changing the underlying facts.
_Avoid_: Master résumé, General résumé

**Engineering journey**:
An optional career progression timeline for the Experience or Résumé page, showing the path from Python through ML, LLM systems, multi-agent systems, to AI SaaS. It is not part of the focused homepage conversion path.
_Avoid_: Career path, History

**Writing (article)**:
A piece of writing on the Writing page, grouped by topic (AI Engineering, System Architecture, LLMs, Agentic AI, etc.).
_Avoid_: Blog post, Post
