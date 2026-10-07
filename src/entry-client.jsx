import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { resolveRoute } from './routes';
import './styles/global.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App route={resolveRoute(window.location.pathname)} />
  </StrictMode>
);

// Built pages arrive pre-rendered; `pnpm dev` serves an empty shell.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
