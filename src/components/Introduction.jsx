import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import intro_image from "../images/IMG_20191013_001234.jpg";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Amir Suhail</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full-stack dev
      </p>
      <LazyLoadImage src={intro_image} alt="" className="intro__img" />
    </section>
  );
};

export default Introduction;
