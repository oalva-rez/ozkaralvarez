import React, { useEffect, useState } from "react";
import FeaturedProject from "../../components/featuredProject/FeaturedProject";
import SecondaryProject from "../../components/secondaryProject/SecondaryProject";
import { getProjects } from "../../../ApiLibrary";
import SyncLoader from "react-spinners/SyncLoader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const projects = await getProjects();
      setProjects(projects.user.projects);
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <main className="projects">
      <SyncLoader color="#64ffda" size={20} cssOverride={{ opacity: 0.5 }} />
    </main>
  ) : (
    <main className="projects">
      <h1 className="page-heading">
        <span className="h1--num">02.</span> [...ozkar.
        <span className="h1--text">projects</span>()]
      </h1>
      <div className="featured--projects">
        {projects.map((project, index) => {
          if (project.featured) {
            return (
              <FeaturedProject project={project} key={index + project.title} />
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
  );
}

export default Projects;
