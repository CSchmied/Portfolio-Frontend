// Home.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "../style/Home.css";
// Icons
import { SiTypescript } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


function Home() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const pathname = location.pathname;
  const userString = localStorage.getItem("user");
  let user;

  if (userString) {
    user = JSON.parse(userString);
    console.log(user); // Now you can use the user object
  } else {
    console.log("No user data found in localStorage.");
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="page" fluid>
      <Helmet>
        <title>Home</title>
        {/* <link rel="icon" href='/img/favicon-16x16.png' sizes="16x16" data-react-helmet="true"/> */}
      </Helmet>
      <section classname="homePage" id="home">
        <div className="image mt-4 pt-4">
          <img src="/img/profile.png" />
        </div>
        <div className="text mt-4 pt-4">
          <h1>Hello, I'm Carlton Schmieder</h1>
          <p>
            I am currently an <b>Agilist Senior Analyst </b>at Launch by NTT
            DATA.
          </p>
          <p> My interests include: </p>
          <ul>
            <li>Full Stack Development</li>
            <li>Technical Project Management</li>
            <li>Product Development</li>
          </ul>
          <p>I built this site using ReactJS, NodeJs, and SQL.</p>
        </div>
      </section>
      <section classname="aboutPage" id="about">
        <div className="container mt-4 pt-4">
          <h1>My Experience</h1>
        </div>
        <div className="accordion mt-4 pt-4 mb-4">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Auburn University - 2018-2022</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Graduated Magna Cum Laude from Auburn University with a
                    degree in Software Engineering and a minor in Business,
                    Engineering, Technology.
                  </li>
                  <li>
                    During my time there I was apart of Tau Beta Pi Engineering
                    Honor Society.
                  </li>
                  <li>
                    Minor was focused around product development and
                    entrepreneurship that included projects building actual
                    products, determining finances, and pitching them to
                    investors.
                  </li>
                  <li>
                    Course work included: Algorithms, Networks, Network
                    Security, Operating Systems, Computer Architecture, Software
                    Quality Assurance, and Software Modeling and Design.
                  </li>
                  <li>
                    Senior Design Project was building a scheduling application
                    for the Engineering Tutoring department. Was built using
                    Typescript, and MongoDB
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Colsa Corporation - Systems Engineering Intern - 2020-2021
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Contributed to the systems engineering team that handled all
                    payloads to the International Space Station.
                  </li>
                  <li>
                    Developed an Access database to track software license
                    expiration dates. The application would notify the team of
                    upcoming expirations and so they are able to start the
                    process of renewel, updating, or removing the application.
                  </li>
                  <li>
                    Continuously upgraded the application based on team
                    feedback.
                  </li>
                  <li>
                    Obtained a Secret clearance in order to work for them.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Launch by NTT Data - Agilist Senior Analyst - 2022-2024
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Started as a <b>Digital Technology Junior Analyst</b> with
                    NTT Data in July 2022
                  </li>
                  <ul>
                    <li>
                      Lead a team of 20+ in an internal project to create new
                      SharePoint sites and Teams channel.
                    </li>
                    <li>
                      Provided efficient Helpdesk for a clients new cloud
                      application. Resolved over 1000 tickets.
                    </li>
                    <li>
                      Active pursed professional growth through participation in
                      external and internal training programs.
                    </li>
                  </ul>
                  <li>
                    I was promoted to <b>Digital Technology Analyst</b> in April
                    2024
                  </li>
                  <ul>
                    <li>
                      Designed and implemented multiple RESTful APIs using
                      ASP.NET for a client project working in an Agile
                      environment.
                    </li>
                    <li>
                      Increased code quality and coverage by writing unit tests
                      and using Azure Pipeline tools.
                    </li>
                    <li>
                      Developed a web-based application based on a using React
                      Typescript, built on a SharePoint framework, and Azure
                      Devops.
                    </li>
                    <li>
                      Built an application using Python, MySQL, and Flask to
                      determining quotes for potential projects. Application was
                      built to replace an exisiting Excel sheet.
                    </li>
                  </ul>
                  <li>
                    Was promoted to <b>Agilist Senior Analyst</b> in October
                    2024.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section classname="skills" id="skills">
        <div className="container mt-4 pt-4">
          <h1>Skills</h1>
        </div>
        <div className="container mt-4 pt-4">
          <Row>
            <Col>
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    Javascript/Typescript <SiTypescript />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    SQL <AiOutlineConsoleSql />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project Management</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>ASP.NET</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Full Stack Development</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Agile</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Python</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <section classname="contact" id="contact">
        <div className="container mt-4 pt-4">
          <h1>Contact Me</h1>
        </div>
        <div className="contact container mt-4 pt-4">
          <h4>
            <FaPhoneAlt /> (256)-701-3680
          </h4>
        </div>
        <div className="contact container mt-4 pt-4">
          <h4>
            <IoMail /> carltonschmieder@gmail.com
          </h4>
        </div>
        <div className="contact container mt-4 pt-4">
          <h4><FaLocationDot /> Nashville, TN</h4>
        </div>
      </section>
    </Container>
  );
}

export default Home;
