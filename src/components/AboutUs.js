import React from "react";
import "./Slider.css";
import "./ProductDiagnostics.css";
import "./AboutUs.css";
// import "./icons.css";
// import "./Services.css";
import { useInView } from "react-intersection-observer";
// import { uniE906 } from "./svg_icons/uniE906";
// import bg_engine from "../assets/bg_engine.jpg"
// import SoundWaves from "./svgComponents/SoundWaves";
// import Cloud from "./svgComponents/Cloud";


const AboutUs = ({ imageSrc, title, subtitle, flipped, id }) => {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
    });

    const renderContent = () => {
        return (
          <>
                <div className="about__us__container">
                    <div className="product__flex__container">
                        {/* <img src={imageSrc} alt="mobile app" className="slider__image"/> */}
                        <div className="services__content product__content">
                            <h1 className="slider__title">{title}</h1>
                            <h3 className="slider__title">______________________________</h3>
                            <br/>
                            <div className="aboutus__content">
                                <p>
                                    Smartificial Element is a custom software development company that has been providing reliable services for implementation of SaaS systems, sophisticated business solutions, engineering applications, and business processes automation software.
                                </p>
                                <p>
                                    With clients from the U.S. and the E.U., offices in London, Houston, and development centers in Eastern Europe, Smartificial Elements assists customers in delivering innovative software solutions on a global scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
          </>
        );
    };

    return (
        <div id={id} className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    );
}

export default AboutUs;


