import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';

import imgUrl from '../../assets/imgs/cards/what-we-do.jpg'

export const wapCard_2_2 = {
    "id": "dglkajdlktj46132as",
    "type": "container",
    "category": "wap-card",
    "name": "wap-card-2-2",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884699/x4d3ste6bfokv89uf3zj.jpg",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "50" },
    "cmps": [
        {
            "id": "347ysfhszg23456",
            "type": "container", // CARD TEXT CONTAINER (LEFT)
            "style": { ...containerStyle },
            "cmps": [
                {
                    "id": "5437ehfhst2352",
                    "type": "txt", // TITLE
                    "txt": "TEAM",
                    "style": { ...txtStyle, "color": "#0000008c", "fontSize": "12" }
                },
                {
                    "id": "yku689tsgdsg",
                    "type": "txt", // SUBTITLE
                    "txt": "What we do",
                    "style": { ...txtStyle, "fontSize": "20" }
                },
                {
                    "id": "mapw4iylj423024qs",
                    "type": "txt", // PARAGRAPH
                    "txt": "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
                    "style": { ...txtStyle }
                }]
        }, {
            "id": "adlgkjaswdlkj346asd",
            "type": "img", // CARD IMG (RIGHT)
            "url": imgUrl,
            "style": { ...imgStyle, "borderRadius": "20", "width": "100" }
        }]
}