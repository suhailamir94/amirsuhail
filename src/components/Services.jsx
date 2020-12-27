import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section className="my-services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3> Web Devlopment</h3>
          <p>
            I design / develop static and dynamic web applications that provide
            seeamless user experience. I have experience in building
            applications in multiple business domains like Supply chain,
            Pharmaceuticals, Computer Networking, and Finance.
          </p>
        </div>
        <div className="service">
          <h3>API / CLI Devlopment</h3>
          <p>
            Apart from developing web apps, I also have experience in designing
            and developing complex backend API/CLI services. My backend tech
            stack includes Python, Node.js and Golang.
          </p>
        </div>
        <div className="service">
          <h3>Android / IOS Apps</h3>
          <p>
            Being a Javascript developer provides me with multiple opportunities
            to design and develop hybrid Mobile apps using React Native and
            Expo.
          </p>
        </div>
      </div>

      <Link
        to="work"
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
