import React from "react";

import about from "../assets/img/about.jpg";
import { introText } from "../constants";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                {/* Title Section */}
                <h1 className="intro__title">{introText.title}</h1>

                {/* Top Decorative Lines */}
                <div className="intro__lines" aria-hidden="true">
                    {[...Array(7)].map((_, index) => (
                        <span key={`top-line-${index}`} className="line"></span>
                    ))}
                </div>

                {/* Text and Image Section */}
                <div className="intro__text">
                    <div className="text">
                        {introText.desc.map((text, index) => (
                            <div key={`desc-${index}`}>{text}</div>
                        ))}
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>

                {/* Bottom Decorative Lines */}
                <div className="intro__lines bottom" aria-hidden="true">
                    {[...Array(7)].map((_, index) => (
                        <span key={`bottom-line-${index}`} className="line"></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;
