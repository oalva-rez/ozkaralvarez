import React from "react";
import projectsData from "../../../projectsData";
import FeaturedProject from "../../components/featuredProject/FeaturedProject";

function Projects() {
  return (
    <main className="projects">
      <h1>
        <span className="h1--num">01.</span> &#123;...ozkar.
        <span className="h1--text">projects</span>()&#125;
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
    </main>
  );
}

export default Projects;
