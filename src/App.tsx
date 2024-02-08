import { useState } from "react";
import "./App.scss";

import { TiHome } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";

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
          <div>
            <span className="tech-stack">Tech Stack:</span>

            <FaReact style={{ color: "#61dbfb" }} />
            <SiJavascript style={{ color: "#F0DB4F" }} />
            <FaHtml5 style={{ color: "#e34c26" }} />
            <FaCss3Alt style={{ color: "#264de4" }} />
            <SiTypescript style={{ color: "#007acc" }} />
            <FaSass style={{ color: "#cc6699" }} />
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
        <h2>Phone: 123-456-7890</h2>
        <h2>Email: brody@email.com</h2>
      </div>
    );
  };

  const AboutScreen = () => {
    return (
      <div className="about-centering-container">
        <h1>About Me</h1>
        <h3>
          Hello, my name is Brody and I am a front-end react developer based in
          the Okanagan, BC.
        </h3>
        <p>
          As a junior Front-End Developer, I have honed in on a strong set of
          skills in React, HTML, CSS, Javascript, Typescript, and SCSS. I excel
          in the creation and maintenance of responsive websites that offer a
          great user experience. I have worked in numerous groups and consider
          myself a strong team player. I dealt with countless clients in my
          previous work in the insurance industry and know how to manage client
          expectations while balancing a heavy workload. Lastly, I have a degree
          in mechanical engineering which vastly improved my problem solving
          skills and grit.
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
    // let portfolioUrl: string = "https://meloknight.github.io/admin_dashboard/";

    return (
      <div className="portfolio-centering-container">
        <div className="portfolio-section-title">Portfolio</div>
        <div className="project-card-container">
          {/* CARD 1 */}
          <a
            href={"https://meloknight.github.io/admin_dashboard/"}
            className="project-card"
          >
            <div className="project-card-top">
              <h1>Admin Dashboard</h1>
              <p>An admin dashboard project created using HTML and CSS</p>
            </div>
            <div className="project-card-bottom">
              <img
                src="https://mail.google.com/mail/u/0?ui=2&ik=b680adbe95&attid=0.1&permmsgid=msg-a:r759417969101254129&th=18d8658b9a6384b1&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8XoWjUxmm-exMpq7mLTIpaF_T663y_ttuWRGGimzcWTYRMUMzxEadzFxXqu6BkNCt8VocULiPfQRFbolF-9wiyiuQQRyH0la2rLtFY1Eo0aiuBqPyp1YJFCs0&disp=emb&realattid=ii_lscjmjpu0"
                alt="project 1"
              />
            </div>
          </a>
          {/* CARD 2 */}
          <a
            href={"https://meloknight.github.io/Weather-App/"}
            className="project-card"
          >
            <div className="project-card-top">
              <h1>Project Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti, quos. Inventore ratione dicta quidem culpa.
              </p>
            </div>
            <div className="project-card-bottom">
              <img
                src="src/assets/pexels-ali-hamza-tullah-20008215.jpg"
                alt="project 1"
              />
            </div>
          </a>
          {/* CARD 3 */}
          <a
            href={"https://meloknight.github.io/admin_dashboard/"}
            className="project-card"
          >
            <div className="project-card-top">
              <h1>Project Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti, quos. Inventore ratione dicta quidem culpa.
              </p>
            </div>
            <div className="project-card-bottom">
              <img
                src="src/assets/pexels-ali-hamza-tullah-20008215.jpg"
                alt="project 1"
              />
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
          CONTACT
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
          ABOUT
        </section>
        <section
          className="portfolio-container main-container-hover nav-button"
          onClick={() => setPage("portfolio")}
        >
          PORTFOLIO
        </section>
      </div>
    </>
  );
}

export default App;
