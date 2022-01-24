import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHeader_2 = {
    "id": "4w3664tw65ds1fg3",
    "type": "container", // HEADER
    "category": "wap-header",
    "name": "wap-header-2",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642883206/owopvqgsktupsrjwrpzt.jpg",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "0" },
    "cmps": [
        {
            "id": "23l56ktjls",
            "type": "txt", // LOGO (LEFT)
            "txt": "BIZZ.",
            "style": { ...txtStyle, "fontSize": "40", "fontWeight": "700", "fontStyle": "italic", "textDecoration": "underline" }
        },
        {
            "id": "45356dgfasdf",
            "type": "container", // NAV-LINKS CONTAINER (CENTER)
            "style": { ...containerStyle },
            "cmps": [
                {
                    "id": "45564tdh",
                    "type": "btn", // LINK-1
                    "url": "#",
                    "txt": "ABOUT",
                    "style": { ...btnStyle, "color": "#0000008c" }
                },
                {
                    "id": "dfg346t1536f",
                    "type": "btn", // LINK-2
                    "url": "#",
                    "txt": "WORK",
                    "style": { ...btnStyle, "color": "#0000008c" }
                },
                {
                    "id": "354y13df51h",
                    "type": "btn", // LINK-3
                    "url": "#",
                    "txt": "BLOG",
                    "style": { ...btnStyle, "color": "#0000008c" }
                }]
        },
        {
            "id": "36fds53g1sg3",
            "type": "btn", // CONTACT (RIGHT)
            "url": "#",
            "txt": "CONTACT US",
            "style": { ...btnStyle, "backgroundColor": "#0b0b0b", "color": "#ffffff" }
        }
    ]
}