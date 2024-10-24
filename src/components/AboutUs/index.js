import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./stylesAboutUs.css";
import teamImage from "../../assets/images/team-image.jpeg";

//import loading spinner component
import LoadingSpinner from "../loadingSpinner";

const AboutUs = ( props ) => {
  const [aboutData, setAboutData] = useState({ features: [] });
  const [isLoading, setIsLoading] = useState(true);

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

  // Check if all project images are loaded
  useEffect(() => {
    // Check if all project images are loaded
    const imagePromises = [teamImage].map((image) => {
      const img = new Image();
      img.src = image;
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Handle image loading errors
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false); // All images are loaded
      })
      .catch(() => {
        setIsLoading(false); // In case of loading errors
      });
  }, []);

  return (
    <section className="about-us">

      {isLoading && <LoadingSpinner />}
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
            <h3>
              <a href="https://www.maisonavice.com/"> See our Work</a>
            </h3>
          </div>
          <div className="about-image">
            <img src={teamImage} alt="Our Team" width="300" height="200" />
          </div>
        </>
      ) : (
        <p>Loading...</p> 
      )}
    </section>
  );
};

export default AboutUs;
