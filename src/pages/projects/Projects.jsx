import React from "react";
import projectsData from "../../../projectsData";
import FeaturedProject from "../../components/featuredProject/FeaturedProject";
import SecondaryProject from "../../components/secondaryProject/SecondaryProject";

function Projects() {
  return (
    <main className="projects">
      <h1 className="page-heading">
        <span className="h1--num">01.</span> [...ozkar.
        <span className="h1--text">projects</span>()]
      </h1>
      <div className="featured--projects">
        {projectsData.map((project, index) => {
          if (project.isFeatured) {
            return (
              <FeaturedProject project={project} key={index + project.title} />
            );
          }
        })}
      </div>
      <div className="noteworthy--projects">
        <h2>Other Noteworthy Projects</h2>
        <div className="secondary--container">
          {projectsData.map((project, index) => {
            if (!project.isFeatured) {
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
  );
}

export default Projects;
