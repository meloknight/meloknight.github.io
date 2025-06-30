import { useEffect, useState } from "react";

import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// SiJavascript, FaHtml5, FaCss3Alt,

export default function HomeScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home-centering-container ${isLoaded ? "rendered" : ""}`}>
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
        <div>Full-Stack Developer</div>
        {/* <div className="tech-stack-container">
          <span className="tech-stack">Stack:</span>
          <FaReact className="stack-icon" style={{ color: "#61dbfb" }} />
          <SiTypescript className="stack-icon" style={{ color: "#007acc" }} />
          <FaSass className="stack-icon" style={{ color: "#cc6699" }} />
          <FaNodeJs className="stack-icon" style={{ color: "#6cc24a" }} />
          <SiExpress className="stack-icon" />
          <BiLogoPostgresql
            className="stack-icon"
            style={{ color: "#008bb9" }}
          />
        </div> */}
      </div>
    </div>
  );
}

{
  /* <SiJavascript className="stack-icon" style={{ color: "#F0DB4F" }} /> */
}
{
  /* <FaCss3Alt className="stack-icon" style={{ color: "#264de4" }} /> */
}
{
  /* <FaHtml5 className="stack-icon" style={{ color: "#e34c26" }} /> */
}
