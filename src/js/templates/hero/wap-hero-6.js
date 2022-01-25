import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';


export const wapHero_6 = {
   "id": "e60asx",
   "type": "container",
   "category": "wap-hero",
   "className": "wap-hero-6",
   "thumbnail": "",
   "style": {
      ...containerStyle,
   },
   "cmps": [
      //HEADER
      {
         "id": "454gfascf",
         "type": "container",
         "style": { ...containerStyle, "backgroundColor": "#ffffff00", "paddingBlock": "200", "paddingInline": "150" },
         "className": "header",
         "cmps": []
      },
      //MAIN CONTENT
      {
         "id": "454gfascf",
         "type": "container", // CONTENT CONTAINER (RIGHT)
         "style": { ...containerStyle, "backgroundColor": "#ffffff00", "paddingBlock": "200", "paddingInline": "150" },
         "className": "inner-container flex column",
         "cmps": [
            {
               "id": "zx561l3k5tlad",
               "type": "txt", // TITLE
               "txt": "Something sweet for everyone",
               "style": { ...txtStyle, "fontSize": "50", "color": "#ffffff", "textAlign": "center", "letterSpacing": "7", "textShadow": "rgb(0 0 0) 1px 1px 3px" }
            },
            {
               "id": "dgjp573oj12ptg",
               "type": "txt", // PARAGRAPH
               "txt": "The best feeling in the world is Lorem ipsum dolor molor meod meod meod ndo jsnn daslnlks adnl sd The best feeling in the world is Lorem ipsum dolor. molor meod meod meod ndo jsnn daslnlks, adnl sd......",
               "style": { ...txtStyle, "textAlign": "center" }
            }
         ]
      }
   ]

}
