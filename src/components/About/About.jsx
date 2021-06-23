import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Card} from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import SkillImg from '../Image/SkillImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a Passionate Blockchain developer and have been working on Ethereum and Hyperledger blockchain. I had been the Project Head at IEEE Student Branch VIT Pune. '
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I am Runner-Up at Chainlink Hackathon 2021 and Winner of IEEE HAC & SIGHT Funding for Covid19'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I am also the winner of Best Student Volunteer Award from IEEE Pune Section'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}

               </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
