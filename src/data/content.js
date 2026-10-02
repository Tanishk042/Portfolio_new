export const profile = {
  name: 'Tanisk Bhadauriya',
  firstName: 'Tanisk',
  title: 'Full-Stack Engineer | Blockchain (Web3) | AI/ML',
  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'tanisk72@gmail.com',
  phone: '8532909934',
  phoneDisplay: '+91 8532909934',
  phoneTel: '+918532909934',
  links: {
    github: 'https://github.com/Tanishk042',
    linkedin: 'https://www.linkedin.com/in/tanisk-bhadauriya-57b6a5275',
  },
}

export const navLinks = [
  { label: 'Projects', href: '#featured' },
  { label: 'Experience', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const heroPills = ['Full-Stack', 'Blockchain / Web3', 'AI / ML']

export const heroKicker = 'Best footballer that didn’t make it — self proclaimed.'

export const heroVideo = {
  id: 'I5kX0tyj0sM',
  title: 'Ultra Characters Ink Brush Animation in Dragon Ball Legends',
}

export const heroStats = [
  profile.location,
  'B.Tech, Electronics & Communication',
  'Open to Software Engineer, Full-Stack & Web3 / AI-ML roles',
]

export const statement = {
  lead: 'Full-Stack Engineer',
  rest: 'building React/Node.js products, then extending them with Polygon smart contracts and TensorFlow models.',
}

export const stack = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'FastAPI',
  'Spring Boot',
  'MongoDB',
  'Solidity',
  'Polygon',
  'Web3',
  'TensorFlow',
  'TensorFlow Lite',
  'scikit-learn',
  'Python',
  'Java',
  'C / C++',
  'SQL',
  'WebSockets',
]

export const projects = [
  {
    name: 'Resilio',
    subtitle: 'Offline-First Disaster Communication Platform',
    year: '2025',
    category: 'Full-Stack / Web3',
    description:
      'Peer-to-peer and mesh-radio fallback so it works without internet; ML-based SOS risk ranking; Polygon smart contracts for transparent donation tracking; civilian and NGO dashboards with offline caching.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets', 'Polygon', 'ML'],
  },
  {
    name: 'BEDWUM',
    subtitle: 'Bioacoustic Early-Warning System for Disasters',
    year: '2026',
    category: 'AI / ML',
    description:
      'Lightweight 1D-CNN detecting abnormal animal-sound patterns and sub-20 Hz infrasound as possible disaster precursors; deployed on low-power devices with TensorFlow Lite; trained on real audio plus synthetic anomalies.',
    tags: ['Python', '1D-CNN', 'TensorFlow Lite', 'Librosa', 'SciPy'],
  },
  {
    name: 'ChainMorph',
    subtitle: 'AI-Driven Adaptive Supply Chain Platform',
    year: 'Web3 / AI',
    category: 'Full-Stack / AI',
    description:
      'TensorFlow inventory forecasting; blockchain-backed last-mile courier assignment using carbon cost, urgency and congestion; carbon-indexed logistics scoring and auto-bundling.',
    tags: ['TensorFlow', 'Solidity', 'IoT', 'Web3'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer',
    roleNote: '(Intern)',
    org: 'Path Builder Digital Era Private Limited',
    meta: 'Prayagraj · Jun 2025 – Jul 2025',
    bullets: [
      'Built responsive React interfaces for a Digital Out-of-Home (DOOH) advertising platform.',
      'Ensured consistent behavior across devices and screen sizes.',
      'Worked in Agile sprints with code reviews alongside cross-functional engineers.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    roleNote: '(Freelance)',
    org: 'Digilok',
    meta: 'Remote · Jan 2025 – Mar 2025',
    bullets: [
      'Migrated the news platform to a Node.js server for better stability.',
      'Built a custom CMS, increasing content output by 30%.',
      'Optimized JavaScript, cutting page load time by 50%.',
      'Improved SEO and monetization, growing traffic and revenue.',
    ],
  },
]

export const education = [
  {
    role: 'B.Tech, Electronics & Communication Engineering',
    meta: 'Delhi · Aug 2023 – Present (Expected 2027)',
    bullets: [
      'Led a small team to ship a real-time sports platform that grew user engagement by 40%.',
      'Coursework and projects spanning data structures, OOP and databases alongside ECE fundamentals.',
    ],
  },
]

export const about = {
  heading: 'How I work.',
  eyebrow: 'About me',
  startLabel: 'My start',
  start: [
    "I’m a Full-Stack Engineer, B.Tech in Electronics & Communication, who builds React/Node.js products and extends them with Polygon smart contracts and TensorFlow models.",
    'I work across the whole stack: React and Next.js on the front, Node.js, Express and FastAPI underneath, MongoDB and SQL for data, and Solidity when a product genuinely needs on-chain logic.',
    'On the AI/ML side I work in Python with TensorFlow, TensorFlow Lite, scikit-learn, Librosa and Prophet — from forecasting models to lightweight 1D-CNNs that run on low-power devices.',
  ],
  skillsLabel: 'What I do best',
  skills: [
    { key: 'Languages', items: ['Java', 'C / C++', 'JavaScript', 'Python', 'SQL', 'Solidity'] },
    {
      key: 'Full-Stack',
      items: [
        'React',
        'Next.js',
        'HTML5',
        'CSS3',
        'Node.js',
        'Express.js',
        'FastAPI',
        'Spring Boot',
        'REST APIs',
        'WebSockets',
      ],
    },
    { key: 'Blockchain', items: ['Solidity', 'Smart Contracts', 'Polygon / EVM', 'Web3'] },
    {
      key: 'AI / ML',
      items: ['TensorFlow', 'TensorFlow Lite', '1D-CNN', 'scikit-learn', 'Librosa', 'SciPy', 'Prophet'],
    },
    { key: 'Data & Core', items: ['MongoDB', 'SQL', 'DSA', 'OOP'] },
    { key: 'Tools', items: ['Git / GitHub', 'VS Code', 'Postman', 'Agile / Scrum'] },
  ],
}

export const contact = {
  heading: 'Let’s build something together.',
  sub: 'I’m targeting Software Engineer, Full-Stack and Web3 / AI-ML roles. If that sounds like your team, my inbox is open.',
  ready: 'Ready to start?',
  rows: [
    { key: 'Email', value: profile.email, copy: profile.email },
    { key: 'Phone', value: profile.phoneDisplay, copy: profile.phone },
  ],
}

export const footer = {
  site: [
    { label: 'Home', href: '#top' },
    { label: 'Projects', href: '#featured' },
    { label: 'Experience', href: '#work' },
    { label: 'Education', href: '#education' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  follow: [
    { label: 'GitHub', href: profile.links.github, external: true },
    { label: 'LinkedIn', href: profile.links.linkedin, external: true },
    { label: 'Email', href: `mailto:${profile.email}` },
  ],
  mega: ['Full-Stack', 'Web3 · AI/ML'],
  copyright: '© 2026 Tanisk Bhadauriya',
}
