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
        console.log('wap:', wap)
        if (!wap) return;
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function getWapById(wapId) {
    return async (dispatch) => {
        const wap = await wapService.getById(wapId)
        dispatch({ type: 'SET_WAP', wap });
    }
}

export function updateWap(wap, elementToUpdate) {
    return async (dispatch) => {
        wapService.findTarget(wap, elementToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = elementToUpdate)
        if (wap._id) delete wap._id;
        wapService.saveDraft(wap);
        dispatch({ type: 'UPDATE_WAP', wap })
    }
}

export function removeElement(wap, element) {
    return (dispatch) => {
        wapService.findTarget(wap, element.id, (cmpsArr, idx) => cmpsArr.splice(idx, 1))
        wapService.saveDraft(wap);
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
        const draggedElement = wap.cmps.splice(source.index, 1)[0]
        wap.cmps.splice(destination.index, 0, draggedElement)
        dispatch({ type: 'UPDATE_WAP', wap })
    }
}

