import { wapElService } from '../services/wap-el.service.js';


export function loadWapEls() {
    return async (dispatch) => {
        const wapEls = await wapElService.query()
        dispatch({ type: 'SET_WAP', wapEls });
    }
}

export function removeWapEl(wapElId) {
    return async (dispatch) => {
        const removedWapEl = await wapElService.remove(wapElId)
        dispatch({ type: 'REMOVE_WAPEL', wapElId });
        return removedWapEl;
    }
}

export function addWapEl(wapElToAdd) {
    return (dispatch) => {
        dispatch({ type: 'ADD_WAPEL', wapElToAdd })
        return wapElToAdd;
    }
}

export function updateWapEl(wap, wapElToUpdate) {
    return async (dispatch) => {
        wapElService.findTarget(wap, wapElToUpdate.id, (cmpsArr, idx) => cmpsArr[idx] = wapElToUpdate)
        dispatch({ type: 'UPDATE_WAPEL', wap })
    }
}