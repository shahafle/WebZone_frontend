// import { wapElService } from "../services/wap-el.service"


export function setCurrElement(element) {
   return (dispatch) => {
      dispatch({ type: 'SET_CURR_ELEMENT', element })
   }
}

export function updateCurrElement(style) {
   return (dispatch) => {
      dispatch({ type: 'UPDATE_CURR_ELEMENT', style })
   }
}
