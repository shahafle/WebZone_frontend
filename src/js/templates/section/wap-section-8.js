import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapSection_8 = {
   "id": "54fd3s1sd3sd6",
   "type": "container",
   "category": "wap-section",
   "className": "wap-section-8 flex column",
   "thumbnail": "",
   "style": { ...containerStyle, "paddingInline": "0", },
   "cmps": [
      {
         "id": "jodmg85edd41",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "86", "paddingInline": "20", "backgroundColor": "#5d49e1" },
         "className": "layout-container flex",
         "cmps": [
            //Img (left)
            {
               "id": "qweqwekkkfodppdosurher633",
               "type": "img",
               "url": "https://yourcryptolibrary.com/wp-content/uploads/2021/11/coins-crypto.png",
               "style": { ...imgStyle, "width": "460" }
            },
            //Content (right)
            {
               "id": "jodmg85edd41",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
               "className": "content-container flex column",
               "cmps": [
                  {
                     "id": "j6551jjmf65",
                     "type": "txt",
                     "txt": "BUILDING BRANDS ON THE WEB",
                     "style": { ...txtStyle, "fontFamily": "montserrat", "color": "#f6f6f6" }
                  },
                  {
                     "id": "51g6df2gjk",
                     "type": "txt",
                     "txt": "Creative Agency based out of New York",
                     "style": { ...txtStyle, "fontFamily": "montserrat", "fontWeight": "700", "fontSize": "40", "color": "#f6f6f6" }
                  },
                  //Buttons container
                  {
                     "id": "jodmg85edd41",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
                     "className": "btns-container flex",
                     "cmps": [
                        {
                           "id": "sscvnjf8",
                           "type": "btn",
                           "url": "https://www.google.com",
                           "txt": "Order now",
                           "className": "cta",
                           "style": { ...btnStyle, "borderRadius": "10", "color": "#5d49e1" }
                        },
                        {
                           "id": "sscvnjf8",
                           "type": "btn",
                           "url": "https://www.google.com",
                           "txt": "Order now",
                           "className": "sub-btn",
                           "style": { ...btnStyle, "borderRadius": "10", "backgroundColor": "transparent", "color": "#f6f6f6" }
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ]
}

// contrast(0.8) hue-rotate(201deg)
// https://www.thegatewaydigital.com/wp-content/uploads/2020/07/Services_Cognitive_DLT-Services_Crypto-Services.png
// https://yourcryptolibrary.com/wp-content/uploads/2021/11/coins-crypto.png