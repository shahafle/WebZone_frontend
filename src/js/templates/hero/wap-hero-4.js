import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHero_4 = {
    "id": "dhesdfd44Dddsda",
    "type": "container",
    "category": "wap-hero",
    "className": "wap-hero-4",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884263/icgjjwnmhdnaqgzxahhs.jpg",
    "style": {
        ...containerStyle,
        "paddingInline": "50",
        "paddingBlock": "200"
    },
    "cmps": [
        {
            "id": "110ddaas9f7s",
            "type": "txt",
            "txt": "Monthly roasted coffee subscriptions",
            "style": {
                ...txtStyle,
                "color": "#334748",
                // "textAlign": "center",
                "fontSize": "65",
                "letterSpacing": "1",
                "textShadow": "1px 1px 3px #000000",
            }
        },
        {

            "id": "sdsddcasdasasdvnjsf8",
            "type": "btn",
            "className": "wap-hero-4-btn",
            "url": "https://www.google.com",
            "txt": "Subscribe Now",
            "style": {
                ...btnStyle,
                "textAlign": "center",
                "fontSize": "30",
                "color": "#ffffff",
                "backgroundColor": "#6f4e37"
            }
        }
    ]
}