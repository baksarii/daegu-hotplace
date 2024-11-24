/*
페이지를 나타내는 HomeView.jsx
각 컴포넌트는 기능별로 분리되어 관리됨 -> 코드의 가독성과 유지보수성이 좋아진다. 
이렇게 구성된 컴포넌트들을 조합하여 리액트 애플리케이션을 구축할 수 있다.
*/
import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
// import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;