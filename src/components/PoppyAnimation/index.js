import React, { useEffect, useRef } from 'react';
import "./styles.css";
import { gsap } from 'gsap';
import poppyImage from "../../assets/images/poppy_transparent.png"; 

const PoppyAnimation = () => {
    const poppyRef = useRef(null);

  useEffect(() => {
    const maxX = window.innerWidth - poppyRef.current.clientWidth;
    const maxY = window.innerHeight - poppyRef.current.clientHeight;

    gsap.to(poppyRef.current, {
      x: () => Math.random() * maxX,
      y: () => Math.random() * maxY,
      rotation: () => Math.random() * 360,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(poppyRef.current);
    };
  }, []);

  return (
    <div className="poppy-container">
      <img ref={poppyRef} src={poppyImage} alt="Poppy" className="poppy" width="500" height="500"  />
    </div>
  );

};

export default PoppyAnimation;
