import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

import bgImg from '../../../assets/imgs/heros/wap-hero-2.jpg';

export const wapHero_2 = {
    "id": "23l5kjlasdkj643",
    "type": "container", // HERO
    "category": "wap-hero",
    "className": "wap-hero-2",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884509/y2spyoimtziwgrzwogts.jpg",
    "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundImage": `url(${bgImg})` },
    "cmps": [
        {
            "id": "asldfj2lk45",
            "type": "txt", // JUMBO (CENTER)
            "txt": "Grow your business.",
            "style": { ...txtStyle, "color": "#ffffff", "textAlign": "center", "fontFamily": "montserrat", "fontSize": "64", "letterSpacing": "4" }
        },

        {
            "id": "2436t6s5dfg413s5",
            "type": "txt", // SUB-JUMBO (CENTER)
            "txt": "Boost your business with a beautiful website.",
            "style": { ...txtStyle, "color": "#ffffff", "fontSize": "20" }
        },
        {
            "id": "alsrj2lk3j5tsd",
            "type": "btn", // CTA (CENTER)
            "url": "#",
            "txt": "LEARN MORE",
            "style": { ...btnStyle, "backgroundColor": "#ffffff", "fontSize": "24" }
        }]
}