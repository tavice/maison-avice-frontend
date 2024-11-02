import React, { useRef } from "react";

//import components

import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import VideoBanner from "../../components/VideoBanner";
// import Testimonials from "../../components/Testimonials"; //TO DO: Add Testimonials component

const Home = ({ URL, videoUrl }) => {
  const aboutUsRef = useRef(null); // Create a ref for the AboutUs component
  console.log(videoUrl);

  const scrollToAbout = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner scrollToAbout={scrollToAbout} />
      <VideoBanner videoUrl={videoUrl} />

      <div ref={aboutUsRef}>
        {/* Attach the ref to the aboutUs div */}
        <AboutUs URL={URL} />
      </div>
      <Services URL={URL} />

      {/* <Testimonials /> TO DO: Add Testimonials component */}
    </>
  );
};

export default Home;
