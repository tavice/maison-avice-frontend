import React, { useRef } from "react";

//import components

import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
// import Testimonials from "../../components/Testimonials"; //TO DO: Add Testimonials component
import Portfolio from "../../components/Portfolio";

const Home = () => {
  const aboutUsRef = useRef(null); // Create a ref for the AboutUs component

  const scrollToAbout = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner scrollToAbout={scrollToAbout} />
      <div ref={aboutUsRef}>
        {/* Attach the ref to the aboutUs div */}
        <AboutUs />
      </div>
      <Services />
      <Portfolio />
      {/* <Testimonials /> TO DO: Add Testimonials component */}
    </>
  );
};

export default Home;
