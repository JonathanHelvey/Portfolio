import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export { ROUTES } from './routes';
export { SITE } from './data/social';

export function render(route) {
  return renderToString(
    <StrictMode>
      <App route={route} />
    </StrictMode>
  );
}
