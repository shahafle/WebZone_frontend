import { wapService } from '../services/wap.service.js';


export function loadWap() {
    return async (dispatch) => {
        const wap = await wapService.query()
        dispatch({ type: 'SET_WAP', wap });

    }
}

export function updateWap(wap, elementToUpdate) {
    return async (dispatch) => {
        wapService.findTarget(wap, elementToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = elementToUpdate)
        dispatch({ type: 'UPDATE_WAP', wap })
    }
}

export function removeElement(elementId) {
    return async (dispatch) => {
        const removedElement = await wapService.remove(elementId)
        dispatch({ type: 'REMOVE_ELEMENT', elementId });
        return removedElement;
    }
}

export function addElement(elementToAdd) {
    return (dispatch) => {
        dispatch({ type: 'ADD_ELEMENT', elementToAdd })
        return elementToAdd;
    }
}