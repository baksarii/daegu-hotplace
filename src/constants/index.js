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

export const hotplaces = [
    {
        id: 1,
        name: "대구탕 맛집",
        description: "신선한 대구탕으로 유명한 맛집입니다.",
        address: "대구시 중구 맛집길 1",
    },
    {
        id: 2,
        name: "한우 갈비찜 전문점",
        description: "최고급 한우 갈비찜을 즐길 수 있는 곳입니다.",
        address: "대구시 북구 맛집로 45",
    },
    {
        id: 3,
        name: "수제 버거 가게",
        description: "신선한 재료로 만든 수제 버거를 맛볼 수 있습니다.",
        address: "대구시 동구 맛집로 12",
    },
    {
        id: 4,
        name: "대구 막창집",
        description: "맛있는 대구 막창으로 유명한 곳입니다.",
        address: "대구시 서구 맛집로 77",
    },
    {
        id: 5,
        name: "프리미엄 초밥",
        description: "신선한 재료로 만든 프리미엄 초밥을 제공합니다.",
        address: "대구시 수성구 초밥로 33",
    },
    {
        id: 6,
        name: "홍콩식 딤섬 전문점",
        description: "홍콩 스타일의 딤섬을 맛볼 수 있는 곳입니다.",
        address: "대구시 남구 딤섬로 88",
    },
    {
        id: 7,
        name: "대구 치킨 명소",
        description: "바삭한 치킨과 다양한 소스가 특징인 맛집입니다.",
        address: "대구시 달서구 치킨로 10",
    },
    {
        id: 8,
        name: "베이커리 카페",
        description: "갓 구운 빵과 신선한 커피를 제공하는 인기 카페입니다.",
        address: "대구시 중구 카페길 21",
    },
    {
        id: 9,
        name: "한국 전통 비빔밥",
        description: "다양한 재료로 만든 건강한 비빔밥 맛집입니다.",
        address: "대구시 북구 비빔밥로 5",
    },
    {
        id: 10,
        name: "디저트 전문점",
        description: "아름답고 맛있는 디저트를 즐길 수 있는 공간입니다.",
        address: "대구시 동구 디저트로 9",
    },
    {
        id: 11,
        name: "중국 사천요리 전문점",
        description: "매콤한 사천요리를 즐길 수 있는 중국 음식점입니다.",
        address: "대구시 남구 중국로 99",
    },
    {
        id: 12,
        name: "이탈리안 피자 가게",
        description: "화덕에서 구운 정통 이탈리안 피자를 맛볼 수 있습니다.",
        address: "대구시 달서구 피자로 44",
    },
    {
        id: 13,
        name: "감성 와인바",
        description: "아늑한 분위기에서 와인을 즐길 수 있는 장소입니다.",
        address: "대구시 수성구 와인로 56",
    },
    {
        id: 14,
        name: "프리미엄 갈비집",
        description: "신선한 고기를 사용하는 고급 갈비집입니다.",
        address: "대구시 중구 갈비로 3",
    },
    {
        id: 15,
        name: "정통 한정식",
        description: "다양한 한정식을 제공하는 한국 전통 맛집입니다.",
        address: "대구시 북구 한정식로 18",
    },
    {
        id: 16,
        name: "라멘 전문점",
        description: "진한 국물과 신선한 토핑으로 만든 일본 라멘 맛집입니다.",
        address: "대구시 동구 라멘길 22",
    },
    {
        id: 17,
        name: "베트남 쌀국수 전문점",
        description: "정통 베트남 쌀국수를 맛볼 수 있는 인기 맛집입니다.",
        address: "대구시 남구 쌀국수로 19",
    },
    {
        id: 18,
        name: "퓨전 한식 레스토랑",
        description: "전통 한식과 현대적인 퓨전을 즐길 수 있는 곳입니다.",
        address: "대구시 달서구 한식로 88",
    },
    {
        id: 19,
        name: "아시아 푸드 뷔페",
        description: "다양한 아시아 음식을 무제한으로 즐길 수 있습니다.",
        address: "대구시 수성구 뷔페로 55",
    },
    {
        id: 20,
        name: "야시장 꼬치집",
        description: "대구 야시장에서 맛볼 수 있는 꼬치 전문점입니다.",
        address: "대구시 중구 야시장로 7",
    },
];
