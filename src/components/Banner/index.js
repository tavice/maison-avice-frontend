import React from "react";
import "./styles.css";

import poppyBackground from "../../assets/images/poppy_pattern_transparent.png";

//import PoppyAnimation from "../PoppyAnimation";
import PoppyAnimation from "../PoppyAnimation";

function Banner({ scrollToAbout }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${poppyBackground})` }}
    >
      <div className="logo-and-image">
        <PoppyAnimation />

        <div className="company-name">
          <div className="company-name-h1">
            <h1>MAISON AVICE</h1>
          </div>
          <div className="company-name-h2">
            <h2>INTERIOR DESIGN</h2>
          </div>
        </div>
      </div>
      <div className="scroll-down-arrow" onClick={scrollToAbout}>
        <span>&#x2193;</span>{" "}
      </div>
    </div>
  );
}

export default Banner;
