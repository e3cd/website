import React from "react";

function ProjectModal({ toggleModal, project }) {
  console.log(project);

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
        <a onClick={toggleModal} className="project__modal--close">
          &times;
        </a>

        <h2 className="project__modal--heading">{project.name}</h2>
        <p className="project__modal--labels">{project.tech.join(", ")}</p>
        <p className="project__modal--text">{project.description}</p>

        <div className="project__modal--links">
          <a href={project.link} className="project__modal--btn">
            Live
          </a>
          <a href={project.githubLink} className="project__modal--btn">
            Source
          </a>
        </div>
      </div>
    </div>

    // <div>
    //   <img
    //     src={data.img.preview}
    //     alt={data.name}
    //     className="project__modal--img"
    //   />

    //   <button onClick={toggleModal} className="project__modal--close">
    //     Close
    //   </button>

    //   <h3 className="project__modal--heading">{data.name}</h3>

    //   <p className="project__modal--text">{data.description}</p>
    //   <p className="project__modal--labels">{data.tech.join(", ")}</p>
    //   <div>
    //     <a href={data.link}>Live</a>
    //     <a href={data.githubLink}>Source</a>
    //   </div>
    // </div>
  );
}

export default ProjectModal;
