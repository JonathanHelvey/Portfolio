import { SOCIAL } from '../data/social';

export default function SocialLinks() {
  return (
    <ul className="social">
      {SOCIAL.map((item) => (
        <li key={item.name}>
          <a href={item.href} target="_blank" rel="noopener noreferrer me" aria-label={item.name} title={item.name}>
            <img src={item.icon} alt="" width="40" height="40" />
          </a>
        </li>
      ))}
    </ul>
  );
}
