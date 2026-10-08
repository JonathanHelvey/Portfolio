// Facts about Jonathan's experience. Plain data with no imports, so both
// the site (the skills tiles) and the AI fit check (netlify/functions/fit.mjs)
// can read it. The AI is told to use ONLY what's written here and in
// projects.js, so keep it accurate: anything added here can show up in
// answers to recruiters.

export const SKILLS = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'PHP',
  'Symfony',
  'Elasticsearch',
  'Vite',
  'Claude Code',
  'LLM APIs',
  'MCP',
  'Redux',
  'React Router',
  'GraphQL',
  'Gatsby',
  'Firebase',
  'AWS',
  'Sequelize',
  'Sass',
  'OAuth',
  'Stripe',
  'Mocha',
  'Jasmine',
  'Git',
  'HTML5',
  'CSS3',
];

export const EXPERIENCE = [
  {
    role: 'Software engineer on an enterprise team (current role)',
    details: [
      'Builds and maintains production web applications and the APIs behind them.',
      'Works with Elasticsearch.',
      'The employer and project details are confidential: never guess or name them.',
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
    role: 'Software engineer at agnoStack (startup building an omni-channel e-commerce plugin for Zendesk)',
    details: [
      'Helped design and build the company marketing website (Gatsby, Styled Components, Zendesk Garden).',
      'Built internal dashboard tools to track customer statistics.',
      'Helped develop and maintain APIs for the Zendesk plugin integration.',
      'Technologies: React hooks, Node.js, Serverless, AWS, Firebase.',
    ],
  },
  {
    role: 'Freelance web developer, Chicago area',
    details: ['Built sites for actors and small businesses with Gatsby and GraphQL.'],
  },
  {
    role: 'Graduate of Fullstack Academy (intensive coding bootcamp)',
    details: ['Node.js, Express, React, Redux, PostgreSQL and Sequelize, plus algorithms and data structures.'],
  },
];

export const WORKING_STYLE = [
  'Uses AI coding agents such as Claude Code daily for planning, building, reviewing and testing, treating them as a fast pair programmer: sets the direction, reviews every change and owns what ships.',
  'Comes from an arts background and cares about interactive, animated, responsive UI.',
  'Security-minded: strict CSPs, supply-chain hardening for npm dependencies, spam filtering and rate limiting on public endpoints.',
];
