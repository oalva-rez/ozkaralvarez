import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";

import "./pages/home/home.scss";
import "./pages/about/about.scss";
import "./pages/projects/projects.scss";
import "./pages/blog/blog.scss";
import "./pages/blogPost/blogPost.scss";
import "./pages/contact/contact.scss";

import "./components/header/header.scss";
import "./components/footer/footer.scss";
import "./components/blogPost/blogPost.scss";
import "./components/featuredProject/featuredProject.scss";
import "./components/footer/footer.scss";
import "./components/secondaryProject/secondaryProject.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);