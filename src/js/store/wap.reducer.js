const txtStyle = {
    'color': 'black',
    'textAlign': 'start',
    'textDecoration': 'none',
    'textShadow': 'none',
    'fontFamily': 'Poppins',
    'fontWeight': '400',
    'fontSize': '16',
    'fontStyle': 'normal',
    'letterSpacing': '1',
    // 'lineHeight': '16',
};
const btnStyle = {
    ...txtStyle,
    "borderRadius": "0",
    "backgroundColor": ""
};
const containerStyle = {
    "backgroundImage": "",
    "paddingInline": "10",
    "paddingBlock": "10"
}


const initialState = {
    wap: {
        "_id": "5e28393890dd7201a06d4e44",
        "name": "HairDresser Baluta Marketing Site",
        "createdBy": {
            "_id": "5e26e0b718a0891d4c995527",
            "username": "Hekro Special"
        },
        "cmps": [
            {
                "id": "dhetv6",
                "type": "container",
                "category": "wap-hero",
                "name": "wap-hero-1",
                "style": {
                    "backgroundImage": "url(\"https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")",
                },
                "cmps": [

                    {
                        "id": "1109f7s",
                        "type": "txt",
                        "txt": "Adventure is worthwhile.",
                        "style": {
                            ...txtStyle,
                            "color": "white",
                            "textAlign": "center",
                            "fontSize": "65",
                            "letterSpacing": "1",
                            "textShadow": "1px 1px 3px black",
                            "fontFamily": "bitter",
                        }
                    },
                    {
                        "id": "127shsa",
                        "type": "txt",
                        "txt": `You don\'t have to be rich to travel well.`,
                        "style": {
                            ...txtStyle,
                            "color": "white",
                            "textAlign": "center",
                            "fontSize": "30",
                            "textShadow": "1px 1px 3px black",
                            "fontFamily": "bitter"
                        }
                    },
                    {

                        "id": "sscvnjf8",
                        "type": "btn",
                        "url": "https://www.google.com",
                        "txt": "Order now",
                        "style": {
                            ...btnStyle,
                            "backgroundColor": "#f1ffff",
                            "textAlign": "center",
                            "fontSize": "30",
                            "fontFamily": "bitter",
                            "borderRadius": '1000'
                        }
                    },


                ]
            },
            //delete later

            //delete later
            // {
            //     "id": "16afexc12v3",
            //     "type": "container",
            //     "category": "wap-hero",
            //     "name": "wap-hero-1",
            //     "style": {
            //         "backgroundImage": "url(\"https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")",
            //     },
            //     "cmps": [
            //         {
            //             "id": "q15",
            //             "type": "container",
            //             "style": {},
            //             "cmps": [
            //                 {
            //                     "id": "3ss66dg",
            //                     "type": "txt",
            //                     "txt": "Pacifico",
            //                     "style": {
            //                         ...txtStyle,
            //                         "color": "white",
            //                         "fontWeight": "700",
            //                         "fontSize": "40",
            //                         "textShadow": "5px 5px 3px black",
            //                         "fontFamily": "kalam",
            //                     }
            //                 },
            //                 {
            //                     "id": "1g85",
            //                     "type": "container",
            //                     "style": {},
            //                     "cmps": [
            //                         {
            //                             "id": "n041",
            //                             "type": "btn",
            //                             "url": "#",
            //                             "txt": "About us",
            //                             "style": {
            //                                 ...btnStyle,
            //                                 "color": "white",
            //                                 "textAlign": "center",
            //                                 "textShadow": "5px 5px 3px black",
            //                                 "fontFamily": "bitter",
            //                             }
            //                         },
            //                         {
            //                             "id": "v65",
            //                             "type": "btn",
            //                             "url": "#",
            //                             "txt": "Reservations",
            //                             "style": {
            //                                 ...btnStyle,
            //                                 "color": "white",
            //                                 "textAlign": "center",
            //                                 "textShadow": "5px 5px 3px black",
            //                                 "fontFamily": "bitter",
            //                             }
            //                         },
            //                         {
            //                             "id": "6zx",
            //                             "type": "btn",
            //                             "url": "#",
            //                             "txt": "Login",
            //                             "style": {
            //                                 ...btnStyle,
            //                                 "color": "white",
            //                                 "textShadow": "5px 5px 3px black",
            //                                 "fontFamily": "bitter",
            //                             }
            //                         },
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             "id": "zx321f",
            //             "type": "container",
            //             "style": {},
            //             "cmps": [
            //                 {
            //                     "id": "1c",
            //                     "type": "txt",
            //                     "txt": "Adventure is worthwhile.",
            //                     "style": {
            //                         ...txtStyle,
            //                         "color": "white",
            //                         "textAlign": "center",
            //                         "fontSize": "65",
            //                         "letterSpacing": "1",
            //                         "textShadow": "1px 1px 3px black",
            //                         "fontFamily": "bitter",
            //                     }
            //                 },
            //                 {
            //                     "id": "s2df6",
            //                     "type": "txt",
            //                     "txt": `You don\'t have to be rich to travel well.`,
            //                     "style": {
            //                         ...txtStyle,
            //                         "color": "white",
            //                         "textAlign": "center",
            //                         "fontSize": "30",
            //                         "textShadow": "1px 1px 3px black",
            //                         "fontFamily": "bitter"
            //                     }
            //                 },
            //                 {

            //                     "id": "io651p",
            //                     "type": "btn",
            //                     "url": "https://www.google.com",
            //                     "txt": "Order now",
            //                     "style": {
            //                         ...btnStyle,
            //                         "backgroundColor": "#f1ffff",
            //                         "textAlign": "center",
            //                         "fontSize": "30",
            //                         "fontFamily": "bitter",
            //                         "borderRadius": '1000'
            //                     }
            //                 },
            //             ]
            //         }
            //     ]
            // },
            //delete later
        ],
        "isPublished": true
    }
}




export function wapReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wap: [...action.wap] };
        case 'UPDATE_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'ADD_ELEMENT':
            return newState = { ...state, wap: { ...state.wap, cmps: [...state.wap.cmps, action.elementToAdd] } };
        default:
            return newState;
    }
}