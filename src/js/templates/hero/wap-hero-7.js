import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
import hero from '../../../assets/imgs/sombrerro/hero.png'


export const wapHero_7 = {
    "id": "dddjjjshhaggchbcnvmddmnds9873",
    "type": "container",
    "category": "wap-hero",
    "className": "wap-hero-7 flex align-center",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1643278231/z8pbryyiwefiy82pwxpv.jpg",
    "style": {
        ...containerStyle,
        "backgroundImage": `url(${hero})`,
        "paddingBlock": "115", "paddingInline": "30"
    },
    "cmps": [
        {
            "id": "asdhvnhDFDFGjklasdlk32148dgxcvpoppoikqqq",
            "type": "container",
            "className": "container flex column justify-center",
            "style": { ...containerStyle, "backgroundColor": "#ffffff00", },
            "cmps": [
                {
                    "id": "dhhagst43678dgaaASD",
                    "type": "txt",
                    "txt": "TAQUERIA & BAR",
                    "style": { ...txtStyle, "fontSize": "50", "color": "#ffffff", "fontWeight": "700", "textAlign": "center" }
                },
                {
                    "id": "d66fghctvnfgtdds",
                    "type": "container",
                    "className": "btn-container flex",
                    "style": { ...containerStyle, "backgroundColor": "#ffffff00", },
                    "cmps": [
                        {
                            "id": "10293847564738fhsgfjfSFGLfjh",
                            "type": "btn",
                            "url": "http://www.google.com",
                            "txt": "ORDER ONLINE",
                            "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#ffffff", "fontWeight": "700" },
                        },
                        {
                            "id": "asdhjkasjdhkjzxcmnxcvlsdfpsoipozzzxczxzzzzc4",
                            "type": "btn",
                            "url": "http://www.google.com",
                            "txt": "SEE THE MENU",
                            "style": { ...btnStyle, "backgroundColor": "#ffffff00", "color": "#ffffff", "fontWeight": "700" },
                        },
                    ]
                }
            ]
        },

    ]
}