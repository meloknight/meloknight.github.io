import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

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
        <ProjectCard
          webpage={"https://meloknight.github.io/ecommerce-website/"}
          title={"E-Commerce Site"}
          summary={
            "A clean e-commerce site built with React and Sass. It is fully responsive with numerous pages and functionalities."
          }
          image={"../assets/MIN-landing-page-image.png"}
          imageTitle={"E-commerce landing page image"}
        />
        <ProjectCard
          webpage={"https://meloknight.github.io/bean-ship-game/"}
          title={"Bean Ship Game"}
          summary={
            "A small game built in React and Typescript of a bean-shaped ship that boosts around and bounces off the walls."
          }
          image={"../assets/bean-ship-screenshot.png"}
          imageTitle={"Bean Ship!"}
        />

        <ProjectCard
          webpage={"https://meloknight.github.io/Weather-App"}
          title={"Weather App"}
          summary={
            "A weather app that allows users to input a city name and displays real-time weather information, including temperature, humidity,and wind speed."
          }
          image={"../assets/Weather-App.png"}
          imageTitle={"weather app"}
        />
        <ProjectCard
          webpage={"https://meloknight.github.io/admin_dashboard/"}
          title={"Admin Dashboard"}
          summary={
            "A dashboard project created using HTML and CSS to display a grasp of the fundamentals of styling web pages."
          }
          image={"../assets/admin-dashboard-img.png"}
          imageTitle={"Admin Dashboard"}
        />
      </div>
    </div>
  );
}

// REMOVED BUT KEPT HERE FOR REFERENCE :)

{
  /* <ProjectCard
          webpage={"https://meloknight.github.io/Etch-A-Sketch/"}
          title={"Etch-A-Sketch"}
          summary={
            "A project created with Javascript, HTML, and CSS intended to showcase the use of logic and DOM manipulation with a small web application."
          }
          image={"../assets/Etch-A-Sketch-img.png"}
          imageTitle={"etch-a-sketch"}
        /> */
}

{
  /* <a
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
        </a> */
}
