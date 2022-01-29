import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

export const wapHero_8 = {
   "id": "54fd3sd54fgff9g5fsd6",
   "type": "container",
   "category": "wap-hero",
   "className": "wap-hero-8",
   "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643475642/e00zmzao81ohpjjm9amb.png",
   "style": { ...containerStyle, "backgroundColor": "#0b0b0b", "paddingInline": "0", },
   "cmps": [
      {
         "id": "jodmg85edd41",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
         "className": "layout-container",
         "cmps": [
            //Hero square
            {
               "id": "hlmbpmd",
               "type": "container",
               "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "30", "backgroundColor": "transparent" },
               "className": "hero-square flex column",
               "cmps": [
                  {
                     "id": "j6551jjmf65",
                     "type": "txt",
                     "txt": "BUILDING BRANDS ON THE WEB",
                     "style": { ...txtStyle, "color": "#efefee", "fontFamily": "montserrat" }
                  },
                  {
                     "id": "51g6df2gjk",
                     "type": "txt",
                     "txt": "Creative Agency based out of New York",
                     "style": { ...txtStyle, "color": "#efefee", "fontFamily": "montserrat", "fontWeight": "700", "fontSize": "40" }
                  },
                  //BORDERS
                  {
                     "id": "v265f41bhg652h",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
                     "className": "border-top",
                     "cmps": []
                  },
                  {
                     "id": "5sdfg41zx6",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
                     "className": "border-right",
                     "cmps": []
                  },
                  {
                     "id": "c68gh4j",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
                     "className": "border-bottom",
                     "cmps": []
                  },
                  {
                     "id": "sd85fb41g5",
                     "type": "container",
                     "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent" },
                     "className": "border-left",
                     "cmps": []
                  }
               ]
            },
         ]
      },
      // Background layer
      {
         "id": "cfgh65fghfg",
         "type": "container",
         "style": { ...containerStyle, "paddingInline": "0", "paddingBlock": "0", "backgroundColor": "transparent", "backgroundImage": "url('http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643407633/atpjqbsm3ef7t86we3cw.svg')" },
         "className": "background-layer",
         "cmps": []
      }
   ]
}