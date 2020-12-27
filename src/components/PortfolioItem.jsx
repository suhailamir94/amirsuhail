import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pic1 from "../images/Rectangle 3-5@2x.png";

const PortfolioItem = () => {
  return (
    <>
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Amir Suhail</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          full-Stack Dev
        </p>
        <LazyLoadImage src={pic1} alt="" className="intro__img" />
      </section>
      <div className="portfolio-item-individual">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          explicabo suscipit exercitationem aut adipisci voluptates veritatis a
          necessitatibus sint, accusamus culpa accusantium excepturi ex
          blanditiis distinctio cum sit deleniti asperiores.
        </p>
        <div className="portfolio-item-image"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa id
          dicta impedit ratione a blanditiis ullam quibusdam exercitationem
          porro voluptate quas, officiis omnis iure, velit earum. Illo, labore
          aperiam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa id
          dicta impedit ratione a blanditiis ullam quibusdam exercitationem
          porro voluptate quas, officiis omnis iure, velit earum. Illo, labore
          aperiam.
        </p>
      </div>
    </>
  );
};

export default PortfolioItem;
