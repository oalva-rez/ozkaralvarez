import React, { useEffect, useState } from "react";
import FeaturedProject from "../../components/featuredProject/FeaturedProject";
import SecondaryProject from "../../components/secondaryProject/SecondaryProject";
import { getProjects } from "../../../ApiLibrary";
import SyncLoader from "react-spinners/SyncLoader";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            (async () => {
                setIsLoading(true);
                const projects = await getProjects();
                const sortedProjects = projects.projects.sort((a, b) => {
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
                    {projects.map((project, index) => {
                        if (project.featured) {
                            return (
                                <FeaturedProject
                                    project={project}
                                    key={index + project.title}
                                />
                            );
                        }
                    })}
                </div>
                <div className="noteworthy--projects">
                    <h2>Other Noteworthy Projects</h2>
                    <div className="secondary--container">
                        {projects.map((project, index) => {
                            if (!project.featured) {
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
