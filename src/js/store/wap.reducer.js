
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
                "type": "section",
                "category": "wap-section",
                "name": "wap-section-pacifico-landing",
                "style": {
                    backgroundImage: `url('https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
                },
                "cmps": [
                    {
                        "id": 'sahd6dd',
                        "type": "section",
                        'name': 'pacifico-header',
                        "style": {},
                        "cmps": [{
                            id: '3ss66dg',
                            type: 'txt',
                            txt: 'Pacifico',
                            style: {
                                'borderRadius': '0',
                                'color': 'white',
                                'textAlign': 'start',
                                'fontWeight': '550',
                                'fontStyle': 'normal',
                                'textDecoration': 'none',
                                'fontSize': '40',
                                'letterSpacing': '1',
                                // 'lineHeight': '16',
                                'textShadow': 'none',
                                'fontFamily': 'Montserrat',
                            }
                        },
                        {
                            'id': '33377fhd',
                            'type': 'section',
                            'style': {},
                            'cmps': [
                                {
                                    id: 'sdhuf34f',
                                    type: 'btn',
                                    url: '#',
                                    txt: 'About us',
                                    style: {
                                        'borderRadius': '0',
                                        'backgroundColor': '',
                                        'color': 'white',
                                        'textAlign': 'center',
                                        'fontWeight': '400',
                                        'fontStyle': 'normal',
                                        'textDecoration': 'none',
                                        'fontSize': '16',
                                        'letterSpacing': '1',
                                        // 'lineHeight': '16',
                                        'textShadow': 'none',
                                        'fontFamily': 'sans-serif',
                                    }
                                },
                                {
                                    id: 'ffhg74',
                                    type: 'btn',
                                    url: '#',
                                    txt: 'Reservations',
                                    style: {
                                        'borderRadius': '0',
                                        'backgroundColor': '',
                                        'color': 'white',
                                        'textAlign': 'center',
                                        'fontWeight': '400',
                                        'fontStyle': 'normal',
                                        'textDecoration': 'none',
                                        'fontSize': '16',
                                        'letterSpacing': '1',
                                        // 'lineHeight': '16',
                                        'textShadow': 'none',
                                        'fontFamily': 'sans-serif',
                                    }
                                },
                                {
                                    id: 'sssllka9',
                                    type: 'btn',
                                    url: '#',
                                    txt: 'Login',
                                    style: {
                                        'borderRadius': '',
                                        'backgroundColor': '',
                                        'color': 'white',
                                        'textAlign': 'center',
                                        'fontWeight': '400',
                                        'fontStyle': 'normal',
                                        'textDecoration': 'none',
                                        'fontSize': '16',
                                        'letterSpacing': '1',
                                        // 'lineHeight': '16',
                                        'textShadow': 'none',
                                        'fontFamily': 'sans-serif',
                                    }
                                },
                            ]
                        }
                        ]
                    },
                    {
                        "id": '8shjhs',
                        "type": "section",
                        "name": "pacifico-main",
                        "style": {},
                        "cmps": [
                            {
                                "id": '1109f7s',
                                "type": 'txt',
                                "txt": 'Adventure is worthwhile.',
                                "style": {
                                    'borderRadius': '0',
                                    'color': 'white',
                                    'textAlign': 'start',
                                    'fontWeight': '400',
                                    'fontStyle': 'normal',
                                    'textDecoration': 'none',
                                    'fontSize': '30',
                                    'letterSpacing': '1',
                                    // 'lineHeight': '16',
                                    'textShadow': 'none',
                                    'fontFamily': 'sans-serif',
                                }
                            },
                            {
                                "id": '127shsa',
                                "type": 'txt',
                                "txt": 'You don\'t have to be rich to travel well. do it here ,in Pacifico.',
                                "style": {
                                    'borderRadius': '0',
                                    'color': 'white',
                                    'textAlign': 'start',
                                    'fontWeight': '400',
                                    'fontStyle': 'normal',
                                    'textDecoration': 'none',
                                    'fontSize': '16',
                                    'letterSpacing': '1',
                                    // 'lineHeight': '16',
                                    'textShadow': 'none',
                                    'fontFamily': 'sans-serif',
                                }
                            },
                            {

                                "id": 'sscvnjf8',
                                "type": 'btn',
                                "url": 'https://www.google.com',
                                "txt": 'Order now',
                                "name": 'orderBtn',
                                "style": {
                                    // 'borderRadius': '1000',
                                    'backgroundColor': '#f1ffff',
                                    'color': 'black',
                                    'textAlign': 'center',
                                    'fontWeight': '400',
                                    'fontStyle': 'normal',
                                    'textDecoration': 'none',
                                    'fontSize': '16',
                                    'letterSpacing': '1',
                                    // 'lineHeight': '16',
                                    'textShadow': 'none',
                                    'fontFamily': 'sans-serif',
                                }
                            },
                        ]
                    }
                ]
            },
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