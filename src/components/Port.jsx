import React from "react";
import { portText } from "../constants";

const Port = () => {
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    Best <em>주인장이 추천하는 Best 맛집</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} key={key}>
                            <span className="num">{port.num}.</span>
                            <div className="img">
                                <img src={port.img} alt={port.name} />
                            </div>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">위치와 리뷰 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Port;
