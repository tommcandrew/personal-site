import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
const tl = gsap.timeline();

const SocialIcons = () => {
  useEffect(() => {
    tl.to(
      ".socialIcons__wrapper",
      2,
      {
        opacity: 1,
        ease: "Power2.ease-out",
      },
      "+=2"
    );
  }, []);

  return (
    <div className="socialIcons__wrapper">
      <a
        href="https://github.com/tommcandrew"
        className="socialIcons__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
      <a
        href="https://www.linkedin.com/in/tom-mcandrew-15b03919a/"
        className="socialIcons__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
    </div>
  );
};

export default SocialIcons;
