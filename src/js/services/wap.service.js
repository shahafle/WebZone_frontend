import { asyncStorageService } from './async-storage.service.js';
import { storageService } from './storage.service.js';



export const wapService = {
    query,
    getById,
    remove,
    save,
    saveDraft,
    loadDraft,
    removeDraft,
    addElementToDraft,
    findTarget,
    getScaleUnits,
    addIds,
    getRandomId,
}

const TEMPLATE_WAP_STORAGE_KEY = 'template_wap_db'; // Complete Wap Templates
const TEMPLATE_SECTION_STORAGE_KEY = 'template_section_db'; // Section Templates
const DRAFT_STORAGE_KEY = 'draft_wap'; // Draft Wap from Local Storage
const WAP_STORAGE_KEY = 'wap_db'; // User Saved Waps



function query() {
    return asyncStorageService.query(TEMPLATE_WAP_STORAGE_KEY)
}

async function getById(wapId) {
    return await asyncStorageService.get(TEMPLATE_WAP_STORAGE_KEY, wapId);
}

function remove(wapId) {
    return asyncStorageService.remove(TEMPLATE_WAP_STORAGE_KEY, wapId);
}

function save(wap) {
    if (wap._id) {
        return asyncStorageService.put(WAP_STORAGE_KEY, wap);
    } else {
        return asyncStorageService.post(WAP_STORAGE_KEY, wap);
    }
}

function saveDraft(wap) {
    storageService.saveToStorage(DRAFT_STORAGE_KEY, wap);
}

function removeDraft() {
    storageService.removeFromStorage(DRAFT_STORAGE_KEY);
}

function loadDraft() {
    let draftWap = storageService.loadFromStorage(DRAFT_STORAGE_KEY);
    if (!draftWap) {
        draftWap = {
            "name": "new webApp",
            "createdBy": {
                "_id": "5e26e0b718a0891d4c995527",
                "username": "Username"
            },
            "cmps": [],
            "isPublished": false,
            "isTemplate": false
        }
        saveDraft(draftWap);
    }
    return draftWap;
}

function addElementToDraft(elementToAdd) {
    const draftWap = loadDraft();
    draftWap.cmps.push(elementToAdd);
    saveDraft(draftWap);
}

function findTarget(data, elementId, cb) {
    if (!data.cmps) return;
    const elementIdx = data.cmps.findIndex(cmp => cmp.id === elementId);
    if (elementIdx > -1) {
        cb(data.cmps, elementIdx)
        return
    } else {
        data.cmps.forEach(cmp => findTarget(cmp, elementId, cb));
    }
}

function getScaleUnits(style) {
    const pxFields = [
        'fontSize', 'letterSpacing', 'lineHeight',
        'paddingBlock', 'paddingInline', 'borderRadius'];
    const percentFields = ['width']
    const styleCopy = JSON.parse(JSON.stringify(style))
    for (let attr in styleCopy) {
        if (pxFields.includes(attr)) styleCopy[attr] = styleCopy[attr] + 'px'
        else if (percentFields.includes(attr)) styleCopy[attr] = styleCopy[attr] + '%'
    }

    return styleCopy
}

function addIds(element) {
    element.id = getRandomId()
    if (element.cmps) {
        element.cmps.forEach(el => addIds(el));
    }
}

function getRandomId(length = 6, array) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return id;
}










// }

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