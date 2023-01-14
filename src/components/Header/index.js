import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <Link to="/" className="link-style">
      <h1 className="logo">
        COVID19<span className="span-logo">INDIA</span>
      </h1>
    </Link>
    <div className="nav-links-container">
      <Link to="/" className="link-style">
        <button type="button" className="header-btn">
          Home
        </button>
      </Link>
      <Link to="/about" className="link-style">
        <button type="button" className="header-btn">
          About
        </button>
      </Link>
    </div>

    <div className="nav-links-sm-container">
      <Link to="/" className="link-style">
        <button type="button">Home</button>
      </Link>
      <Link to="/about" className="link-style">
        <button type="button">About</button>
      </Link>
    </div>
  </nav>
)

export default Header
