import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
import coffeBeans from '../../../assets/imgs/template_4/cofee_beans.jpeg'


export const wapHero_4 = {
    "id": "dhesdfd44Dddsda",
    "type": "container",
    "category": "wap-hero",
    "className": "wap-hero-4",
    "thumbnail": "",
    "style": {
        ...containerStyle,
        "paddingInline": "50",
        "paddingBlock": "345",
        "backgroundImage": `url(${coffeBeans})`
    },
    "cmps": [
        {
            "id": "110ddaas9f7s",
            "type": "txt",
            "className": "wap-hero-4-txt",
            "txt": "CoffeClub.",
            "style": {
                ...txtStyle,
                "color": "#1b1b1b",
                "textAlign": "center",
                "fontSize": "70",
                "fontWeight": "700",
                "fontStyle": "italic"


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
                "color": "#eeeaea",
                "backgroundColor": "#1b1b1b",

            }
        }
    ]
}