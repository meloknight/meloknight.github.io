import { useEffect, useState } from "react";

import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

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
        <div>Front-End Web Developer</div>
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
