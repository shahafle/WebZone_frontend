import { txtStyle, btnStyle, imgStyle, containerStyle } from './default-styles';

export const wapTemplate_1 = {
    "_id": "5e28393890dd7201a06d4e44",
    "name": "HairDresser Baluta Marketing Site",
    "createdBy": {
        "_id": "5e26e0b718a0891d4c995527",
        "username": "Hekro Special"
    },
    "cmps": [
        {
            "id": "dhetv6",
            "type": "container",
            "category": "wap-hero",
            "name": "wap-hero-1",
            "style": {
                ...containerStyle,
                "backgroundImage": "url(\"https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")",
            },
            "cmps": [
                {
                    "id": "sahd6dd",
                    "type": "container",
                    "style": { ...containerStyle },
                    "cmps": [
                        {
                            "id": "3ss66dg",
                            "type": "txt",
                            "txt": "Pacifico",
                            "style": {
                                ...txtStyle,
                                "color": "white",
                                "fontWeight": "700",
                                "fontSize": "40",
                                "textShadow": "5px 5px 3px black",
                                "fontFamily": "kalam",
                            }
                        },
                        {
                            "id": "33377fhd",
                            "type": "container",
                            "style": { ...containerStyle },
                            "cmps": [
                                {
                                    "id": "sdhuf34f",
                                    "type": "btn",
                                    "url": "#",
                                    "txt": "About us",
                                    "style": {
                                        ...btnStyle,
                                        "color": "white",
                                        "textAlign": "center",
                                        "textShadow": "5px 5px 3px black",
                                        "fontFamily": "bitter",
                                    }
                                },
                                {
                                    "id": "ffhg74",
                                    "type": "btn",
                                    "url": "#",
                                    "txt": "Reservations",
                                    "style": {
                                        ...btnStyle,
                                        "color": "white",
                                        "textAlign": "center",
                                        "textShadow": "5px 5px 3px black",
                                        "fontFamily": "bitter",
                                    }
                                },
                                {
                                    "id": "sssllka9",
                                    "type": "btn",
                                    "url": "#",
                                    "txt": "Login",
                                    "style": {
                                        ...btnStyle,
                                        "color": "white",
                                        "textShadow": "5px 5px 3px black",
                                        "fontFamily": "bitter",
                                    }
                                },
                            ]
                        }
                    ]
                },
                {
                    "id": "8shjhs",
                    "type": "container",
                    "style": { ...containerStyle, },
                    "cmps": [
                        {
                            "id": "1109f7s",
                            "type": "txt",
                            "txt": "Adventure is worthwhile.",
                            "style": {
                                ...txtStyle,
                                "color": "white",
                                "textAlign": "center",
                                "fontSize": "65",
                                "letterSpacing": "1",
                                "textShadow": "1px 1px 3px black",
                                "fontFamily": "bitter",
                            }
                        },
                        {
                            "id": "127shsa",
                            "type": "txt",
                            "txt": `You don\'t have to be rich to travel well.`,
                            "style": {
                                ...txtStyle,
                                "color": "white",
                                "textAlign": "center",
                                "fontSize": "30",
                                "textShadow": "1px 1px 3px black",
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
                                "backgroundColor": "#f1ffff",
                                "textAlign": "center",
                                "fontSize": "30",
                                "fontFamily": "bitter",
                                "borderRadius": '1000'
                            }
                        }
                    ]
                }

            ]
        },
        {
            "id": "7C2hdg6",
            "type": "container",
            "category": "wap-card",
            "name": "wap-card-1",
            "style": { ...containerStyle },
            "cmps": [
                {
                    "id": "726shD8",
                    "type": "img",
                    "url": "https://images.pexels.com/photos/4777687/pexels-photo-4777687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    "style": { ...imgStyle }
                },
                {
                    "id": "77SGv9",
                    "type": "txt",
                    "txt": "Discover new worlds",
                    "style": { ...txtStyle }
                }
            ]

        }
    ],
    "isPublished": true
}