import { asyncStorageService } from './async-storage.service.js';


export const wapService = {
    query,
    getById,
    remove,
    save,
    findTarget,
    getScaleUnits,
    replaceIds,
    getRandomId,
}


const WAP_STORAGE_KEY = 'wap'; // User saved/published waps. This will be wap collection in wap_db


// *** DEMO Axios Requests *** //


// Get waps
async function query() {
    return await asyncStorageService.query(WAP_STORAGE_KEY);
}

// Get wap by id
async function getById(wapId) {
    return await asyncStorageService.get(WAP_STORAGE_KEY, wapId);
}

// Remove wap
async function remove(wapId) {
    return await asyncStorageService.remove(WAP_STORAGE_KEY, wapId);
}

// Update an existing wap / Add a new wap
async function save(wap) {
    if (wap._id) {
        // Update
        return await asyncStorageService.put(WAP_STORAGE_KEY, wap);
    } else {
        // Add
        return await asyncStorageService.post(WAP_STORAGE_KEY, wap);
    }
}


// *** Wap Utils *** //


// Find any cmp inside the wap by recurssion
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

// Return the right units for the given style setting
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

// Replace the ids of all cmps inside a wap TEMPLATE
function replaceIds(element) {
    if (!element._id) element.id = getRandomId();

    if (element.cmps) {
        element.cmps.forEach(el => replaceIds(el));
    }
}

function getRandomId(length = 10, array) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return id;
}