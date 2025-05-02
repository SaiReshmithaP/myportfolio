import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Reshmitha Ponnaganti </span>
            from <span className="purple"> Vizag, India.</span>
            <br />
            I am currently a B-Tech 3rd year student in Computer Science and Engineering at Gayatri Vidya Parishad College of Engineering.
            <br />
            I am a passionate web developer and I love to learn new technologies and develop projects. I am also interested in competitive programming.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SaiReshmitha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
