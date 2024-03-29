import React from "react";
import { Carousel } from "react-bootstrap";

import ReactGA from "react-ga4";
const GA__handleProjectClick = (project) => {
    ReactGA.event({
        category: "Project Click",
        action: `Clicked on ${project.title}`,
    });
};
function FeaturedProject({ project }) {
    return (
        <div
            className="project"
            onClick={() => {
                GA__handleProjectClick(project);
            }}
        >
            <div className="project--image">
                {/* <img src={project.imageUrl} alt={project.title} /> */}
                <Carousel
                    className="c-img"
                    data-bs-theme="dark"
                    interval={null}
                >
                    {project.imageUrl.map((image, index) => (
                        <Carousel.Item key={index + image}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={project.title}
                            />
                        </Carousel.Item>
                    ))}
                    {/* <Carousel.Item className="brad">
                        <img
                            className="d-block w-100"
                            src={project.imageUrl}
                            alt={project.title}
                        />
                    </Carousel.Item>
                    <Carousel.Item className="brad">
                        <img
                            className="d-block w-100"
                            src={project.imageUrl}
                            alt={project.title}
                        />
                    </Carousel.Item> */}
                </Carousel>
            </div>
            <div className="project--content">
                <p className="p-fp">Featured Project</p>
                <h2 className="p-title">{project.title}</h2>
                <p className="p-desc">{project.description}</p>
                <div className="project--tech">
                    {project.techSelect.map((tech, index) => (
                        <span
                            className="p-tech-name"
                            key={index + tech.tech_name}
                        >
                            {tech.tech_name}
                        </span>
                    ))}
                </div>
                <div className="project--info">
                    {project.wip ? (
                        <p className="p-wip">Work In Progress</p>
                    ) : null}
                    <div className="project--links">
                        {project.githubUrl ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        ) : null}
                        {project.liveUrl !== "n/a" ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProject;
