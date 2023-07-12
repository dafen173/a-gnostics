import React from "react";
import "./Slider.css";
import "./Contacts.css";
import "./icons.css";
// import "./Services.css";
import { useInView } from "react-intersection-observer";


const Contacts = ({ imageSrc, title, subtitle, flipped, id }) => {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
    });

    const renderContent = () => {
        return (
          <>
                <div className="contacts__container">
                    <div className="">
                        © 2022 — 2023 Smartificial Element
                    </div>
                    <div className="">
                        <ul>
                            <li>SMARTIFICIAL ELEMENT LTD</li>
                            <li>SUITE A, 6 HONDURAS STREET</li>
                            <li>LONDON</li>
                            <li>EC1Y 0TH</li>
                            <li className="phone__number">+44 777 440 9981</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li className="facebook">
                                <a href="http://www.facebook.com/agnosticscom" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-uniE904"></span>
                                    <p>Facebook</p>
                                </a>
                            </li>
                            <li className="linked__in">
                                <a href="http://www.linkedin.com/company/agnostics" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-uniE905"></span>
                                    <p>LinkedIn</p>
                                </a>
                            </li>
                        </ul>
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

export default Contacts;


