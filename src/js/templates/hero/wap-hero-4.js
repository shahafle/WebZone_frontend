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
        "paddingBlock": "99",
        "backgroundImage": `url(${coffeBeans})`
    },
    "cmps": [
        {
            "id": "vvJklf8ffffdss",
            "type": "container",
            "category": "wap-header",
            "className": "wap-header-4",
            "thumbnail": "",
            "style": {
                ...containerStyle,
                "paddingBlock": "75",
                "backgroundColor": "#ffffff00"
            },
            "cmps": [
                {
                    "id": "aDDDsgaCCjvj4",
                    "type": "txt",
                    "txt": "CoffeeClub",
                    "style": {
                        ...txtStyle,
                        "color": "#d6d6d6",
                        "fontSize": "52",
                        "fontWeight": "700",
                        "textShadow": "5px 5px 3px #000000",
                        "fontStyle": "italic"
                    },
                },

            ]
        },
        {
            "id": "110ddaas9f7s",
            "type": "txt",
            "className": "wap-hero-4-txt",
            "txt": "Monthly Supply.",
            "style": {
                ...txtStyle,
                "color": "#d6d6d6",
                "textAlign": "center",
                "fontSize": "52",
                "fontWeight": "700",
                "textShadow": "5px 5px 3px #000000",
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