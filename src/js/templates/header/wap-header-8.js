import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHeader_8 = {
   "id": "41gbf41b51b1f5s4d",
   "type": "container",
   "category": "wap-header",
   "className": "wap-header-8",
   "thumbnail": "",
   "style": { ...containerStyle, "backgroundColor": "#0b0b0b", "paddingInline": "0", "paddingBlock": "20", },
   "cmps": [
      {
         "id": "lkdkflj85",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
         "className": "layout-container",
         "cmps": [
            //Header
            {
               "id": "41bn45ed1dc",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
               "className": "header flex",
               "cmps": [
                  {
                     "id": "lbdoln612j",
                     "type": "txt",
                     "txt": "Brand.",
                     "style": { ...imgStyle, "width": "70", "color": "#efefee" }
                  },
                  //NAV
                  {
                     "id": "qplLDDP",
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
                           "id": "5bg1t5j41s",
                           "type": "btn",
                           "url": "#",
                           "txt": "HOME",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        },
                        {
                           "id": "6S1ss1s1S1S",
                           "type": "btn",
                           "url": "#",
                           "txt": "ABOUT",
                           "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#fcfcfc" }
                        },
                        {
                           "id": "5gv9fsaaaaaa",
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
                           "id": "v3f21gb6df54gb9df",
                           "type": "img",
                           "url": "https://findicons.com/files/icons/2779/simple_icons/256/dribbble.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "jmol5271201743",
                           "type": "img",
                           "url": "https://findicons.com/files/icons/2796/metro_uinvert_dock/256/behance.png",
                           "style": { ...imgStyle, "width": "32" }
                        },
                        {
                           "id": "f654KAJgtfr",
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