import React, { useRef, useEffect } from "react";
import "./styles.css";
import backgroundImage from "../../assets/images/image-bg.jpeg"; //Photo by <a href="https://unsplash.com/@matcfelipe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mateus Campos Felipe</a> on <a href="https://unsplash.com/photos/vlKzPiD6XuI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import Typed from "typed.js";

function Banner() {
  // typed.js
  const typedJSRef = useRef(null);

  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [
        "Transforming Spaces",
        "Enhancing Lives",
        "Creating Experiences",
      ],
      typeSpeed: 90,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
      showCursor: false,
    });

    return () => typedJS.destroy();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-content">
        <h1>Welcome to Maison Avice</h1>
        <div className="text-button-container">
        <span className="typeRefText" style={{}} ref={typedJSRef} />
        <br />
        <br />
        <a href="/services" className="cta-button">
          Explore Our Services
        </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
