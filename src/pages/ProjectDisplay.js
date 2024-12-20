import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../css-components/ProjectDisplay.css";

function ProjectDisplay() {
  const { slug } = useParams();
  const project = ProjectList.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img 
        src={project.image} 
        alt={project.name}
        onClick={() => project.website && openInNewTab(project.website)}
        style={{ cursor: project.website ? 'pointer' : 'default' }}
      />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.github && (
        <GitHubIcon 
          onClick={() => openInNewTab(project.github)}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}

export default ProjectDisplay;