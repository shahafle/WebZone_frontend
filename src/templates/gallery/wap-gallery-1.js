import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
export const wapGallery_1 = {
    "id": "sdjS6dg",
    "type": "container",
    "category": "wap-gallery",
    "name": "wap-gallery-1",
    "style": {
        ...containerStyle,
        "paddingInline": "100",
        "paddingBlock": "100"
    },
    "cmps": [
        {
            "id": "ffffd8sE3s",
            "type": "txt",
            "txt": "galleryyy.",
            "style": {
                ...txtStyle,
                "color": "black",
                "textAlign": "center",
                "fontSize": "30",
                "letterSpacing": "1",
                "textShadow": "1px 1px 3px black",
                "fontFamily": "bitter",
            }
        },
        {
            "id": "dhss8s",
            "type": "container",
            "style": {
                ...containerStyle,
                // "paddingInline": "100",
                // "paddingBlock": "100"
            },
            "cmps": [
                {
                    "id": "shdSS123",
                    "type": "img",
                    "url": "https://images.pexels.com/photos/4777687/pexels-photo-4777687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    "style": { ...imgStyle }
                },
            ]
        }
    ]
}