

const initialState = {
    wapEl: {
        "_id": "5e28393890dd7201a06d4e44",
        "name": "HairDresser Baluta Marketing Site",
        "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
        "createdBy": {
            "_id": "5e26e0b718a0891d4c995527",
            "username": "Hekro Special"
        },
        "cmps": [
            {
                "id": "37rtg",
                "type": "wap-header",
                "cmps": [
                    {
                        id: '1jh21',
                        type: 'txt',
                        txt: 'aloha aloha',
                        style: {
                            'textAlign': 'start',
                            'fontWeight': '800',
                            'fontStyle': 'normal',
                            'textDecoration': 'none',
                            'fontSize': '40',
                            'color': '#000',
                            'letterSpacing': '1',
                            // 'lineHeight': '16',
                            'textShadow': 'none',
                            'fontFamily': 'sans-serif',
                        }
                    },
                    {
                        id: '98asd',
                        type: 'img',
                        url: 'https://m.media-amazon.com/images/I/61Jigwd1kKL._AC_SX425_.jpg',
                        style: {
                            'borderRadius': '0',
                            'width': '100'
                        }
                    }
                ],
                "name": "wap-header-1",
                "style": {

                }
            },
            {
                "id": "wc03",
                "type": "wap-section",
                "cmps": [
                    {
                        id: 'as21d',
                        type: 'txt',
                        txt: 'Lorem ipsum',
                        style: {
                            'textAlign': 'start',
                            'fontWeight': '800',
                            'fontStyle': 'normal',
                            'textDecoration': 'none',
                            'fontSize': '40',
                            'color': '#000',
                            'letterSpacing': '1',
                            'lineHeight': '16',
                            'textShadow': 'none',
                            'fontFamily': 'sans-serif',
                        }
                    },
                    {
                        id: '5a5as',
                        type: 'img',
                        url: 'https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111',
                        style: {
                            'borderRadius': '0',
                            'width': '100'
                        }
                    }
                ],
                "name": "wap-section-1",
                "style": {}
            }
        ],
        "isPublic": true
    }
}



export function wapElReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wapEl: [...action.wapEl] };
        case 'ADD_WAPEL':
            return newState = { ...state, wapEl: [...state.wapEl, action.addedWapEl] };
        case 'REMOVE_WAPEL':
            return newState = { ...state, wapEl: state.wapEl.filter(wapEl => wapEl._id !== action.wapElId) };
        case 'UPDATE_WAPEL':
            return newState = { ...state, wapEl: { ...action.wap } };
        // case 'SET_WAPEL_STYLE': {
        //     const { styleName, styleValue } = action.wapElToUpdate;

        //     newState = JSON.parse(JSON.stringify(state))
        //     const newCurrElement = { ...newState.currElement, style: { ...newState.currElement.style, [styleName]: styleValue } }

        //     newState = { ...newState, currElement: newCurrElement }
        //     // findTarget(newState.wapEl, newCurrElement.id, (cmpsArr, idx) => cmpsArr[idx] = newCurrElement)
        //     return newState
        // }
        default:
            return newState;
    }
}





        // case 'SET_WAPEL_STYLE':
        //     newState = {
        //         ...state,
        //         wapEl: {
        //             ...state.wapEl,
        //             sections: state.wapEl.sections.map(section => {
        //                 return (section.id !== sectionId)
        //                     ? section
        //                     : {
        //                         ...section,
        //                         cmps: section.cmps.map(cmp => {
        //                             return (cmp.id !== elementId)
        //                                 ? cmp
        //                                 : {
        //                                     ...cmp,
        //                                     style: { ...cmp.style, [styleName]: styleValue }
        //                                 }
        //                         })
        //                     }
        //             })
        //         }
        //     }