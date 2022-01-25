

export function shouldShowLogin(shouldShow) {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_LOGIN_SHOWN', shouldShow });
    }
}