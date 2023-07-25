import React from "react";
import "./Slider.css";
import "./Services.css";
import { useInView } from "react-intersection-observer";

const Services = ({ imageSrc, title, subtitle, flipped, id }) => {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
    });

    const renderContent = () => {
      if (!flipped) {
        return (
          <>
            <div className="relative">
              <div className="services__background"></div>
              <img src={imageSrc} alt="Services" className="slider__image services__image"/>
            </div>

             <div className="services__absolute services__content">
              <p>Did you know that:</p>
              <br/>
              <p>
                A variety of companies, ranging from dynamic small and medium to Fortune 500, across oil and gas, drilling, engineering, manufacturing industries and commercial solutions, use S E's software development outsourcing services
              </p>
              <br/>
              <br/>
              <h1 className="slider__title">{title}</h1>
              <h3 className="slider__title">______________________________</h3>
              <br/>
              <ul>
                <li>
                    Data Science and Machine Learning. Data science includes machine learning techniques and statistical analysis for effective handling of diverse Big Data projects;
                </li>
                <li>
                    Custom Software Development. Custom software development is the creation of solutions aimed at solving a specific business’ needs;
                </li>
                <li>
                    Dedicated Development Teams. When you work with a dedicated project team, you’ll be eligible for an agreed monthly cost, which is cheaper than when you employ local staff, and there’s no overhead charge;
                </li>
                <li>
                    Cloud Solutions. Finding the right solutions to help you solve your toughest business challenges and explore new opportunities with major cloud providers;
                </li>
                <li>
                    Business Applications. We are providing excellent business software application development services that tally with your business.
                </li>
              </ul>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="slider__content">
              <h1 className="slider__title">{title}</h1>
              <p>{subtitle}</p>
            </div>
            <img src={imageSrc} alt="Travel" className="slider__image" />
          </>
        );
      }
    };

    return (
        <div id={id} className={inView ? "services__flex slider slider--zoom" : "services__flex slider"} ref={ref}>
            {renderContent()}
        </div>
    );
  };

  export default Services;


