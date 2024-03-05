import { useState } from "react";
import "./App.scss";

import { TiHome } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function App() {
  const [page, setPage] = useState("home");

  function HomeScreen() {
    return (
      <div className="home-centering-container">
        <div className="first-name">
          <span>B</span>
          <span>R</span>
          <span>&#123; &#125;</span>
          <span>D</span>
          <span>Y</span>
        </div>
        <div className="last-name">
          <span>K</span>
          <span>N</span>
          <span>I</span>
          <span>G</span>
          <span>H</span>
          <span>T</span>
        </div>
        <div className="description-container">
          <div>Front-End React Developer</div>
          <div className="tech-stack-container">
            <span className="tech-stack">Tech Stack:</span>

            <FaReact className="stack-icon" style={{ color: "#61dbfb" }} />
            <SiJavascript className="stack-icon" style={{ color: "#F0DB4F" }} />
            <FaHtml5 className="stack-icon" style={{ color: "#e34c26" }} />
            <FaCss3Alt className="stack-icon" style={{ color: "#264de4" }} />
            <SiTypescript className="stack-icon" style={{ color: "#007acc" }} />
            <FaSass className="stack-icon" style={{ color: "#cc6699" }} />
          </div>
        </div>
      </div>
    );
  }

  const ContactScreen = () => {
    return (
      <div className="contact-centering-container">
        <h1>Contact Me</h1>
        <p>
          Feel free to shoot me a call or email if you are interested in working
          together.
        </p>
        <h2>Phone: 825-440-0123</h2>
        <h2>Email: brody.k.knight@gmail.com</h2>
      </div>
    );
  };

  const AboutScreen = () => {
    return (
      <div className="about-centering-container">
        <h1>About Me</h1>
        <h3>
          Hello, my name is Brody and I am a front-end web developer based in
          the Okanagan, BC.
        </h3>
        <p>
          My current toolset is React, HTML, CSS, Javascript, Typescript, and
          SCSS. I excel in the creation and maintenance of responsive websites
          that offer a great user experience. I have dealt with countless
          clients in my previous work in the insurance industry and know how to
          manage client expectations while balancing a heavy workload. I also
          have a degree in mechanical engineering which greatly improved my
          problem solving skills and grit.
        </p>
      </div>
    );
  };

  const ProjectCard = () => {
    return (
      <a
        href={"https://meloknight.github.io/admin_dashboard/"}
        className="project-card"
      >
        <div className="project-card-top">
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            quos. Inventore ratione dicta quidem culpa.
          </p>
        </div>
        <div className="project-card-bottom">
          <img
            src="src/assets/pexels-ali-hamza-tullah-20008215.jpg"
            alt="project 1"
          />
        </div>
      </a>
    );
  };

  const PortfolioScreen = () => {
    return (
      <div className="portfolio-centering-container">
        <div className="portfolio-section-title">Portfolio</div>
        <div className="project-card-container">
          {/* CARD 1 */}
          <a
            href={"https://meloknight.github.io/admin_dashboard/"}
            className="project-card project-1-card"
          >
            <div className="project-card-top">
              <h1>Admin Dashboard</h1>
              <p>
                A dashboard project created using HTML and CSS to display a
                grasp of the fundamentals of styling web pages.
              </p>
            </div>
            <div className="project-card-bottom project-1-card-bottom">
              <img src="src/assets/admin-dashboard-img.png" alt="project 1" />
              <div className="overlay"></div>
            </div>
          </a>
          {/* CARD 2 */}
          <a
            href={"https://meloknight.github.io/Weather-App/"}
            className="project-card project-2-card"
          >
            <div className="project-card-top">
              <h1>Weather App</h1>
              <p>
                A weather app that allows users to input a city name and
                displays real-time weather information, including temperature,
                humidity, and wind speed.
              </p>
            </div>
            <div className="project-card-bottom project-2-card-bottom">
              <img src="src/assets/Weather-App.png" alt="project 1" />
              <div className="overlay"></div>
            </div>
          </a>
          {/* CARD 3 */}
          <a
            href={"https://meloknight.github.io/Etch-A-Sketch/"}
            className="project-card project-3-card"
          >
            <div className="project-card-top">
              <h1>Etch-A-Sketch</h1>
              <p>
                A project created with Javascript, HTML, and CSS intended to
                showcase my ability to use logic and DOM manipulation with a
                small web application.
              </p>
            </div>
            <div className="project-card-bottom project-3-card-bottom">
              <img src="src/assets/Etch-A-Sketch-img.png" alt="project 1" />
              <div className="overlay"></div>
            </div>
          </a>
        </div>
      </div>
    );
  };

  function choosePage() {
    if (page === "home") {
      return <HomeScreen />;
    } else if (page === "contact") {
      return <ContactScreen />;
    } else if (page === "about") {
      return <AboutScreen />;
    } else if (page === "portfolio") {
      return <PortfolioScreen />;
    } else {
      return <HomeScreen />;
    }
  }

  return (
    <>
      <div className="body-container">
        <div className="background-image-container">
          <img
            src="src/assets/pexels-ali-hamza-tullah-20008215.jpg"
            alt="background-image"
          />
        </div>
        <section
          className="main-container contact-container main-container-hover nav-button"
          onClick={() => setPage("contact")}
        >
          <div className="desktop-nav-content">CONTACT</div>
          <MdEmail className="mobile-nav-content" />
        </section>

        <section className="primary-container">
          {choosePage()}

          {/* <HomeScreen /> */}
          {/* <ContactScreen /> */}
        </section>

        <section
          className="home-container main-container-hover nav-button"
          onClick={() => setPage("home")}
        >
          <TiHome className="home-icon" />
        </section>
        <section
          className="about-container main-container-hover nav-button"
          onClick={() => setPage("about")}
        >
          <div className="desktop-nav-content">ABOUT</div>
          <FaQuestionCircle className="mobile-nav-content" />
        </section>
        <section
          className="portfolio-container main-container-hover nav-button"
          onClick={() => setPage("portfolio")}
        >
          <div className="desktop-nav-content">PORTFOLIO</div>
          <MdWork className="mobile-nav-content" />
        </section>
      </div>
    </>
  );
}

export default App;
