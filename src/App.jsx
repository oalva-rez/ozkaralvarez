import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogPost/BlogPost";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ChatBot from "./components/chatBot/ChatBot";
import Code404 from "./pages/Code404/Code404";
import ReactGA from "react-ga4";

ReactGA.initialize([
    {
        trackingId: "G-4B972HDZT3",
    },
]);
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
        ReactGA.send({
            hitType: "pageview",
            page: "/my-path",
            title: "Custom Title",
        });
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
                    <Route exact path="/blog/:slug" element={<BlogPost />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route path="*" element={<Code404 />} />
                </Routes>
                <ChatBot isMobile={isMobile} />
                <Footer isMobile={isMobile} />
            </BrowserRouter>
        </div>
    );
}

export default App;
