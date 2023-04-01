// TEMP DATA BEFORE PORTFOLIO CMS IS DEPLOYED

import karozImg from "./src/assets/project-images/karoz-img.webp";
import sensuro from "./src/assets/project-images/sensuro.webp";
import restaurantPage from "./src/assets/project-images/restaurant-page.webp";
import cvGenerator from "./src/assets/project-images/cv-generator.webp";
import lazyReader from "./src/assets/project-images/lazyreader.webp";
import premy from "./src/assets/project-images/premy.webp";
import quizApp from "./src/assets/project-images/quiz-app.webp";
import audiophile from "./src/assets/project-images/audiophile.webp";
import customCms from "./src/assets/project-images/custom-cms.webp";

let css,
  react,
  nodejs,
  express,
  mongodb,
  aws,
  typescript,
  jest,
  html,
  js,
  webpack,
  firebase = null;

const projectsData = [
  {
    id: 34954958,
    title: "Portfolio CMS",
    description:
      "A headless CMS platform allowing users to update their portfolio content through a dashboard UI using generated API keys and user API endpoints.",
    image: customCms,
    ghLink: "https://github.com/oalva-rez/custom-cms/tree/master",
    siteLink: "",
    tech: [
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: nodejs, name: "nodejs" },
      { image: express, name: "express" },
      { image: mongodb, name: "mongodb" },
      { image: aws, name: "aws" },
    ],
    isWIP: true,
    isFeatured: true,
  },
  {
    id: 34958,
    title: "Audiophile",
    description:
      "A fully responsive, e-commerce website for audio equipment. Built with React, and typescript. Uses React Router v6 for routing and URL params for product ID.",
    image: audiophile,
    ghLink: "https://github.com/oalva-rez/audiophile",
    siteLink: "https://audiophile-10.web.app/",
    tech: [
      { image: css, name: "css" },
      { image: typescript, name: "typescript" },
      { image: react, name: "react" },
    ],
    isWIP: true,
    isFeatured: true,
  },
  {
    id: 1,
    title: "Karoz",
    description:
      "A Kanban project management app allowing users to create and manage project flows. Built with React, ContextAPI for state management, and Firebase.",
    image: karozImg,
    ghLink: "https://github.com/oalva-rez/karoz/tree/firebase",
    siteLink: "https://karoz-3c7bb.web.app/",
    tech: [
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: firebase, name: "firebase" },
    ],
    isWIP: false,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Shopping Cart",
    description:
      "Mock store website built with React. Implements TDD practices using Jest and React Testing Library. Uses React Router v6 for routing and URL params for product ID.",
    image: sensuro,
    ghLink: "https://github.com/oalva-rez/shopping-cart",
    siteLink: "https://shopping-cart123.web.app",
    tech: [
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: jest, name: "jest" },
    ],
    isWIP: false,
    isFeatured: false,
  },
  {
    id: 3,
    title: "Restaurant Page",
    description:
      "Final project for UX course called Creating User-centered Content. Built with vanilla JavaScript and webpack for bundling. Simulated a client proposal for a mobile responsive restaurant page.",
    image: restaurantPage,
    ghLink: "https://github.com/oalva-rez/restaurant-page",
    siteLink: "https://oalva-rez.github.io/restaurant-page/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: js, name: "javascript" },
      { image: webpack, name: "webpack" },
    ],
    isWIP: false,
    isFeatured: false,
  },
  {
    id: 4,
    title: "Lazy Reader",
    description:
      "A website that generates a summarized version of the top posts from Reddit. Built with React for the front-end, utilizing a restful API built with Node.js and Express with a MongoDB database.",
    image: lazyReader,
    ghLink: "https://github.com/oalva-rez/LazyReader-Frontend",
    siteLink: "https://lazyreader456.web.app/",
    tech: [
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: nodejs, name: "nodejs" },
      { image: express, name: "express" },
      { image: mongodb, name: "mongodb" },
    ],
    isWIP: false,
    isFeatured: false,
  },
  {
    id: 5,
    title: "CV Generator",
    description:
      "A simple CV generator built with React. Users can add their information and download a PDF version of their CV.",
    image: cvGenerator,
    ghLink: "https://github.com/oalva-rez/cv-generator",
    siteLink: "https://oalva-rez.github.io/cv-generator/",
    tech: [
      { image: css, name: "css" },
      { image: react, name: "react" },
    ],
    isWIP: false,
    isFeatured: false,
  },
  {
    id: 6,
    title: "Premy",
    description:
      "A Wordle-like guessing game for the English Premier League. Built with vanilla JavaScript and webpack for bundling. Async/await syntax, and fetch for calling the Football Data API.",
    image: premy,
    ghLink: "https://github.com/oalva-rez/premy",
    siteLink: "https://oalva-rez.github.io/premy/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: js, name: "javascript" },
      { image: webpack, name: "webpack" },
    ],
    isWIP: false,
    isFeatured: false,
  },
  {
    id: 7,
    title: "Quiz App",
    description:
      "A quiz app built with React. The app uses the Open Trivia Database API.",
    image: quizApp,
    ghLink: "https://github.com/oalva-rez/quiz-app",
    siteLink: "https://oalva-rez.github.io/quiz-app/",
    tech: [
      { image: css, name: "css" },
      { image: react, name: "react" },
    ],
    isWIP: false,
    isFeatured: false,
  },
];

export default projectsData;
