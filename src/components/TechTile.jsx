import { TECH } from '../data/tech';

// Logo tile that reveals its name on hover/focus (the old "hvrbox").
export default function TechTile({ name, size = 'md', focusable = false }) {
  const tech = TECH[name] ?? {};
  return (
    <li className={`tech-tile tech-tile-${size}`} tabIndex={focusable ? 0 : undefined} title={name}>
      {tech.logo ? (
        <img src={tech.logo} alt="" loading="lazy" decoding="async" />
      ) : (
        <span className="tech-monogram" aria-hidden="true">
          {tech.short ?? name.slice(0, 2)}
        </span>
      )}
      <span className="tech-label">{name}</span>
    </li>
  );
}
