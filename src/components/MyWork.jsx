import React from "react";

import ProjectItem from "./ProjectItem";
import pic1 from "../images/expensify.png";
import pic2 from "../images/node-chat-app.png";
import pic3 from "../images/timesheet-submission.png";
import pic4 from "../images/Rectangle 3-5@2x.png";

const githubLinks = [
  "https://github.com/suhailamir94/expense-manager",
  "https://github.com/suhailamir94/nodejs-chatApp",
  "https://github.com/suhailamir94/automated-timesheet-submission",
  "https://github.com/suhailamir94",
];

const publicUrls = [
  "https://amir-expense-manager.herokuapp.com",
  "https://react-chatroom-amir.herokuapp.com",
];
const pics = [pic1, pic2, pic3, pic4];
const MyWork = () => {
  return (
    <section className="my-work">
      <h2 className="sectiont__title section__title--my-work">My Work</h2>
      <p className="section__subtitle section__subtitle--my-work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        {githubLinks.map((link, index) => {
          return (
            <ProjectItem
              key={index}
              index={index}
              githubLink={link}
              publicLink={index < 2 ? publicUrls[index] : undefined}
              hoverclassName={index > 1 ? "hover-icon__single" : "hover-icon"}
              pic={pics[index]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
