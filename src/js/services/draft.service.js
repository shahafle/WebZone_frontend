import { storageService } from './storage.service';


export const draftService = {
    saveDraft,
    loadDraft,
    resetDraft,
    addElementToDraft,
}

const DRAFT_WAP_STORAGE_KEY = 'draft_wap'; // Draft Wap from Local Storage


function saveDraft(wap) {
    storageService.saveToStorage(DRAFT_WAP_STORAGE_KEY, wap);
}

function loadDraft() {
    let draftWap = storageService.loadFromStorage(DRAFT_WAP_STORAGE_KEY);

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

function resetDraft() {
    _removeDraft();
    return loadDraft();
}

function addElementToDraft(elementToAdd) {
    const draftWap = loadDraft();
    draftWap.cmps.push(elementToAdd);
    saveDraft(draftWap);
}

function _removeDraft() {
    storageService.removeFromStorage(DRAFT_WAP_STORAGE_KEY);
}