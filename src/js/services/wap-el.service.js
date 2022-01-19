import { asyncStorageService } from './async-storage.service.js';


export const wapElService = {
    query,
    getById,
    remove,
    post,
    put
}


// WITH DEMO SERVER :


const STORAGE_KEY = 'wapElsDB'

function query() {
    return asyncStorageService.query(STORAGE_KEY)
}

function getById(wapElId) {
    return asyncStorageService.get(STORAGE_KEY, wapElId);
}

function remove(wapElId) {
    return asyncStorageService.remove(STORAGE_KEY, wapElId);
}

function post(wapElToAdd) {
    return asyncStorageService.post(STORAGE_KEY, wapElToAdd);
}

function put(wapElToUpdate) {
    return asyncStorageService.put(STORAGE_KEY, wapElToUpdate);
}



// // WITH REAL SERVER :

// import Axios from 'axios';
// const axios = Axios.create({
//     withCredentials: true
// })

// if NOT using corsOptions in the backend server, use this :
// import axios from 'axios';

// const serverPort = 3030;
// const BASE_URL = `http://localhost:${serverPort}/api/wapEl`;


// *** NOTE : localhost and 127.0.0.1 may be the same in theory, but practically the axios requests url HAS TO match the url in the open browser *** \\


// // get wapEls
// async function query() {
//     try {
//         const res = await axios.get(BASE_URL);
//         return res.data;
//     } catch (err) {

//     }
// }

// // get wapEl by id
// async function getById(wapElId) {
//     try {
//         const res = await axios.get(`${BASE_URL}/${wapElId}`)
//         return res.data;
//     } catch (err) {

//     }
// }

// // delete wapEl
// async function remove(wapElId) {
//     try {
//         const res = await axios.delete(`${BASE_URL}/${wapElId}`);
//         return res.data;
//     } catch (err) {

//     }
// }

// // add a new wapEl / update an existing wapEl
// async function save(wapElToSave) {
//     if (wapElToSave._id) {
//         // update
//         try {
//             const res = await axios.put(`${BASE_URL}/${wapElToSave._id}`, wapElToSave)
//             return res.data;
//         } catch (err) {

//         }
//     } else {
//         // add
//         try {
//             const res = await axios.post(BASE_URL, wapElToSave);
//             return res.data;
//         } catch (err) {

//         }
//     }
// }