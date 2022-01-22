import { wapTemplate_1 } from "../../templates/wap-template-1";
import { wapTemplate_2 } from "../../templates/wap-template-2";
import { wapTemplate_3 } from "../../templates/wap-template-3";

const initialState = {
    wap: null
    // wap: wapTemplate_2
}


export function wapReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'UPDATE_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'ADD_ELEMENT':
            return newState = { ...state, wap: { ...state.wap, cmps: [...state.wap.cmps, action.elementToAdd] } };
        default:
            return newState;
    }
}