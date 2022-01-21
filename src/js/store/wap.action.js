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
        dispatch({ type: 'ADD_ELEMENT', elementToAdd })
        return elementToAdd;
    }
}



