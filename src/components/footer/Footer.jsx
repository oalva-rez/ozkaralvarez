import React from "react";

function Footer({ isMobile }) {
  return (
    <footer className={isMobile ? "footer--mobile" : null}>
      <div>
        <ul>
          <li>
            <a href="http://">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="http://">
              <i className="fa-brands fa-codepen"></i>
            </a>
          </li>
          <li>
            <a href="http://">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="http://github.com">Source code available</a>
      </div>
      <div>
        <a href="mailto: ozkaralvarez10@gmail.com">ozkaralvarez10@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
