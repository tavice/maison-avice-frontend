import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import teamImage from "../../assets/images/team-image.jpeg";

const AboutUs = ({ URL }) => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(`${URL}/about-us`);
        setAboutData(response.data);
        console.log("about us data is", response.data);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };

    fetchAboutData();
  }, [URL]);

  return (
    <section className="about-us">
      {aboutData ? (
        <>
          <div className="about-text">
            <h2>{aboutData.title}</h2>
            <h3>{aboutData.description}</h3>
            <ul>
              {aboutData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <img src={teamImage} alt="Our Team" />
          </div>
        </>
      ) : (
        <p>Loading...</p> // Or any other placeholder content
      )}
    </section>
  );
};

export default AboutUs;
