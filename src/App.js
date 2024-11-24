import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import HomeView from "./views/HomeView";
import Hotplace from "./components/hotplace";

import lenis from "./utils/lenis";
import link from "./utils/link";

// Lenis와 Link 초기화를 다시 호출하는 컴포넌트
const ScrollHandler = () => {
    const location = useLocation();

    useEffect(() => {
        lenis(); // lenis 재초기화
        link(); // 앵커 링크 이벤트 재설정
    }, [location.pathname]); // 경로 변경 시 실행

    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollHandler /> {/* 경로 변경 감지 */}
            <Routes>
                <Route path="/" element={<HomeView />} /> {/* 홈 경로 */}
                <Route path="/hotplace" element={<Hotplace />} /> {/* Hotplace 경로 */}
            </Routes>
        </Router>
    );
};

export default App;
