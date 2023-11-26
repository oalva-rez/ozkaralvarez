import React from "react";

function Footer({ isMobile }) {
    return (
        <footer className={isMobile ? "footer--mobile" : null}>
            <div>
                <ul>
                    <li>
                        <a
                            href="https://github.com/oalva-rez"
                            target="_blank"
                            rel="noopener"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://codepen.io/oalva-rez"
                            target="_blank"
                            rel="noopener"
                        >
                            <i className="fa-brands fa-codepen"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ozkaralvarez/"
                            target="_blank"
                            rel="noopener"
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <a
                    href="https://github.com/oalva-rez/ozkaralvarez"
                    target="_blank"
                    rel="noopener"
                >
                    Source code available
                </a>
            </div>
            <div>
                <a href="mailto: ozkaralvarez10@gmail.com">
                    ozkaralvarez10@gmail.com
                </a>
            </div>
        </footer>
    );
}

export default Footer;
