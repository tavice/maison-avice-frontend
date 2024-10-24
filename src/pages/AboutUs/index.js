import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./styles.css"; // Ensure you have the accompanying CSS

const AboutUs = (props) => {
  const [aboutData, setAboutData] = useState(null);

  const getAboutUsData = useCallback(async () => {
    try {
      const res = await axios.get(`${props.URL}/about-us-data`);
      setAboutData(res.data);
      //console.log("about us data", res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  }, [props.URL]);

  useEffect(() => {
    getAboutUsData();
  }, [getAboutUsData]);

 

  return (
    
      <div className="about-us-page">
        {aboutData && (
          <>
            <div className="grid-section">
              <img
                src={aboutData.founderInfo.profilePic}
                alt="Anna Wender Founder Maison Avice"
                className="grid-image"
              />
              <div className="grid-text">
                <h1>{aboutData.founderInfo.name}</h1>
                <h2>{aboutData.founderInfo.title}</h2>
                <p className="educationSchool">{aboutData.founderInfo.education}</p>
                <p>{aboutData.founderInfo.educationAdditional}</p>
                <p>{aboutData.founderInfo.description}</p>
                <a href="https://calendly.com/maisonavice/book-your-discovery-call" target="_blank" rel="noreferrer"> book your call with us !</a>
              </div>
            </div>

            <div className="grid-section">
              <div className="grid-text">
                <h2>{aboutData.journey.title}</h2>
                {aboutData.journey.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <img
                src={aboutData.journey.journeyPic}
                alt="Our Journey to Sustainability"
                className="grid-image"
              />
            </div>

            <div className="centered-section">
              <h2>{aboutData.mission.title}</h2>
              <p>{aboutData.mission.content}</p>
            </div>
          </>
        )}
      </div>
    
  );
};

export default AboutUs;
