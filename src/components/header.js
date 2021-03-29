import { Link } from "gatsby"
import React from "react"
// import JSONData from "../../content/data/i18n.json"
import Logo from '../images/sig-blk-en.svg'
const Header = () => (
  <header>
      <div className="container header navbar navbar-default">
          <a className="container" href="/">
          <img className="navbar-brand" style={{width: '20vw'}} src={Logo} alt="logo" />
          </a>
          <div className="lang-toggle">
          <Link to="/">Français</Link>
          </div>
      </div>

  </header>
)

export default Header
