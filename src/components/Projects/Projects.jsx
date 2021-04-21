import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import SkillImg from '../Image/SkillImg';
import CallSkill from '../Projects/CallSkill';


const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="skill-wrapper">
          <Title title="Skills"/>
              <Row>
                <Col sm={4}>
                  <CallSkill filename="cpp_icon.png" skillname="CPP"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="sol.png" skillname="Solidity"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="js_icon.png" skillname="JavaScript"/>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <CallSkill filename="py.png" skillname="Python"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="react.png" skillname="React"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="git.png" skillname="Git"/>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <CallSkill filename="truffle.png" skillname="Truffle"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="chainlink.png" skillname="Chainlink"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="sawtooth.png" skillname="Hyperledger Sawtooth"/>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <CallSkill filename="aws-5.png" skillname="AWS"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="nodejs-2.png" skillname="NodeJS"/>
                </Col>
                <Col sm={4}>
                  <CallSkill filename="unity.png" skillname="Unity"/>
                </Col>
              </Row>

            <Title title="Projects" />
            {projects.map((project) => {
              const { title, info, info2, url, repo, img, id } = project;

              return (
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {info ||
                              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                          <p className="mb-4">{info2 || ''}</p>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          See Live
                        </a>

                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
