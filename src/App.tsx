import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import "./App.scss";

import { TiHome } from "react-icons/ti";
import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";

function App() {
  const [page, setPage] = useState("home");

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
      {/* MAIN BODY AND BACKGROUND IMAGE */}
      <div className="body-container">
        <div className="background-image-container">
          <img
            // src="src/assets/pexels-ali-hamza-tullah-20008215.jpg"
            src="./assets/pexels-ali-hamza-tullah-20008215.jpg"
            alt="background-image"
          />
        </div>

        {/* CONTACT BUTTON NAV */}
        <section
          className="main-container contact-container main-container-hover nav-button"
          onClick={() => setPage("contact")}
        >
          <div className="desktop-nav-content">CONTACT</div>
          <MdEmail className="mobile-nav-content" />
        </section>

        {/* PRIMARY SECTION */}
        <section className="primary-container">{choosePage()}</section>

        {/* HOME BUTTON NAV */}
        <section
          className="home-container main-container-hover nav-button"
          onClick={() => setPage("home")}
        >
          <TiHome className="home-icon" />
        </section>

        {/* ABOUT BUTTON NAV */}
        <section
          className="about-container main-container-hover nav-button"
          onClick={() => setPage("about")}
        >
          <div className="desktop-nav-content">ABOUT</div>
          <FaQuestionCircle className="mobile-nav-content" />
        </section>

        {/* PORTFOLIO BUTTON NAV */}
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
