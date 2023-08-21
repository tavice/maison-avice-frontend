import React from 'react';
import "./styles.css";
import teamImage from '../../assets/images/team-image.jpeg'; //Photo by <a href="https://unsplash.com/@kobuagency?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">KOBU Agency</a> on <a href="https://unsplash.com/photos/7okkFhxrxNw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>We are a team of creative interior designers dedicated to transforming spaces into timeless pieces of art. Our passion for design and attention to detail sets us apart in delivering exceptional experiences.</p>
      </div>
      <div className="about-image">
        <img src={teamImage} alt="Our Team" />
      </div>
    </section>
  );
}

export default AboutUs;
