import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";

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