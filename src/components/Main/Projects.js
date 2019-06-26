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

    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: true
  };

  console.log(projectsData);

  return (
    <Slider {...settings} className="project__slider">
      {projectsData.map((project, i) => (
        <div>
          <ProjectImage project={project} key={i} />
        </div>
      ))}
    </Slider>
  );
}
