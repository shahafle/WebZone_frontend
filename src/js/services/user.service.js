import { storageService } from './storage.service';
// Frontend Demo :
import { asyncStorageService } from './async-storage.service';

// Backend :
import { httpService } from './http.service';

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    // getById,
    // remove,
    // update,
}


const USER_STORAGE_KEY = 'user'; // this will be user collection in wap_db
const LOGGEDIN_USER_STORAGE_KEY = 'loggedinUser'; // currently logged in user in sessionStorage

// let gWatchedUser = null;


async function signup(credentials) {
    // Frontend Demo :
    const user = await asyncStorageService.post(USER_STORAGE_KEY, credentials);
    return _setUserSession(user); // <-- Login after signup

    // Backend :
    // const user = await httpService.post('auth/signup', credentials);
    // // socketService.emit('set-user-socket', user._id);
    // return user;
}

async function login(credentials) {
    // Frontend Demo :
    const users = await asyncStorageService.query(USER_STORAGE_KEY);
    const user = users.find(user => user.username === credentials.username && user.password === credentials.password);
    if (user) {
        console.log('Loggedin Successfully');
        console.log(user);
        return _setUserSession(user);
    } else console.log('Invalid username or password.');

    // Backend :
    //     const user = await httpService.post('auth/login', credentials);
    //     _setUserSession(user);
    // // socketService.emit('set-user-socket', user._id);
    // return user;
}

async function logout() {
    // Frontend Demo :
    _clearSession();

    // Backend :
    // // socketService.emit('unset-user-socket');
    // _clearSession();
    // return await httpService.post('auth/logout');
}

function getLoggedinUser() {
    // Frontend Demo :
    return _getUserFromSession() || null;

    // Backend : ?
}

// This is relevant when backend is connected
// (async () => {
//     const user = getLoggedinUser();
//     if (user) socketService.emit('set-user-socket', user._id)
// })();


///////////////// *** Private Functions *** /////////////////


function _setUserSession(user) {
    storageService.saveToSession(LOGGEDIN_USER_STORAGE_KEY, user);
    return user
}

function _clearSession() {
    storageService.removeFromSession(LOGGEDIN_USER_STORAGE_KEY);
}

function _getUserFromSession() {
    const user = storageService.loadFromSession(LOGGEDIN_USER_STORAGE_KEY);
    return user;
}













//////////////////////////////////////////////////////////////////////////////////

// async function getById(userId) {
//     const user = await asyncStorageService.get('user', userId);
//     // const user = await httpService.get(`user/${userId}`)
//     // gWatchedUser = user;
//     return user;
// }


// function remove(userId) {
//     return asyncStorageService.remove('user', userId);
//     // return httpService.delete(`user/${userId}`)
// }


// async function update(user) {
//     await asyncStorageService.put('user', user);
//     // user = await httpService.put(`user/${user._id}`, user);
//     // Handle case in which admin updates other user's details
//     if (getLoggedinUser()._id === user._id) _setUserSession(user);
//     return user;
// }


// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();



// This IIFE functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
    // Dev Helper: Listens to when localStorage changes in OTHER browser

    // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await asyncStorageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();