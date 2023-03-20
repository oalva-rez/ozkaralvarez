import React, { useState, useEffect } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import logo from "../../assets/logo-oa.png";
import { Link } from "react-router-dom";
function Navbar({ isMobile, setIsMenuOpen }) {
  return (
    <nav className={isMobile ? "mobile-nav" : null}>
      <ul>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <span>01.</span> About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            <span>02.</span> Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
            <span>03.</span> Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <span>04.</span> Contact
          </Link>
        </li>
      </ul>
      <button>Resume</button>
    </nav>
  );
}
function Header({ isMobile }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // If the user is scrolling up or top of page, show the navbar
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos === 0;
      setIsScrollingUp(
        prevScrollPos > currentScrollPos && currentScrollPos > 0
      );
      setIsNavbarVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Disable scroll when isLoading state is true
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  function getScrollClass() {
    if (isNavbarVisible && isScrollingUp) {
      return "header--scrolling";
    } else if (!isNavbarVisible) {
      return "header--hidden";
    }
  }
  return (
    <header className={getScrollClass()}>
      <a href="/home" className={isMenuOpen ? "menu-open-logo" : null}>
        <img src={logo} alt="Logo" />
        <span className="sr-only">Home</span>
      </a>
      {isMobile ? (
        <Menu
          right
          isOpen={isMenuOpen}
          onOpen={() => {
            setIsMenuOpen(true);
          }}
          onClose={() => {
            setIsMenuOpen(false);
          }}
        >
          <Navbar isMobile={isMobile} setIsMenuOpen={setIsMenuOpen} />
        </Menu>
      ) : (
        <Navbar />
      )}
    </header>
  );
}

export default Header;
