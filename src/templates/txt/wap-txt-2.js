import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapTxt_2 = {
    "id": "l234j5tlksjd",
    "type": "container",
    "category": "wap-txt",
    "name": "wap-txt-2",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "0" },
    "cmps": [
        {
            "id": "asdfjzj235",
            "type": "txt", // // TITLE (CENTER)
            "txt": "WHAT WE BELIEVE IN",
            "style": { ...txtStyle, "fontFamily": "Montserrat", "fontSize": "14" }
        },

        {
            "id": "l243k56jtlwkjdg",
            "type": "txt", // PARAGRAPH (CENTER)
            "txt": "Grow your business, establish your brand, and put your customers first.",
            "style": { ...btnStyle, "textAlign": "center", "fontFamily": "Montserrat", "fontSize": "32" }
        }]
}