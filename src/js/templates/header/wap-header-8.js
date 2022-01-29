import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHeader_8 = {
   "id": "3d1fsd2fs4fd45fdg",
   "type": "container",
   "category": "wap-header",
   "className": "wap-header-8",
   "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643475609/g2sg4e8uxsi7evwczsvh.png",
   "style": { ...containerStyle, "backgroundColor": "#0b0b0b", "paddingInline": "0", "paddingBlock": "20", },
   "cmps": [
      {
         "id": "2h65gj4165ghj1hj",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
         "className": "layout-container",
         "cmps": [
            //Header
            {
               "id": "fg5h4hn41hnfghn",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
               "className": "header flex",
               "cmps": [
                  {
                     "id": "s1g55xfgh415j41",
                     "type": "txt",
                     "txt": "Brand.",
                     "style": { ...imgStyle, "width": "70", "color": "#efefee" }
                  },
                  //NAV
                  {
                     "id": "ol652l1h2l1jk",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "#ffffff00" },
                     "className": "nav flex",
                     "cmps": [
                        //Mobile hamburger
                        // {
                        //    "id": "d21d2d2d1sd",
                        //    "type": "btn",
                        //    "url": "#",
                        //    "txt": "Menu",
                        //    "className": "hamburger",
                        //    "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        // },
                        //Nav links
                        {
                           "id": "fmdsfdsfsdffgfg",
                           "type": "btn",
                           "url": "#",
                           "txt": "HOME",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        },
                        {
                           "id": "jh516gh4jn6fg41hfd",
                           "type": "btn",
                           "url": "#",
                           "txt": "ABOUT",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        },
                        {
                           "id": "d35df35fdf",
                           "type": "btn",
                           "url": "#",
                           "txt": "PORTFOLIO",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc", "color": "#fcfcfc" }
                        }
                     ]
                  },
                  //Social media icons
                  {
                     "id": "yuj941hg3h1",
                     "type": "container",
                     "style": { ...containerStyle, "backgroundColor": "transparent", "paddingInline": "0", "paddingBlock": "0" },
                     "className": "media-icons flex",
                     "cmps": [
                        {
                           "id": "ohmtpbfdfghjfcg",
                           "type": "img",
                           "url": "https://findicons.com/files/icons/2779/simple_icons/256/dribbble.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "68435138",
                           "type": "img",
                           "url": "https://findicons.com/files/icons/2796/metro_uinvert_dock/256/behance.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "j5j44jghj1gh32j",
                           "type": "img",
                           "url": "https://freeiconshop.com/wp-content/uploads/edd/instagram-new-color-flat.png",
                           "style": { ...imgStyle, "width": "26" }
                        },
                     ]
                  }
               ]
            },
         ]
      }
   ]
}