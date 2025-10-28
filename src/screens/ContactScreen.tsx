import { useEffect, useState } from "react";

export default function ContactScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`contact-centering-container ${isLoaded ? "rendered" : ""}`}
    >
      <h1>Contact Me</h1>
      <p>
        Feel free to shoot me a call or email if you are interested in working
        together.
      </p>
      <h2>Phone: 825-440-0123</h2>
      <h2>Email: brody.k.knight@gmail.com</h2>
    </div>
  );
}
