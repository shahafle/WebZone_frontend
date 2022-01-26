import { txtStyle, btnStyle, imgStyle, inputStyle, containerStyle } from '../default-styles';


export const wapForm_6 = {
   "id": "3ye54vj9",
   "type": "container",
   "category": "wap-form",
   "className": "wap-form-6 flex column",
   "thumbnail": "",
   "style": { ...containerStyle, "paddingInline": "20", "paddingBlock": "60", "backgroundColor": "#1c1c1c" },
   "cmps": [
      //TITLE
      {
         "id": "8d2dd96df5fvgvh6l",
         "type": "txt",
         "txt": "Register",
         "style": { ...txtStyle, "color": "#fcfcfc", "fontSize": "35", "textAlign": "center", "fontFamily": "bitter" },
      },
      //FORM
      {
         "id": "bggnmjmc",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
         "className": "form flex column",
         "cmps": [
            {
               "id": "vg51ggb51",
               "type": "input",
               "inputType": "text",
               "label": "Full Name",
               "placeholder": "",
               "style": { ...inputStyle, "fontSize": "22", "color": "#fcfcfc" }
            },
            {
               "id": "l243186t5as4ddg",
               "type": "input",
               "inputType": "email",
               "label": "Email",
               "placeholder": "",
               "style": { ...inputStyle, "fontSize": "22", "color": "#fcfcfc" }
            },
            {
               "id": "odmkosdmpdm,s,lmsd",
               "type": "btn", // SUBMIT BTN (CENTER)
               "url": "#",
               "txt": "Register Now",
               "className": "submit-btn",
               "style": { ...btnStyle, "backgroundColor": "#80d324", "color": "#fcfcfc" }
            }
         ]
      }
   ]
}