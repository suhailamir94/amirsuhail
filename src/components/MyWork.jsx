import React from "react";
import { Link } from "react-router-dom";

import pic1 from "../images/Rectangle 3-1@2x.png";
import pic2 from "../images/Rectangle 3-2@2x.png";
import pic3 from "../images/Rectangle 3-3@2x.png";
import pic4 from "../images/Rectangle 3-4@2x.png";
import pic5 from "../images/Rectangle 3-5@2x.png";
import pic6 from "../images/Rectangle 3-6@2x.png";
import pic7 from "../images/Rectangle 3-7@2x.png";
import pic8 from "../images/Rectangle 3-8@2x.png";

const MyWork = () => {
  return (
    <section className="my-work">
      <h2 className="sectiont__title section__title--my-work">My Work</h2>
      <p className="section__subtitle section__subtitle--my-work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic1} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic2} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic3} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic4} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic5} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic6} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic7} alt="" className="portfolio__img" />
        </Link>
        <Link to={"/project/pic1"} className="portfolio__item">
          <img src={pic8} alt="" className="portfolio__img" />
        </Link>
      </div>
    </section>
  );
};

export default MyWork;
