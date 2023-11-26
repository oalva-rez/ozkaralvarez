import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

function About() {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "/about",
            title: "About Page Visit",
        });
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ozkar Alvarez | About</title>
                <meta
                    name="description"
                    content="Our about page is the ultimate destination for discovering the creative genius behind our Full Stack Web Development services. From crafting stunning websites to building robust back-end systems, we are a team of passionate problem solvers with a knack for turning complex challenges into elegant solutions. Get ready to dive into our world and discover the skills, experience, and personality that make us the perfect fit for your next project. So come on in and meet the team behind the magic!"
                />
            </Helmet>
            <main className="about">
                <h1 className="page-heading">
                    <span className="h1--num">01.</span> &#123;...ozkar.
                    <span className="h1--text">about</span>()&#125;
                </h1>
                <div>
                    <div className="about--text">
                        <p>
                            A few years ago, I discovered my love for software
                            engineering, which was a natural extension of my
                            passion for building things. I saw the internet as a
                            vast playground where I could apply my creativity
                            and engineering skills to build incredible things
                            that people could use and enjoy.
                        </p>
                        <p>
                            One of my main attributes that I take pride in is my
                            creativity. I love to come up with innovative and
                            unique ideas that can make a difference in people's
                            lives. I believe that the key to successful software
                            is to create something that is not only functional
                            but also beautiful and user-friendly.
                        </p>
                        <p>
                            As a Software Engineer, I have a keen eye for detail
                            and am always striving for perfection. I know that
                            every line of code I write can have a significant
                            impact on the user's experience, so I take great
                            care in ensuring that everything I build is of the
                            highest quality.
                        </p>
                    </div>
                    <div className="about--content">
                        <blockquote>
                            <i className="fa-solid fa-quote-right quote1"></i>
                            <i className="fa-solid fa-quote-left quote2"></i>
                            <i className="about--quote">
                                A creative life is an amplified life. It's a
                                bigger life, a happier life, an expanded life,
                                and a hell of a lot more interesting life
                            </i>
                            <p>- Elizabeth Gilbert</p>
                        </blockquote>
                        <h2>My Latest Work</h2>
                        <div className="about--vid">
                            <iframe
                                src="https://www.youtube.com/embed/d8zbsLwqIVg"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;
