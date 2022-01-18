

export const brickService = {
    query,
    getById,
    remove,
    post,
    put
}


// WITH DEMO SERVER :

import { asyncStorageService } from './async-storage-service.js';

const STORAGE_KEY = 'bricksDB'

function query() {
    return asyncStorageService.query(STORAGE_KEY)
}

function getById(brickId) {
    return asyncStorageService.get(STORAGE_KEY, brickId);
}

function remove(brickId) {
    return asyncStorageService.remove(STORAGE_KEY, brickId);
}

function post(brickToAdd) {
    return asyncStorageService.post(STORAGE_KEY, brickToAdd);
}

function put(brickToUpdate) {
    return asyncStorageService.put(STORAGE_KEY, brickToUpdate);
}



// // WITH REAL SERVER :

// import Axios from 'axios';
// const axios = Axios.create({
//     withCredentials: true
// })

// if NOT using corsOptions in the backend server, use this :
// import axios from 'axios';

// const serverPort = 3030;
// const BASE_URL = `http://localhost:${serverPort}/api/brick`;


// *** NOTE : localhost and 127.0.0.1 may be the same in theory, but practically the axios requests url HAS TO match the url in the open browser *** \\


// // get bricks
// async function query() {
//     try {
//         const res = await axios.get(BASE_URL);
//         return res.data;
//     } catch (err) {

//     }
// }

// // get brick by id
// async function getById(brickId) {
//     try {
//         const res = await axios.get(`${BASE_URL}/${brickId}`)
//         return res.data;
//     } catch (err) {

//     }
// }

// // delete brick
// async function remove(brickId) {
//     try {
//         const res = await axios.delete(`${BASE_URL}/${brickId}`);
//         return res.data;
//     } catch (err) {

//     }
// }

// // add a new brick / update an existing brick
// async function save(brickToSave) {
//     if (brickToSave._id) {
//         // update
//         try {
//             const res = await axios.put(`${BASE_URL}/${brickToSave._id}`, brickToSave)
//             return res.data;
//         } catch (err) {

//         }
//     } else {
//         // add
//         try {
//             const res = await axios.post(BASE_URL, brickToSave);
//             return res.data;
//         } catch (err) {

//         }
//     }
// }