import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>
        © {__BUILD_YEAR__} Jonathan Helvey · Built with React + Vite ·{' '}
        <a href="https://github.com/JonathanHelvey/Portfolio" target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </p>
    </footer>
  );
}
