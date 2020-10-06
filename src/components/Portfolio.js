import React, { useState, useEffect } from "react";
import ProjectPreview from "./ProjectPreview";
import Timeline from "./Timeline";
import { projects } from "../assets/projects";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slideProject } from "../utils/slideProject";
import gsap from "gsap";
const tl = gsap.timeline();

const Portfolio = ({ currentIndex, setCurrentIndex }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    tl.to(
      ".portfolio__content",
      1,
      {
        opacity: 1,
        ease: "Power2.ease-out",
      },
      "+=0.5"
    );
  }, []);

  useEffect(() => {
    setCurrentProject(projects[currentIndex]);
    setAnimating(false);
  }, [currentIndex]);

  const goLeft = () => {
    startAnimation("left");
    setTimeout(() => {
      let newIndex;
      if (currentIndex === 0) {
        newIndex = projects.length - 1;
      } else {
        newIndex = currentIndex - 1;
      }
      setCurrentIndex(newIndex);
    }, 800);
  };

  const goRight = () => {
    startAnimation("right");
    setTimeout(() => {
      let newIndex;
      if (currentIndex === projects.length - 1) {
        newIndex = 0;
      } else {
        newIndex = currentIndex + 1;
      }
      setCurrentIndex(newIndex);
    }, 800);
  };

  const startAnimation = (dir) => {
    slideProject(dir, setAnimating);
  };

  return (
    <div className="portfolio__wrapper">
      <div className="portfolio__content">
        <Timeline
          setCurrentIndex={setCurrentIndex}
          projects={projects}
          currentIndex={currentIndex}
          animating={animating}
        />
        {currentProject && (
          <ProjectPreview
            currentProject={currentProject}
            currentIndex={currentIndex}
          />
        )}
        <div className="portfolio__buttons">
          <span onClick={goLeft} className="portfolio__button">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </span>
          <span onClick={goRight} className="portfolio__button">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
