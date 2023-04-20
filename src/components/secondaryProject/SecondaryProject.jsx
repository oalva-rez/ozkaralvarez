import React from "react";

function SecondaryProject({ project }) {
  return (
    <div className="secondary-project">
      <div className="sec--heading">
        <h3>{project.title}</h3>
        <div className="sec--links">
          <a href={project.ghLink} target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {project.siteLink ? (
            <a href={project.siteLink} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          ) : null}
        </div>
      </div>
      <p className="sec--desc">{project.description}</p>
      <div className="sec--tech">
        {project.tech.map((tech, index) => (
          <span className="sec-tech-name" key={index + tech.name}>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SecondaryProject;
