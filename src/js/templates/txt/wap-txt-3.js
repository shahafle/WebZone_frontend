import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapTxt_3 = {
   "id": "q482222",
   "type": "container",
   "category": "wap-text",
   "className": "wap-txt-3",
   "thumbnail": "",
   "style": { ...containerStyle, "paddingInline": "150", "paddingBlock": "200", "backgroundColor": "#bcdcce" },
   "cmps": [
      {
         "id": "1wvdc16511",
         "type": "txt", // // TITLE (CENTER)
         "txt": "WHAT WE BELIEVE IN",
         "style": {
            ...txtStyle, "fontFamily": "poppins", "fontSize": "14", "textAlign": "center", "letterSpacing": "3"
         }
      },

      {
         "id": "yt741ct74f",
         "type": "txt", // PARAGRAPH (CENTER)
         "txt": "Grow your business, establish your brand, and put your customers first.",
         "style": { ...btnStyle, "textAlign": "center", "fontFamily": "kalam", "fontSize": "32", "backgroundColor": "#ffffff00" }
      }
   ]
}
