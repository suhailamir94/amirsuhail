import React from "react";

import about_me_img from "../images/eduardo-dutra-Kqjc3vvgl1k-unsplash.png";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Designer & Developer based out of Bangalore
      </p>
      <div className="about-me__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus
          fugit, dicta accusamus consectetur omnis amet quasi. Sit ut natus
          voluptate, obcaecati suscipit illo maxime et ipsam tempora magni
          nulla.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          tempore aspernatur, deleniti sunt non eius eum voluptatum. Eligendi
          harum voluptatem beatae iusto ullam, itaque facere tempore sed, earum
          repellat fugiat?
        </p>
      </div>
      <img src={about_me_img} alt="" srcset="" />
    </section>
  );
};

export default AboutMe;
