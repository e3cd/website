import React, { useState } from "react";
import Modal from "react-modal";

const style = {
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    background: "white",
    opacity: "0.999",
    overflow: "auto",
    outline: "none",
    padding: "20px"
  }
};

function ProjectImage({ data }) {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <section>
      <img src={data.img.preview} alt={data.name} className="project__image" />
      <div className="project__overlay" onClick={toggleModal}>
        <summary className="project__text">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <p className="highlight">{data.tech.join(", ")}</p>
        </summary>
      </div>
      {/* <Modal
            style={style}
            isOpen={modalOpen}
            onRequestClose={toggleModal}
            contentLabel="Project Modal">
            <ProjectModal 
                data={data}
                toggleModal={toggleModal}
            />
        </Modal> */}
    </section>
  );
}

export default ProjectImage;
