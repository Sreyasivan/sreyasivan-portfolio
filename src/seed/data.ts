/**
 * Verified initial content. Every fact here comes from the owner's LinkedIn profile and what she
 * confirmed. Nothing is estimated or invented. Items marked `needsReview` stay unpublished.
 * content/site.json holds the same content with images; import it instead for the full site.
 */

export const homepageMessages: { content: string; style: string; choices?: { label: string; href: string }[] }[] = [
  { content: 'Hi there 👋.', style: 'default' },
  { content: "I'm Sreya.", style: 'default' },
  { content: 'I build full-stack web apps and practical Generative AI tools.', style: 'default' },
  { content: "Right now I'm on a learning break, studying Data Science with AI at [DataMites](https://datamites.com): Python, machine learning, NLP and big data.", style: 'default' },
  { content: 'Before that I spent 11 months as an AI intern at [Prayag.ai](https://prayag.ai), automating data extraction from emails with GPT-4 and designing RAG chatbots.', style: 'default' },
  { content: "See [my projects](/projects), or follow what I'm [learning in ./StdOut](/notes).", style: 'default' },
  { content: 'Want to chat? [Say hi](/contact), or [get to know me](/about) first.', style: 'default' },
]

export const navigation = {
  items: [
    { label: 'Projects', href: '/projects', visible: true },
    { label: './StdOut', href: '/notes', visible: true },
    { label: 'About', href: '/about', visible: true },
    { label: 'Contact', href: '/contact', visible: true },
  ],
  footerLinks: [] as { label: string; href: string }[],
}

export const siteSettings = {
  displayName: 'Sreya Sivan',
  fullName: 'Sreya Sivan',
  tagline: 'I build full-stack web apps and practical Generative AI, and I am going deep on data analytics.',
  description:
    'Sreya Sivan is a data science and AI developer in Coimbatore, India: Python, analytics, machine learning, Generative AI and full-stack MERN apps. B.Tech IT (2026), former AI intern at Prayag.ai, now studying Data Science with AI at DataMites.',
  canonicalUrl: 'https://sreyasivan.me',
  currentRole: 'Data Science & AI · Full-Stack (MERN)',
  location: 'Coimbatore, India',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Sreyasivan' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sreyasivan' },
  ],
  email: 'contact@sreyasivan.me',
  contactFormEnabled: false,
  footerNote: 'Built with Next.js and Payload. Content managed from /admin.',
}

export const appearance = {
  theme: 'dark',
  accent: 'blue',
  fontPreset: 'inter',
  headingScale: 'regular',
  spacing: 'regular',
  radius: 'pill',
  linkStyle: 'underline',
  bubbleStyle: 'pill',
  animationIntensity: 'normal',
  animationSpeed: 'normal',
  projectDisplayStyle: 'explorer',
} as const

export const experience = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'Prayag.ai',
    companyUrl: 'https://prayag.ai',
    location: 'Palakkad, India · On-site',
    startDate: '2025-06-01',
    endDate: '2026-04-01',
    current: false,
    summary: 'Built AI tools for business development in Python. Internal work, not public.',
    highlights: [
      'Built an AI-powered business development agent in Python.',
      'Integrated the OpenAI GPT-4 API to automate data extraction from client emails.',
      'Designed RAG-based chatbot architectures.',
    ],
    technologies: ['Python', 'OpenAI GPT-4 API', 'RAG', 'LLMs'],
    order: 0,
  },
]

export const education = [
  {
    institution: 'DataMites',
    degree: 'Data Science with AI (certification course)',
    field: 'Python, ML, NLP, big data, AI and automation',
    startDate: '2026-06-01',
    location: 'Coimbatore, India',
    order: 0,
  },
  {
    institution: 'Karpagam Institute of Technology',
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    startDate: '2022-11-01',
    endDate: '2026-04-01',
    location: 'Coimbatore, India',
    order: 1,
  },
]

export const publications: {
  title: string
  authors: string
  year: number
  publisher: string
  venue: string
  kind: string
  doi: string
  externalUrl: string
  personalContribution: string
  tags: string[]
  featured: boolean
  order: number
}[] = []

export const projects = [
  {
    title: 'Zero-ETL Analytics Platform',
    slug: 'zero-etl-analytics-platform',
    summary: 'An analytics dashboard that queries data where it lives: live Postgres tables joined with Parquet logs in object storage, through DuckDB, with no copy pipeline.',
    description:
      'In progress. A federated analytics platform: instead of an ETL pipeline that copies data everywhere, DuckDB queries the application database and the raw logs in place and joins them for one dashboard. The aim is to keep data movement and egress costs low.',
    kind: 'personal',
    category: 'Data analytics',
    year: '2026, in progress',
    role: 'Sole author',
    technologies: ['DuckDB', 'PostgreSQL', 'Supabase', 'Parquet', 'MinIO / AWS S3', 'Python', 'Streamlit'],
    tags: ['Analytics', 'Data engineering', 'In progress'],
    featured: true,
    displayOrder: 0,
    accent: 'blue',
    publish: true,
    layout: [
      {
        blockType: 'features',
        heading: 'The design',
        items: [
          { title: 'Sources', text: 'PostgreSQL (Supabase) for live user profiles, and raw web logs stored as Parquet files in S3-compatible storage (MinIO locally).' },
          { title: 'Engine', text: 'DuckDB reads both in place and acts as the semantic and transformation layer: no warehouse to load first.' },
          { title: 'Dashboard', text: 'An interactive dashboard (Streamlit, Evidence.dev or Marimo) on top of the DuckDB models.' },
          { title: 'Why', text: 'Moving less data means lower egress and storage costs and fresher numbers, a real pain point for data teams.' },
        ],
      },
    ],
  },
  {
    title: 'Financial Analytics & Expense Tracker',
    slug: 'financial-analytics-expense-tracker',
    summary: 'A MERN dashboard that charts spending, with JWT sign-in and a MongoDB data model.',
    description: 'A full-stack expense tracker with an analytics dashboard: spending charts built with Chart.js, JWT authentication, and a MongoDB schema designed for the reports.',
    kind: 'personal',
    category: 'Analytics dashboard',
    year: '',
    role: 'Sole author',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js', 'JWT'],
    tags: ['Analytics', 'MERN', 'Dashboard'],
    featured: true,
    displayOrder: 1,
    accent: 'green',
    publish: true,
    layout: [],
  },
  {
    title: 'Notes App (MERN)',
    slug: 'notes-app-mern',
    summary: 'A secure notes app: create, edit and delete notes, with JWT sign-in so each user sees only their own.',
    description:
      'A full-stack notes application built with MongoDB, Express.js, React.js and Node.js. Users create, edit, delete and organise their notes in a responsive interface. JWT-based authentication and encrypted storage keep each user’s notes private.',
    kind: 'personal',
    category: 'Full-stack app',
    year: '',
    role: 'Sole author',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    tags: ['MERN', 'Authentication'],
    featured: false,
    displayOrder: 2,
    accent: 'violet',
    publish: true,
    layout: [],
  },
  {
    title: 'Student Portal',
    slug: 'student-portal',
    summary: 'A MERN student portal with role-based access.',
    description: 'A role-based student portal system built on the MERN stack.',
    kind: 'personal',
    category: 'Full-stack app',
    year: '',
    role: '',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    tags: ['MERN', 'Access control'],
    featured: false,
    displayOrder: 3,
    accent: 'orange',
    publish: false,
    needsReview: 'Unpublished by default. Add what it does and a screenshot before publishing.',
    layout: [],
  },
]

export const about = {
  eyebrow: 'About',
  title: 'Sreya Sivan',
  intro: [
    "I'm Sreya. I build full-stack web apps and practical Generative AI, and I'm now going deep on data analytics.",
    'At Prayag.ai I built an AI-powered business development agent in Python, used the OpenAI GPT-4 API to pull structured data out of client emails, and designed RAG-based chatbot architectures.',
    "I'm on a career break to study Data Science with AI at DataMites: Python, machine learning, NLP, database management, big data and automation. Looking for data analyst, data science, AI/ML and full-stack roles in Coimbatore, Bengaluru, Chennai or remote.",
  ].join('\n\n'),
  sections: [
    { title: 'Experience', kind: 'experience', visible: true },
    { title: 'Selected projects', kind: 'projects', visible: true },
    {
      title: 'Technologies',
      kind: 'technologies',
      visible: true,
      technologyGroups: [
        { label: 'Data & AI', items: 'Python, OpenAI API, RAG, Generative AI, PostgreSQL, MongoDB' },
        { label: 'Web', items: 'JavaScript, React.js, Node.js, Express.js, REST APIs, JWT authentication, Chart.js, Git' },
        { label: 'Also', items: 'Java, web security (authentication and access control)' },
        { label: 'Learning at DataMites', items: 'Machine learning, advanced data science, NLP, database management, big data foundations, automation' },
      ],
    },
    { title: 'Education', kind: 'education', visible: true },
    { title: 'Certifications', kind: 'certifications', visible: true },
  ],
}

export const categories = ['Data Analytics', 'Machine Learning', 'Generative AI', 'Python', 'Full-Stack', 'Learning Notes']

export const exampleDraftPost = {
  title: 'Example draft: how publishing works here',
  slug: 'example-draft-publishing-workflow',
  description: 'An unpublished example that shows the writing workflow. Delete it or replace its content before publishing.',
  paragraphs: [
    'This is an example draft. It exists so the editing, preview and publish steps can be tried before the first real post is written.',
    'Drafts are never shown on the public site. Use Preview in the admin to see this page, then Publish when a real post is ready.',
  ],
}
