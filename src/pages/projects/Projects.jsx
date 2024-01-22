import React, { useEffect, useState } from "react";
import FeaturedProject from "../../components/featuredProject/FeaturedProject";
import SecondaryProject from "../../components/secondaryProject/SecondaryProject";
import { getProjects } from "../../../ApiLibrary";
import SyncLoader from "react-spinners/SyncLoader";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import projectData from "../../projects-data.json";
import { Card, Carousel } from "react-bootstrap";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        try {
            (async () => {
                setIsLoading(true);
                const sortedProjects = projectData.sort((a, b) => {
                    return a.title === "TrayectoAI" ? -1 : 1;
                });
                setProjects(sortedProjects);

                setIsLoading(false);
            })();
        } catch (error) {
            console.log(error);
        }
        ReactGA.send({
            hitType: "pageview",
            page: "/projects",
            title: "Projects Page Visit",
        });
    }, []);
    return isLoading ? (
        <main className="projects">
            <SyncLoader
                color="#64ffda"
                size={20}
                cssOverride={{ opacity: 0.5 }}
            />
        </main>
    ) : (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ozkar Alvarez | Projects</title>
                <meta
                    name="description"
                    content="Welcome to our Projects page, where creativity meets innovation! Discover a showcase of our most exciting and groundbreaking web development projects that have pushed the limits of what's possible. From custom e-commerce solutions to dynamic web applications, we are proud to present a collection of work that reflects our expertise in Full Stack Web Development."
                />
            </Helmet>
            <main className="projects">
                <h1 className="page-heading">
                    <span className="h1--num">02.</span> [...ozkar.
                    <span className="h1--text">projects</span>()]
                </h1>
                <div className="featured--projects">
                    {windowWidth > 1140 &&
                        projects.map((project, index) => {
                            if (project.featured) {
                                return (
                                    <FeaturedProject
                                        project={project}
                                        key={index + project.title}
                                    />
                                );
                            }
                        })}
                    {windowWidth <= 1140 &&
                        projects.map((project, index) => {
                            if (project.featured) {
                                return (
                                    <Card
                                        className="secondary-project featured"
                                        data-bs-theme="dark"
                                        key={index + project.title}
                                    >
                                        <Carousel interval={null}>
                                            {project.imageUrl.map(
                                                (image, index) => (
                                                    <Carousel.Item
                                                        key={index + image}
                                                    >
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt={project.title}
                                                        />
                                                    </Carousel.Item>
                                                )
                                            )}
                                        </Carousel>
                                        <Card.Body>
                                            <Card.Title>
                                                {project.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {project.description}
                                            </Card.Text>
                                            <div className="footer">
                                                <p className="sec--tech">
                                                    {project.techSelect.map(
                                                        (tech, index) => (
                                                            <span
                                                                className="sec-tech-name"
                                                                key={
                                                                    index +
                                                                    tech.tech_name
                                                                }
                                                            >
                                                                {tech.tech_name}
                                                            </span>
                                                        )
                                                    )}
                                                </p>
                                                <div className="sec--links">
                                                    {project.githubUrl &&
                                                    project.githubUrl !==
                                                        "n/a" ? (
                                                        <a
                                                            href={
                                                                project.githubUrl
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <i className="fab fa-github"></i>
                                                        </a>
                                                    ) : null}
                                                    {project.liveUrl &&
                                                    project.liveUrl !==
                                                        "n/a" ? (
                                                        <a
                                                            href={
                                                                project.liveUrl
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                        </a>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                );
                            }
                        })}
                </div>
                <div className="noteworthy--projects">
                    <h2>Professional Projects</h2>
                    <div className="secondary--container">
                        {projects.map((project, index) => {
                            if (!project.featured && project.professional) {
                                return (
                                    <SecondaryProject
                                        project={project}
                                        key={index + project.title}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="noteworthy--projects">
                    <h2>Other Noteworthy Projects</h2>
                    <div className="secondary--container">
                        {projects.map((project, index) => {
                            if (!project.featured && !project.professional) {
                                return (
                                    <SecondaryProject
                                        project={project}
                                        key={index + project.title}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Projects;
