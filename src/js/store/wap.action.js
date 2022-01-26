import { wapService } from '../services/wap.service.js';
import { draftService } from '../services/draft.service.js';
import { templateService } from '../services/template.service.js';
import { socketService } from '../services/socket.service.js';
import { loadingStart, loadingDone } from './system.action'


// *** KEY NOTES *** //
// 1. To load a wap to the editor page, we use getById.
// 2. getById splits to 2 different functions - One loads a wap from USER waps collection, The other loads from TEMPLATE waps collection.
// 3. *IMPORTANT - No matter which wap was loaded to the editor, a DRAFT wap will be created.


// *** CRUD wap actions *** //

// Load wap from USER collection to editor page
export function loadWap(wapId) {
    return async (dispatch) => {
        // dispatch(loadingStart())
        const wap = await wapService.getById(wapId);
        // dispatch(loadingDone())
        dispatch({ type: 'SET_WAP', wap });
    }
}

// Load wap from TEMPLATE collection to editor page
export function loadWapTemplate(wapTemplateId) {
    return (dispatch) => {
        let wap = templateService.getWapTemplateById(wapTemplateId);
        wap = JSON.parse(JSON.stringify(wap));
        wapService.replaceIds(wap);
        if (wap._id) delete wap._id; // DISCUSS ABOUT THIS
        draftService.saveDraft(wap);
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function updateWap(elementToUpdate) {
    return (dispatch, getState) => {
        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));
        wapService.findTarget(wap, elementToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = elementToUpdate);
        draftService.saveDraft(wap);

        socketService.emit('update-wap', wap);

        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

export function saveWap(cb) {
    return async (dispatch, getState) => {
        const { wap } = getState().wapModule;
        const savedWap = await wapService.save(wap);
        if (cb) cb(savedWap._id);

        // dispatch({ type: 'SAVE_WAP', wap }); // we can use this to add a key of "last saved" maybe
    }
}


// *** SOCKET wap actions *** //

export function createRoom() {
    return (dispatch, getState) => {
        const { wap } = getState().wapModule;

        wap.id = wapService.getRandomId();
        draftService.saveDraft(wap);
        dispatch({ type: 'SET_WAP', wap });

        socketService.emit('create-room', wap);
        navigator.clipboard.writeText(`localhost:3000/editor/${wap.id}`);
    }
}

export function joinRoom(wapId) {
    return (dispatch, getState) => {
        socketService.emit('join-room', wapId);
        socketService.on('load-wap', wap => {
            draftService.saveDraft(wap);
            dispatch({ type: 'SET_WAP', wap });
        })
    }
}

export function updateWapInRoom(wap) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_WAP', wap });
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


// *** ELEMENT wap actions *** //

export function removeElement(element) {
    return (dispatch, getState) => {
        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));
        wapService.findTarget(wap, element.id, (cmpsArr, idx) => cmpsArr.splice(idx, 1));

        draftService.saveDraft(wap);
        socketService.emit('update-wap', wap);
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

// Add element by CLICK
export function addElement(elementToAdd) {
    return (dispatch, getState) => {
        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));
        elementToAdd = JSON.parse(JSON.stringify(elementToAdd));
        wapService.replaceIds(elementToAdd);
        wap.cmps.push(elementToAdd);

        draftService.saveDraft(wap);
        socketService.emit('update-wap', wap);
        dispatch({ type: 'UPDATE_WAP', wap });
        return elementToAdd;
    }
}

export function duplicateElement(element) {
    return (dispatch, getState) => {
        let { wap } = getState().wapModule;
        wap = JSON.parse(JSON.stringify(wap));
        const elementId = element.id;
        element = JSON.parse(JSON.stringify(element));
        wapService.replaceIds(element);
        wapService.findTarget(wap, elementId, (cmpsArr, idx) => cmpsArr.splice(idx, 0, element));

        draftService.saveDraft(wap);
        socketService.emit('update-wap', wap);
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
            wapService.replaceIds(draggedElement);
            wap.cmps.splice(destination.index, 0, draggedElement);
        }

        // From board to garbage
        else {
            wap.cmps.splice(source.index, 1);
        }

        draftService.saveDraft(wap);
        socketService.emit('update-wap', wap);
        dispatch({ type: 'UPDATE_WAP', wap });
    }
}

export function undo() {
    return async (dispatch, getState) => {
        const { wapHistory } = getState().wapModule;
        const { currElement } = getState().editorModule;

        if (!wapHistory.length) return
        let prevWap = wapHistory.pop()
        // prevWap = JSON.parse(JSON.stringify(prevWap));

        draftService.saveDraft(prevWap);
        socketService.emit('update-wap', prevWap);
        dispatch({ type: 'UNDO_WAP', wap: prevWap, wapHistory });

        wapService.findTarget(prevWap, currElement.id, (cmpsArr, idx) => {
            dispatch({ type: 'SET_CURR_ELEMENT', element: cmpsArr[idx] })
        })
    }
}