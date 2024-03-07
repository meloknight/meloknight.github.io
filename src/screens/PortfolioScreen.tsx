import { useEffect, useState } from "react";

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

export default function PortfolioScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`portfolio-centering-container ${isLoaded ? "rendered" : ""}`}
    >
      <div className="portfolio-section-title">Portfolio</div>
      <div className="project-card-container">
        <ProjectCard />
        {/* CARD 1 */}
        <a
          href={"https://meloknight.github.io/admin_dashboard/"}
          className="project-card project-1-card"
        >
          <div className="project-card-top">
            <h1>Admin Dashboard</h1>
            <p>
              A dashboard project created using HTML and CSS to display a grasp
              of the fundamentals of styling web pages.
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
              A weather app that allows users to input a city name and displays
              real-time weather information, including temperature, humidity,
              and wind speed.
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
              showcase my ability to use logic and DOM manipulation with a small
              web application.
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
}
