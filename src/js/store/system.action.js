

export function shouldShowLogin(bool) {
    return (dispatch) => {
        dispatch({ type: 'SET_IS_LOGIN_SHOWN', bool });
    }
}