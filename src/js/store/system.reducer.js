

const initialState = {
    isLoginShown: false,
    isLoading: false

}

export function systemReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_IS_LOGIN_SHOWN':
            return { ...state, isLoginShown: action.bool }
        case 'LOADING_START':
            return { ...state, isLoading: true }
        case 'LOADING_DONE':
            return { ...state, isLoading: false }
        default: return state
    }
}

