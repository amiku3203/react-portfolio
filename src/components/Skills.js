import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Hello! I'm a MERN stack web developer and a dedicated competitive programmer. My journey in the world of technology has equipped me with a versatile skill set. I specialize in C++, Data Structures, and Algorithms for competitive programming. On the web development front, I excel in technologies like Node.js, MongoDB, React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS, MySQL, Socket.IO, and Prisma. </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Data Structure and Algorithms in C++</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Logo Design" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Next Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Javsscript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Tailwind Css</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>MySql</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Socket.Io</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Prisma</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
