// import { userService } from "../services/user.service.js";


export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials);
            dispatch({ type: 'SET_USER', user });
        } catch (err) {

        }
    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout();
            dispatch({ type: 'SET_USER', user: null });
        } catch (err) {

        }
    }
}

export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials);
            dispatch({ type: 'SET_USER', user });
        } catch (err) {

        }

    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId);
            dispatch({ type: 'REMOVE_USER', userId });
        } catch (err) {
            
        }
    }
}

// export function loadAndWatchUser(userId) {
//     return async (dispatch) => {
//         try {
//             const user = await userService.getById(userId);
//             dispatch({ type: 'SET_WATCHED_USER', user })
//         } catch (err) {

//         }
//     }
// }