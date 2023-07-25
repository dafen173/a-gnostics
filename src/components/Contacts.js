import React from "react";
import "./Slider.css";
import "./Contacts.css";
import "./icons.css";
import { useInView } from "react-intersection-observer";


const Contacts = ({ imageSrc, title, subtitle, flipped, id }) => {

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.4,
    });

    const renderContent = () => {
        return (
          <>
                {/* <div className="contacts__container"> */}
                <div className="contacts">
                    <div className="contacts__title">
                        © 2022 — 2023 Smartificial Element
                    </div>
                    <div className="contacts__address">
                        <ul className="contacts__address__list">
                            <li className="contacts__address__list__item">SMARTIFICIAL ELEMENT LTD</li>
                            <li className="contacts__address__list__item">SUITE A, 6 HONDURAS STREET</li>
                            <li className="contacts__address__list__item">LONDON</li>
                            <li className="contacts__address__list__item">EC1Y 0TH</li>
                            <li className="contacts__address__list__item contacts__address__list__item--highlight">+44 777 440 9981</li>
                        </ul>
                    </div>
                    <div className="contacts__social">
                        <ul className="contacts__social__list">
                            <li className="contacts__social__list__item">
                                <a className="contacts__social__list__item__link" href="http://www.facebook.com/agnosticscom" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-uniE904"></span>
                                    <p>Facebook</p>
                                </a>
                            </li>
                            <li className="contacts__social__list__item">
                                <a className="contacts__social__list__item__link" href="http://www.linkedin.com/company/agnostics" target="_blank" rel="noopener noreferrer">
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


