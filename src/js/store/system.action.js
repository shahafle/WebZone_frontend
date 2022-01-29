

export function shouldShowLogin(shouldShow) {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_LOGIN_SHOWN', shouldShow });
    }
}

export function shouldShowUserModal(shouldShow) {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_USER_MODAL_SHOWN', shouldShow });
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

export function askUser() {
    return new Promise((resolve, reject) => {


    })
}