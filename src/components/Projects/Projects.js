import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online Shopping Website"
              description="This online shopping website project allows users to browse, search, and purchase products across various categories. It includes features like user authentication, shopping cart, order tracking, and secure payment integration. Admins can manage inventory, update product listings, and view sales reports. The website provides a user-friendly interface for a seamless shopping experience."
              ghLink="https://github.com/SaiReshmithaPonnaganti/onlineshpoppingwebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog Management System"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/SaiReshmithaP/blogmanagement"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Phone number Tacker"
              description="The PhoneNumber_Tracker project is a Python tool that uses the phonenumbers library to extract details about a phone number. It displays the country and carrier information based on the input. The script is simple, lightweight, and useful for basic telecom data lookup. Run it by installing dependencies and executing the Python file."
              ghLink="https://github.com/SaiReshmithaPonnaganti/PhoneNumber_Tracker"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
