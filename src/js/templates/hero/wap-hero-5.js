import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

import bgImg from '../../../assets/imgs/heros/wap-hero-5.jfif';

export const wapHero_5 = {
    "id": "3o46ijowrigjoslijgl23wi4jt",
    "type": "container", // HERO
    "category": "wap-hero",
    "className": "wap-hero-5",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643278195/zbdgaqhj3kyffqk8kz3j.jpg",
    "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundImage": `url(${bgImg})` },
    "cmps": [
        {
            "id": "345lk7yjflsdkgjs09gj2343t",
            "type": "container", // HERO CONTENT (RIGHT)
            "className": "wap-hero-5-content flex column align-start",
            "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
            "cmps": [

                {
                    "id": "24j6lktsjdlgkjelk6j45",
                    "type": "txt", // MUTED-TXT (RIGHT)
                    "txt": "Soundbeam ERD - 3083",
                    "style": { ...txtStyle, "color": "#ffffff99", "textAlign": "start" }
                },

                {
                    "id": "2j5lktwdjlfgkj245",
                    "type": "txt", // JUMBO (RIGHT)
                    "txt": "Reinventing Sound Experience",
                    "style": { ...txtStyle, "color": "#ffffff", "textAlign": "start", "fontFamily": "montserrat", "fontSize": "50", "fontWeight": "700" }
                },

                {
                    "id": "dfkjgh34jtlksfgjdlk3j6tf",
                    "type": "btn", // CTA (RIGHT)
                    "url": "#",
                    "txt": "ORDER NOW",
                    "style": { ...btnStyle, "color": "#ffffff", "backgroundColor": "#ffffff00", "fontSize": "24" }
                }]
        }
    ]
}