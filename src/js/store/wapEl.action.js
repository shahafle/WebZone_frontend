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
    return async (dispatch) => {
        const addedWapEl = await wapElService.save(wapElToAdd)
        dispatch({ type: 'ADD_WAPEL', addedWapEl })
        return addedWapEl;
    }
}

export function updateWapEl(wapElToUpdate) {
    return async (dispatch) => {
        const updatedWapEl = await wapElService.save(wapElToUpdate)
        dispatch({ type: 'UPDATE_WAPEL', updatedWapEl })
        return updatedWapEl;
    }
}

export function handleStyleChange(wapElToUpdate) {
    return (dispatch) => {
        dispatch({ type: 'SET_WAPEL_STYLE', wapElToUpdate })
    }
}

export function setCurrElement(elementIds) {
    return (dispatch) => {
        dispatch({ type: 'SET_CURR_ELEMENT', elementIds })
    }
}