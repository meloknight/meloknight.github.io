// import { useState } from "react";

import { useState } from "react";
import "./App.scss";

function App() {
  const [page, setPage] = useState(0);
  const pageList = ["home", "contact", "about", "portfolio"];

  function HomeScreen() {
    return (
      <div className="name-centering-container">
        <div className="first-name">brody</div>
        <div className="last-name">knight</div>
        <div className="description-container">
          <div className="title">web developer</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            commodi dolore nostrum quas suscipit soluta, eligendi optio
            inventore rem a earum dicta dignissimos eius repudiandae! Deserunt
          </p>
        </div>
      </div>
    );
  }

  const ContactScreen = () => {
    return (
      <div className="name-centering-container">
        <div className="first-name">contact me</div>
        <div className="last-name">knight</div>
        <div className="description-container">
          <div className="title">web developer</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            commodi dolore nostrum quas suscipit soluta, eligendi optio
            inventore rem a earum dicta dignissimos eius repudiandae! Deserunt
          </p>
        </div>
        <button onClick={() => setPage(0)}>home</button>
      </div>
    );
  };

  function choosePage() {
    if (page === 0) {
      return <HomeScreen />;
    } else if (page === 1) {
      return <ContactScreen />;
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
          onClick={() => setPage(1)}
        >
          contact
        </section>

        <section className="primary-container">
          {choosePage()}

          {/* <HomeScreen /> */}
          {/* <ContactScreen /> */}
        </section>

        <section className="home-container main-container-hover nav-button">
          hm
        </section>
        <section className="about-container main-container-hover nav-button">
          about
        </section>
        <section className="portfolio-container main-container-hover nav-button">
          portfolio
        </section>
      </div>
    </>
  );
}

export default App;
