import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectItem(props) {
  const [showIcon, setShowIcon] = useState(false);

  const handleHoverEnter = () => {
    console.log("enter");
    setShowIcon(true);
  };
  const handleHoverLeave = () => {
    console.log("leave");
    setShowIcon(false);
  };
  return (
    <div className="portfolio__item">
      <LazyLoadImage
        alt=""
        src={props.pic}
        className="portfolio__img"
        onMouseEnter={() => {
          handleHoverEnter();
        }}
        onMouseLeave={() => {
          handleHoverLeave();
        }}
      />
      {showIcon && (
        <div
          className={props.hoverclassName}
          onMouseEnter={() => {
            handleHoverEnter();
          }}
          onMouseLeave={() => {
            handleHoverLeave();
          }}
        >
          {props.index < 2 && (
            <a
              href={props.publicLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="font-awesome-icon"
              />
            </a>
          )}

          <a href={props.githubLink} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="font-awesome-icon" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectItem;
