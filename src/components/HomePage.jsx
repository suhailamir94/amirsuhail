import React from "react";
import { Element } from "react-scroll";

import Header from "./Header";
import Introduction from "./Introduction";
import Services from "./Services";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Element id="home" name="home">
        <Introduction />
      </Element>
      <Element id="services" name="services">
        <Services />
      </Element>
      <Element id="about" name="about">
        <AboutMe />
      </Element>
      <Element id="work" name="work">
        <MyWork />
      </Element>
      <Footer />
    </>
  );
};

export default HomePage;
