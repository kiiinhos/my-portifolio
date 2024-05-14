import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src={imgUrl} alt={title} />
          <div className="proj-overlay">
            <div className="proj-txtx">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard;
