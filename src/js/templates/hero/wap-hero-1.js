import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHero_1 = {
    "id": "dhetv6",
    "type": "container",
    "category": "wap-hero",
    "className": "wap-hero-1",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884263/icgjjwnmhdnaqgzxahhs.jpg",
    "style": {
        ...containerStyle,
        "backgroundImage": "url(\"https://cf.bstatic.com/xdata/images/hotel/max1024x768/320449456.jpg?k=172d955a08f0e5ef213b7b2ac3364ae0a40d62713242c0b7b46b0261907d3f26&o=&hp=1\")",
        "paddingInline": "50",
        "paddingBlock": "200"
    },
    "cmps": [
        {
            "id": "1109f7s",
            "type": "txt",
            "txt": "Adventure is worthwhile.",
            "style": {
                ...txtStyle,
                "color": "#ffffff",
                // "textAlign": "center",
                "fontSize": "65",
                "letterSpacing": "1",
                "textShadow": "1px 1px 3px #000000",
                "fontFamily": "montserrat",
                "color": "rgb(29, 55, 90)"
            }
        },
        // {
        //     "id": "127shsa",
        //     "type": "txt",
        //     "txt": `You don\'t have to be rich to travel well.`,
        //     "style": {
        //         ...txtStyle,
        //         "color": "#ffffff",
        //         "textAlign": "center",
        //         "fontSize": "30",
        //         "textShadow": "1px 1px 3px #000000",
        //         "fontFamily": "bitter"
        //     }
        // },
        {

            "id": "sscvnjf8",
            "type": "btn",
            "url": "https://www.google.com",
            "txt": "Order now",
            "style": {
                ...btnStyle,
                "textAlign": "center",
                "fontSize": "30",
                "fontFamily": "bitter",
                "color": "#fff",
                "backgroundColor": "rgb(255 255 255 / 0%)"
            }
        }
    ]
}