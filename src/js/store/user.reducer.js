import { userService } from '../services/user.service.js';


const initialState = {
    user: userService.getLoggedinUser(),
    userMsg: null
    // watchedUser: null,
}


export function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }

        case 'SET_WATCHED_USER':
            return { ...state, watchedUser: action.user }

        case 'REMOVE_USER':
            return { ...state, users: state.users.filter(user => user._id !== action.userId) }

        case 'SET_USER_MSG':
            return { ...state, userMsg: action.msg }

        default:
            return state;
    }
}