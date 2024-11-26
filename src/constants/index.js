import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";

import food01 from "../assets/img/food01.jpg";
import food02 from "../assets/img/food02.jpg";
import food03 from "../assets/img/food03.jpg";
import food04 from "../assets/img/food04.jpg";
import food05 from "../assets/img/food05.jpg";
import food06 from "../assets/img/food06.jpg";
import food07 from "../assets/img/food07.jpg";
import food08 from "../assets/img/food08.png";

export const headerNav = [
    {
        title: "intro",
        url: "#intro" // 앵커 방식
    },
    {
        title: "introduction",
        url: "#skill" // 앵커 방식
    },
    {
        title: "hotplace",
        url: "/hotplace" // React Router 방식
    },
    {
        title: "best",
        url: "#port" // 앵커 방식
    },
    {
        title: "contact",
        url: "#contact" // 앵커 방식
    }
];

export const introText = {
    title: "Daegu Popular restaurant",
    desc: ["대구의 검증된 맛집을", "소개해드리겠습니다."]
}

export const skillText = [
    {
        title: "대구의 맛을 설계하다.",
        desc: "대구에는 단순한 식사를 넘어, 기억에 남는 맛의 공간들이 있습니다. 숨겨진 골목의 작은 가게부터 화려한 레스토랑까지, 당신만의 특별한 맛을 찾을 수 있는 곳. 대구 맛집 사이트는 이런 공간을 설계하고 소개하며, 여러분의 미식 여행을 돕습니다."
    },
    {
        title: "열심히 찾을수록 맛집은 가까워진다.",
        desc: "맛집은 단순히 운으로 발견되는 것이 아닙니다. 대구의 숨겨진 보석 같은 맛집을 찾기 위해 우리가 직접 발로 뛰고, 연구하고, 경험한 결과를 공유합니다. 맛집은 발견이 아니라 열정으로 만들어지는 즐거움입니다."
    },
    {
        title: "당신의 입맛에 정직하다.",
        desc: "대구 맛집 사이트는 여러분의 입맛에 정직하게 다가갑니다. 솔직한 리뷰와 상세한 정보를 통해, 어떤 곳에서든 믿을 수 있는 선택을 도와드립니다. 진정한 미식의 즐거움을 느끼고 싶다면 이곳에서 시작하세요."

    }
]

// export const siteText = [
//     {
//         text: ["make", "site compliant with", "webstandard"],
//         title: "비트를 이용한 사이트 제작",
//         code: "https://github.com/webstoryboy/port2023-vite",
//         view: "https://port2023-vite.netlify.app",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, CSS Variable, Vite",
//         ],
//     },
//     {
//         text: ["make", "site compliant with", "react.js"],
//         title: "리액트를 이용한 사이트 제작",
//         code: "https://github.com/webstoryboy/port2023-react",
//         view: "https://port2023-react.netlify.app",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, CSS Variable, react",
//         ],
//     },
//     {
//         text: ["make", "site compliant with", "vue.js"],
//         title: "뷰를 이용한 사이트 제작",
//         code: "https://github.com/webstoryboy/port2023-vue",
//         view: "https://port2023-vue.netlify.app",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, Scss Variable, vue",
//         ],
//     },
//     {
//         text: ["make", "site compliant with", "next.js"],
//         title: "넥스트를 이용한 사이트 제작",
//         code: "https://github.com/webstoryboy/port2023-next",
//         view: "https://port2023-next.netlify.app",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, Scss Variable, next.js",
//         ],
//     },
// ];

export const portText = [
    {
        num: "01",
        title: "킨슈",
        desc: "킨슈는 고객들로부터 음식의 맛과 서비스에 대해 높은 평가를 받고 있습니다. 특히 트러플 육회와 들기름 카펠리니, 매콤 미소조림 등이 인기 메뉴로 언급되었습니다. 직원들의 친절함과 프로페셔널함도 고객 만족도를 높이는 요소로 보입니다. 특별한 날을 더욱 특별하게 만들어줄 수 있는 곳으로 추천됩니다.",
        img: port01,
        view: "https://map.naver.com/p/entry/place/1949961914?c=15.00,0,0,0,dh&placePath=/review",
        name: "킨슈",
    },
    {
        num: "02",
        title: "만나까",
        desc: "만나까 본점은 쿠시카츠 전문점으로, 고객들은 쫀쫀한 빵가루 튀김옷과 바삭하면서도 촉촉한 튀김꼬치를 매우 만족스럽게 평가하고 있습니다. 함께 제공되는 간장베이스 소스에 찍어 먹으면 더욱 맛있다고 합니다. 또한, 삿포로 생맥주와 같은 음료와의 조합도 추천되고 있습니다. ",
        img: port02,
        view: "https://map.naver.com/p/search/%EB%A7%8C%EB%82%98%EA%B9%8C/place/1123792916?c=15.00,0,0,0,dh&placePath=/review",
        name: "만나까",
    },
    {
        num: "03",
        title: "짜장나라돌판공주",
        desc: "고객 후기에 따르면 짜장나라돌판공주는 돌짜장과 돌볶음짬뽕으로 유명하며, 특히 짬뽕과 짜장을 한 번에 즐길 수 있는 돌스페셜이 인기가 좋습니다. 또한, 둥근 찹쌀탕수육과 파김치의 조합이 맛있다고 하네요. 돌판에서 따뜻하게 먹을 수 있는 점과 해물이 듬뿍 들어간 점이 특징입니다. ",
        img: port03,
        code: "https://github.com/seolhee313/PORTFOLIO-REACT",
        view: "https://map.naver.com/p/entry/place/1238247034?c=15.00,0,0,0,dh&placePath=/review",
        name: "짜장나라돌판공주",
    },
];

export const contactText = [

    {
        link: "mailto:ohci0022@naver.com",
        title: "mail : ohci0022@naver.com",
    },
];

export const footerText = [
    {
        title: "youtube",
        desc: "개발자가 운영하는 유튜브입니다.",
        link: "https://www.youtube.com/@Baksariiiii",
    },
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/baksarii",
    },
];

export const hotplaces = [
    {
        id: 1,
        name: "전원돈까스",
        address: "대구광역시 중구 동성로6길 2-23 B1F",
        phone: "053-424-8220",
        menu: [
            { name: "돈까스", price: 9000 },
            { name: "치즈돈까스", price: 10500 },
            { name: "비후까스", price: 12000 },
            { name: "함박스텍", price: 11000 },
            { name: "생선가스", price: 10000 },
            { name: "돈까스곱배기(1인분)", price: 13000 },
        ],
        hours: "월,화,수,목,금,토,일 11:00∼20:30 (라스트오더 20:00)",
        description:
            "전원돈까스는 얇은 돈까스에 고소한 치즈를 넣어 만든 치즈돈까스와 곱배기 돈까스가 인기 메뉴입니다. 소스가 달콤하고 돈까스에 잘 스며들어 맛있으며, 웨이팅이 있을 수 있지만 회전율이 좋아 오래 기다리지 않는다는 리뷰가 있습니다. 또한, 카레향이 나는 돈가스소스와 촉촉한 돈까스가 인상적인 곳으로, 많은 사람들이 찾는 대구의 맛집 중 하나입니다.",
        img: food01,
    },
    {
        id: 2,
        name: "전주행",
        address: "대구광역시 중구 동성로 19-13",
        phone: "053-255-7737",
        menu: [
            { name: "set3 석갈비+된찌+양푼이+냉면", price: 17000 },
            { name: "set2 석갈비+냉면", price: 15000 },
            { name: "set1 석갈비+된찌+양푼이비빔밥", price: 11000 },
        ],
        hours: "매일 11:00∼21:30 (브레이크타임 15:30∼16:30, 라스트오더 21:00)",
        description:
            "전주행은 동성로에서 한식 맛집으로 손 꼽히는 곳으로, 푸짐하고 맛있는 석갈비와 다양한 한식 메뉴를 제공합니다. 가성비가 좋아 많은 사람들이 찾는 곳이며, 혼밥도 가능합니다. 방문하시면 맛있는 식사를 즐기실 수 있을 것 같습니다.",
        img: food02,
    },
    {
        id: 3,
        name: "미진분식",
        address: "대구광역시 중구 동성로2길 31-7",
        phone: "053-425-1120",
        menu: [
            { name: "김밥", price: 3000 },
            { name: "우동", price: 4000 },
            { name: "비빔우동", price: 4500 },
            { name: "쫄면", price: 4500 },
        ],
        hours: "매일 10:00∼21:00",
        description:
            "미진분식은 30년 이상 된 전통 있는 식당으로, 속이 푸짐한 김밥과 진하고 시원한 국물의 우동, 콩나물이 아삭한 쫄면이 대표 메뉴입니다. 분식류를 좋아하는 분이라면 한 번쯤 방문해보시는 것을 추천합니다.",
        img: food03,
    },
    {
        id: 4,
        name: "신라식당",
        address: "대구광역시 중구 중앙대로 406-8",
        phone: "053-422-3105",
        menu: [
            { name: "돌판 낙지볶음", price: 14000 },
            { name: "돌판낙지·새우볶음", price: 16000 },
            { name: "해물순두부찌개", price: 12000 },
        ],
        hours: "월,화,목,금,토,일 10:30∼18:00 (수요일 휴무)",
        description:
            "신라식당은 돌판 낙지볶음과 해물순두부찌개로 유명한 한식당입니다. 매콤한 맛과 푸짐한 양으로 많은 사람들이 방문하며, 친절한 서비스와 따뜻한 분위기를 제공합니다.",
        img: food04,
    },
    {
        id: 5,
        name: "도마29",
        address: "대구광역시 중구 동성로1길 46-2 도마29",
        phone: "0507-1306-1129",
        menu: [
            { name: "생선초밥", price: 19000 },
            { name: "모듬초밥", price: 13000 },
            { name: "연어초밥", price: 16000 },
            { name: "참치초밥", price: 18000 },
        ],
        hours: "월,화,수,목,금,토,일 11:00∼21:00 (브레이크타임 15:30∼17:00, 라스트오더 15:00)",
        description:
            "도마29는 신선한 초밥과 흐트러진덮밥으로 유명한 맛집입니다. 친절한 직원과 빠른 회전율로 대기 시간이 짧으며, 연어초밥이 특히 인기 있는 메뉴입니다.",
        img: food05,
    },
    {
        id: 6,
        name: "팔공막창",
        address: "대구광역시 중구 동성로6길 46",
        phone: "0507-1474-6002",
        menu: [
            { name: "팔공막창", price: 10000 },
            { name: "팔공생막창", price: 10000 },
            { name: "삼겹살", price: 10000 },
        ],
        hours: "월,화,수,목,금,토,일 11:00∼02:00 (법정공휴일 전야는 다음날 02:00까지)",
        description:
            "팔공막창은 대구 막창으로 유명한 맛집입니다. 고소하고 쫄깃한 막창과 함께 제공되는 계란찜이 특히 인기 있으며, 다양한 메뉴를 1인분씩 즐길 수 있어 가족 단위 방문객에게도 적합합니다.",
        img: food06,
    },
    {
        id: 7,
        name: "리안",
        address: "대구광역시 수성구 교학로4길 48",
        phone: "053-746-0203",
        menu: [
            { name: "짜장면", price: 6000 },
            { name: "만두", price: 7000 },
            { name: "짬뽕", price: 8000 },
            { name: "야끼우동", price: 9000 },
        ],
        hours: "월,화,수,목,금,토,일 11:30∼21:00",
        description:
            "리안 중식당은 야끼우동과 찹쌀탕수육으로 유명한 맛집입니다. 주차장이 있어 방문이 편리하며, 가성비 좋은 메뉴와 친절한 서비스로 많은 사람들이 찾는 곳입니다.",
        img: food07,
    },
    {
        id: 8,
        name: "옹심이칼국수",
        address: "대구광역시 달성군 다사읍 다사로 655",
        phone: "053-585-8284",
        menu: [
            { name: "옹심이칼국수", price: 9000 },
            { name: "감자전", price: 9000 },
            { name: "감자소편", price: 6000 },
            { name: "감자만두", price: 6000 },
        ],
        hours: "월,화,수,목,금,토,일 11:00∼21:00",
        description:
            "고객 후기에 따르면 옹심이칼국수는 맛있고, 특히 겉절이랑 무김치가 인기가 많습니다. 옹심이칼국수와 감자전을 함께 주문하면 더욱 맛있게 즐길 수 있으며, 청양고추나 다대기를 추가하여 얼큰하게 즐길 수도 있습니다. 회전율이 좋아 웨이팅이 있을 수 있지만, 맛있는 음식과 친절한 서비스로 만족도가 높은 곳입니다.",
        img: food08,
    },
];
