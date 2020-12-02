import React from "react";
import { Link } from "react-scroll";
// const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
  return (
    <>
      <button className="nav-toggle" aria-label="toggle navigation">
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
