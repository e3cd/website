import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ProjectModal from "./ProjectModal";

const style = {
  content: {
    position: "absolute",
    padding: "0px",
    height: "75vh",
    width: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.8)"
  }
};

function ProjectImage({ project, modalData }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  // console.log(project);

  return (
    <section>
      <img
        src={project.img.preview}
        alt={project.name}
        className="project__image"
      />
      <div className="project__overlay" onClick={toggleModal}>
        <summary className="project__text">
          <h2>{project.name}</h2>

          <p>{project.tech.join(", ")}</p>
        </summary>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="Project Modal"
        style={style}
        closeTimeoutMS={500}
      >
        <ProjectModal project={modalData} toggleModal={toggleModal} />
      </Modal>
    </section>
  );
}

export default ProjectImage;
