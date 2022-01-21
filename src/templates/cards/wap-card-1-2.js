import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapCard_1_2 = {
    "id": "7C2hdg6",
    "type": "container",
    "category": "wap-card",
    "name": "wap-card-1",
    "style": { ...containerStyle, "paddingBlock": "100", "paddingInline": "100" },
    "cmps": [
        {
            "id": "sd9iF",
            "type": "container",
            "style": { ...containerStyle },
            "cmps": [{

                "id": "Ddjs9",
                "type": "txt",
                "txt": "Explore the wildlife",
                "style": {
                    ...txtStyle,
                    "fontSize": "25"
                }

            },
            {
                "id": "dsj8F",
                "type": "txt",
                "txt": "Join our guided tours and you will be rewarded with life-changing experiences",
                "style": {
                    ...txtStyle,
                }
            }
            ]
        },

        {
            "id": "DFKGOs",
            "type": "container",
            "style": { ...containerStyle, },
            "cmps": [{
                "id": "7DFkd9",
                "type": "img",
                "url": "https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "style": { ...imgStyle }
            },
            ]

        },



    ]

}