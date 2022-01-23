import { wapService } from '../services/wap.service.js';
import { draftService } from '../services/draft.service.js';
import { templateService } from '../services/template.service.js';


// *** KEY NOTES *** //
// 1. To load a wap to the editor page, we use getById.
// 2. getById splits to 2 different functions - One loads a wap from USER waps collection, The other loads from TEMPLATE waps collection.
// 3. *IMPORTANT - No matter which wap was loaded to the editor, a DRAFT wap will be created.


// *** USER wap actions *** //

// Load wap from user collection to editor page
// * CURRENTLY NOT IN USE, WILL BE USED WHEN USER WAPS WILL BE SUPPORTED *
export function getWapById(wapId) {
    return async (dispatch) => {
        const wap = await wapService.getById(wapId);
        dispatch({ type: 'SET_WAP', wap });
    }
}


// *** DRAFT wap actions *** //

export function loadDraftWap() {
    return (dispatch) => {
        const wap = draftService.loadDraft();
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function resetDraftWap() {
    return (dispatch) => {
        const wap = draftService.resetDraft();
        dispatch({ type: 'SET_WAP', wap });
    }
}


// *** TEMPLATE wap actions *** //

export function getWapTemplateById(wapTemplateId) {
    return async (dispatch) => {
        let wap = await templateService.getWapTemplateById(wapTemplateId);
        wap = JSON.parse(JSON.stringify(wap));
        wapService.addIds(wap);
        draftService.saveDraft(wap);
        dispatch({ type: 'SET_WAP', wap });
    }
}


// *** GENERAL wap actions *** //

export function updateWap(elementToUpdate) {
    return async (dispatch, getState) => {
        const { wap } = getState().wapModule;
        wapService.findTarget(wap, elementToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = elementToUpdate);
        if (wap._id) delete wap._id; // DISCUSS ABOUT THIS
        draftService.saveDraft(wap);
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

export function removeElement(element) {
    return (dispatch, getState) => {
        const { wap } = getState().wapModule;
        wapService.findTarget(wap, element.id, (cmpsArr, idx) => cmpsArr.splice(idx, 1));
        draftService.saveDraft(wap);
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

export function addElement(elementToAdd) {
    return (dispatch) => {
        elementToAdd = JSON.parse(JSON.stringify(elementToAdd));
        wapService.addIds(elementToAdd);
        draftService.addElementToDraft(elementToAdd);
        dispatch({ type: 'ADD_ELEMENT', elementToAdd });
        return elementToAdd;
    }
}

export function duplicateElement(element) {
    return (dispatch, getState) => {
        const { wap } = getState().wapModule;
        const elementId = element.id
        element = JSON.parse(JSON.stringify(element))
        wapService.addIds(element)
        wapService.findTarget(wap, elementId, (cmpsArr, idx) => cmpsArr.splice(idx, 0, element))
        draftService.saveDraft(wap);
        dispatch({ type: 'UPDATE_WAP', wap })
        return element;
    }
}


// Handles anything related to drag n drop including Adding/Removing elements
export function switchElement(res) {
    return (dispatch, getState) => {
        const { wap } = getState().wapModule;

        const { destination, source, draggableId } = res;
        // let draggedElement = null;
        // wapService.findTarget(wap, draggableId, (cmpsArr, idx) => {
        //     draggedElement = cmpsArr.splice(idx, 1)[0]
        // })
        // if (destination.droppableId === '156') {
        //     wap.cmps.splice(destination.index, 0, draggedElement)
        // }
        // wapService.findTarget(wap, destination.droppableId, (cmpsArr, idx) => {
        //     cmpsArr[idx][destination.index] = draggedElement
        // })
        // console.log('destination', destination);
        // console.log('source', source);


        // Just into the board
        if (source.droppableId === 'board' &&
            destination.droppableId === 'board') {

            const draggedElement = wap.cmps.splice(source.index, 1)[0];
            wap.cmps.splice(destination.index, 0, draggedElement);
        }

        // From sidebar to board
        else if (source.droppableId === 'sidebar' &&
            destination.droppableId === 'board') {

            let draggedElement = templateService.getTemplateSectionById(draggableId);
            draggedElement = JSON.parse(JSON.stringify(draggedElement));
            wapService.addIds(draggedElement);
            wap.cmps.splice(destination.index, 0, draggedElement);
        }

        // From board to garbage
        else {
            wap.cmps.splice(source.index, 1);
        }

        draftService.saveDraft(wap);
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}