import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { CounterProvider } from "./contexts/CounterContext";
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <CounterProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </CounterProvider>,
  </ThemeProvider>,
)
