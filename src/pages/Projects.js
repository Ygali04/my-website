import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/projectList";

import "../css-components/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => (
          <ProjectItem 
            key={project.slug}
            slug={project.slug}
            name={project.name} 
            image={project.image}
            github={project.github}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;