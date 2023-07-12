import React from "react";
import "./Hero.css";
import se_logo from "../assets/se_logo.png";
import banner_small from "../assets/banner_small.jpg";


const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      {/* <img src={imageSrc} alt="hero background" className="hero__image" /> */}

      <div className="hero__logo__title__container">
        <img src={se_logo} alt="logo" className="logo__hero" />

        <div className="hero__title__container">
          <h1 className="">
            Smartificial Element Ltd.:
          </h1>
          <p>your Smart way to</p>
          <p>Artificial Intelligence</p>
        </div>
      </div>

      <div className="small__banner_container">
        <img src={banner_small} alt="banner_small" className="banner_small" />
      </div>

      {/* <div className="hero__title__container">
        <h1 className="hero__title">
          Smartificial Element Ltd.:
        </h1>
        <p>your Smart way to</p>
        <p>Artificial Intelligence</p>
      </div> */}

      {/* <img src={se_logo} alt="logo" className="logo__hero" /> */}
    </div>
  );
};

export default Hero;
