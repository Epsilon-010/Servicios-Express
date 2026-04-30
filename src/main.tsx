import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Desactiva el restore de scroll del browser — con lazy-loaded sections + Lenis,
// el browser intenta restaurar a una posición que ya no existe en el layout
// inicial → user veía la página cargada entre Hero y Services. Mejor empezar
// siempre desde el top y dejar que Lenis tome el control.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
