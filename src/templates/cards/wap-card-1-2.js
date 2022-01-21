import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapCard_1_2 = {
    "id": "sdfsdf56",
    "type": "container",
    "category": "wap-card",
    "name": "wap-card-1",
    "style": { ...containerStyle, "paddingBlock": "100", "paddingInline": "100" },
    "cmps": [
        {
            "id": "sd9jiF",
            "type": "container",
            "style": { ...containerStyle },
            "cmps": [{

                "id": "Ddgjs9",
                "type": "txt",
                "txt": "Explore the wildlife",
                "style": {
                    ...txtStyle,
                    "fontSize": "25"
                }

            },
            {
                "id": "dsj8F5f",
                "type": "txt",
                "txt": "Join our guided tours and you will be rewarded with life-changing experiences",
                "style": {
                    ...txtStyle,
                }
            }
            ]
        },

        {
            "id": "DFzKGOs",
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