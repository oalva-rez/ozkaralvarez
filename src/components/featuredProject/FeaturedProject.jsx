import React from "react";

function FeaturedProject({ project }) {
  return (
    <div className="project">
      <a
        href={project.liveUrl === "n/a" ? project.githubUrl : project.liveUrl}
        className="project--image"
        target="_blank"
        rel="noreferrer"
      >
        <img src={project.imageUrl} alt={project.title} />
        <div className="image-overlay"></div>
      </a>
      <div className="project--content">
        <p className="p-fp">Featured Project</p>
        <h2 className="p-title">{project.title}</h2>
        <p className="p-desc">{project.description}</p>
        <div className="project--tech">
          {project.techSelect.map((tech, index) => (
            <span className="p-tech-name" key={index + tech.tech_name}>
              {tech.tech_name}
            </span>
          ))}
        </div>
        <div className="project--info">
          {project.wip ? <p className="p-wip">Work In Progress</p> : null}
          <div className="project--links">
            {project.githubUrl !== "n/a" ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            ) : null}
            {project.liveUrl !== "n/a" ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
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
