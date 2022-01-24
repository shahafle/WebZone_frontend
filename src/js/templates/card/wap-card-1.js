import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';


export const wapCard_1 = {
    "id": "7C2hdg6",
    "type": "container",
    "category": "wap-card",
    "className": "wap-card-1",
    "thumbnail": "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642884458/ow0d7lhjpfd2mx6ifwak.jpg",
    "style": { ...containerStyle, "paddingInline": "30", "paddingBlock": "50" },
    "cmps": [
        {
            "id": "asdjnadddshd8787tyas",
            "type": "img", // CARD IMG (LEFT)
            "url": "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "style": { ...imgStyle, "borderRadius": "10", "width": "100" }
        },
        {
            "id": "ashduiahsasdnasSS6",
            "type": "container", // CARD TEXT CONTAINER (RIGHT)
            "style": { ...containerStyle },
            "cmps": [
                {
                    "id": "sdgkjldddds366",
                    "type": "txt", // TITLE
                    "txt": "ACTIVITIES",
                    "style": { ...txtStyle, "color": "#0000008c", "fontSize": "12" }
                },
                {
                    "id": "zxc2l3k5jtrlddad",
                    "type": "txt", // SUBTITLE
                    "txt": "Discover new worlds",
                    "style": { ...txtStyle, "fontSize": "20" }
                },
                {
                    "id": "sdgjp573odddssja887sd",
                    "type": "txt", // PARAGRAPH
                    "txt": "The best Diving center in the world, with amazing Underwater view all year long. see the most facinating Sea creatures in their unique habitats ",
                    "style": { ...txtStyle }
                }]
        }]
}