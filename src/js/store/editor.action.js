import { uploadImgToCloud } from '../services/cloudinary.service.js';

export function setCurrElement(element) {
   return (dispatch) => {
      dispatch({ type: 'SET_CURR_ELEMENT', element })
   }
}

export function updateCurrElementStyle(currElement, style) {
   return (dispatch) => {
      let { styleName, styleValue } = style;
      if (styleName === 'backgroundImage') styleValue = `url(${styleValue})`
      const updatedElement = { ...currElement, style: { ...currElement.style, [styleName]: styleValue } }
      dispatch({ type: 'UPDATE_CURR_ELEMENT', updatedElement })
   }
}

export function updateCurrElementAttr(currElement, attr) {
   return (dispatch) => {
      const { attrName, attrValue } = attr;
      const updatedElement = { ...currElement, [attrName]: attrValue }
      dispatch({ type: 'UPDATE_CURR_ELEMENT', updatedElement })
   }
}

export function uploadImage(ev, element, isBackground) {
   return async (dispatch) => {
      if (!ev.target.value) return
      try {
         const cloudUrl = await uploadImgToCloud(ev)
         console.log(cloudUrl);
         if (isBackground) {
            element = { ...element, style: { ...element.style, backgroundImage: `url(${cloudUrl})` } }
         } else {
            element.url = cloudUrl;
         }
         console.log(cloudUrl)
         dispatch({ type: 'UPDATE_CURR_ELEMENT', updatedElement: element })
      } catch (err) {
         console.log(err);
      }
   }
}


export function setBoardSize(boardSize) {
   return async (dispatch) => {
      dispatch({ type: 'SET_BOARD_SIZE', boardSize })
   }
}