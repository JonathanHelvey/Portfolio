// Plain data, no image imports: the AI fit check (netlify/functions/fit.mjs)
// reads this file on the server. Screenshots are mapped by id in
// projectImages.js.
//
// demo: live URL, or null when the hosting is gone (card shows "Demo retired").
// source: public repo, or null for private/client code.
// confidential: private work shown without a live link or real screenshot.
// draft: shown in local and deploy-preview builds only, hidden in production
//        and left out of the AI fit check until the details are confirmed.
export const PROJECTS = [
  {
    id: 'trendwake',
    title: 'TrendWake',
    featured: true,
    description:
      'My own product: a trading-ideas platform with a signal scanner, a strategy lab with backtesting, paper-trading bots, a trade journal, a community feed, and AI features including LLM trade reviews and an MCP server for AI assistants.',
    tech: ['React', 'Vite', 'PHP', 'Symfony', 'PostgreSQL', 'LLM APIs', 'MCP', 'Stripe'],
    demo: 'https://trendwake.com/',
    source: null,
    sourceNote: 'Private codebase',
  },
  {
    id: 'retail-ecommerce',
    title: 'Upper Limits Midwest E-commerce',
    description:
      'Lead Full Stack Developer (2020–2024) at Upper Limits Midwest, a glass company with multiple store locations: custom Magento 2 modules, Elasticsearch product search across thousands of listings, a point-of-sale integration, and a 50% performance boost.',
    tech: ['PHP', 'Magento', 'React', 'GraphQL', 'Elasticsearch', 'MySQL'],
    demo: null,
    source: null,
    confidential: true,
    sourceNote: 'Private client work',
  },
  {
    id: 'agnostack',
    title: 'agnoStack Marketing Website',
    description:
      'Company marketing website for an e-commerce plugin startup, built with Gatsby, Styled Components and Zendesk Garden.',
    tech: ['React', 'Gatsby', 'Styled Components', 'AWS', 'JavaScript', 'CSS3'],
    demo: 'https://agnostack.com/',
    source: null,
    sourceNote: 'Private client code',
  },
  {
    id: 'popnspots',
    title: "Pop'n Spots",
    description: 'Desktop and mobile city guide. See how busy a location is before you go out!',
    tech: ['React', 'Redux', 'Firebase', 'JavaScript', 'CSS3', 'HTML5'],
    demo: 'https://bluebubbles-998d5.firebaseapp.com/',
    source: 'https://github.com/capstone-bluebubbles/Pop-n-Spots',
  },
  {
    id: 'actors',
    title: 'Actors Portfolio Site',
    description: 'Portfolio site for a working actor, built in the JAMstack with Gatsby.',
    tech: ['React', 'Gatsby', 'Styled Components', 'JavaScript', 'CSS3', 'HTML5'],
    demo: null,
    source: 'https://github.com/JonathanHelvey/EricRyanSwanson',
  },
  {
    id: 'face-recognition',
    title: 'Face Recognition App',
    description:
      'Full stack app that detects faces in any image using the Clarifai API. React front end with a PostgreSQL database.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Knex', 'JavaScript', 'CSS3'],
    demo: null,
    source: 'https://github.com/JonathanHelvey/Face-Recognition-App',
  },
  {
    id: 'tour',
    title: 'Tour',
    description: 'Android app showing the most obscure places around Chicago. Built with React Native and Expo.',
    tech: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
    demo: null,
    source: 'https://github.com/JonathanHelvey/Tour',
  },
  {
    id: 'guessing-game',
    title: 'Guessing Game',
    description: 'Guess a number between 1 and 100! Built with vanilla JavaScript and CSS3.',
    tech: ['JavaScript', 'CSS3', 'HTML5'],
    demo: 'https://jonathanhelvey.github.io/guessing-game/',
    source: null,
  },
  {
    id: 'color-generator',
    title: 'Background Color Generator',
    description: 'Pick the right gradient colors for your website. Built with vanilla JavaScript and CSS3.',
    tech: ['JavaScript', 'CSS3', 'HTML5'],
    demo: 'https://jonathanhelvey.github.io/Background-Color-Generator/',
    source: 'https://github.com/JonathanHelvey/Background-Color-Generator',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    description:
      'Rebuilt in 2026 with React and Vite: pre-rendered pages, strict security headers, a locked-down dependency supply chain and an AI job-fit check.',
    tech: ['React', 'Vite', 'LLM APIs', 'CSS3', 'HTML5'],
    demo: null,
    self: true,
    source: 'https://github.com/JonathanHelvey/Portfolio',
  },
];
