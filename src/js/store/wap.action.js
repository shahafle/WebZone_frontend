import { templateService } from '../services/template.service.js';
import { wapService } from '../services/wap.service.js';


export function loadWaps() {
    return async (dispatch) => {
        await wapService.query()
        // dispatch({ type: 'SET_WAP', wap });
    }
}

export function loadDraftWap() {
    return (dispatch) => {
        const wap = wapService.loadDraft();
        // if (!wap) return;
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function removeDraftWap() {
    return (dispatch) => {
        wapService.removeDraft();
        const wap = wapService.loadDraft();
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function getWapById(wapId) {
    return async (dispatch) => {
        let wap = await wapService.getById(wapId)
        if (wap.isTemplate) {
            wap = JSON.parse(JSON.stringify(wap))
            wapService.addIds(wap)
        }
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function updateWap(wap, elementToUpdate) {
    return async (dispatch) => {
        wapService.findTarget(wap, elementToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = elementToUpdate)
        if (wap._id) delete wap._id;
        dispatch({ type: 'UPDATE_WAP', wap })
    }
}

export function removeElement(wap, element) {
    return (dispatch) => {
        wapService.findTarget(wap, element.id, (cmpsArr, idx) => cmpsArr.splice(idx, 1))
        dispatch({ type: 'UPDATE_WAP', wap })
    }
}

export function addElement(elementToAdd) {
    return (dispatch) => {
        elementToAdd = JSON.parse(JSON.stringify(elementToAdd))
        wapService.addIds(elementToAdd)
        wapService.addElementToDraft(elementToAdd);
        dispatch({ type: 'ADD_ELEMENT', elementToAdd })
        return elementToAdd;
    }
}

export function switchElement(wap, res) {
    return (dispatch) => {
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

            const draggedElement = wap.cmps.splice(source.index, 1)[0]
            wap.cmps.splice(destination.index, 0, draggedElement)
        }

        // From sidebar to board
        else if (source.droppableId === 'sidebar' &&
            destination.droppableId === 'board') {

            let draggedElement = templateService.getById(draggableId);
            draggedElement = JSON.parse(JSON.stringify(draggedElement))
            wapService.addIds(draggedElement)
            wap.cmps.splice(destination.index, 0, draggedElement)
        }

        // From board to garbage
        else {
            wap.cmps.splice(source.index, 1);
        }
        dispatch({ type: 'UPDATE_WAP', wap })
    }
}