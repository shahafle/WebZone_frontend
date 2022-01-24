import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';


export const wapCard_1_2 = {
    "id": "dglkajdlktsdsddsadasdjndDDs7shs",
    "type": "container",
    "category": "wap-card",
    "className": "wap-card-1-2",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884589/kaolhfa8wqwqjbgbr5ro.jpg",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "50" },
    "cmps": [
        {
            "id": "dgsyhD66765",
            "type": "container", // CARD TEXT CONTAINER (LEFT)
            "style": { ...containerStyle },
            "cmps": [
                {
                    "id": "hsjdfksd37DD",
                    "type": "txt", // TITLE
                    "txt": "NATURE",
                    "style": { ...txtStyle, "color": "#0000008c", "fontSize": "12" }
                },
                {
                    "id": "yku689tsgdsssg",
                    "type": "txt", // SUBTITLE
                    "txt": "Explore the wildlife",
                    "style": { ...txtStyle, "fontSize": "20" }
                },
                {
                    "id": "asdnjfsdffs3SS",
                    "type": "txt", // PARAGRAPH
                    "txt": "Join our guided tours, one of the most popular activity on the island and come back with life-changing experiences and captivating stories. ",
                    "style": { ...txtStyle }
                }]
        }, {
            "id": "adlgkjaswdlkj346asdddsssD3d",
            "type": "img", // CARD IMG (RIGHT)
            "url": "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "style": { ...imgStyle, "borderRadius": "10", "width": "100" }
        }]
}