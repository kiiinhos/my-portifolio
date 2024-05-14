import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/omni.webp";
import projImg2 from "../assets/img/formo.webp";
import projImg3 from "../assets/img/painel-formando.png";
import projImg4 from "../assets/img/gestao-formatura.png";
import projImg5 from "../assets/img/centro-imigrante.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Omni Bank & Finance",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://play.google.com/store/apps/details?id=com.omnidigital.omni&hl=pt_BR&gl=US",
    },
    {
      title: "Immigrant Center",
      description: "Development",
      imgUrl: projImg5,
      link: "https://centrodoimigrante.com.br/",
    },
    {
      title: "Formô App",
      description: "Suport & Development",
      imgUrl: projImg2,
      link: "https://play.google.com/store/apps/details?id=com.formo.app&hl=pt_BR&gl=US",
    },
  ];
  const projects2 = [
    {
      title: "Manage Panel",
      description: "Suport & Development",
      imgUrl: projImg4,
      link: "https://gestao.formaturas.app/",
    },
    {
      title: "Graduate Panel",
      description: "Suport & Development",
      imgUrl: projImg3,
      link: "https://formo.formaturas.app/login",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    During my 5-year career, I had the opportunity to work with
                    Banco Omni & Financeira and TAGSA.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
