

const initialState = {
    wap: {
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
                "type": "section",
                "category": "wap-header",
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
                "type": "section",
                "category": "wap-header",
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
                            // 'lineHeight': '16',
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
                "name": "wap-header-2",
                "style": {}
            },
        ],
        "isPublic": true
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