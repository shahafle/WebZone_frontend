import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapCard_1 = {
    "id": "7C2hdg6",
    "type": "container",
    "category": "wap-card",
    "name": "wap-card-1",
    "style": { ...containerStyle, "paddingBlock": "100", "paddingInline": "100" },
    "cmps": [
        {
            "id": "38dhh",
            "type": "container",
            "style": { ...containerStyle, },
            "cmps": [{
                "id": "726shD8",
                "type": "img",
                "url": "https://images.pexels.com/photos/4777687/pexels-photo-4777687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "style": { ...imgStyle }
            },
            ]

        },


        {
            "id": "sdhd7h4",
            "type": "container",
            "style": { ...containerStyle },
            "cmps": [{

                "id": "77SGv9",
                "type": "txt",
                "txt": "Discover new worlds",
                "style": {
                    ...txtStyle,
                    "fontSize": "25"
                }

            },
            {
                "id": "745v9",
                "type": "txt",
                "txt": "The best Diving center in the world, with amazing Underwater view all year long!",
                "style": {
                    ...txtStyle,
                }
            }
            ]
        },

    ]

}