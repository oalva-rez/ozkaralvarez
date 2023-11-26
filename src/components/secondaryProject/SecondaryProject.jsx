import React from "react";
import ReactGA from "react-ga4";
const GA__handleProjectClick = (project) => {
    ReactGA.event({
        category: "Project Click",
        action: `Clicked on ${project.title}`,
    });
};
function SecondaryProject({ project }) {
    return (
        <div
            className="secondary-project"
            onClick={() => {
                GA__handleProjectClick(project);
            }}
        >
            <div className="sec--heading">
                <h3>{project.title}</h3>
                <div className="sec--links">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    {project.liveUrl ? (
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
            <p className="sec--desc">{project.description}</p>
            <div className="sec--tech">
                {project.techSelect.map((tech, index) => (
                    <span
                        className="sec-tech-name"
                        key={index + tech.tech_name}
                    >
                        {tech.tech_name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SecondaryProject;
