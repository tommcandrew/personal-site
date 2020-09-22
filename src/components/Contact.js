import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
const tl = gsap.timeline();

const Contact = () => {
  useEffect(() => {
    tl.to(
      ".contact__content",
      0.5,
      {
        opacity: 1,
        y: -10,
        ease: "Power2.ease-out",
      },
      "+=0.3"
    );
  }, []);

  return (
    <div className="contact__wrapper">
      <div className="contact__content">
        <h1 className="contact__title">Get in touch...</h1>
        <div className="contact__field">
          <span>tommcandrew@hotmail.com</span>
        </div>
        <div className="contact__field">
          <span>07479746224</span>
        </div>
        <div className="contact__icons">
          <a
            href="https://github.com/tommcandrew"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/in/tom-mcandrew-15b03919a/"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
