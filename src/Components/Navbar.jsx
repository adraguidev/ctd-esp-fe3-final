import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>DH Odonto</h1>
        </div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/favs">Favs</Link>
          <button 
            className="theme-btn"
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
          >
            {state.theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar