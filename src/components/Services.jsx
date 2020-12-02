import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section className="my-services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3> Dsign + Devlopemnt</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            nisi laborum vel necessitatibus dolor eligendi incidunt sequi
            laudantium, alias rem labore numquam explicabo at dicta optio. Animi
            deserunt est amet.
          </p>
        </div>
        <div className="service">
          <h3>API Devlopemnt</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            nisi laborum vel necessitatibus dolor eligendi incidunt sequi
            laudantium, alias rem labore numquam explicabo at dicta optio. Animi
            deserunt est amet.
          </p>
        </div>
        <div className="service">
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            nisi laborum vel necessitatibus dolor eligendi incidunt sequi
            laudantium, alias rem labore numquam explicabo at dicta optio. Animi
            deserunt est amet.
          </p>
        </div>
      </div>

      <Link
        to="hworkome"
        spy={true}
        smooth={true}
        duration={500}
        className="btn"
        activeClass="some-active-class"
      >
        My Work
      </Link>
    </section>
  );
};

export default Services;
