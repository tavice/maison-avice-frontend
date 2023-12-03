import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./styles.css";
import teamImage from "../../assets/images/team-image.jpeg";

const AboutUs = ( props ) => {
  const [aboutData, setAboutData] = useState(null);

  // Define fetchAboutData using useCallback
  const fetchAboutData = useCallback(async () => {
    try {
      const response = await axios.get(`${props.URL}/about-us`);
      setAboutData(response.data);
    } catch (error) {
      console.error("Error fetching about us data:", error);
    }
  }, [props.URL]);

  // useEffect to call fetchAboutData when the component mounts or props.URL changes
  useEffect(() => {
    fetchAboutData();
  }, [fetchAboutData]);

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
        <p>Loading...</p> // Placeholder for loading state
      )}
    </section>
  );
};

export default AboutUs;
