import React from "react";
import { Col, Button } from "react-bootstrap";
import "./ProjectCard.css"; // Import your CSS file for styling

export const ProjectCard = ({ title, description, imgUrl, githubLink, liveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
       
        <div className="proj-overlay">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          
        </div>
      </div>
      <div className="proj-buttons">
            {githubLink && (
              <Button variant="primary" href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </Button>
            )}
            {liveLink && (
              <Button variant="success" href={liveLink} target="_blank" rel="noopener noreferrer">
                Live
              </Button>
            )}
          </div>
    </Col>
  );
};
