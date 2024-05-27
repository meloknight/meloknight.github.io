import { useEffect, useState } from "react";

export default function AboutScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`about-centering-container ${isLoaded ? "rendered" : ""}`}>
      <h1>About Me</h1>
      <h3>
        Hello, my name is Brody and I am a full-stack web developer based in
        Kelowna, BC.
      </h3>
      <p>
        My current experience involves numerous front-end projects with React,
        Typescript, and SCSS. I have also built a number of full-stack projects
        with Node.js, Express.js, and PostgreSQL. I use Figma for my design work
        and have hosted projects on Microsoft Azure. In my previous work in the
        insurance industry I worked with countless clients and know how to
        communicate and manage client expectations.
      </p>
    </div>
  );
}

// My current toolset is React, HTML, CSS, Javascript, Typescript, and
// SCSS. I excel in the creation and maintenance of responsive websites
// that offer a great user experience. I have dealt with countless clients
// in my previous work in the insurance industry and know how to manage
// client expectations while balancing a heavy workload. I also have a
// degree in mechanical engineering which greatly improved my problem
// solving skills and grit.
