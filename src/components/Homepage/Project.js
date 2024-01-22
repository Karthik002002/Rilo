import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AIH1 from "../../styles/img/AI-house1.jpg";
import AIH2 from "../../styles/img/AI-house2.jpg";
import AIH3 from "../../styles/img/AI-house3.jpg";
import AIH4 from "../../styles/img/AI-house4.jpg";
import AIH5 from "../../styles/img/AI-house5.jpg";
import AIH6 from "../../styles/img/AI-house6.jpg";
import AIH7 from "../../styles/img/AI-house7.jpg";
import AIH8 from "../../styles/img/AI-house8.jpg";
import AIH9 from "../../styles/img/AI-house9.jpg";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      img: AIH1,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      img: AIH2,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      img: AIH3,
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      img: AIH4,
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      img: AIH5,
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for Project 6",
      img: AIH6,
    },
    {
      id: 7,
      title: "Project 7",
      description: "Description for Project 7",
      img: AIH7,
    },
    {
      id: 8,
      title: "Project 8",
      description: "Description for Project 8",
      img: AIH8,
    },
    {
      id: 9,
      title: "Project 9",
      description: "Description for Project 9",
      img: AIH9,
    },
  ];

  const itemsToShow = 3; // Number of projects to show at a time

  const prevSlide = () => {
    const nextIndex =
      (activeIndex - itemsToShow + projects.length) % projects.length;
    setActiveIndex(nextIndex);
  };

  const nextSlide = () => {
    const nextIndex =
      (activeIndex + itemsToShow + projects.length) % projects.length;
    setActiveIndex(nextIndex);
  };

  return (
    <Container className="mt-3 position-relative">
  {/* Navigation Buttons */}
  <div className="project-btn-placement">
    <Button
      variant="outline-primary"
      className="project-button right-btn"
      onClick={prevSlide}
    >
      &lt;
    </Button>
    <Button
      variant="outline-primary"
      className="project-button left-btn"
      onClick={nextSlide}
    >
      &gt;
    </Button>
  </div>

  <Row className="d-flex justify-content-center">
    {projects
      .slice(activeIndex, activeIndex + itemsToShow)
      .map((project) => (
        <Col key={project.id} className="project-container">
          <div className="project-card">
            <img src={project.img} alt="" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </Col>
      ))}
  </Row>
</Container>

  );
};

export default Project;
