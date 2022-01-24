import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHero_4 = {
    "id": "dhesdfd44Dddsda",
    "type": "container",
    "category": "wap-hero",
    "className": "wap-hero-4",
    "thumbnail": "",
    "style": {
        ...containerStyle,
        "paddingInline": "50",
        "paddingBlock": "200",
        "backgroundImage": "url(https://images.pexels.com/photos/942802/pexels-photo-942802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
    },
    "cmps": [
        {
            "id": "110ddaas9f7s",
            "type": "txt",
            "className": "wap-hero-4-txt",
            "txt": "Monthly coffee subscriptions.",
            "style": {
                ...txtStyle,
                "color": "#1b1b1b",
                // "textAlign": "center",
                "fontSize": "65",
                "letterSpacing": "1",
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
                "backgroundColor": "#6f4e37",
                "borderRadius": "1000"

            }
        }
    ]
}