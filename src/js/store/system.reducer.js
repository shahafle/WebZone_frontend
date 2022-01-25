

const initialState = {
    isLoginShown: false
}

export function systemReducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
        case 'SET_IS_LOGIN_SHOWN':
            newState = { ...state, isLoginShown: action.shouldShow }
            break;
    }

    return newState;
}