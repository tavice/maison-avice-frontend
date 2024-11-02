import React from "react";
import "./styles.css";

import poppyBackground from "../../assets/images/poppy_pattern_transparent.png";

//import components
import TextAnimationH1 from "../TextAnimationH1";
import TextAnimationH2 from "../TextAnimationH2";


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
        <div className="text-animations">
          <div className="company-name">
            <TextAnimationH1 text="MAISON" />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <TextAnimationH1 text=" AVICE" />
          </div>
          <div className="company-name-h2">
            <TextAnimationH2 />
          </div>
        </div>

        {/* <div className="company-name">
          <div className="company-name-h1">
            <h1>MAISON AVICE</h1>
          </div>
          <div className="company-name-h2">
            <h2>LUXURY • SUSTAINABILITY • HERITAGE</h2>
          </div>
        </div> */}
      </div>
      <div className="scroll-down-arrow" onClick={scrollToAbout}>
        <span>&#x2193;</span>{" "}
      </div>
    </div>
  );
}

export default Banner;
