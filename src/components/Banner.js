import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Competitive Programmer", "Content Creator" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Amit`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Mern Stack Web Developer", "Competitive Programmer", "Content Creator" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{textAlign:"justify"}}> Hello! My name is Amit Kumar, and I'm currently pursuing my B.Tech in Computer Science. My passion for coding led me to explore various programming languages, and I'm proficient in C++, Java, and data structures and algorithms in C++. I've actively engaged with problem-solving and have successfully tackled over 500 programming questions, demonstrating my strong analytical and problem-solving skills.

                  In addition to my academic pursuits, I've achieved a top 3% rank in the CodeKaze coding competition, showcasing my commitment to excellence in competitive programming. As a full-stack web developer, I recently developed a Discord clone using Next.js, leveraging my skills in frontend and backend technologies.

                  I also had the opportunity to intern at Coding Ninjas as a Teaching Assistant, where I honed my communication and mentoring abilities. Being a Teaching Assistant allowed me to share my knowledge and passion for coding with others, contributing to a collaborative learning environment.

                 In summary, my academic background, proficiency in programming languages, competitive programming achievements, and hands-on experience as a full-stack web developer and Teaching Assistant at Coding Ninjas collectively define my journey in the world of technology. I'm enthusiastic about taking on new challenges and continuously expanding my skill set.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}