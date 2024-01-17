import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/codepen.png";
import projImg2 from "../assets/img/movix.png";
import projImg3 from "../assets/img/discord.png";
import projImg4 from "../assets/img/csv file uploader.png";
import projImg5 from "../assets/img/Habit Tracker.png";
import projImg6 from "../assets/img/CandyCrush.png";
import projImg7 from "../assets/img/imdc.png";
import projImg8 from "../assets/img/stop.png";
import projImg9 from "../assets/img/Weather.png";
import projImg10 from "../assets/img/tooltip.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real Time Code Editor",
      description: "Code Editor For Frontend Web Dev",
      imgUrl: projImg1,
      liveLink:"https://codepen-clone-67e4c.web.app/",
      githubLink:"https://github.com/amiku3203/codepen_clone"
    },
    {
      title: "CinePhile Hub",
      description: "Cinema Store All type of Show and Movie",
      imgUrl: projImg2,
      liveLink:"https://cinefile-hub.netlify.app/",
      githubLink:"https://github.com/amiku3203/MovieHub"
    },
    {
      title: "Discord Clone",
      description: "User-friendly platform for communication and collaboration",
      imgUrl: projImg3,
      liveLink:"https://dclone-urdc.onrender.com",
      githubLink:"https://github.com/amiku3203/moderndiscord"
    },
    {
    title: "Csv File",
      description: "Upload a csv File and see it in excle Formate also manupulate data",
      imgUrl: projImg4,
      liveLink:"",
      githubLink:"https://github.com/amiku3203/CSV_FILE_UPLOADER_WEB_APP"
    } 
  ];

  const project2 = [
    {
      title: "Habit Tracker App",
      description: "Add Daily Activity and Track on Them",
      imgUrl: projImg5,
      liveLink:"",
      githubLink:"https://github.com/amiku3203/HabitStatus"
    },
    {
      title: "Candy Crush",
      description: "Enjoy Amazing Candy Crush Game",
      imgUrl: projImg6,
      liveLink:"https://candy-crush-game-js.netlify.app/",
      githubLink:"https://github.com/amiku3203/candy-crush-game/tree/master"
    },
    {
      title: "ImDb Clone",
      description: "Here You Can any Search Movie",
      imgUrl: projImg7,
      liveLink:"https://amiku3203.github.io/imdb_movie_clone/",
      githubLink:"https://github.com/amiku3203/imdb_movie_clone"
    },
    {
      title: "Weather App",
      description: "Here you Serach Weather of any Area",
      imgUrl: projImg9,
      liveLink:"https://weather-8wf7zt4qi-amiku3203.vercel.app/",
      githubLink:"https://github.com/amiku3203/WeatherUp"
    },
  ];

  const project3 = [
    {
      title: "StopWatch",
      description: "A Simple Timer",
      imgUrl: projImg8,
      liveLink:" https://amiku3203.github.io/Stopwatch_Project/",
      githubLink:"https://github.com/amiku3203/Stopwatch_Project"
    },
    
    {
      title: "ToolTip",
      description: "A Simple ToolTip",
      imgUrl: projImg10,
      liveLink:"https://tooltip-3pqdisqt9-amiku3203.vercel.app/",
      githubLink:"https://github.com/amiku3203/ToolTip"
    },
    
     
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Explore my diverse range of projects, categorized by skill level. Whether you're looking for advanced challenges, medium complexity, or beginner-friendly projects, there's something for everyone!
                </p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Advanced Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Medium Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Beginner Level Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
