import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ links = [], showSearch = false, showCta = false, showBrand = true }) {
  return (
    <header className="navbar-wrap">
      <div className="navbar-left">
        {showBrand && (
          <Link to="/" className="navbar-logo">Linguist Pro</Link>
        )}
        {links.length > 0 && (
          <nav className="navbar-links">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>

      <div className="navbar-right">
        {showSearch && (
          <div className="navbar-search">
            <span className="material-symbols-outlined">search</span>
            <input placeholder="Tim kiem bai hoc..." />
          </div>
        )}
        {showSearch && (
          <button className="navbar-learn-btn" type="button">
            <span className="material-symbols-outlined">translate</span>
            <span>Hoc ngay</span>
          </button>
        )}
        <button className="navbar-icon-btn" title="Thong bao" type="button">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        {showCta ? (
          <Link to="/login" className="navbar-cta">Dang nhap</Link>
        ) : (
          <Link to="/profile" className="navbar-avatar" aria-label="Profile">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAplUCjBm4ZpfrXbXXeTyIIuRjT-y3ml4RKjdl4zlb0QAWs4YDKZHAFSzE9Iqi0CxsuoogvYeS8lAtfpYk9kppMmAf83UzF84LMA9REmdsQ3NRGLfJzmfLSHT4s1iIap5q3AMyoFWvd8OjjU39YC1YCfJm4r-bMZr2pad5EklXCgCeCtSmOg3aG9-q0myWpsLHjp5tHcCUMh9sYo8xzuCbR288V9Knon2_z18dA89wsKvoi2ZZvnmdohyzAvA4K7tq97xst5v84ENo"
              alt="avatar"
            />
          </Link>
        )}
      </div>
    </header>
  )
}
