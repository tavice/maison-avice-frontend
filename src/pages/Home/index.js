import React from "react";

//import components

import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
