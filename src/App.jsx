import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileMaxWidth = 769;
      const isMobile = window.innerWidth <= mobileMaxWidth;
      setIsMobile(isMobile);
    };
    checkIsMobile(); // Call the function to check initially
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header isMobile={isMobile} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer isMobile={isMobile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
