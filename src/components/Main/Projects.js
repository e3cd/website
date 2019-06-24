import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from "./../../data.js";
import ProjectImage from "./../Elements/ProjectImage";

export default function Projects() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    centerMode: true
  };
  return (
    <div className="projects">
      <Slider {...settings} className="project__slider">
        {projectsData.map((project, i) => {
          return (
            <div className="project__showcase">
              <ProjectImage data={project} key={i} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
