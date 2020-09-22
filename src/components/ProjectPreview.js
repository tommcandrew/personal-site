import React from "react";
import SacapMain from "../assets/images/screenshots/sacap/sacap-main.png";
import IdiomaticDashboard from "../assets/images/screenshots/idiomatic/idiomatic-dashboard.png";
import EventfulYear from "../assets/images/screenshots/eventful/eventful-year.png";
import BrexitHome from "../assets/images/screenshots/brexit/brexit-home.png";
import KittyHome from "../assets/images/screenshots/clearEnglish/kitty-home.png";
import SkrablMain from "../assets/images/screenshots/skrabl/skrabl-main.png";
import QuizLogin from "../assets/images/screenshots/quiz/quiz-login.png";
import BabyHome from "../assets/images/screenshots/baby/baby-home.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";

const projectImages = [
  BabyHome,
  SkrablMain,
  KittyHome,
  QuizLogin,
  SacapMain,
  IdiomaticDashboard,
  EventfulYear,
  BrexitHome,
];

const ProjectPreview = ({ currentProject, currentIndex }) => {
  return (
    <div className="projectPreview__wrapper">
      <div className="projectPreview__content">
        <div className="projectPreview__info">
          <h1 className="projectPreview__title">{currentProject.title}</h1>
          <p className="projectPreview__description">
            {currentProject.description}
          </p>
          <div className="projectPreview__links">
            <div>
              <Link
                to={`/portfolio/${currentProject.path}`}
                className="projectPreview__link"
              >
                Details
              </Link>
              <a
                href={currentProject.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectPreview__link"
              >
                Visit
              </a>
            </div>

            <div>
              <a
                href={currentProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectPreview__github"
              >
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </div>
          </div>
        </div>
        <div className="projectPreview__image-wrapper">
          <img
            src={projectImages[currentIndex]}
            alt="Home page"
            className="projectPreview__image"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectPreview);
