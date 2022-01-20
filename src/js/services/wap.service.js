import { asyncStorageService } from './async-storage.service.js';


export const wapService = {
    query,
    getById,
    remove,
    post,
    put,
    getScaleUnits,
    findTarget,
    getTemplateSections,
    getSectionsCategories
}


// WITH DEMO SERVER :
const sectionsCategories = ['wap-section', 'wap-header', 'wap-hero', 'wap-txt', 'wap-card', 'wap-gallery', 'wap-form', 'wap-footer']


const templateSections = [
    {

        "id": "wc03",
        "type": "section",
        "category": "wap-section",
        "cmps": [
            {
                id: 'avvva1d',
                type: 'txt',
                txt: 'section 1',
                style: {
                    'textAlign': 'center',
                    'fontWeight': '700',
                    'fontStyle': 'normal',
                    'textDecoration': 'none',
                    'fontSize': '70',
                    'color': '#a00',
                    'letterSpacing': '1',
                    // 'lineHeight': '16',
                    'textShadow': 'none',
                    'fontFamily': 'sans-serif',
                }
            },
            {
                id: 'fsssa3s',
                type: 'txt',
                txt: 'still section 1',
                style: {
                    'textAlign': 'start',
                    'fontWeight': '400',
                    'fontStyle': 'normal',
                    'textDecoration': 'none',
                    'fontSize': '16',
                    'color': 'brown',
                    'letterSpacing': '1',
                    'lineHeight': '16',
                    'textShadow': 'none',
                    'fontFamily': 'sans-serif',
                }
            }
        ],
        "name": "wap-section-1 test",
        "style": { backgroundColor: '#1baa1b' }

    },
    {
        "id": "wch2",
        "type": "section",
        "category": "wap-section",
        "cmps": [
            {
                id: 'h5438hd',
                type: 'txt',
                txt: 'section 2',
                style: {
                    'textAlign': 'end',
                    'fontWeight': '400',
                    'fontStyle': 'normal',
                    'textDecoration': 'none',
                    'fontSize': '70',
                    'color': '#b1b',
                    'letterSpacing': '2',
                    // 'lineHeight': '16',
                    'textShadow': 'none',
                    'fontFamily': 'sans-serif',
                }
            },
            {
                id: 'fsssa3s',
                type: 'txt',
                txt: ' still section 2 test',
                style: {
                    'textAlign': 'start',
                    'fontWeight': '200',
                    'fontStyle': 'normal',
                    'textDecoration': 'none',
                    'fontSize': '32',
                    'color': 'red',
                    'letterSpacing': '1',
                    'lineHeight': '16',
                    'textShadow': 'none',
                    'fontFamily': 'sans-serif',
                }
            }
        ],
        "name": "wap-section-2",
        "style": { backgroundColor: '#ab1' }
    },

];


function getTemplateSections() {
    return templateSections
}
function getSectionsCategories() {
    return sectionsCategories
}

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

function getScaleUnits(style) {
    const pxFields = [
        'fontSize', 'letterSpacing', 'lineHeight', 'paddingBlockStart',
        'paddingBlockEnd', 'paddingInlineStart', 'paddingInlineEnd'];
    const percentFields = ['width', 'borderRadius']
    const styleCopy = JSON.parse(JSON.stringify(style))
    for (let attr in styleCopy) {
        if (pxFields.includes(attr)) styleCopy[attr] = styleCopy[attr] + 'px'
        else if (percentFields.includes(attr)) styleCopy[attr] = styleCopy[attr] + '%'
    }

    return styleCopy
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