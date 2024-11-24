import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerNav } from "../constants";

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <Link to="/">Daegu<em>popular restaurant</em></Link>
                </div>
                <nav
                    className={`header__nav ${show ? "show" : ""}`}
                    role="navigation"
                    aria-label="메인 메뉴"
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                {nav.url.startsWith("#") ? (
                                    <a href={nav.url}>{nav.title}</a> // 앵커 방식
                                ) : (
                                    <Link to={nav.url}>{nav.title}</Link> // React Router 방식
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
