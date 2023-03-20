import React from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import logo from "../../assets/logo-oa.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">
            <span>01.</span> About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <span>02.</span> Projects
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <span>03.</span> Blog
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>04.</span> Contact
          </Link>
        </li>
      </ul>
      <button>Resume</button>
    </nav>
  );
}
function Header() {
  return (
    <header>
      <a href="/home">
        <img src={logo} alt="Logo" />
        <span className="sr-only">Home</span>
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
