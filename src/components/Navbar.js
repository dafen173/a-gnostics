import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import se_logo from "../assets/se_logo.png";

const Navbar = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
      setMenuClicked(!menuClicked);
    };

    return (
        <BrowserRouter>
            <nav className="navbar">
                {/* <span className="navbar__logo">a-Gnostics</span> */}
                <img src={se_logo} alt="logo" className="logo" height={70}/>
                {menuClicked ? (
                <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
                ) : (
                <FiMenu
                    size={25}
                    className={"navbar__menu"}
                    onClick={toggleMenuClick}
                />
                )}
                <ul
                className={
                    menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
                }
                >

                <li className="navbar__item" key={1}>
                    <Link className="navbar__link" to='#' smooth>
                        HOME
                    </Link>
                </li>
                {navbarLinks.map((item, index) => {
                    return (
                    <li className="navbar__item" key={index + 1}>
                        <Link className="navbar__link" to={item.url} smooth>
                            {item.title}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>
        </BrowserRouter>
    );
  };


export default Navbar;


