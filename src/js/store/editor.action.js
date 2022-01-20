// import { wapElService } from "../services/wap-el.service"


export function setCurrElement(element) {
   return (dispatch) => {
      dispatch({ type: 'SET_CURR_ELEMENT', element })
   }
}

export function updateCurrElementStyle(currElement, style) {
   return (dispatch) => {
      const { styleName, styleValue } = style;
      const updatedElement = { ...currElement, style: { ...currElement.style, [styleName]: styleValue } }
      dispatch({ type: 'UPDATE_CURR_ELEMENT', updatedElement })
   }
}

export function updateCurrElementAttr(currElement, attr) {
   return (dispatch) => {
      console.log('hi');
      const { attrName, attrValue } = attr;
      const updatedElement = { ...currElement, [attrName]: attrValue }
      dispatch({ type: 'UPDATE_CURR_ELEMENT', updatedElement })
   }
}