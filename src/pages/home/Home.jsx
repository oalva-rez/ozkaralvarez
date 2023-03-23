import React from "react";
import react from "../../assets/reactjs.png";
import mongodb from "../../assets/mongodb.png";
import nodejs from "../../assets/nodejs.png";
import mysql from "../../assets/mysql.png";
import sass from "../../assets/sass.png";
import typescript from "../../assets/typescript.png";
import ozkar from "../../assets/ozkar-light.webp";

function Home() {
  return (
    <main className="home">
      <div className="content-pane">
        <p>Hi, my name is</p>
        <h1>Ozkar Alvarez.</h1>
        <h2>I build things for the web.</h2>
        <p className="content-text">
          Web Developer passionate about learning new things and sharing my
          knowledge with others. My desire has always been to channel my
          creative abilities into the realm of innovation and engineering.
        </p>
        <div className="home--buttons">
          <button>About</button>
          <button>Projects</button>
        </div>
        <div className="hr-line"></div>
        <div className="tech-stack">
          <h3>Ozkar's Pick</h3>
          <div>
            <ul>
              <li>
                <img src={typescript} alt="typescript" title="typescript" />
              </li>
              <li>
                <img src={react} alt="react" title="react" />
              </li>
              <li>
                <img src={sass} alt="sass" title="sass" />
              </li>
              <li>
                <img src={nodejs} alt="nodejs" title="nodejs" />
              </li>
              <li>
                <img src={mongodb} alt="mongodb" title="mongodb" />
              </li>
              <li>
                <img src={mysql} alt="mysql" title="mysql" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-pane">
        <img src={ozkar} alt="ozkar alvarez" className="ozkar-image" />
        <div className="image-decal"></div>
      </div>
    </main>
  );
}

export default Home;
