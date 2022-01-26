

export function shouldShowLogin(shouldShow) {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_LOGIN_SHOWN', shouldShow });
    }
}

export function loadingStart() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_START' });
    }
}

export function loadingDone() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_DONE' });
    }
}
