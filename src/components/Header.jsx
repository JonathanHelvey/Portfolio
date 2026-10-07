import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/writings/', label: 'Writings' },
  { href: '/contact/', label: 'Contact' },
];

const MINIMUM_SCROLL = 80;

// Hides on scroll down, reappears on scroll up (ported from the old site).
export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [shadow, setShadow] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = window.scrollY;
        setShadow(current > 2);
        setHidden(current > lastScroll.current && current > MINIMUM_SCROLL);
        lastScroll.current = current;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`navbar${shadow ? ' shadow' : ''}${hidden ? ' hidden' : ''}`}>
      <a className="brand" href="/" aria-label="Jonathan Helvey, home">
        JH
      </a>
      <nav aria-label="Main">
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
