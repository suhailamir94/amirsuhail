import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="mailto:suhailamir094@gmail.com" className="footer--link">
        suhailamir094@gmail.com
      </a>
      <ul className="social-list">
        <l1 className="social-list__item">
          <a
            href="https://www.instagram.com/not_that_amir_"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            a
          </a>
        </l1>
        <l1 className="social-list__item">
          <a
            href="https://www.linkedin.com/in/amir-suhail-02b19bbb/"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            b
          </a>
        </l1>
        <l1 className="social-list__item">
          <a
            href="https://twitter.com/AmirSuhail09"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            c
          </a>
        </l1>
        <l1 className="social-list__item">
          <a
            href="https://facebook.com"
            className="social-list__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            d
          </a>
        </l1>
      </ul>
    </footer>
  );
};

export default Footer;
