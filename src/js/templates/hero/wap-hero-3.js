import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';


export const wapHero_3 = {
   "id": "e60asx",
   "type": "container",
   "category": "wap-hero",
   "className": "wap-hero-3",
   "thumbnail": "",
   "style": {
      ...containerStyle,
      "backgroundImage": "url(\"https://images.unsplash.com/photo-1490367605959-06955305859b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\")",
      "paddingInline": "30", "paddingBlock": "120",
   },
   "cmps": [
      {
         "id": "454gfascf",
         "type": "container", // CONTENT CONTAINER (RIGHT)
         "style": { ...containerStyle, "backgroundColor": "#ffffff00", "paddingBlock": "200" },
         "className": "inner-container flex column",
         "cmps": [
            {
               "id": "zx561l3k5tlad",
               "type": "txt", // TITLE
               "txt": "Something sweet for everyone",
               "style": { ...txtStyle, "fontSize": "50", "color": "#ffffff", "textAlign": "center", "letterSpacing": "7", "text-shadow": "rgb(0 0 0) 1px 1px 3px" }
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

// https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80
// https://images.unsplash.com/photo-1464652149449-f3b8538144aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
// https://images.unsplash.com/photo-1490367605959-06955305859b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80