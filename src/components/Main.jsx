/*
자식 컴포넌트 렌더링하는 래퍼(wrapper) 역할
children prop을 받아와서 해당 자식 컴포넌트들을 main태그로 감싸서 반환함
*/


import React from "react";

const Main = ({ children }) => {
    return (
    <main id="main" role="main">
        {children}
    </main>
    );
};

export default Main;
