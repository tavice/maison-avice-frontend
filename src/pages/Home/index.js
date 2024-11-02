import React, { useRef } from "react";

//import components

import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import VideoBanner from "../../components/VideoBanner";
// import Testimonials from "../../components/Testimonials"; //TO DO: Add Testimonials component

const Home = (props) => {
  const aboutUsRef = useRef(null); // Create a ref for the AboutUs component

  const scrollToAbout = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner scrollToAbout={scrollToAbout} />
      <VideoBanner videoUrl={props.videoUrl} />

      <div ref={aboutUsRef}>
        {/* Attach the ref to the aboutUs div */}
        <AboutUs URL={props.URL} />
      </div>
      <Services URL={props.URL} />

      {/* <Testimonials /> TO DO: Add Testimonials component */}
    </>
  );
};

export default Home;
