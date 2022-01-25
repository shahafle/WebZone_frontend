import { txtStyle, btnStyle, imgStyle, containerStyle } from '../default-styles';
import freeBeans from '../../../assets/imgs/template_4/freeBeans.png'
import cup from '../../../assets/imgs/template_4/Cup.png'
export const wapSection_4_2 = {
    "id": "dheaasdddasdJJJJkfkds74",
    "type": "container",
    "category": "wap-section",
    "className": "wap-section-4-2-container",
    "thumbnail": "",
    "style": {
        ...containerStyle,
        "paddingInline": "0",
        "paddingBlock": "0"
    },
    "cmps": [
        {
            "id": "asdjdddkhdae892173hbsa",
            "type": "container",
            "className": "wap-section-4-2",
            "style": {
                ...containerStyle,
                "paddingInline": "0",
                "paddingBlock": "150",
                "backgroundImage": `url(${freeBeans})`
            },
            "cmps": [
                {
                    "id": "dfkF43asdasdasdjfjfFFFasgas123123",
                    "type": "img",
                    "url": cup,
                    "style": { ...imgStyle }
                },
                {
                    "id": "23497SDFfhsdh334",
                    "type": "container",
                    "className": "section-4-2-txt-container",
                    "style": {
                        ...containerStyle,
                        "backgroundColor": "#ffffff00",
                    },
                    "cmps": [
                        {
                            "id": "12367asdgzxcbjkasdkjg1873DDDsgget3",
                            "type": "txt",
                            "txt": "About us",
                            "style": {
                                ...txtStyle,
                                "fontSize": "30"
                            }
                        },
                        {
                            "id": "asdasdhuhivhsdf234234234",
                            "type": "txt",
                            "txt": "Coffee Origins",
                            "style": {
                                ...txtStyle,
                                "color": "#0000008c", "fontSize": "20"
                            }
                        },
                        {
                            "id": "asgdhjlakdjs234xcbhvyu",
                            "type": "txt",
                            "txt": "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus.",
                            "style": {
                                ...txtStyle,

                            }
                        },
                        {
                            "id": "hhfhhsgahdgf123123",
                            "type": "btn",
                            "className": "btn",
                            "url": "https://www.google.com",
                            "txt": "Learn More",
                            "style": {
                                ...btnStyle,
                                "textAlign": "center",
                                "fontSize": "20",
                                "color": "#1b1b1b",
                                "backgroundColor": "#ffffff00",
                                "borderRadius": "1000"
                            }
                        },

                    ]
                }
            ]

        },

    ]
}