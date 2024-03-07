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
        Hello, my name is Brody and I am a front-end web developer based in the
        Okanagan, BC.
      </h3>
      <p>
        My current toolset is React, HTML, CSS, Javascript, Typescript, and
        SCSS. I excel in the creation and maintenance of responsive websites
        that offer a great user experience. I have dealt with countless clients
        in my previous work in the insurance industry and know how to manage
        client expectations while balancing a heavy workload. I also have a
        degree in mechanical engineering which greatly improved my problem
        solving skills and grit.
      </p>
    </div>
  );
}
