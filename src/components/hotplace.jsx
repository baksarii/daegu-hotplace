import React from "react";
import "../assets/scss/section/_hotplace.scss";
import { hotplaces } from "../constants";

const Hotplace = () => {
    return (
        <div className="hotplace">
            <h1 className="hotplace__title">대구의 맛집 !</h1>
            <p className="hotplace__subtitle">대구에서 꼭 방문해야 할 맛집을 소개합니다!</p>
            <ul className="hotplace__list">
                {hotplaces.map((place) => (
                    <li key={place.id} className="hotplace__item">
                        <h2 className="hotplace__name">{place.name}</h2>
                        <p className="hotplace__desc">{place.description}</p>
                        <p className="hotplace__address">{place.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hotplace;
