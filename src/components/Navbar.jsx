import React from "react";
import { Link } from "react-scroll";

const addClass = () => {
  document.body.classList.toggle("nav-open");
};
const removeClass = () => {
  document.body.classList.remove("nav-open");
};

const Navbar = () => {
  return (
    <>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={addClass}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav__link"
              activeClass="some-active-class"
              onClick={removeClass}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="nav__link"
              activeClass="some-active-class"
              onClick={removeClass}
            >
              My Services
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="nav__link"
              activeClass="some-active-class"
              onClick={removeClass}
            >
              About Me
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              className="nav__link"
              activeClass="some-active-class"
              onClick={removeClass}
            >
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
