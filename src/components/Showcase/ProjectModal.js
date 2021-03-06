import React from "react";

function ProjectModal({ toggleModal, project }) {
  console.log(project.githubLink);
  return (
    <div className="project__modal--content">
      <div className="project__modal--left">
        <img
          src={project.img.gif}
          alt={project.name}
          className="project__modal--img"
        />
      </div>
      <div className="project__modal--right">
        <div className="project__modal--description">
          <a onClick={toggleModal} className="project__modal--close">
            &times;
          </a>

          <h2 className="project__modal--heading">{project.name}</h2>
          <p className="project__modal--labels">{project.tech.join(", ")}</p>
          <p className="project__modal--text">{project.description}</p>
        </div>
        <div className="project__modal--links">
          <a href={project.link} className="project__modal--btn">
            Live
          </a>
          {project.githubLink.length > 1 ? (
            <>
              <a
                href={project.githubLink[0].front}
                className="project__modal--btn"
              >
                Frontend Source
              </a>
              <a
                href={project.githubLink[1].back}
                className="project__modal--btn"
              >
                Backend Source
              </a>
            </>
          ) : (
            <a
              href={project.githubLink[0].front}
              className="project__modal--btn"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
