import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:suhailamir094@gmail.com" className="footer--link">
        suhailamir094@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://www.instagram.com/not_that_amir_"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/amir-suhail-02b19bbb/"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://twitter.com/AmirSuhail09"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://github.com/suhailamir94"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
