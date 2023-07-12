import React from "react";
import "./Slider.css";
import "./ProductDiagnostics.css";
import "./icons.css";
// import "./Services.css";
import { useInView } from "react-intersection-observer";
// import { uniE906 } from "./svg_icons/uniE906";
// import bg_engine from "../assets/bg_engine.jpg"
// import SoundWaves from "./svgComponents/SoundWaves";
// import Cloud from "./svgComponents/Cloud";


const ProductDiagnostics = ({ imageSrc, title, subtitle, flipped, id }) => {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
    });

    const renderContent = () => {
        return (
          <>
                <div className="product__container">
                    <div className="product__flex__container">
                        <img src={imageSrc} alt="mobile app" className="slider__image"/>
                        <div className="services__content product__content">
                            <h1 className="slider__title">{title}</h1>
                            <h3 className="slider__title">______________________________</h3>
                            <br/>
                            <h5 className="slider__subtitle">Industrial AI sound analytics SaaS</h5>
                            <ul className="product_list">
                                <li>
                                    <span className="icon-uniE909"></span>
                                    <p>
                                        Record the sound of how the equipment works and transmit data via the special mobile application.
                                    </p>
                                </li>
                                <li>
                                    <span className="icon-uniE907"></span>
                                    <p>
                                        Process it in the cloud infrastructure for data computing, analytics, and data science.
                                    </p>
                                </li>
                                <li>
                                    <span className="icon-uniE906"></span>
                                    <p>
                                        Use a large dataset of the different sounds of industrial equipment. It was built a comprehensive data pipeline to easily train, schedule retrain, and use specific models for selected users.
                                    </p>
                                </li>
                                <li>
                                    <span className="icon-uniE908"></span>
                                    <p>
                                        Receive motor status in seconds and analyze spectrogram via UI for administrators and data analysts.
                                    </p>
                                </li>
                            </ul>
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

export default ProductDiagnostics;
