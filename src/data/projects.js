import trendwake from '../assets/projects/trendwake.jpg';
import agnostack from '../assets/projects/agnostack.jpg';
import popnspots from '../assets/projects/popnspots.jpg';
import actors from '../assets/projects/actors.jpg';
import faceRecognition from '../assets/projects/face-recognition.jpg';
import tour from '../assets/projects/tour.jpg';
import guessingGame from '../assets/projects/guessing-game.jpg';
import colorGenerator from '../assets/projects/color-generator.jpg';
import portfolio from '../assets/projects/portfolio.jpg';

// demo: live URL, or null when the hosting is gone (card shows "Demo retired").
// source: public repo, or null for private/client code.
export const PROJECTS = [
  {
    id: 'trendwake',
    title: 'TrendWake',
    featured: true,
    image: trendwake,
    description:
      'My own product: a trading-ideas platform with a signal scanner, a strategy lab with backtesting, paper-trading bots, a trade journal, a community feed, and AI features including LLM trade reviews and an MCP server for AI assistants.',
    tech: ['React', 'Vite', 'PHP', 'Symfony', 'PostgreSQL', 'LLM APIs', 'MCP', 'Stripe'],
    demo: 'https://trendwake.com/',
    source: null,
    sourceNote: 'Private codebase',
  },
  {
    id: 'agnostack',
    title: 'agnoStack Marketing Website',
    image: agnostack,
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
    image: popnspots,
    description:
      'Desktop and mobile city guide. See how busy a location is before you go out!',
    tech: ['React', 'Redux', 'Firebase', 'JavaScript', 'CSS3', 'HTML5'],
    demo: 'https://bluebubbles-998d5.firebaseapp.com/',
    source: 'https://github.com/capstone-bluebubbles/Pop-n-Spots',
  },
  {
    id: 'actors',
    title: 'Actors Portfolio Site',
    image: actors,
    description: 'Portfolio site for a working actor, built in the JAMstack with Gatsby.',
    tech: ['React', 'Gatsby', 'Styled Components', 'JavaScript', 'CSS3', 'HTML5'],
    demo: null,
    source: 'https://github.com/JonathanHelvey/EricRyanSwanson',
  },
  {
    id: 'face-recognition',
    title: 'Face Recognition App',
    image: faceRecognition,
    description:
      'Full stack app that detects faces in any image using the Clarifai API. React front end with a PostgreSQL database.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Knex', 'JavaScript', 'CSS3'],
    demo: null,
    source: 'https://github.com/JonathanHelvey/Face-Recognition-App',
  },
  {
    id: 'tour',
    title: 'Tour',
    image: tour,
    description:
      'Android app showing the most obscure places around Chicago. Built with React Native and Expo.',
    tech: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
    demo: null,
    source: 'https://github.com/JonathanHelvey/Tour',
  },
  {
    id: 'guessing-game',
    title: 'Guessing Game',
    image: guessingGame,
    description: 'Guess a number between 1 and 100! Built with vanilla JavaScript and CSS3.',
    tech: ['JavaScript', 'CSS3', 'HTML5'],
    demo: 'https://jonathanhelvey.github.io/guessing-game/',
    source: null,
  },
  {
    id: 'color-generator',
    title: 'Background Color Generator',
    image: colorGenerator,
    description:
      'Pick the right gradient colors for your website. Built with vanilla JavaScript and CSS3.',
    tech: ['JavaScript', 'CSS3', 'HTML5'],
    demo: 'https://jonathanhelvey.github.io/Background-Color-Generator/',
    source: 'https://github.com/JonathanHelvey/Background-Color-Generator',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    image: portfolio,
    description:
      'Rebuilt in 2026 with React and Vite: pre-rendered pages, strict security headers and a locked-down dependency supply chain.',
    tech: ['React', 'Vite', 'CSS3', 'HTML5'],
    demo: null,
    self: true,
    source: 'https://github.com/JonathanHelvey/Portfolio',
  },
];
