import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// Projects — selected case studies and secondary project pages (MDX).
// Structured metadata in frontmatter; body holds the reader-first narrative and
// focused technical evidence.
// ---------------------------------------------------------------------------
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    proof: z.string(),
    problem: z.string().optional(),
    deliverable: z.string().optional(),
    nextStep: z.string().optional(),
    status: z.enum(['building', 'shipped', 'open-source', 'research']),
    context: z.string().optional(),
    maturity: z.string().optional(),
    evidence: z.array(z.string()).default([]),
    category: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    tech: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    previewAvailable: z.boolean().default(false),
    preview: z.string().optional(),
    order: z.number().default(0),
  }),
});

// ---------------------------------------------------------------------------
// Writing — placeholder collection until articles exist.
// ---------------------------------------------------------------------------
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    topic: z.string(),
    status: z.enum(['draft', 'published', 'planned']).default('planned'),
    date: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

// ---------------------------------------------------------------------------
// Resume — the single source of truth for structured facts (jobs, education,
// skills, contact, card-only projects), ingested from the repo's resume YAML.
// ---------------------------------------------------------------------------
const resume = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data' }),
  schema: z.object({
    contact: z.object({
      name: z.string(),
      location: z.string(),
      email: z.string().email(),
      phone: z.string().optional(),
      github: z.string(),
      linkedin: z.string(),
    }),
    summary: z.string(),
    skills: z.array(
      z.object({ label: z.string(), details: z.array(z.string()) })
    ),
    experience: z.array(
      z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        location: z.string(),
        highlights: z.array(z.string()),
      })
    ),
    education: z.array(
      z.object({
        institution: z.string(),
        degree: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        location: z.string(),
        highlights: z.array(z.string()),
      })
    ),
    certifications: z.array(z.string()),
    achievements: z.array(z.string()),
    projects: z.array(
      z.object({
        name: z.string(),
        caseStudyId: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        date: z.string().optional(),
        summary: z.string(),
        tech: z.array(z.string()),
        repoUrl: z.string().optional(),
        category: z.string().optional(),
        status: z.enum(['building', 'shipped', 'open-source', 'research']).optional(),
        context: z.string().optional(),
        maturity: z.string().optional(),
        evidence: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        highlights: z.array(z.string()),
      })
    ),
  }),
});

export const collections = { projects, writing, resume };
