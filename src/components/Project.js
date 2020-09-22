import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { projects } from "../assets/projects";
import SlideShow from "./SlideShow";
import SkrablMain from "../assets/images/screenshots/skrabl/skrabl-main.png";
import SkrablModal from "../assets/images/screenshots/skrabl/skrabl-modal.png";
import SkrablLogin from "../assets/images/screenshots/skrabl/skrabl-login.png";
import SkrablMenu from "../assets/images/screenshots/skrabl/skrabl-menu.png";
import KittyHome from "../assets/images/screenshots/clearEnglish/kitty-home.png";
import KittyAbout from "../assets/images/screenshots/clearEnglish/kitty-about.png";
import KittyMethod from "../assets/images/screenshots/clearEnglish/kitty-method.png";
import KittyPost from "../assets/images/screenshots/clearEnglish/kitty-post.png";
import QuizLogin from "../assets/images/screenshots/quiz/quiz-login.png";
import QuizMain from "../assets/images/screenshots/quiz/quiz-main.png";
import QuizAdd from "../assets/images/screenshots/quiz/quiz-add.png";
import QuizQuestions from "../assets/images/screenshots/quiz/quiz-questions.png";
import QuizInvite from "../assets/images/screenshots/quiz/quiz-invite.png";
import QuizQuiz from "../assets/images/screenshots/quiz/quiz-quiz.png";
import SacapMain from "../assets/images/screenshots/sacap/sacap-main.png";
import SacapProduct from "../assets/images/screenshots/sacap/sacap-product.png";
import SacapOrder from "../assets/images/screenshots/sacap/sacap-order.png";
import IdiomaticDashboard from "../assets/images/screenshots/idiomatic/idiomatic-dashboard.png";
import IdiomaticDefinitions from "../assets/images/screenshots/idiomatic/idiomatic-definitions.png";
import IdiomaticGaps from "../assets/images/screenshots/idiomatic/idiomatic-gaps.png";
import IdiomaticReader from "../assets/images/screenshots/idiomatic/idiomatic-reader.png";
import IdiomaticTexts from "../assets/images/screenshots/idiomatic/idiomatic-texts.png";
import IdiomaticWords from "../assets/images/screenshots/idiomatic/idiomatic-words.png";
import EventfulYear from "../assets/images/screenshots/eventful/eventful-year.png";
import EventfulAdd from "../assets/images/screenshots/eventful/eventful-add-event.png";
import EventfulMove from "../assets/images/screenshots/eventful/eventful-move-event.png";
import EventfulSettings from "../assets/images/screenshots/eventful/eventful-settings.png";
import EventfulEvents from "../assets/images/screenshots/eventful/eventful-my-events.png";
import BrexitHome from "../assets/images/screenshots/brexit/brexit-home.png";
import BrexitMap from "../assets/images/screenshots/brexit/brexit-map.png";
import BrexitNews from "../assets/images/screenshots/brexit/brexit-news.png";
import BrexitTimeline from "../assets/images/screenshots/brexit/brexit-timeline.png";
import BabyHome from "../assets/images/screenshots/baby/baby-home.png";
import BabySelect from "../assets/images/screenshots/baby/baby-select.png";
import BabyList from "../assets/images/screenshots/baby/baby-list.png";

import { useHistory } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
const tl = gsap.timeline();

const projectImages = [
  [BabyHome, BabySelect, BabyList],
  [SkrablMain, SkrablLogin, SkrablMenu, SkrablModal],
  [KittyHome, KittyAbout, KittyMethod, KittyPost],
  [QuizLogin, QuizMain, QuizAdd, QuizQuestions, QuizInvite, QuizQuiz],
  [SacapMain, SacapProduct, SacapOrder],
  [
    IdiomaticDashboard,
    IdiomaticDefinitions,
    IdiomaticGaps,
    IdiomaticReader,
    IdiomaticTexts,
    IdiomaticWords,
  ],
  [EventfulYear, EventfulAdd, EventfulMove, EventfulSettings, EventfulEvents],
  [BrexitHome, BrexitMap, BrexitNews, BrexitTimeline],
];

const Project = ({ match }) => {
  const [project, setProject] = useState(null);
  const [projectIndex, setProjectIndex] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const projectTitle = match.params.project;
    const index = projects.findIndex(
      (project) => project.path === projectTitle
    );
    const currentProject = projects[index];
    setProject(currentProject);
    setProjectIndex(index);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (project) {
      tl.to(
        ".project__title",
        0.6,
        {
          opacity: 1,
          y: -4,
          ease: "Power2.ease-out",
        },
        "+=0.4"
      );
      tl.to(
        ".project__skills",
        0.6,
        {
          opacity: 1,
          y: -4,
          ease: "Power2.ease-out",
        },
        "-=0.6"
      );
      tl.to(
        ".slideshow__wrapper",
        0.6,
        {
          opacity: 1,
          y: -4,
          ease: "Power2.ease-out",
          stagger: 0.2,
        },
        "-=0.6"
      );
      tl.to(
        ".project__content p",
        0.6,
        {
          opacity: 1,
          y: -4,
          ease: "Power2.ease-out",
        },
        "-=0.6"
      );
    }
  }, [project]);

  return (
    <div className="project__wrapper">
      {project && (
        <>
          <div className="project__content">
            <div className="project__skills">
              {project.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
            <div className="project__main">
              <h1 className="project__title">{project.title}</h1>
              <p>{project.paragraphs[0]}</p>
              <SlideShow slides={projectImages[projectIndex]} />
              <p>{project.paragraphs[1]}</p>
              <div className="project__links">
                <button
                  className="project__back"
                  onClick={() => history.goBack()}
                >
                  Back
                </button>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project__github"
              >
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Project);
