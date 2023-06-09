import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import react from "../../assets/tech-icons/reactjs.png";
import mongodb from "../../assets/tech-icons/mongodb.png";
import nodejs from "../../assets/tech-icons/nodejs.png";
import mysql from "../../assets/tech-icons/mysql.png";
import sass from "../../assets/tech-icons/sass.png";
import typescript from "../../assets/tech-icons/typescript.png";
import ozkar from "../../assets/ozkar-light.webp";

function Home() {
  const navigation = useNavigate();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ozkar Alvarez | Home</title>
        <meta
          name="description"
          content="Explore a web developer's portfolio that showcases custom solutions and expertly crafted websites. With a passion for innovation and collaboration, I bring your digital dreams to life. Let's build something amazing together."
        />
      </Helmet>
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
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
          </div>
          <div className="hr-line"></div>
          <div className="tech-stack">
            <h3>Ozkar's Tech Stack</h3>
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
    </>
  );
}

export default Home;
