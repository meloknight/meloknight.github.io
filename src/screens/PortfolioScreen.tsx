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
          titleColor={"black"}
          webpage={"https://fishinapi.ca/"}
          title={"Fishin Api"}
          summary={
            "An api that lets you go fishin to your hearts content! Built with the PERN stack with backend hosted on Azure."
          }
          image={"../assets/fishin-api-hero.png"}
          imageTitle={"fishin-api"}
        />
        <ProjectCard
          titleColor={"black"}
          webpage={"https://meloknight.github.io/ecommerce-website/"}
          title={"Min Store"}
          summary={
            "An e-commerce site built with React and Sass. It is fully responsive with numerous pages and functionalities."
          }
          image={"../assets/MIN-landing-page-image.png"}
          imageTitle={"E-commerce landing page image"}
        />
        <ProjectCard
          titleColor={"black"}
          webpage={"https://meloknight.github.io/bean-ship-game/"}
          title={"Bean Ship Game"}
          summary={
            "A small game built in React and Typescript of a bean-shaped ship that boosts around and bounces off the walls."
          }
          image={"../assets/bean-ship-screenshot.png"}
          imageTitle={"Bean Ship!"}
        />
        <ProjectCard
          titleColor={"black"}
          webpage={"https://meloknight.github.io/distance-runner-season-sim/"}
          title={"Runner Sim"}
          summary={
            "Simulates a competitive distance runner season by generating numerous teams of runners and racing them."
          }
          image={"../assets/runner-season-sim-image.png"}
          imageTitle={"Runner Sim"}
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
