import { asyncStorageService } from './async-storage.service';
import { httpService } from './http.service';

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getById,
    remove,
    update,
}


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
// let gWatchedUser = null;


// To help debugging from console
// window.userService = userService;


async function getById(userId) {
    const user = await asyncStorageService.get('user', userId);
    // const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;
    return user;
}

function remove(userId) {
    return asyncStorageService.remove('user', userId);
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await asyncStorageService.put('user', user);
    // user = await httpService.put(`user/${user._id}`, user);
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user);
    return user;
}

async function login(userCred) {
    const users = await asyncStorageService.query('user');
    const user = users.find(user => user.username === userCred.username);
    // return _saveLocalUser(user);

    // const user = await httpService.post('auth/login', userCred);
    // socketService.emit('set-user-socket', user._id);
    if (user) return _saveLocalUser(user);
}

async function signup(userCred) {
    const user = await asyncStorageService.post('user', userCred);
    // const user = await httpService.post('auth/signup', userCred);
    // socketService.emit('set-user-socket', user._id);
    return _saveLocalUser(user);
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
    // socketService.emit('unset-user-socket');
    return await httpService.post('auth/logout');
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}


// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();



// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
(async () => {
    // Dev Helper: Listens to when localStorage changes in OTHER browser

    // Here we are listening to changes for the watched user (comming from other browsers)
    window.addEventListener('storage', async () => {
        if (!gWatchedUser) return;
        const freshUsers = await asyncStorageService.query('user')
        const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
        if (!watchedUser) return;
        if (gWatchedUser.score !== watchedUser.score) {
            console.log('Watched user score changed - localStorage updated from another browser')
            socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
        }
        gWatchedUser = watchedUser
    })
})();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();