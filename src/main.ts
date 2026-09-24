import './style.css'
import { certificates } from './certificates-data'
import autoDevChatPanel from '../content/airsfoundry/autodev/autodev-chat-panel.jpeg'
import autoDevDashboard from '../content/airsfoundry/autodev/autodev-dashboard.jpeg'
import autoDevDocs from '../content/airsfoundry/autodev/autodev-docs.jpeg'
import autoDevFleetPanel from '../content/airsfoundry/autodev/autodev-fleet-panel.jpeg'
import autoDevGraphCity from '../content/airsfoundry/autodev/autodev-graph-city.jpeg'
import autoDevGraphPanel from '../content/airsfoundry/autodev/autodev-graph-panel.jpeg'
import autoDevIde from '../content/airsfoundry/autodev/autodev-ide.jpeg'
import autoDevRecipePanel from '../content/airsfoundry/autodev/autodev-recipe-panel.jpeg'

type Project = {
  number: string
  category: string
  title: string
  summary: string
  image: string
  imageAlt: string
  imageClass?: string
  metric: string
  metricLabel: string
  tags: string[]
  story: string
  contributions: string[]
  videos: VideoDemo[]
  gallery?: GalleryImage[]
  galleryTitle?: string
  featureGroups?: { title: string; description: string }[]
  catalogUrl?: string
}

type VideoDemo = { title: string; url: string; poster: string }
type GalleryImage = { image: string; alt: string; title: string; description: string }

const hardSkillGroups = [
  {
    title: 'Applied AI and machine learning',
    skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Neural Networks', 'Artificial Neural Networks', 'Deep Neural Networks (DNN)', 'Recurrent Neural Networks (RNN)', 'Convolutional Neural Networks (CNN)', 'Natural Language Processing (NLP)', 'Neuro-Linguistic Programming (NLP)', 'BERT and Transformer Models', 'Large Language Models (LLMs)', 'GPT', 'Google Gemini', 'Generative AI', 'Stable Diffusion', 'Computer Vision', 'Image Processing', 'Language Processing', 'Prompt Engineering', 'Chatbots', 'LoRA Fine-Tuning', 'Retrieval-Augmented Generation (RAG)', 'Semantic Retrieval and Vector Search', 'Neuroscience-Informed Memory Systems', 'LLM and Neural Network Research', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain'],
  },
  {
    title: 'Architecture and product systems',
    skills: ['System Architecture', 'Information System Design', 'Technical Architecture', 'Blueprinting', 'API Development', 'API Testing', 'Multi-Agent Systems', 'Agent-to-Agent (A2A)', 'Model Routing', 'Memory Systems', 'MCP Server Development', 'Research and Development (R&D)', 'Data Structures'],
  },
  {
    title: 'Programming, data and cloud',
    skills: ['Python', 'Rust', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS', 'MATLAB', 'FastAPI', 'Flask', 'Tauri', 'React', 'Node.js', 'Jupyter', 'Pandas', 'Seaborn', 'Data Analysis', 'Big Data', 'PostgreSQL and pgvector', 'Apache AGE', 'Redis', 'Qdrant', 'Docker', 'Docker Compose', 'Google Cloud Platform (GCP)', 'Claude Code', 'Botpress'],
  },
  {
    title: 'Design and domain knowledge',
    skills: ['Web Development', 'Responsive Web Design', 'Figma', 'Augmented Reality (AR)', 'Geodesy', 'Global Navigation Satellite System (GNSS)', 'Hydrographic Survey', 'Cadastral Surveying', 'Construction'],
  },
]

const peopleSkills = ['Consulting', 'Project Management', 'Research', 'Teaching', 'Teamwork', 'Team Leadership', 'Organizational Leadership', 'Leadership', 'Communication', 'Critical Thinking', 'Problem Solving', 'Decision-Making', 'Adaptability', 'Fast Learner']

const projects: Project[] = [
  {
    number: '01',
    category: 'AI&YOU · CONVERSATIONAL AI',
    title: 'Mercedes Mercury',
    summary: 'A customer-facing assistant for Mercedes-Benz at Indonesia’s biggest automotive event, designed for high-volume product questions.',
    image: '/images/mercedes-mercury-preview.jpg',
    imageAlt: 'Preview from the Mercedes Mercury customer chatbot demonstration',
    metric: '500K+',
    metricLabel: 'queries handled in about two weeks',
    tags: ['Semantic RAG', 'Vector search', 'Intent routing'],
    story: 'Built for a roughly two-week live event, Mercedes Mercury answered visitors’ questions about vehicles and helped them explore the brand. The workflow combined retrieval, intent handling and clear behavior rules for a high-traffic customer experience.',
    contributions: ['Designed a semantic retrieval workflow with scoring over relevant information.', 'Used vector-based storage and intent recognition to understand visitor questions.', 'Refined incoming questions to improve retrieval and model responses.', 'Added rule-based behavior constraints and delivered the chatbot for the live event.'],
    videos: [{ title: 'Mercedes Mercury at GIIAS', url: 'https://drive.google.com/file/d/1nD9Ao69Bah3EfnRHfqAxvk4I_geoKg-j/view?usp=sharing', poster: '/images/mercedes-mercury-preview.jpg' }],
  },
  {
    number: '02',
    category: 'AI&YOU · CREATIVE PRODUCTIVITY',
    title: 'Live Design Chatbot',
    summary: 'An early design assistant that turns a conversation into live changes to a website’s HTML and CSS.',
    image: '/images/design-chatbot-preview.jpg',
    imageAlt: 'Preview from the live website design chatbot demonstration',
    metric: 'LIVE',
    metricLabel: 'HTML and CSS editing in the browser',
    tags: ['Generative UI', 'Workflow design', 'Web editing'],
    story: 'Prototyped in late 2024, the design chatbot made a web page editable through natural language. Its workflow included proprietary steps and coding constraints so the generated changes could be applied directly to the page.',
    contributions: ['Designed the conversational workflow for turning design requests into code edits.', 'Created constraints to guide safe, focused HTML and CSS updates.', 'Connected assistant responses to visible, real-time page changes.'],
    videos: [
      { title: 'Furnitura banner design', url: 'https://drive.google.com/file/d/1pAz72WOTOMhXQtcKxdIQxSMnCcwdpHkX/view?usp=drive_link', poster: '/images/design-chatbot-preview.jpg' },
      { title: 'Furniture brochure design', url: 'https://drive.google.com/file/d/1Eg5yv95PHU01FLqRwvVfIRnTsV5PmKlq/view?usp=drive_link', poster: '/images/design-brochure-preview.jpg' },
    ],
  },
  {
    number: '03',
    category: 'AI&YOU · GENERATIVE AI',
    title: 'ComfyUI LoRA Fine-Tuning',
    summary: 'Adapted generative video models to a beauty client’s visual domain using LoRA fine-tuning and ComfyUI workflows.',
    image: '/images/comfyui-lora-preview.jpg',
    imageAlt: 'Preview of a beauty-focused generative video created with a ComfyUI workflow',
    metric: '3',
    metricLabel: 'generative models adapted across client domains',
    tags: ['ComfyUI', 'LoRA', 'Generative video'],
    story: 'During 2024, I used ComfyUI and LoRA fine-tuning to adapt generative models for client-specific creative work, including video for a beauty client. The work combined model experimentation with a repeatable visual workflow.',
    contributions: ['Researched model behavior and fine-tuning approaches for the client’s visual domain.', 'Applied LoRA techniques to adapt generative models.', 'Built and iterated the ComfyUI workflow used to create client video concepts.'],
    videos: [{ title: 'ComfyUI beauty video', url: 'https://drive.google.com/file/d/17G1-0Ty-gNmPIRMy1rRayutW1m9uRJwv/view?usp=sharing', poster: '/images/comfyui-lora-preview.jpg' }],
  },
  {
    number: '04',
    category: 'AIRS FOUNDRY · AGENT PLATFORM',
    title: 'Arcade',
    summary: 'A multi-agent product built around memory-aware assistants, interoperable tools and a shared agent workspace.',
    image: '/images/arcade-adaptation-active-preview.jpg',
    imageAlt: 'AIRS Agent Arcade showing a multi-agent adaptation workflow with live tool results',
    metric: '3',
    metricLabel: 'memory layers: episodic, semantic, procedural',
    tags: ['LivingAgent', 'A2A', 'MCP', 'Agent platform'],
    story: 'Arcade was co-created and deployed on GCP as a Docker stack. I worked across the systems that let its agents keep useful context, coordinate with one another and reach external tools. A shared API Gateway connected sessions and conversations to those services, while a multi-provider model layer let the product work across different LLMs.',
    featureGroups: [
      { title: 'Agents with continuity', description: 'LivingAgent gives each agent a defined identity and a continuity packet: a compact hand-off of relevant memory that helps preserve context without replaying an entire conversation.' },
      { title: 'Memory across time', description: 'Episodic, semantic and procedural memory separate events, durable knowledge and learned approaches. Hot, warm and cold paths help select context at different levels of immediacy.' },
      { title: 'Agents that collaborate', description: 'Google A2A support lets agents communicate and delegate work across agent boundaries, while the gateway provides shared session, conversation and streaming APIs.' },
      { title: 'A common connection to tools', description: 'The MCP client connects to HTTP and stdio servers and exposes their tools, resources and prompts through a consistent integration surface.' },
      { title: 'Choice of models and memory providers', description: 'A provider-switching LLM layer and a universal Memory MCP service keep model and storage choices replaceable. Circuit breakers help contain failures in memory-provider calls.' },
      { title: 'Built to run as a product', description: 'Arcade brings these services together as a deployable product. I co-created the platform and deployed its Docker stack on Google Cloud Platform.' },
    ],
    contributions: [
      '<strong>Memory-aware agents.</strong> Designed LivingAgent with persistent context and A2A support, so agents could coordinate and hand work to one another.',
      '<strong>Three kinds of memory.</strong> Built episodic memory for what happened, semantic memory for durable facts, and procedural memory for learned approaches. Hot, warm and cold paths plus a compact continuity packet helped carry relevant context forward.',
      '<strong>Open tool connections.</strong> Implemented an MCP client for HTTP and stdio servers, allowing agents to discover and use tools, resources and prompts through one connection layer.',
      '<strong>Shared service layer.</strong> Created a multi-provider LLM switcher and co-developed the API Gateway for agent and session APIs, chat history, and live conversation streaming.',
      '<strong>Resilient memory service.</strong> Engineered a provider-aware Memory MCP service with circuit-breaker protection and interchangeable storage providers.',
      '<strong>Product delivery.</strong> Co-created Arcade as a deployable product and shipped its Docker stack to GCP.'
    ],
    videos: [
      { title: 'Agent-to-agent workflow', url: 'https://drive.google.com/file/d/1xUcoNBVrR9tGpWl7o18pQC3v-x4q3Jks/view?usp=sharing', poster: '/images/arcade-a2a-preview.jpg' },
      { title: 'Arcade adaptation workflow', url: 'https://drive.google.com/file/d/1oHDFj5HZmjGC2O3We7XrDvTuJXbtbD4j/view?usp=drive_link', poster: '/images/arcade-adaptation-active-preview.jpg' },
    ],
  },
  {
    number: '05',
    category: 'AIRS FOUNDRY · DEVELOPER TOOLS',
    title: 'AutoDev → Arcana',
    summary: 'An AI development platform I built around a coding assistant and a coordinated team of specialist agents.',
    image: '/images/autodev-preview.jpg',
    imageAlt: 'Preview of AutoDev’s AI development environment and agent workflow',
    metric: '1,264',
    metricLabel: 'features documented across 17 catalog sections',
    tags: ['AI coding platform', 'Agent orchestration', 'Code intelligence'],
    story: 'AutoDev puts a hands-on coding assistant and an autonomous agent team in one desktop workspace. The feature catalog describes 1,264 behaviors across 17 sections and 204 subsections, from day-to-day coding and review to fleet coordination, repository insight and workflow automation. I’m now refactoring the platform into Arcana as my personal project.',
    catalogUrl: '/autodev-feature-list/',
    featureGroups: [
      { title: 'Personal coding assistant', description: 'Work directly with an assistant for coding, review and delegation. Choose models, set project instructions, maintain plans and context, and reuse Skills across work.' },
      { title: 'Supervisor-led agent team', description: 'A Supervisor routes work to specialist Workers such as backend, frontend and QA. Workers can report, message and coordinate, while QC reviews completed work.' },
      { title: 'Planning and parallel work', description: 'Task boards and phased plans make assignments and status visible. Focused subagents can work on independent parts of a larger task.' },
      { title: 'Repository workspace', description: 'Browse files, inspect source, review Git changes and history, create checkpoints, and isolate work in per-task worktrees.' },
      { title: 'Extensions and repeatable workflows', description: 'GitHub and MCP integrations expose external tools. Hooks and Recipes add reusable actions and repeatable multi-step workflows.' },
      { title: 'Code understanding and operations', description: 'Search a 2D repository graph to explore code relationships; the 3D Code City remains an early, unfinished view. Fleet status, usage, worker health and logs help make activity visible.' },
    ],
    contributions: [
      '<strong>Two ways to work.</strong> Designed the Personal Assistant for direct coding, review and delegation, with model selection, project instructions, plans, persistent context and reusable Skills.',
      '<strong>A team with clear roles.</strong> Built the Supervisor-led fleet: specialist backend, frontend and QA Workers take tasks, report progress and message one another; a QC Agent reviews submitted work.',
      '<strong>Visible planning and coordination.</strong> Connected the team through a task board with assignment, status, priority and phased plans, plus parallel subagents for focused helper work.',
      '<strong>A developer workspace.</strong> Created repository browsing, source viewing, Git changes and history, file checkpoints and isolated per-task worktrees alongside the coding assistant.',
      '<strong>Extensible workflows.</strong> Integrated GitHub and MCP tools, alongside Hooks and Recipes, so agents can use external services and run repeatable workflows.',
      '<strong>Repository intelligence.</strong> Built a searchable 2D code graph and an early, unfinished 3D Code City view.',
      '<strong>Operational visibility.</strong> Added live fleet status, usage and cost analytics, worker health and centralized logs.'
    ],
    videos: [
      { title: 'AutoDev platform demo', url: 'https://drive.google.com/file/d/1LKFM-40Orike5WLPxbg8znaN4A8Dh9G4/view?usp=drive_link', poster: '/images/autodev-demo-preview.jpg' },
      { title: 'Code graph demo', url: 'https://drive.google.com/file/d/1vqGeGRpicVdijBB2DBBrXvL-iKuyfapz/view?usp=drive_link', poster: '/images/autodev-graph-preview.jpg' },
      { title: 'AutoDev working demo', url: 'https://drive.google.com/file/d/1AIxnfphLES0DxRgq6cBcEsvLf1II7l0r/view?usp=drive_link', poster: '/images/autodev-preview.jpg' },
    ],
    galleryTitle: 'Inside AutoDev',
    gallery: [
      { image: autoDevChatPanel, alt: 'AutoDev chat in delegate mode breaking a calendar app request into tasks', title: 'Chat and delegation', description: 'A user describes an app in natural language. Delegate mode turns the request into a task plan and shows the work completed by the agent team.' },
      { image: autoDevDashboard, alt: 'AutoDev dashboard with usage, worker health, session and API failure panels', title: 'Operations dashboard', description: 'A control-room view for cost and token usage, active worker health, sessions, model usage and API failures over a chosen date range.' },
      { image: autoDevDocs, alt: 'AutoDev built-in documentation with a navigation tree and product guide', title: 'Product documentation', description: 'Built-in guides organize the platform’s agent modes, automation, interface panels and technical concepts so people can learn the product in context.' },
      { image: autoDevFleetPanel, alt: 'AutoDev supervisor and specialist worker roster above a multi-column task board', title: 'Agent fleet and task board', description: 'The supervisor coordinates specialist workers while the task board makes ready, in-progress, review and completed work visible.' },
      { image: autoDevGraphCity, alt: 'AutoDev code City view representing repository structures as colorful blocks', title: 'Code City', description: 'A city-style overview turns repository structure into an explorable map, making large clusters and relationships easier to scan.' },
      { image: autoDevGraphPanel, alt: 'AutoDev interactive code graph with colored nodes, relationships and community filters', title: 'Code relationship graph', description: 'An interactive graph shows how code elements connect, with relationship filters, search, community groupings and graph statistics.' },
      { image: autoDevIde, alt: 'AutoDev integrated editor with repository files and a Git changes review panel', title: 'Integrated coding workspace', description: 'The IDE brings a repository explorer and code editor together with a Git changes panel for reviewing edits and diffs.' },
      { image: autoDevRecipePanel, alt: 'AutoDev recipe panel showing reusable fleet and quality-check workflows', title: 'Reusable recipes', description: 'Recipes package repeatable agent workflows with instructions and controls, including supervised build-and-check routines.' },
    ],
  },
  {
    number: '06',
    category: 'AIRS FOUNDRY · FOUNDATIONAL SYSTEMS',
    title: 'AIRS Forge & Memory Infrastructure',
    summary: 'A shared cognitive and memory foundation designed to give AIRS applications useful, grounded context.',
    image: '/images/airs-forge-memory-overview.svg',
    imageClass: 'image-contain',
    imageAlt: 'High-level illustration of information flowing into shared memory and providing grounded context to AI products',
    metric: 'FOUNDATION',
    metricLabel: 'memory layer behind AIRS products',
    tags: ['Cognitive platform', 'Memory infrastructure', 'AIRS Foundry'],
    story: 'At AIRS Foundry, I architected AIRS Forge and engineered supporting memory infrastructure. At a baseline, the work provides a foundation for organizing information and making it available as context to AI applications. This is a deliberately high-level overview: proprietary architecture, internal datasets and implementation details are not shown.',
    contributions: ['Architected AIRS Forge as a shared cognitive foundation for AIRS products.', 'Engineered memory infrastructure to provide applications with persistent context.', 'Helped set technical direction as the first employee and Head of AI Research and Development.'],
    videos: [],
  },
]

const projectCards = projects.map((project) => `
  <article class="project-card reveal" style="--delay:${Number(project.number) * 70}ms">
    <button class="project-open" type="button" data-project="${project.number}" aria-label="Read the ${project.title} case study">
      <span class="project-visual">
        <img class="${project.imageClass ?? ''}" src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
        <span class="visual-stamp"><span class="live-dot"></span> SELECTED WORK / ${project.number}</span>
        <span class="expand-icon" aria-hidden="true">↗</span>
      </span>
      <span class="project-body">
        <span class="eyebrow">${project.category}</span>
        <span class="project-title-row"><span class="project-title">${project.title}</span><span class="project-arrow" aria-hidden="true">↗</span></span>
        <span class="project-summary">${project.summary}</span>
        <span class="project-foot"><span class="metric"><strong>${project.metric}</strong><small>${project.metricLabel}</small></span><span class="project-tags">${project.tags.slice(0, 2).map((tag) => `<i>${tag}</i>`).join('')}</span></span>
      </span>
    </button>
  </article>`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Razi Ashary, home"><span class="monogram">RA</span><span>RAZI ASHARY<span class="wordmark-sub">AI RESEARCHER &amp; DEVELOPER</span></span></a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span></button>
    <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
      <a href="#work">Selected work</a><a href="#approach">Approach</a><a href="#career">Experience</a><a href="#skills">Skills</a><a href="#certificates">Certificates</a><a class="nav-cta" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="hero-kicker"><span class="live-dot"></span> AI RESEARCHER · NEUROSCIENCE-INFORMED MEMORY · LLM RESEARCH</p>
        <h1 id="hero-title">Making AI<br /><span class="hero-line-two">work <em>in the world.</em></span></h1>
        <div class="hero-bottom">
        <p class="hero-copy">I research how neural networks and language models work, then develop AI systems shaped by neuroscience-informed memory and real-world use.</p>
          <a class="round-link" href="#work" aria-label="Explore selected work"><span>SCROLL TO<br />EXPLORE</span><b aria-hidden="true">↓</b></a>
        </div>
      </div>
      <div class="hero-coordinate coordinate-left">AI&amp;YOU · FEB 2024 — MAR 2025</div>
      <div class="hero-coordinate coordinate-right">AIRS FOUNDRY · MAY — SEP 2025</div>
      <div class="hero-mark" aria-hidden="true"><span>R</span><span>A</span><i></i></div>
      <div class="hero-index" aria-hidden="true">RA — 01 / 06</div>
    </section>

    <section class="signal-strip" aria-label="Career highlights">
      <div class="signal-intro"><span>A few signals</span><br /> <span>from the work</span></div>
      <div class="signal-item"><strong>2</strong><span>teams helped<br />from early code to product</span></div>
      <div class="signal-item"><strong>500<span class="signal-plus">K+</span></strong><span>questions handled<br />by a live client chatbot</span></div>
      <div class="signal-item signal-product"><strong>AutoDev → Arcana</strong><span>AI coding platform built by me, now in personal refactor</span></div>
      <div class="signal-item signal-product"><strong>Arcade</strong><span>multi-agent platform co-created and deployed on GCP</span></div>
    </section>

    <section class="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div class="section-heading reveal"><div><p class="section-label"><span>01</span> SIX PROJECTS</p><h2 id="work-title">Selected work<span class="heading-dot">.</span></h2></div><p class="section-aside">Three AI&amp;You projects, two AIRS products and one high-level view of the shared cognitive foundation.</p></div>
      <div class="project-grid">${projectCards}</div>
      <p class="work-footnote"><span class="live-dot"></span> SYSTEMS THINKING, GROUNDED IN DELIVERY</p>
    </section>

    <section class="approach-section" id="approach" aria-labelledby="approach-title">
      <div class="section-wrap approach-inner">
        <div class="approach-copy reveal"><p class="section-label"><span>02</span> HOW I WORK</p><h2 id="approach-title">From the first<br />question to the<br /><em>last 10%.</em></h2><p class="approach-lead">The interesting part isn’t a model by itself. It’s the system around it: what it knows, how it acts, and whether someone can trust the result.</p><a class="text-link" href="#career">Explore the work experience <span aria-hidden="true">↘</span></a></div>
        <div class="approach-steps">
          <article class="approach-step reveal"><span class="step-number">01</span><div><h3>Start with the human problem</h3><p>Understand the job to be done, who needs it, and what “better” should look like.</p></div><span class="step-glyph" aria-hidden="true">⌖</span></article>
          <article class="approach-step reveal"><span class="step-number">02</span><div><h3>Shape the right system</h3><p>Choose the models, tools, memory and workflow to suit the actual problem.</p></div><span class="step-glyph" aria-hidden="true">⎔</span></article>
          <article class="approach-step reveal"><span class="step-number">03</span><div><h3>Make it dependable</h3><p>Build in evidence, sensible constraints and ways to understand what happened.</p></div><span class="step-glyph" aria-hidden="true">↗</span></article>
          <article class="approach-step reveal"><span class="step-number">04</span><div><h3>Stay close to the outcome</h3><p>Ship a useful first version, learn from real use, and keep improving the experience.</p></div><span class="step-glyph" aria-hidden="true">✳</span></article>
        </div>
      </div>
      <div class="approach-ornament" aria-hidden="true">R<span>A</span></div>
    </section>

    <section class="career-section section-wrap" id="career" aria-labelledby="career-title">
      <div class="section-heading reveal"><div><p class="section-label"><span>03</span> EXPERIENCE</p><h2 id="career-title">Research, systems<br />and products<span class="heading-dot">.</span></h2></div><p class="section-aside">Two roles across applied AI and platform R&amp;D. Each one moved from research and system design to working products.</p></div>
      <article class="career-role reveal">
        <header class="career-role-head"><span class="role-index">01</span><div><p class="role-period">FEBRUARY 2024 — MARCH 2025</p><h3>AI&amp;You</h3><p class="role-title">AI Researcher and Developer</p></div><span class="role-label">APPLIED AI · CLIENT PRODUCTS</span></header>
        <div class="role-intro"><p>I led research and built practical AI workflows for internal teams and client projects, from early feasibility through MVP and live deployment.</p><div class="role-chips"><span>8 MVPs</span><span>3 workflow architectures</span><span>Weekly applied research</span></div></div>
        <div class="role-work-grid">
          <article class="role-work"><span class="role-work-index">A</span><div><h4>Research and architecture</h4><p>Evaluated 1–2 models, tools or frameworks each week; designed three proprietary AI workflow architectures; assessed incoming ideas for technical and business fit.</p></div></article>
          <article class="role-work"><span class="role-work-index">B</span><div><h4>Conversational AI and data</h4><p>Built five node-based chatbots, averaging 100–200 daily users. Developed a Python chatbot backend for a financial consulting firm and a visual RAG assistant for car make and model identification.</p></div></article>
          <article class="role-work"><span class="role-work-index">C</span><div><h4>Creative AI and live design</h4><p>Adapted three generative models across client domains, including LoRA fine-tuning in ComfyUI. Prototyped a design chatbot that edits a website’s HTML and CSS in real time.</p></div></article>
          <article class="role-work"><span class="role-work-index">D</span><div><h4>Client delivery and knowledge sharing</h4><p>Developed ten use cases, including Mercedes Mercury at a major Indonesian auto event, which handled 500K+ queries over roughly two weeks. Presented at three Kawan Lama Group events for audiences of 60+.</p></div></article>
        </div>
      </article>
      <article class="career-role reveal">
        <header class="career-role-head"><span class="role-index">02</span><div><p class="role-period">MAY 2025 — SEPTEMBER 2025</p><h3>AIRS Foundry</h3><p class="role-title">Head of AI Research and Development · First employee</p></div><span class="role-label">PLATFORM R&amp;D · SYSTEM ARCHITECTURE</span></header>
        <div class="role-intro"><p>As the first employee, I wrote the company’s first code and led architecture and implementation across its cognitive platform, agent runtime and product stack.</p><div class="role-chips"><span>AIRS Forge</span><span>Agent infrastructure</span><span>GCP deployment</span></div></div>
        <div class="role-work-grid">
          <article class="role-work"><span class="role-work-index">A</span><div><h4>AIRS Forge and memory infrastructure</h4><p>Helped architect AIRS Forge as a shared cognitive foundation and engineered its supporting memory infrastructure. Public details stay at the product level to respect its proprietary nature.</p></div></article>
          <article class="role-work"><span class="role-work-index">B</span><div><h4>Auto-Storage — source ingestion</h4><p>Designed and shipped Auto-Storage, creating a dependable foundation for turning varied source material into organized, queryable knowledge.</p></div></article>
          <article class="role-work"><span class="role-work-index">C</span><div><h4>Auto-Research — evidence-led retrieval</h4><p>Built Auto-Research to help applications find relevant knowledge with supporting evidence and return an honest no-answer when the available information was not sufficient.</p></div></article>
          <article class="role-work"><span class="role-work-index">D</span><div><h4>Core-Orchestrator and Arcade</h4><p>Designed a Python/FastAPI multi-agent platform around A2A, MCP, streaming and multiple model providers. As AIRS’s first employee, I co-created and deployed Arcade on GCP as a Docker stack, contributing to its API gateway and service platform.</p></div></article>
          <article class="role-work"><span class="role-work-index">E</span><div><h4>AutoDev → Arcana</h4><p>Built a model-flexible desktop AI development platform with a single coding assistant, supervisor-led worker fleet, knowledge graph, skills and recipes. A 1,264-item feature catalogue documents the breadth of the platform. I’m refactoring it into Arcana, my personal project.</p></div></article>
          <article class="role-work"><span class="role-work-index">F</span><div><h4>Platform strategy and delivery</h4><p>Explored speech and visual workflow concepts; guided manufacturing, marketing and operations teams; managed GCP Compute Engine, Cloud Run, Docker Compose and storage migrations; produced weekly research and monthly findings.</p></div></article>
        </div>
      </article>
    </section>

    <section class="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
      <div class="section-heading reveal"><div><p class="section-label"><span>04</span> CAPABILITIES</p><h2 id="skills-title">Skills &amp; strengths<span class="heading-dot">.</span></h2></div><p class="section-aside">A broad toolkit shaped by applied AI, platform engineering, geospatial research and collaborative product delivery.</p></div>
      <div class="skills-layout">
        <section class="skills-panel hard-skills-panel reveal" aria-labelledby="hard-skills-title">
          <header class="skills-panel-head"><span class="skills-panel-index">01 / TECHNICAL</span><h3 id="hard-skills-title">Hard skills</h3><p>Methods, tools and technical foundations used across my work.</p></header>
          <div class="skill-groups">${hardSkillGroups.map((group, index) => `<section class="skill-group"><h4><span>${String(index + 1).padStart(2, '0')}</span>${group.title}</h4><ul class="skill-list">${group.skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></section>`).join('')}</div>
        </section>
        <aside class="skills-panel people-skills-panel reveal" aria-labelledby="people-skills-title">
          <header class="skills-panel-head"><span class="skills-panel-index">02 / PEOPLE &amp; PRACTICE</span><h3 id="people-skills-title">Soft skills</h3><p>How I approach research, decisions and shared delivery.</p></header>
          <ul class="skill-list people-skill-list">${peopleSkills.map((skill) => `<li>${skill}</li>`).join('')}</ul>
          <div class="language-skills"><h4>Languages</h4><p><strong>English</strong><span>EF SET C2 · Proficient</span></p><p><strong>Indonesian</strong></p></div>
        </aside>
      </div>
    </section>

    <section class="certificates-section section-wrap" id="certificates" aria-labelledby="certificates-title">
      <div class="section-heading reveal"><div><p class="section-label"><span>05</span> LEARNING &amp; DEVELOPMENT</p><h2 id="certificates-title">Certificates<span class="heading-dot">.</span></h2></div><p class="section-aside">A few highlights from courses across AI, machine learning and data. The full collection is in a separate gallery.</p></div>
      <div class="certificate-grid certificate-highlights">${certificates.slice(0, 2).map((certificate, index) => `<article class="certificate-card reveal" style="--delay:${index * 50}ms"><a class="certificate-image-link" href="/certificates/${certificate.image}" target="_blank" rel="noreferrer" aria-label="View ${certificate.title} certificate image"><img src="/certificates/${certificate.image}" alt="Certificate for ${certificate.title}, issued by ${certificate.issuer}" loading="lazy" /><span>VIEW CERTIFICATE <b aria-hidden="true">↗</b></span></a><div class="certificate-copy"><span class="certificate-index">${String(index + 1).padStart(2, '0')} / ${String(certificates.length).padStart(2, '0')}</span><h3>${certificate.title}</h3><p>${certificate.issuer}</p></div></article>`).join('')}</div>
      <a class="all-certificates-link" href="/certificates.html#all-certificates">Browse all ${certificates.length} certificates <span aria-hidden="true">↗</span></a>
    </section>

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div class="contact-orbit orbit-one" aria-hidden="true"></div><div class="contact-orbit orbit-two" aria-hidden="true"></div>
      <div class="contact-content reveal"><p class="section-label"><span>06</span> NEXT CHAPTER</p><h2 id="contact-title">Good work starts<br />with <em>a conversation.</em></h2><p>I’m always interested in thoughtful ideas at the intersection of AI, engineering and people.</p><div class="contact-actions"><a class="contact-link" href="mailto:raziashary05@gmail.com?subject=Let%E2%80%99s%20talk%20about%20AI">Email me <span aria-hidden="true">↗</span></a><a class="linkedin-link" href="https://www.linkedin.com/in/razi-ashary/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a><a class="linkedin-link" href="/resume.pdf" download="Razi-Ashary-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a></div></div>
      <div class="contact-signature" aria-hidden="true">R<span>A</span></div>
    </section>
  </main>

  <footer class="site-footer"><a class="footer-name" href="#top">RAZI ASHARY<span>AI RESEARCHER &amp; DEVELOPER</span></a><span class="footer-credit">BUILT WITH CURIOSITY <i>✳</i> © 2026</span><a class="back-top" href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>

  <dialog class="project-dialog" aria-labelledby="dialog-title"><button class="dialog-close" type="button" aria-label="Close project details">×</button><div class="dialog-inner"></div></dialog>
`

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!
const navigation = document.querySelector<HTMLElement>('.primary-nav')!

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  navigation.classList.toggle('is-open', !isOpen)
})

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    navigation.classList.remove('is-open')
  })
})

const dialog = document.querySelector<HTMLDialogElement>('.project-dialog')!
const dialogInner = dialog.querySelector<HTMLDivElement>('.dialog-inner')!

document.querySelectorAll<HTMLButtonElement>('.project-open').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projects.find((item) => item.number === button.dataset.project)
    if (!project) return

    dialogInner.innerHTML = `
      <p class="eyebrow">${project.category} <span>· ${project.number}</span></p>
      <h2 id="dialog-title">${project.title}<span class="heading-dot">.</span></h2>
      <img class="dialog-image ${project.imageClass ?? ''}" src="${project.image}" alt="${project.imageAlt}" />
      <p class="dialog-story">${project.story}</p>
      ${project.catalogUrl ? `<a class="dialog-catalog-link" href="${project.catalogUrl}" target="_blank" rel="noreferrer">Explore the complete AutoDev feature catalog <span aria-hidden="true">↗</span></a>` : ''}
      ${project.featureGroups?.length ? `<section class="dialog-features" aria-label="${project.title} platform features"><h3>Platform features</h3><div class="dialog-feature-grid">${project.featureGroups.map((feature, index) => `<article class="dialog-feature-card"><span>${String(index + 1).padStart(2, '0')}</span><h4>${feature.title}</h4><p>${feature.description}</p></article>`).join('')}</div></section>` : ''}
      <h3 class="dialog-subhead">My part in the work</h3>
      <ul class="dialog-contributions">${project.contributions.map((item) => `<li>${item}</li>`).join('')}</ul>
      <div class="dialog-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      <p class="dialog-metric"><strong>${project.metric}</strong> ${project.metricLabel}</p>
      ${project.videos.length ? `<section class="dialog-video-section" aria-label="${project.title} demonstrations"><h3>Watch ${project.title}</h3><div class="dialog-video-grid"></div></section>` : ''}
      ${project.gallery?.length ? `<section class="dialog-gallery" aria-label="${project.title} screenshots"><h3>${project.galleryTitle ?? 'Project screens'}</h3><div class="dialog-gallery-grid">${project.gallery.map((item) => `<figure class="dialog-gallery-card"><img src="${item.image}" alt="${item.alt}" loading="lazy" /><figcaption><h4>${item.title}</h4><p>${item.description}</p></figcaption></figure>`).join('')}</div></section>` : ''}
    `
    const videoGrid = dialogInner.querySelector<HTMLDivElement>('.dialog-video-grid')
    project.videos.forEach((video) => videoGrid?.append(createVideoFrame(video)))
    dialog.showModal()
  })
})

dialog.querySelector<HTMLButtonElement>('.dialog-close')!.addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    revealObserver.unobserve(entry.target)
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

function createVideoFrame(video: VideoDemo): HTMLElement {
  const frame = document.createElement('article')
  frame.className = 'dialog-video-card'
  const heading = document.createElement('h4')
  heading.textContent = video.title
  frame.append(heading)

  let source: URL
  try {
    source = new URL(video.url)
  } catch {
    return frame
  }
  if (source.protocol !== 'https:') return frame

  const driveId = source.hostname === 'drive.google.com'
    ? source.pathname.match(/^\/file\/d\/([^/]+)/)?.[1] ?? source.searchParams.get('id')
    : null
  const youtubeId = source.hostname === 'youtu.be'
    ? source.pathname.slice(1)
    : source.hostname.endsWith('youtube.com')
      ? source.searchParams.get('v')
      : null

  const loadButton = document.createElement('button')
  loadButton.type = 'button'
  loadButton.className = 'dialog-video-load'
  loadButton.setAttribute('aria-label', `Play ${video.title}`)
  const poster = document.createElement('img')
  poster.src = video.poster
  poster.alt = `${video.title} preview`
  poster.loading = 'lazy'
  const playMark = document.createElement('span')
  playMark.setAttribute('aria-hidden', 'true')
  playMark.textContent = '▶'
  loadButton.append(poster, playMark)

  loadButton.addEventListener('click', () => {
    let player: HTMLIFrameElement | HTMLVideoElement
    if (driveId || youtubeId) {
      const iframe = document.createElement('iframe')
      iframe.src = driveId
        ? `https://drive.google.com/file/d/${encodeURIComponent(driveId)}/preview?autoplay=1`
        : `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId!)}?autoplay=1`
      iframe.title = video.title
      iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture'
      iframe.allowFullscreen = true
      iframe.loading = 'eager'
      player = iframe
    } else if (/\.mp4$/i.test(source.pathname)) {
      const videoPlayer = document.createElement('video')
      videoPlayer.src = source.href
      videoPlayer.poster = video.poster
      videoPlayer.controls = true
      videoPlayer.preload = 'metadata'
      videoPlayer.playsInline = true
      player = videoPlayer
    } else return
    loadButton.replaceWith(player)
  }, { once: true })
  frame.append(loadButton)

  const openLink = document.createElement('a')
  openLink.className = 'dialog-video-link'
  openLink.href = source.href
  openLink.target = '_blank'
  openLink.rel = 'noreferrer'
  openLink.textContent = 'Open demo in a new tab ↗'
  frame.append(openLink)

  return frame
}
