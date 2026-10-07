// Floating hexagons behind the page — a pure-CSS stand-in for the old
// react-particles-js background. Sizes and paths live in global.css.
export default function Hexagons() {
  return (
    <div className="hexagons" aria-hidden="true">
      {Array.from({ length: 7 }, (_, index) => (
        <span key={index} className={`hex hex-${index + 1}`} />
      ))}
    </div>
  );
}
