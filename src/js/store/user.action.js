import { userService } from "../services/user.service.js";


export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials);
            dispatch({ type: 'SET_USER', user });
            dispatch(setUserMsg({ type: 'success', txt: `Welcome ${credentials.nickname} !`, timer: 4000 }));
        } catch (err) {
            console.log('Something went wrong, check the provided credentials')
            console.log(credentials);
        }

    }
}

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials);
            dispatch({ type: 'SET_USER', user });
            dispatch(setUserMsg({ type: 'success', txt: 'Welcome Back !', timer: 4000 }));
        } catch (err) {
            console.log('Something went wrong, invalid username or password, compare credentials to db');
            console.log(credentials);
        }
    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout();
            dispatch({ type: 'SET_USER', user: null });
            dispatch(setUserMsg({ type: 'reg', txt: 'Come Back Soon!', timer: 3000 }));
        } catch (err) {

        }
    }
}

export function setUserMsg(msg) {
    return dispatch => {
        dispatch({ type: 'SET_USER_MSG', msg });
        setTimeout(() => dispatch({ type: 'SET_USER_MSG', msg: null }), msg.timer);
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////

// export function removeUser(userId) {
//     return async dispatch => {
//         try {
//             await userService.remove(userId);
//             dispatch({ type: 'REMOVE_USER', userId });
//         } catch (err) {

//         }
//     }
// }

// export function loadAndWatchUser(userId) {
//     return async (dispatch) => {
//         try {
//             const user = await userService.getById(userId);
//             dispatch({ type: 'SET_WATCHED_USER', user })
//         } catch (err) {

//         }
//     }
// }