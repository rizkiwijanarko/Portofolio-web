# 🚀 VentureForge

> **Autonomous Hierarchical Multi-Agent Pipeline for Grounded Startup Discovery & Validation**  
> VentureForge mines real user pain points across online communities, clusters verified complaints, synthesizes startup solutions, rigorously scores them against binary Paul Graham rubrics, and drafts investor-ready pitch briefs with adversarial verification.

**Built for AMD AI Hackathon** | **Track 1: AI Agents & Agentic Workflows**

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![LangGraph](https://img.shields.io/badge/LangGraph-Hierarchical%20StateGraph-green.svg)](https://github.com/langchain-ai/langgraph)
[![AMD ROCm](https://img.shields.io/badge/AMD-ROCm%20%2F%20MI300X-red.svg)](https://www.amd.com/en/products/software/rocm.html)
[![Pydantic v2](https://img.shields.io/badge/Pydantic-v2%20Structured%20Output-purple.svg)](https://docs.pydantic.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**🚀 Try the live demo:** [https://huggingface.co/spaces/Raiquia/VentureForge](https://huggingface.co/spaces/Raiquia/VentureForge)

---

## 📸 App Preview

### 1. Studio Pipeline Hub & Real-Time Stepper Rail
![VentureForge Studio Gradio UI](docs/preview/app_preview.png)
*VentureForge Studio features an enterprise zero-emoji dark theme, real-time pipeline stepper rail with per-stage timing telemetry, interactive rubric inspectors, and one-click Markdown/JSON exports.*

### 2. Executive 2-Column Bento Grid Pitch Brief & Critic Diagnostics
![VentureForge Bento Grid Pitch Brief](docs/preview/pitch_brief_result_preview.png)
*Certified and Quarantined Pitch Briefs rendered as high-density 2-Column Bento Grid cards with Key Features, Critic Diagnostics, 8-Point Rubric Matrices, and Collapsible Canonical Markdown Drawers.*

---

## 🎯 What is VentureForge?

Traditional ideation tools rely on generic LLM brainstorming without grounding. **VentureForge** replaces hallucinations with an evidence-first, multi-agent pipeline:

1. **Multi-Source Evidence Mining**: Concurrently ingests real complaints and discussions from **Hacker News**, **Product Hunt**, **Reddit**, **YouTube Comments**, and **Tavily Search** — grounded live evidence only, no synthetic data. Evidence is engagement-ranked (HN points/comments, Reddit upvotes, YouTube likes, Product Hunt votes) and a per-source cap keeps the LLM window diverse.
2. **Thematic Clustering**: Clusters verified complaint quotes into distinct market pain points with full provenance and source URLs.
3. **Targeted Idea Generation**: Synthesizes concrete B2B/B2C startup ideas directly addressing clustered pain points, extracting concrete **Key Features** and target user communities.
4. **Binary Rubric Scoring**: Evaluates candidate ideas against **8 binary yes/no criteria** inspired by Paul Graham's startup framework (Feasibility, Demand, Novelty) and filters out fatal flaws (**Pursue-First Filtering**).
5. **Executive Bento Pitch Briefs**: Assembles canonical 9-part investor briefs into structured, interactive **2-Column Bento Grid Cards** containing Problem/Solution, Key Features, Competitive Edge, Market/GTM, Customer Discovery Plans, Risk Analysis, and full deterministic Markdown decks.
6. **Adversarial Critic & Reflection**: Audits all claims and URLs against **8 binary checks** (URL cross-referencing, contained fire community, competitive thesis, validation completeness). Routes feedback back to upstream agents with a **Downstream Invalidation Cascade** (up to bounded `max_revisions`). Unapproved briefs are safely segregated as **Quarantined Pitches**.

---

## 🏛️ System Architecture

VentureForge uses a **Hierarchical Supervisor Pattern** orchestrated with **LangGraph** and backed by immutable state snapshots and SQLite checkpoint persistence.

![VentureForge Multi-Agent Architecture](docs/preview/architecture.png)

*Interactive Diagram: [🎨 Open/Edit in Mermaid Live](https://mermaid.ai/app/plugin/save?state=pako%3AeNqtlNtuIkcQhl-lhKXIVhZsg_EaFK00HAaz4WQG72plfNGeKaDloRv1dINJNhe5jbSyNslVEsnJW-R59gXiR0j1zHDKwVEkz80MdPVXf_9V1V9nfBlgppwZhXLhT5jSMKgNBdATmZuxYrMJNMUYI82lgKthpsXnCPU5D1D4CG0uuBjDfo8pFoYYQjECr-UcDDPXCcQ-5x3ad878W1TQwUUETq-5E9A7p4CekoHxNZwbof8W0a9RRB-DgGt47XU7O4vvBrT4TpqBuUGoyukUhY52IgZvKGLA5jxcgodM-ZP1MopgKJJPb-D0B_tXA6bGqKHN1C29anLKuLg-gGz2FXT7VSv18eHjR-gShWxRTEsFnpmhmvNIqi9u1OGr_RYT40ZsnqeZtqqkCrhg1sXEnCSlBVry-2HmOGfdRPgMqqGJNKph5j20m516nzJ--vn-j9_voUdSoCc5OWRj02RvUN0QeQoXRmqMiOBJo6g6l_1WtCnFpoz2KDE5WYg_UxVpbgxW57cpIyvFSv0H2fkceEuhyQr-FUIzQBZHN2t1p1HvxGZ9_1v8PzSQJFu7EtmVfOWwkq-SN9RJMx3B5_AlLsFFpo3CbeEJa6WQiYAH1lSyVmkz2yT9F4mFHFTIe7WkvmWhiYtgw71qtx-7-_jww3erEM-XamXsGZ3ehECFnLApVBUnZzgjnS7TLAQ3ZAtweUj_bsQm0DRzz6jIYNblKtLQoMRi_ITOkxzUFBtpqtScKkVt1capjE_2tt8cJI3wy4e4Ebj2J_A2VpRoJVuk4D7JKmV7dowrNAUSKorjaMvLBJQmrN-hb7Qd6ISXBD-hsJgDJ5ijihj5EIJjaB5teJWozWrs5I8fdkKsadxf2dlQ0ogAA4FR3KZ2enC8hOoE_dstlQlvVXBUmo84taQzmyk5p4-_Ct3ek4s31XCEdJnUUNOLdhxCH0chfdv-b0k5e-KULnUCKV-njUc4jr-k6-Hx4f7brcWu0TOj6TCJ354mTyRcNq8PtrmJqDa7Ixl0TZCICOp3PiKZYckXl07f6QxoEPevPv30qy3xhaE7VVDLUJIF1xOocTYWkibYjyw8vaT1MsQkyYiHYXnvuF5wzpwXdDHJWyzvnR45RXf1M7vggZ6U87O7F74MpSrvufGzjUoug5Tl5kuFl2tWqeoUHHeXdfwUazW4z0NLJ-t5YOkcPA8sbb3ngVGTpaSj06J7cromFU5qhVLpf5Ry01Qp8OVZoXjkroFupeLmT_4DmPnmT_1xn1A&utm_source=mermaid_mcp_server&utm_medium=antigravity)*

### The 6 Specialized Agents

| Agent | Responsibility | Reflection Target? | Invalidation Scope |
|---|---|:---:|---|
| **👑 Orchestrator** | Central supervisor; manages `VentureForgeState`, routes tasks, enforces evaluation gates, executes invalidation cascade | — | Global State Coordinator |
| **⛏️ Pain Point Miner** | Ingests from 5 sources in parallel within SLA budget (5s); deduplicates & clusters complaints with verbatim evidence quotes | ✅ | Invalidates Ideas, Scored Ideas, Pitches |
| **💡 Idea Generator** | Transforms clustered pain points into actionable startup concepts with 3–5 concrete key features | ✅ | Invalidates Scored Ideas, Pitches |
| **📊 Scorer** | Evaluates ideas via 8 Paul Graham binary criteria + fatal flaw detection; outputs `pursue`, `explore`, or `park` | — | Gating Filter |
| **✍️ Pitch Writer** | Writes structured pitch briefs for `pursue`-verdict ideas (problem/solution fit, key features, business model, moat, discovery milestones) | ✅ | Invalidates Critic Reports |
| **🔍 Critic** | Adversarial auditor enforcing 8 binary groundedness & positioning checks (URL provenance, contained fire, competitive thesis, validation questions) | — | Emits Targeted Feedback |

---

## 🍱 Pitch Brief Presentation & Canonical Template

Pitch Briefs are rendered in the UI as **2-Column Bento Grid Cards** and deterministically compiled into an investor-grade 9-part Markdown memo:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  EXECUTIVE PITCH BRIEF #1                           [APPROVED (100% VERIFIED)]         │
│  "Kernel-level distributed tracing for cloud-native engineering teams."                │
│  🎯 TARGET USER: Staff DevOps & Platform Engineers managing Kubernetes clusters        │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│  01 | Grounded Problem & Friction         │  02 | Core Solution & Mechanics            │
│  Engineering teams lose 15+ hours weekly  │  An intelligent eBPF daemon that clusters  │
│  chasing distributed log anomalies...     │  and correlates traces across containers...│
├───────────────────────────────────────────┴────────────────────────────────────────────┤
│  03 | Key Features & Product Capabilities                                              │
│  • Kernel-level zero-overhead tracing    • Automated latency anomaly clustering        │
│  • Root-cause alerting via Slack/PagerDuty • Trace path visual dependency mapping       │
├──────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│  Current Behavior        │  Direct Competitors         │  The Real Enemy               │
│  Manual log grepping     │  Datadog, Dynatrace         │  Inertia & fragmented scripts │
├──────────────────────────┴─────────────────────────────┴───────────────────────────────┤
│  04 | Unfair Advantage & Switching Thesis: 100x lower overhead via kernel eBPF hooks   │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│  05 | Market Opportunity & Business Model │  06 | Go-To-Market & First 100 Users       │
│  Market: $12B TAM with 25% CAGR           │  Open-source CLI tool featured on HN,      │
│  Monetization: $50/node/month SaaS tier   │  Reddit r/devops, and Discord communities  │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│  07 | Customer Discovery & Validation Plan│  08 | Risk Mitigation & 14-Day Next Steps  │
│  1. What friction occurs when tracing?    │  ⚠️ Key Risk: Kernel compatibility matrix  │
│  2. How do you recover during outages?    │  📋 Next Steps: Interview 10 DevOps leads; │
│  Signal: 7/10 target teams commit to pilot│     ship eBPF probe prototype on GitHub.   │
├───────────────────────────────────────────┴────────────────────────────────────────────┤
│  Verified Sources: [Hacker News #12345] [Reddit r/devops/comments/...]                 │
│  ▸ VIEW & COPY FULL CANONICAL MARKDOWN BRIEF (Collapsible Raw/Markdown Drawer)         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Key Architectural Innovations

- **Hybrid Bento Grid UI + Deterministic Compiler**: Eliminates raw Markdown dumps by presenting structured visual bento cards while generating 100% consistent Markdown briefs via a deterministic compiler (`compile_pitch_markdown`).
- **First-Class Key Features Pipeline**: Propagates 3–5 concrete feature capabilities from ideation to pitch brief with automatic fallback protection.
- **Binary Rubric System**: Replaces arbitrary 0–10 floats with deterministic yes/no evaluations, producing reproducible, auditable scores.
- **Pursue-First Filtering**: Pitch briefs are only generated for concepts passing all demand and feasibility hurdles without fatal flaws.
- **Downstream Invalidation Cascade**: When the Critic flags a defect and routes a revision to an upstream agent (e.g. Idea Generator), downstream artifacts are automatically invalidated to prevent stale state contamination.
- **Quarantine Segregation Policy**: If a pitch brief fails Critic checks after reaching `max_revisions`, it is graduated into a quarantined partition with attached diagnostic cards rather than corrupting approved outputs.
- **Dual-Tier LLM Architecture**: Configurable fast LLM tier (for mining, idea generation, pitch drafting) and deep reasoning LLM tier (for scoring and adversarial critique).
- **Resilient Evidence Subsystem**: Concurrent multi-source scraping with timeout budgets and graceful degradation.
- **SQLite Checkpoint Persistence**: LangGraph state transitions persist automatically to `.cache/ventureforge.db` (`SqliteSaver` with `MemorySaver` fallback).

---

## 📊 Binary Evaluation Framework

### 1. Scorer Agent (8 Paul Graham Criteria)

An idea must achieve a **Pursue** verdict by passing the binary rubrics and avoiding fatal flaws:

```
Feasibility Rubric:
  [ ] Can this be solved manually first? (Do things that don't scale)
  [ ] Does it have a schlep or unsexy advantage?
  [ ] Can a 2-3 person team build an MVP within 6 months?

Demand Rubric:
  [ ] Does it address at least 2 distinct extracted pain points?
  [ ] Is it a painkiller (urgent need) rather than a vitamin (nice-to-have)?
  [ ] Is there a clear, reachable vein of early adopters?

Novelty Rubric:
  [ ] Differentiated from current user behavior?
  [ ] Viable expansion path out of the initial niche?

Fatal Flaw Filter:
  - Regulatory / Legal blockades
  - Incumbent distribution moats (unwinnable feature-level competition)
  - Severe technical impossibility
```

### 2. Critic Agent (8 Groundedness & Strategy Checks)

```
Groundedness & Strategy Audit:
  [ ] all_claims_evidence_backed: Every market claim traces to verified pain point quotes
  [ ] no_hallucinated_source_urls: Cross-referenced against scraped evidence URLs
  [ ] tagline_under_12_words: Concise, punchy executive framing
  [ ] target_is_contained_fire: Specific, reachable community (like FB at Harvard)
  [ ] competition_embraced_with_thesis: Identifies incumbent blindspots and reasons to switch
  [ ] minimum_evidence_sources: At least 2 distinct primary source citations
  [ ] scorer_verdict_justified: Alignment between rubric scoring and pitch claims
  [ ] validation_plan_complete: Exactly 5 open-ended discovery questions + falsifiable criteria
```

---

## 🚀 Quick Start

### Prerequisites

- **Python 3.11+**
- **[uv](https://github.com/astral-sh/uv)** (recommended) or `pip`

### Installation

```bash
# Clone the repository
git clone https://github.com/rizkiwijanarko/KickUp.git
cd KickUp

# Install dependencies with uv
uv sync

# Or with pip:
# pip install -r requirements.txt
```

### Configuration

Create a `.env` file (copied from `.env.example`):

```bash
# ------------------------------------------------------------------
# LLM Provider Configuration (OpenAI, OpenRouter, DeepSeek, AMD vLLM)
# ------------------------------------------------------------------

# Option 1: OpenAI
LLM_BASE_URL=https://api.openai.com/v1
LLM_API_KEY=sk-...
LLM_MODEL=gpt-4o-mini

# Option 2: OpenRouter
# LLM_BASE_URL=https://openrouter.ai/api/v1
# LLM_API_KEY=sk-or-...
# LLM_MODEL=anthropic/claude-3.5-sonnet

# Option 3: AMD ROCm vLLM (MI300X Server)
# LLM_BASE_URL=http://your-vllm-host:8000/v1
# LLM_API_KEY=dummy-key
# LLM_MODEL=Qwen/Qwen3.6-35B-A3B

# ------------------------------------------------------------------
# External Data Mining API Keys (Optional - enhances evidence depth)
# ------------------------------------------------------------------
PRODUCT_HUNT_API_KEY=your_producthunt_token
YOUTUBE_API_KEY=your_google_cloud_youtube_key
TAVILY_API_KEY=your_tavily_key
REDDIT_CLIENT_ID=your_reddit_app_id
REDDIT_CLIENT_SECRET=your_reddit_secret
HF_TOKEN=your_huggingface_token
```

### Running VentureForge

#### 1. Interactive Gradio Web UI (Primary)

```bash
uv run app.py
```
Open [http://localhost:7860](http://localhost:7860) in your browser to access:
- **Domain Selector**: Pick from curated recommendations or enter custom verticals.
- **Advanced Sliders**: Customize max pain points, ideas per run, top N pitches, and max revision cycles.
- **Interactive Controls**: Real-time progress monitoring, pause/stop execution, and checkpoint cache clearing.
- **4-Tab Workflow Hub**:
  - **Pipeline Hub**: Execution metadata, live agent durations, and recent telemetry events.
  - **Grounded Pain Points**: Verbatim user complaint quotes with source badge chips and rubric pass indicators.
  - **Pitch Briefs & Scored Ideas**: Executive 2-Column Bento Grid cards, Key Features, 8-Point Rubric breakdown matrix, and one-click Markdown downloads.
  - **System Telemetry & Logs**: Monospace log stream, JSON state exports, and full Markdown report generators.

#### 2. CLI Execution

```bash
uv run python -m src.main --domain "developer tools" --output output.json
```

---

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| **Orchestration** | [LangGraph](https://github.com/langchain-ai/langgraph) | Stateful multi-agent graph, conditional routing, checkpoint persistence |
| **Data Validation** | [Pydantic v2](https://docs.pydantic.dev/) | Strict JSON schema serialization, structured LLM outputs, deterministic model validators |
| **Persistence** | SQLite (`SqliteSaver`) | Checkpoint storage with resilient in-memory fallback |
| **Web Interface** | [Gradio](https://gradio.app/) | Interactive UI with live timers, Bento Grid layouts, and tabbed exports |
| **Data Mining** | Async HTTP / Strategy Adapters | Hacker News API, Reddit JSON, Product Hunt API, YouTube v3, Tavily API |
| **Compute / Hardware** | AMD ROCm & MI300X | Accelerated inference using OpenAI-compatible vLLM endpoints |

---

## 🧪 Testing & Code Quality

VentureForge includes component tests, reflection loop simulations, and strict static type checks:

```bash
# Run unit & component test suite
uv run pytest

# Run Bento UI and canonical template tests
uv run pytest test/test_pitch_brief_bento.py

# Run static type checking
uv run mypy src/

# Run linter and code formatting
uv run ruff check .
uv run ruff format .
```

---

## 📁 Repository Layout

```
├── app.py                     # Gradio Web UI with Bento Grid layouts & real-time telemetry
├── requirements.txt           # Clean runtime dependencies for deployment
├── src/
│   ├── graph.py               # Compiled LangGraph StateGraph & checkpoint config
│   ├── config.py              # Pydantic v2 settings & dual-tier LLM parameters
│   ├── run_controller.py      # Background execution & thread management
│   ├── agents/                # Autonomous Agent Modules
│   │   ├── orchestrator.py    # Supervisor logic & routing decisions
│   │   ├── pain_point_miner.py# Evidence clustering & grounding
│   │   ├── idea_generator.py  # Thematic startup solution synthesis with key features
│   │   ├── scorer.py          # 8 Paul Graham binary rubric checks
│   │   ├── pitch_writer.py    # Pursue-first executive pitch brief generation
│   │   └── critic.py          # 8 binary anti-hallucination & positioning checks
│   ├── mining/                # Concurrent ingestion subsystem & strategy adapters
│   ├── models/                # Pydantic schema contracts (PainPoint, Idea, Pitch, Critique)
│   │   ├── pitch.py           # PitchBrief model & compile_pitch_markdown compiler
│   │   ├── idea.py            # Idea and ScoredIdea rubric definitions
│   │   ├── critique.py        # 8-check CritiqueRubric and Critique model
│   │   └── pain_point.py      # PainPoint & verbatim evidence schemas
│   ├── state/                 # VentureForgeState container & mutation helpers
│   └── tools/                 # External scrapers (HN, Product Hunt, Reddit, YouTube, Tavily)
├── docs/
│   ├── adr/                   # Architecture Decision Records (ADRs 0001-0013)
│   ├── agents/                # Agent architecture, domain guidelines, and workflows
│   └── preview/               # UI preview screenshots & architecture diagram
├── CONTEXT.md                 # Single-context domain glossary & terminology
├── PROMPTS.md                 # Exhaustive repository of system and user agent prompts
└── pyproject.toml             # Project dependencies and tool configurations
```

---

## 📄 Architecture Decision Records (ADRs)

Key architectural decisions are documented in [`docs/adr/`](docs/adr/):
- **ADR 0001**: Decoupled State and Deep Agent Modules
- **ADR 0002**: Declarative LangGraph Reflection Loop
- **ADR 0003**: Unified DataMiner Strategy Adapter
- **ADR 0005**: Concurrent Data Ingestion with SLA Budget
- **ADR 0006**: Quarantine Policy for Unapproved Pitches
- **ADR 0007**: SQLite Persistence and Streaming Event Transport
- **ADR 0008**: Strict Downstream Reflection Invalidation Cascade
- **ADR 0009**: Pursue-First Filtering and Scorer Reflection Trigger
- **ADR 0010**: Gradio UI Quarantine Segregation and Diagnostic Cards
- **ADR 0011**: Synthetic Evidence Resilience Fallback
- **ADR 0012**: Bounded Revision Loop and Best-Effort Graduation
- **ADR 0013**: Deterministic Markdown Compilation & Bento Grid Layout

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Ensure tests and linting pass (`uv run pytest && uv run ruff check .`)
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

**Built with ❤️ for AMD AI Hackathon | Track 1: AI Agents & Agentic Workflows**
