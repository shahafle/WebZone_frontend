import { httpService } from './http.service.js';


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


// *** Axios Requests *** //

// Get waps
async function query() {
    try {
        const waps = await httpService.get('wap');
        return waps;
    } catch (err) {

    }
}

// Get wap by id
async function getById(wapId) {
    try {
        const wap = await httpService.get(`wap/${wapId}`);
        return wap;
    } catch (err) {

    }
}

// Remove wap
async function remove(wapId) {
    try {
        const removedWap = await httpService.delete(`wap/${wapId}`);
        return removedWap;
    } catch (err) {

    }
}

// Update an existing wap / Add a new wap
async function save(wapToSave) {
    if (wapToSave._id) {
        // Update
        try {
            const updatedWap = await httpService.put(`wap/${wapToSave._id}`, wapToSave);
            return updatedWap;
        } catch (err) {

        }
    } else {
        // Add
        try {
            const addedWap = await httpService.post('wap', wapToSave);
            return addedWap;
        } catch (err) {

        }
    }
}


// *** Wap Utils *** //

// Find any cmp inside the wap by recurssion
function findTarget(data, elementId, cb) {
    if (!data.cmps) return;
    const elementIdx = data.cmps.findIndex(cmp => cmp.id === elementId);
    if (elementIdx > -1) {
        cb(data.cmps, elementIdx);
        return;
    } else {
        data.cmps.forEach(cmp => findTarget(cmp, elementId, cb));
    }
}

// Return the right units for the given style setting
function getScaleUnits(style) {
    const pxFields = [
        'fontSize', 'letterSpacing', 'lineHeight',
        'paddingBlock', 'paddingInline', 'borderRadius'];

    const percentFields = ['width'];

    const styleCopy = JSON.parse(JSON.stringify(style));
    for (let attr in styleCopy) {
        if (pxFields.includes(attr)) styleCopy[attr] = styleCopy[attr] + 'px';
        else if (percentFields.includes(attr)) styleCopy[attr] = styleCopy[attr] + '%';
    }

    return styleCopy;
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