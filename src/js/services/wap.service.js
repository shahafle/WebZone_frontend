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
        "id": "ahsd7fh",
        "type": "section",
        "category": "wap-footer",
        "cmps": [
            {

                id: 'fas9hnhdp',
                type: 'btn',
                url: 'https://www.google.com',
                txt: 'click',
                style: {
                    'borderRadius': '0',
                    'backgroundColor': '#61a68a',
                    'color': '#fff6ff'
                }
            },
            {
                id: 'sdn7sdbh',
                type: 'img',
                url: 'https://media.istockphoto.com/photos/hippie-group-singing-and-dancing-in-a-field-picture-id180694839?b=1&k=20&m=180694839&s=170667a&w=0&h=l4DCmPFir5_ADorfUS-w4bF4BeriN-GNHdIiAbjdRo0=',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            }
        ],
        "name": "wap-footer-1",
        "style": { border: '2px solid black' }
    },
    {
        "id": "rfdf7he4",
        "type": "section",
        "category": "wap-card",
        "cmps": [
            {
                id: 'kkdfhuen',
                type: 'img',
                url: 'https://media.istockphoto.com/photos/african-american-woman-day-dreaming-in-public-park-on-beautiful-day-picture-id1289286426?b=1&k=20&m=1289286426&s=170667a&w=0&h=4e53OLksvcme-rwNZA0V57nFV4LG9343xZs6tY4xuLg=',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            },
            {
                id: 'asfhyv6',
                type: 'txt',
                txt: 'hello my name is yabadabado',
                style: {
                    'textAlign': 'start',
                    'fontWeight': '400',
                    'fontStyle': 'normal',
                    'textDecoration': 'none',
                    'fontSize': '16',
                    'color': 'black',
                    'letterSpacing': '1',
                    'lineHeight': '16',
                    'textShadow': 'none',
                    'fontFamily': 'sans-serif',
                }
            },
        ],
        "name": "wap-card-1",
        "style": { border: '2px solid black', display: 'flex' }
    },
    {
        "id": "ascuhas",
        "type": "section",
        "category": "wap-txt",
        "cmps": [
            {

                id: 'sdhfs7d',
                type: 'txt',
                txt: 'im a meaningfull text cmp',
                style: {
                    'borderRadius': '0',
                    'backgroundColor': '#61aa',
                    'color': '#fff6ff',
                    'textAlign': 'start',
                    'fontWeight': '400',
                    'fontStyle': 'normal',
                    'textDecoration': 'none',
                    'fontSize': '16',
                    'letterSpacing': '1',
                    // 'lineHeight': '16',
                    'textShadow': 'none',
                    'fontFamily': 'sans-serif',
                }
            },
        ],
        "name": "wap-txt-1",
        "style": { border: '2px solid black' }
    },
    {
        "id": "5dsh47h",
        "type": "section",
        "category": "wap-gallery",
        "cmps": [
            {
                id: 'vn3hmal',
                type: 'img',
                url: 'https://media.istockphoto.com/photos/people-looking-at-modern-art-picture-id1280209683?b=1&k=20&m=1280209683&s=170667a&w=0&h=eej9lucGB24N18lZI4n7T5Lp2idCEX2wgbRutpLvKQw=',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            },
            {
                id: '47hfjd',
                type: 'img',
                url: 'https://media.istockphoto.com/photos/chinese-painting-exhibition-picture-id534335744?b=1&k=20&m=534335744&s=170667a&w=0&h=a2Hm2yaWC7VCX4tF_N64tftkEXVdJu-OTzE9N47venk=',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            },
            {
                id: '47dhk2',
                type: 'img',
                url: 'https://media.istockphoto.com/photos/woman-looking-at-picture-collection-picture-id1270572069?b=1&k=20&m=1270572069&s=170667a&w=0&h=8IKGq68xWRh3YDZ9261DiVFmEZF_73YqC5DkRoC4WoU=',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            },
            {
                id: '47dhsia',
                type: 'img',
                url: 'https://media.istockphoto.com/photos/examining-the-masters-picture-id539057683?b=1&k=20&m=539057683&s=170667a&w=0&h=9ncugdiTmzUnvAll5gB0xEUcI6oYD4ucTKQXaEdbNDU=',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            },
        ],
        "name": "wap-gallery-1",
        "style": { backgroundColor: '#D4F2DB', border: '2px solid black', display: 'flex' }
    },
    {
        "id": "dh74h",
        "type": "section",
        "category": "wap-header",
        "cmps": [{
            id: 'sdfj8jus',
            type: 'txt',
            txt: 'LOGO',
            style: {
                'borderRadius': '0',
                'color': '#fff6ff',
                'textAlign': 'start',
                'fontWeight': '400',
                'fontStyle': 'normal',
                'textDecoration': 'none',
                'fontSize': '30',
                'letterSpacing': '1',
                // 'lineHeight': '16',
                'textShadow': 'none',
                'fontFamily': 'sans-serif',
            }
        },
        {
            'id': '6s8df4',
            'type': 'section',
            'style': { backgroundColor: '#1aa', display: 'flex', justifyContent: 'space-between' },
            'cmps': [
                {

                    id: 'sdhuf34f',
                    type: 'btn',
                    url: 'https://www.google.com',
                    txt: 'about us',
                    style: {
                        'borderRadius': '0',
                        'backgroundColor': '#b65a',
                        'color': '#fff6ff',
                        'textAlign': 'center',
                        'fontWeight': '400',
                        'fontStyle': 'normal',
                        'textDecoration': 'none',
                        'fontSize': '16',
                        'letterSpacing': '1',
                        // 'lineHeight': '16',
                        'textShadow': 'none',
                        'fontFamily': 'sans-serif',
                    }
                },
                {
                    id: 'sdjh8ashdcg',
                    type: 'btn',
                    url: 'https://www.google.com',
                    txt: 'login',
                    style: {
                        'borderRadius': '0',
                        'backgroundColor': '#b65a',
                        'color': '#fff6ff',
                        'textAlign': 'start',
                        'fontWeight': '400',
                        'fontStyle': 'normal',
                        'textDecoration': 'none',
                        'fontSize': '16',
                        'letterSpacing': '1',
                        // 'lineHeight': '16',
                        'textShadow': 'none',
                        'fontFamily': 'sans-serif',
                    }
                }
            ]
        }],
        "name": "wap-header-1",
        "style": { backgroundColor: '#1aa', display: 'flex', justifyContent: 'space-between' }
    },
    {
        "id": "fjoehdt",
        "type": "section",
        "category": "wap-hero",
        "cmps": [
            {

                id: 'dfnvfdjd',
                type: 'img',
                url: `https://images.unsplash.com/photo-1524481905007-ea072534b820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
                txt: 'click',
                style: {
                    'borderRadius': '0',
                    'width': '100'
                }
            }
        ],
        "name": "wap-hero-1",
        "style": { border: '2px solid black' }
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
                    // 'lineHeight': '16',
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