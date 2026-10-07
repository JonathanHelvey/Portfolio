import { useEffect, useState } from 'react';

function greetingFor(hour) {
  if (hour < 12) return { emoji: '🌅', label: 'sunrise', text: 'Good Morning!' };
  if (hour < 18) return { emoji: '☀️', label: 'sun', text: 'Good Afternoon!' };
  return { emoji: '🌙', label: 'moon', text: 'Good Evening!' };
}

const HELLO = { emoji: '👋', label: 'waving hand', text: 'Hello!' };

// The pre-rendered HTML can't know the visitor's clock, so it says "Hello!"
// and swaps in the time-of-day greeting once the page is running.
export default function Greeting() {
  const [greeting, setGreeting] = useState(HELLO);

  useEffect(() => {
    setGreeting(greetingFor(new Date().getHours()));
  }, []);

  return (
    <p className="greeting">
      <span role="img" aria-label={greeting.label}>
        {greeting.emoji}
      </span>{' '}
      {greeting.text}{' '}
      <span role="img" aria-hidden="true">
        {greeting.emoji}
      </span>
    </p>
  );
}
