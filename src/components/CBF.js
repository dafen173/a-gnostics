import React from "react";
import "./Slider.css";
import "./CBF.css";
import "./icons.css";
import { useInView } from "react-intersection-observer";

import ai_background_left_top from "../assets/ai_background_left_top.png";
import ai_background_right_bottom from "../assets/ai_background_right_bottom.png";
import datadome_screens from "../assets/datadome_screens.png";


const CBF = ({ imageSrc, title, subtitle, flipped, id }) => {
    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
    });

    const renderContent = () => {
      if (!flipped) {
        return (
          <>

            <div className="cbf__flex__container">
              <img src={ai_background_left_top} alt="Services" className="slider__image services__image"/>
              <div className="cbf__background">
                <h1 className="slider__title">{title}</h1>
                <h3 className="slider__title">______________________________</h3>
                <br/>


                <div className="cbf__content__flex__container">
                  <ul className="cbf_product_list">
                    <li>
                        <span className="cbf__items"><pre>01 </pre></span>
                        <p>
                          Cloud Business Framework is a software framework to develop highly scalable and flexible Enterprise and SaaS applications. It provides rich set of features necessary for implementation of Enterprise and SaaS solutions of any complexity.
                        </p>
                    </li>
                    <li>
                      <span className="cbf__items">02</span>
                      <p>
                          CBF was created to help developers in building enterprise-ready applications for the end customers faster and better.
                      </p>
                    </li>
                    <li>
                      <span className="cbf__items">03</span>
                      <p>
                          Using CBF libraries as the base of Enterprise and SaaS application development, the company can save up to 6000 man-hours of work. CBF provides possibility to immediately focus on the project-specific business logic implementation via utilizing pre-built out-of-the-box core features.
                      </p>
                    </li>
                    <li>
                      <span className="cbf__items">04</span>
                      <p>
                          Implementations. Industries: Oil & Gas, Financial Services, Insurance, Healthcare, Automotive.
                      </p>
                    </li>
                  </ul>

                  {/* <img src={datadome_screens} alt="datadome_screens" className="datadome_screens slider__image services__image"/> */}

                  <div>
                    <img src={datadome_screens} alt="datadome_screens" className="datadome_screens slider__image"/>
                  </div>
                </div>
              </div>
              <img src={ai_background_right_bottom} alt="Services" className="ai_background_right_bottom slider__image services__image"/>
            </div>


            {/* <div className="relative">
              <img src={ai_background_left_top} alt="Services" className="slider__image services__image"/>
              <div className="services__background"></div>
              <img src={imageSrc} alt="Services" className="slider__image services__image"/>
            </div> */}

             {/* <div className="services__absolute services__content">
              <br/>
              <br/>
              <br/>
              <br/>
              <h1 className="slider__title">test!!!!!!!!</h1>
              <h3 className="slider__title">______________________________</h3>
              <br/>

              <ul>
                <li>
                    Cloud Business Framework is a software framework to develop highly scalable and flexible Enterprise and SaaS applications. It provides rich set of features necessary for implementation of Enterprise and SaaS solutions of any complexity.                </li>
                <li>
                    CBF was created to help developers in building enterprise-ready applications for the end customers faster and better.                </li>
                <li>
                    Using CBF libraries as the base of Enterprise and SaaS application development, the company can save up to 6000 man-hours of work. CBF provides possibility to immediately focus on the project-specific business logic implementation via utilizing pre-built out-of-the-box core features.                </li>
                <li>
                    Implementations. Industries: Oil & Gas, Financial Services, Insurance, Healthcare, Automotive.                </li>
              </ul>

              <img src={imageSrc} alt="Services" className="slider__image services__image"/>
            </div> */}
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

  export default CBF;
