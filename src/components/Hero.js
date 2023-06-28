import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="hero background" className="hero__image" />
      <h1 className="hero__title">
        Smartificial Element Ltd.:
        your Smart way to
        Artificial Intelligence
      </h1>
      {/* <h3 className="hero__title">your Smart way to</h3> */}
      {/* <h3 className="hero__title">Artificial Intelligence</h3> */}
    </div>
  );
};

export default Hero;
