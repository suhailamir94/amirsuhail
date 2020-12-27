import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import about_me_img from "../images/IMG_20191013_000901_1.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Designer & Developer based out of Bangalore
      </p>
      <div className="about-me__body">
        <p>
          I am a seasoned software expert who has worked for companies such as
          Arista Networks, Accenture and IBM, as well as many venture-backed
          businesses. I specialize in building applications specific to the
          business needs of my clients. I have done work in software
          development, mobile app creation, front-end/back-end web and
          database/server management
        </p>
        <p>
          As a software developer, I enjoy using my obsessive attention to
          detail, my unequivocal love for making things, and my mission-driven
          work ethic to literally change the world. That's why I’m excited to
          make a big impact at a high growth company.
        </p>
      </div>
      <LazyLoadImage alt="" src={about_me_img} className="about-me__img" />
    </section>
  );
};

export default AboutMe;
