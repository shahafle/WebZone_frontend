import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHero_1 = {
    "id": "dhetv6",
    "type": "container",
    "category": "wap-hero",
    "name": "wap-hero-1",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884263/icgjjwnmhdnaqgzxahhs.jpg",
    "style": {
        ...containerStyle,
        "backgroundImage": "url(\"https://images.pexels.com/photos/2189880/pexels-photo-2189880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")",
        "paddingInline": "100",
        "paddingBlock": "100"
    },
    "cmps": [
        {
            "id": "1109f7s",
            "type": "txt",
            "txt": "Adventure is worthwhile.",
            "style": {
                ...txtStyle,
                "color": "#ffffff",
                "textAlign": "center",
                "fontSize": "65",
                "letterSpacing": "1",
                "textShadow": "1px 1px 3px #000000",
                "fontFamily": "bitter",
            }
        },
        {
            "id": "127shsa",
            "type": "txt",
            "txt": `You don\'t have to be rich to travel well.`,
            "style": {
                ...txtStyle,
                "color": "#ffffff",
                "textAlign": "center",
                "fontSize": "30",
                "textShadow": "1px 1px 3px #000000",
                "fontFamily": "bitter"
            }
        },
        {

            "id": "sscvnjf8",
            "type": "btn",
            "url": "https://www.google.com",
            "txt": "Order now",
            "style": {
                ...btnStyle,
                "backgroundColor": "#ffffff",
                "textAlign": "center",
                "fontSize": "30",
                "fontFamily": "bitter",
                "borderRadius": '1000'
            }
        }
    ]
}