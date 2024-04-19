import { useToggle } from "../hooks/useToggle.js"
import { activeClassIf } from "../utils/classnames.js"
//import { Copyright } from "./Copyright.jsx"

/**
 * 
 * @param {string} page 
 */
export function Header({ page }) {

  const [expanded, toggleExpanded] = useToggle(false)


  return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Mon site</a>
      <button onClick={toggleExpanded} className="navbar-toggler" type="button"
        aria-controls="navbarNav" aria-expanded={expanded} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
        id="navbarNav">
        <ul className="navbar-nav">
          {/* 
          <li className="nav-item">
            <a className={activeClassIf(page === 'todos-reducer', 'nav-link')} href="#todos-reducer">Todos reducer</a>
          </li>

          <li className="nav-item">
            <a className={activeClassIf(page === 'todos', 'nav-link')} href="#todos">Todos</a>
          </li>
          */}
          <li className="nav-item">
            <a className={activeClassIf(page === 'todos-filter', 'nav-link')} href="#todos-filter">Filter with Todos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}