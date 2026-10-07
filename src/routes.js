import { SITE } from './data/social';

const modules = import.meta.glob('./posts/*.md', { eager: true });

export const POSTS = Object.values(modules)
  .map((module) => module.default)
  .filter((post) => post.published)
  .toSorted((a, b) => b.date.localeCompare(a.date));

// Every page that gets pre-rendered to its own index.html.
export const ROUTES = [
  { path: '/', page: 'home', title: `${SITE.name} | Software Engineer`, description: SITE.description },
  {
    path: '/writings/',
    page: 'writings',
    title: `Writings | ${SITE.name}`,
    description: 'Notes on building for the web, by Jonathan Helvey.',
  },
  ...POSTS.map((post) => ({
    path: `/writings/${post.slug}/`,
    page: 'post',
    post,
    title: `${post.title} | ${SITE.name}`,
    description: post.description,
    type: 'article',
  })),
  {
    path: '/contact/',
    page: 'contact',
    title: `Contact | ${SITE.name}`,
    description: "Have a project in mind? Let's work together.",
  },
  {
    path: '/thanks/',
    page: 'thanks',
    title: `Thanks! | ${SITE.name}`,
    description: 'Message received.',
    noindex: true,
  },
  {
    path: '/404',
    page: 'notFound',
    title: `Page not found | ${SITE.name}`,
    description: SITE.description,
    noindex: true,
  },
];

export function resolveRoute(pathname) {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return ROUTES.find((route) => route.path === path) ?? ROUTES.find((route) => route.page === 'notFound');
}
