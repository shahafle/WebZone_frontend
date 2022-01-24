import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapSection_3 = {
   "id": "oip9781z",
   "type": "container",
   "category": "wap-section",
   "className": "wap-section-3",
   "thumbnail": "",
   "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "50" },
   "cmps": [
      {
         "id": "alkdfsjlk34jt5lksjxc",
         "type": "img", // IMG (LEFT)
         "url": "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
         "style": { ...imgStyle, }
      },
      {
         "id": "45356dgfasdf",
         "type": "container", // CONTENT CONTAINER (RIGHT)
         "style": { ...containerStyle, "backgroundColor": "#ffffff00" },
         "className": "content-container flex column",
         "cmps": [
            {
               "id": "asdklmcop",
               "type": "img", // QUOTE ICON 
               "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/800px-Cquote1_black.svg.png",
               "style": { ...imgStyle, "width": "43" }
            },
            {
               "id": "zxc2l3k5jtrlad",
               "type": "txt", // TITLE
               "txt": "Sweatheart i'm home",
               "style": { ...txtStyle, "fontSize": "40", "fontFamily": "kalam", "textShadow": "rgb(0 0 0) 1px 1px 3px" }
            },
            {
               "id": "sdgjp573ojwptgjm",
               "type": "txt", // PARAGRAPH
               "txt": "The best feeling in the world is Lorem ipsum dolor molor meod meod meod ndo jsnn daslnlks adnl sd The best feeling in the world is Lorem ipsum dolor. molor meod meod meod ndo jsnn daslnlks, adnl sd......",
               "style": { ...txtStyle }
            },
            {
               "id": "sd573o15wptom",
               "type": "btn", // BUTTON
               "url": "",
               "txt": "Explore more",
               "style": { ...btnStyle, "textDecoration": "underline" }
            }
         ]
      }]
}