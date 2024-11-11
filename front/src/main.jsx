import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterClass from './Components/routes/RouterClass.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterClass />
  </StrictMode>
);
