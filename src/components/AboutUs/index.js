import React from "react";
import "./styles.css";
import teamImage from "../../assets/images/team-image.jpeg"; //Photo by <a href="https://unsplash.com/@kobuagency?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">KOBU Agency</a> on <a href="https://unsplash.com/photos/7okkFhxrxNw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-text">
        <h2>About Us</h2>

        <h3>
          Maison Avice is a full-service A-to-Z architectural design company
          focused on serving the luxury housing market of the San Francisco Bay
          Area
        </h3>
        <ul>
          <li> Traditional Building Methods </li>
          <li> Cutting-Edge Technology </li>

          <li> Repurposed recycled furniture to reduce emissions </li>
          <li>Carbon neutral vendors and sustainable partners </li>
        </ul>
      </div>
      <div className="about-image">
        <img src={teamImage} alt="Our Team" />
      </div>
    </section>
  );
};

export default AboutUs;
