import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
import gif from '../../../assets/imgs/template_4/cofee_bgc.gif';
import draw from '../../../assets/imgs/template_4/draw.png';

export const wapSection_4_3 = {
    "id": "dddggafgsjh123",
    "type": "container",
    "category": "wap-section",
    "className": "wap-section-4-3-container",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643279313/y6vstkoh9zlzxldmng9x.jpg",
    "style": {
        ...containerStyle,
        "paddingBlock": "200",
        "paddingInline": "0",
        "backgroundImage": `url(${gif})`
    },
    "cmps": [
        {
            "id": "3551263hhaGGGdbcgakk",
            "type": "container",
            "className": "section-4-3-content",
            "style": {
                ...containerStyle,
                "backgroundColor": "#ffffff00"
            },
            "cmps": [
                {
                    "id": "34SsSSssSadhcbbg",
                    "type": "container",
                    "className": "card-container",
                    "style": { ...containerStyle },
                    "cmps": [
                        {
                            "id": "34SshhHHjfksj365g",
                            "type": "txt",
                            "txt": "01",
                            "style": { ...txtStyle }
                        },
                        {
                            "id": "3388fhgfdGGGbvCcxzzzzAsd",
                            "type": "img",
                            "className": "icon",
                            "url": draw,
                            "style": {
                                ...imgStyle,
                                "width": "50"
                            },
                        },
                        {
                            "id": "asdhcvdhfr454545",
                            "type": "txt",
                            "txt": "Pick your Favorite Coffee",
                            "style": {
                                ...txtStyle,
                                "textAlign": "center"
                            }
                        },
                    ]

                },
                {
                    "id": "3asdgasdasdasdaasdsdasdasdasdad",
                    "type": "container",
                    "className": "card-container",
                    "style": { ...containerStyle },
                    "cmps": [
                        {
                            "id": "34ddsSsasdasdhhHHjddadsfksj365g",
                            "type": "txt",
                            "txt": "02",
                            "style": { ...txtStyle }
                        },
                        {
                            "id": "3388fhgasdfdGGGbvCcxzzzzAsd",
                            "type": "img",
                            "className": "icon",
                            "url": draw,
                            "style": {
                                ...imgStyle,
                                "width": "50"
                            },
                        },
                        {
                            "id": "asaasdddhcvdhdasdfr45d4545",
                            "type": "txt",
                            "txt": "Select Subscription Plan",
                            "style": {
                                ...txtStyle,
                                "textAlign": "center"
                            }
                        },
                    ]

                },
                {
                    "id": "asdasdsssjjjlllllkjk6767867asdad",
                    "type": "container",
                    "className": "card-container",
                    "style": { ...containerStyle },
                    "cmps": [
                        {
                            "id": "dddsaa567567adadsfksj365g",
                            "type": "txt",
                            "txt": "03",
                            "style": { ...txtStyle }
                        },
                        {
                            "id": "5675673388fhga56567567sdfdGG776GbvCcxzzzzAsd",
                            "type": "img",
                            "className": "icon",
                            "url": draw,
                            "style": {
                                ...imgStyle,
                                "width": "50"
                            },
                        },
                        {
                            "id": "asaasdddhcvdhdasdfr45d4545eeewwe",
                            "type": "txt",
                            "txt": "Enjoy Monthly Delivery",
                            "style": {
                                ...txtStyle,
                                "textAlign": "center"
                            }
                        },
                    ]

                },
            ]
        }
    ]
}