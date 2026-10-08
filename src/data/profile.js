// Facts about Jonathan's experience. Plain data with no imports, so both
// the site (the skills tiles) and the AI fit check (netlify/functions/fit.mjs)
// can read it. The AI is told to use ONLY what's written here and in
// projects.js, so keep it accurate: anything added here can show up in
// answers to recruiters.

export const SKILLS = [
  'PHP',
  'Symfony',
  'JavaScript',
  'React',
  'Node.js',
  'MySQL',
  'PostgreSQL',
  'Elasticsearch',
  'Magento',
  'GraphQL',
  'PHPUnit',
  'Jest',
  'GitLab CI/CD',
  'Vite',
  'Claude Code',
  'LLM APIs',
  'MCP',
  'Stripe',
  'AWS',
  'Express',
  'Redux',
  'React Router',
  'Gatsby',
  'Firebase',
  'Sass',
  'OAuth',
  'Git',
  'HTML5',
  'CSS3',
];

const PRO_SINCE = 2019;

export const EXPERIENCE = [
  {
    role: 'Career timeline',
    details: [
      'Writing code since 2017: self-taught at first, then the Fullstack Academy bootcamp.',
      `Working professionally as a software developer since ${PRO_SINCE} (about ${new Date().getFullYear() - PRO_SINCE} years).`,
    ],
  },
  {
    role: 'Software Engineer IV on an enterprise team (current role, since 2024; promoted from Software Engineer III in 2026)',
    details: [
      'Built a new customer-facing product offering that streamlines an end-to-end filing workflow, from intake through completion.',
      "Designed and architected an account-management API in PHP/Symfony, and introduced PHPUnit testing to a previously untested legacy backend, establishing the team's backend testing practice.",
      'Implemented the ELK stack (Elasticsearch, Logstash, Kibana) for logging and search, and redesigned index mappings to improve search accuracy and performance.',
      'Led legacy modernization of a 15+ year PHP codebase ahead of a PHP 8 upgrade: benchmarked and replaced unmaintained export libraries that caused production memory exhaustion, and removed dead vendored libraries.',
      'Architected the backend for a public intake system: schema design, REST endpoints and status workflow.',
      'Ships React features and fixes, and manages release branches and changelogs in GitLab CI/CD.',
      'The employer and its product names are confidential: never guess or name them.',
    ],
  },
  {
    role: 'Founder and sole engineer of TrendWake (current side project, trendwake.com)',
    details: [
      'Designed and runs the whole product end to end: React + Vite front end, PHP/Symfony API, PostgreSQL, Stripe payments, infrastructure, CI/CD and deploys.',
      'Features include a signal scanner, a strategy lab with backtesting, paper-trading bots, a trade journal and a community feed.',
      'AI features: LLM-powered trade reviews and market summaries, and an MCP server that lets users connect their own AI assistants to their account.',
    ],
  },
  {
    role: 'Lead Full Stack Developer at Upper Limits (multi-location retailer, 2020–2024)',
    details: [
      'Led design, development and maintenance of business-critical e-commerce applications using PHP, React and GraphQL.',
      'Improved application performance by 50% through lazy loading, image optimization and script bundling.',
      'Engineered custom Magento 2 modules in PHP and JavaScript, including admin product-attribute sorting, a compliance age-verification pop-up and a dynamic blog/content widget.',
      'Integrated Elasticsearch to speed up and improve product search across thousands of listings.',
      'Integrated third-party systems including a point-of-sale (Magestore POS), and managed and tuned MySQL databases for large datasets.',
    ],
  },
  {
    role: 'Full Stack Engineer at agnoStack (startup building an omni-channel e-commerce plugin for Zendesk, 2019–2020)',
    details: [
      'Integrated Magento, BigCommerce and Stripe APIs into the Zendesk commerce plugin.',
      'Built internal dashboards in Node.js and React for financial and customer metrics.',
      'Helped design and build the company marketing website (Gatsby, Styled Components, Zendesk Garden).',
    ],
  },
  {
    role: 'Freelance web developer, Chicago area',
    details: ['Built sites for actors and small businesses with Gatsby and GraphQL.'],
  },
  {
    role: 'Education',
    details: [
      'Fullstack Academy of Code, Software Development Immersive (Node.js, Express, React, Redux, PostgreSQL, algorithms and data structures).',
      "Bachelor's degree in Fine Art, Roosevelt University.",
    ],
  },
];

export const WORKING_STYLE = [
  'Uses AI coding agents such as Claude Code daily for planning, building, reviewing and testing, treating them as a fast pair programmer: sets the direction, reviews every change and owns what ships.',
  'Comes from a fine-art background and cares about interactive, animated, responsive UI.',
  'Security-minded: strict CSPs, supply-chain hardening for npm dependencies, spam filtering and rate limiting on public endpoints.',
];
