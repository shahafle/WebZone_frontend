import { txtStyle, btnStyle, imgStyle, containerStyle, inputStyle } from '../default-styles';

export const wapForm_3 = {
   "id": "q482222",
   "type": "container",
   "category": "wap-form",
   "className": "wap-form-3",
   "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643279800/yuk9dn03xycqdrna1ayr.jpg",
   "style": { ...containerStyle, "paddingInline": "150", "paddingBlock": "200", "backgroundColor": "#bcdcce" },
   "cmps": [
      {
         "id": "1wvdc16511",
         "type": "txt", // // TITLE (CENTER)
         "txt": "GET YOUR DISCOUNT NOW",
         "style": {
            ...txtStyle, "fontFamily": "poppins", "fontSize": "14", "textAlign": "center", "letterSpacing": "3"
         }
      },

      {
         "id": "yt741ct74f",
         "type": "txt", // PARAGRAPH (CENTER)
         "txt": "Sign up to our newsletter and recieve 10% off on your first order",
         "style": { ...btnStyle, "textAlign": "center", "fontFamily": "kalam", "fontSize": "32", "backgroundColor": "#ffffff00" }
      },

      {
         "id": "1sa65",
         "type": "input", // PARAGRAPH (CENTER)
         "inputType": "email",
         "label": "",
         "placeholder": "Your email here",
         "style": { ...inputStyle, "textAlign": "center" }
      }

   ]
}
