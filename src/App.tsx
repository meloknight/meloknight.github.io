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
      <div className="contact-centering-container">
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

  const PortfolioScreen = () => {
    return (
      <div className="contact-centering-container">
        <h1>Portfolio</h1>
        <p>
          Feel free to shoot me a call or email if you are interested in working
          together.
        </p>
        <h2>Phone: 123-456-7890</h2>
        <h2>Email: brody@email.com</h2>
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
