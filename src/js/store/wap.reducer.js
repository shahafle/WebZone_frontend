// *** Imports for convinient live editing *** //
import { wapTemplate_1 } from "../templates/wap/wap-template-1";
import { wapTemplate_2 } from "../templates/wap/wap-template-2";
import { wapTemplate_3 } from "../templates/wap/wap-template-3";
import { wapTemplate_4 } from "../templates/wap/wap-template-4";
import { wapTemplate_5 } from "../templates/wap/wap-template-5";

const initialState = {
    // wap: null,
    wapHistory: [],
    wap: wapTemplate_5
}


export function wapReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'UPDATE_WAP':
            state.wapHistory.push(state.wap)
            return newState = { ...state, wap: { ...action.wap }, wapHistory: [...state.wapHistory] };
        case 'UNDO_WAP':
            return newState = { ...state, wap: { ...action.wap }, wapHistory: [...action.wapHistory] };
        default:
            return newState;
    }
}