import Greeting from '../components/Greeting';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import TechTile from '../components/TechTile';
import { PROJECTS } from '../data/projects';
import { SKILLS } from '../data/profile';
import headshot from '../assets/headshot.jpg';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-avatar" src={headshot} alt="Jonathan Helvey" width="160" height="160" />
        <Greeting />
        <h1 className="hero-name">Jonathan Helvey</h1>
        <p className="hero-role">Software Engineer</p>
        <SocialLinks />
        <div className="hero-actions">
          <a className="button" href="#projects">
            See my work
          </a>
          <a className="button button-ghost" href="/contact/">
            Let&apos;s work together
          </a>
        </div>
        <a className="hero-fit-link" href="/fit/">
          Hiring? Try my AI fit check →
        </a>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects">
          {PROJECTS.filter((project) => __SHOW_DRAFTS__ || !project.draft).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about reveal">
          <div className="about-text">
            <p>
              Hi, I&apos;m <strong>Jonathan Helvey</strong>, a <strong className="accent">software engineer</strong> who
              loves building interactive, animated, responsive web apps. I come from a background in the{' '}
              <span className="arts">
                <span>a</span>
                <span>r</span>
                <span>t</span>
                <span>s</span>
              </span>{' '}
              and brought that creativity to software. The browser is my canvas.
            </p>
            <p>
              By day I&apos;m a software engineer on an enterprise team, building and maintaining production web
              applications, the APIs behind them and search with Elasticsearch.
            </p>
            <p>
              On my own time I build <a href="https://trendwake.com/">TrendWake</a>, a trading-ideas platform I designed
              and run end to end: the React front end, the PHP/Symfony API, PostgreSQL, payments, infrastructure and
              deploys.
            </p>
            <p>
              <strong>I build with AI every day.</strong> AI coding agents like Claude Code are part of my daily
              workflow for planning, building, reviewing and testing. I treat them like a very fast pair programmer: I
              set the direction, review every change and own what ships. I also build AI into products. TrendWake has
              LLM-powered trade reviews and market summaries, plus an MCP server that lets people connect their own AI
              assistants to their account.
            </p>
            <p>
              Before that I spent four years as Lead Full Stack Developer at Upper Limits Midwest, building and speeding
              up its Magento 2 e-commerce platform, including Elasticsearch product search. Earlier I worked at
              agnoStack, a startup building an omni-channel plugin for Zendesk, integrating Magento, BigCommerce and
              Stripe APIs and building internal dashboards. I also freelanced in the Chicago area, building sites for
              actors and small businesses.
            </p>
            <p>
              I&apos;m a graduate of <strong>Fullstack Academy</strong>, an intensive coding bootcamp covering Node.js,
              Express, React, Redux and PostgreSQL, along with computer science fundamentals.
            </p>
          </div>
        </div>

        <h3 className="subsection-title">Tools I work with</h3>
        <ul className="skills reveal">
          {SKILLS.map((name) => (
            <TechTile key={name} name={name} />
          ))}
        </ul>
      </section>

      <section className="section cta reveal">
        <h2>Have a project in mind?</h2>
        <div className="hero-actions">
          <a className="button button-large" href="/contact/">
            Let&apos;s work together!
          </a>
          <a className="button button-large button-ghost" href="/fit/">
            Try the AI fit check
          </a>
        </div>
      </section>
    </>
  );
}
