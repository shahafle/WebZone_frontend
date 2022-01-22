

const initialState = {
    wap: {
        "name": "new webApp",
        "createdBy": {
            "_id": "5e26e0b718a0891d4c995527",
            "username": "Username"
        },
        "cmps": [],
        "isPublished": false
    }
}


export function wapReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'UPDATE_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'ADD_ELEMENT':
            return newState = { ...state, wap: { ...state.wap, cmps: [...state.wap.cmps, action.elementToAdd] } };
        default:
            return newState;
    }
}