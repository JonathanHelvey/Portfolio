import { useRef, useState } from 'react';
import TechTile from './TechTile';
import { PROJECT_IMAGES } from '../data/projectImages';

function ExternalLink({ href, className, children, ...rest }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

// Screenshot on top; below it a 3D card that flips on hover, when keyboard
// focus enters the back face, or via the flip button (touch screens).
export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const frontButton = useRef(null);
  const shotHref = project.demo ?? project.source;
  const retired = !project.demo && !project.self;

  const shot = (
    <>
      <img src={PROJECT_IMAGES[project.id]} alt={`Screenshot of ${project.title}`} loading="lazy" decoding="async" />
      {project.featured && <span className="badge badge-featured">Featured</span>}
      {project.draft && <span className="badge badge-draft">Draft · preview only</span>}
      {retired && <span className="badge">Demo retired · code on GitHub</span>}
    </>
  );

  return (
    <article
      id={`project-${project.id}`}
      className={`project reveal${project.featured ? ' project-featured' : ''}${flipped ? ' is-flipped' : ''}`}
    >
      {shotHref ? (
        <ExternalLink href={shotHref} className="project-shot" aria-label={`Open ${project.title}`}>
          {shot}
        </ExternalLink>
      ) : (
        <div className="project-shot">{shot}</div>
      )}
      <div className="flip">
        <div className="flip-face flip-front">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button
            ref={frontButton}
            type="button"
            className="flip-toggle"
            aria-pressed={flipped}
            onClick={() => setFlipped(true)}
          >
            Built with ↻
          </button>
        </div>
        <div className="flip-face flip-back">
          <h4>Built with</h4>
          <ul className="tech-grid">
            {project.tech.map((name) => (
              <TechTile key={name} name={name} size="sm" />
            ))}
          </ul>
          <div className="project-links">
            {project.demo && (
              <ExternalLink href={project.demo} className="button button-small">
                Live site ↗
              </ExternalLink>
            )}
            {project.source ? (
              <ExternalLink href={project.source} className="button button-small button-ghost">
                Source code ↗
              </ExternalLink>
            ) : (
              project.sourceNote && <span className="source-note">{project.sourceNote}</span>
            )}
          </div>
          <button
            type="button"
            className="flip-toggle"
            onClick={() => {
              setFlipped(false);
              // Move focus off the back face, or :focus-visible keeps it flipped.
              frontButton.current?.focus();
            }}
          >
            Back ↺
          </button>
        </div>
      </div>
    </article>
  );
}
