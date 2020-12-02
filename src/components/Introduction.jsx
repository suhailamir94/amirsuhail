import React from "react";
import intro_image from "../images/eduardo-dutra-k6b53YWZI9I-unsplash.png";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Amir Suhail</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full-Stack Dev
      </p>
      <img src={intro_image} alt="" className="intro__img" />
    </section>
  );
};

export default Introduction;
