import { useSyncExternalStore } from 'react';

const GREETINGS = {
  hello: { emoji: '👋', text: 'Hello!' },
  morning: { emoji: '🌅', text: 'Good Morning!' },
  afternoon: { emoji: '☀️', text: 'Good Afternoon!' },
  evening: { emoji: '🌙', text: 'Good Evening!' },
};

function timeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

const subscribe = () => () => {};

// The pre-rendered HTML can't know the visitor's clock, so the server
// snapshot says "Hello!" and React swaps in the time of day after hydrating.
export default function Greeting() {
  const greeting = GREETINGS[useSyncExternalStore(subscribe, timeOfDay, () => 'hello')];

  return (
    <p className="greeting">
      <span aria-hidden="true">{greeting.emoji}</span> {greeting.text} <span aria-hidden="true">{greeting.emoji}</span>
    </p>
  );
}
