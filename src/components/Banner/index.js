import React from "react";
import "./styles.css";
import backgroundImage from "../../assets/images/image-bg.jpeg"; //Photo by <a href="https://unsplash.com/@matcfelipe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mateus Campos Felipe</a> on <a href="https://unsplash.com/photos/vlKzPiD6XuI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function Banner() {
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
        <br />
        <h3>Transforming Spaces, Enhancing Lives</h3>
        <br />
        <a href="/services" className="cta-button">
          Explore Our Services
        </a>
      </div>
    </div>
  );
}

export default Banner;
