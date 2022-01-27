import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
import takos from '../../../assets/imgs/sombrerro/takos.png'
import drinks from '../../../assets/imgs/sombrerro/drinks.png'

export const wapCard_7 = {
    "id": "fjgkflallskfkfiwantistober",
    "type": "container",
    "category": "wap-card",
    "className": "wap-card-7",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643279686/gaeniz6rcmde8punwkt6.jpg",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "50" },
    "cmps": [
        {
            "id": "asdkjASDkjhxcv",
            "type": "container",
            "className": "container",
            "style": { ...containerStyle },
            "cmps": [{
                "id": "46gfhhdkvnkglkj4987345",
                "type": "img",
                "className": "img-1",
                "url": takos,
                "style": { ...imgStyle }
            },
            {
                "id": "asd9087xckjvhsd98sdfjxcv",
                "type": "container",
                "className": "txt-btn-container flex column",
                "style": { ...containerStyle, "backgroundColor": "#f3f3f300", },
                "cmps": [
                    {
                        "id": "asdashbnmxcv98239487fhsdkjxv",
                        "type": "txt",
                        "txt": "tasty takos served every day",
                        "style": { ...txtStyle, "color": "#ef4b4d", "fontWeight": "700", "fontSize": "34" }
                    },
                    {
                        "id": "asdaksdakdjasdasdasdasdasdasdnxcm123JKL",
                        "type": "btn",
                        "className": "btn",
                        "url": "http://www.google.com",
                        "txt": "see the menu",
                        "style": { ...btnStyle, "color": "#ef4b4d", "fontWeight": "700", "fontSize": "28" }
                    }
                ]
            }, {
                "id": "sdfjkllsdkjxcvlks2344444jdjlcxkvjsdf",
                "type": "container",
                "className": "txt-btn-container flex column",
                "style": { ...containerStyle, "backgroundColor": "#f3f3f300", },
                "cmps": [
                    {
                        "id": "sdlkjsddlkxc,mnxc,mxc87xvc87s8s7df",
                        "type": "txt",
                        "txt": "From margaitas to mojitos",
                        "style": { ...txtStyle, "color": "#ef4b4d", "fontWeight": "700", "fontSize": "34" }
                    },
                    {
                        "id": "asdaksdakdjasdddsasdasdasdasdasdnxcm123JKL",
                        "type": "txt",
                        "txt": "we give you the best mexico has to offer,from the garden to the plate.",
                        "style": { ...txtStyle, "color": "#ef4b4d", "fontWeight": "700", "fontSize": "22" }
                    }
                ]
            }, {
                "id": "xvhjksdkjxcvhjsdkfjhs8d76872368sdf",
                "type": "img",
                "className": "img-2",
                "url": drinks,
                "style": { ...imgStyle }
            },
            ]
        }

    ]

}