import { type ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const render = (App: ComponentType) => {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>,
  );
};

export default render;
