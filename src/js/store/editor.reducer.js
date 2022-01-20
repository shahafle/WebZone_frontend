const initialState = {
   currElement: null
}

export function editorReducer(state = initialState, action) {
   let newState = state;

   switch (action.type) {

      case 'SET_CURR_ELEMENT': {
         let { element } = action;
         return newState = { ...state, currElement: element };
      }

      case 'UPDATE_CURR_ELEMENT': {
         let { styleName, styleValue } = action.style;
         return newState = { ...state, currElement: { ...state.currElement, style: { ...state.currElement.style, [styleName]: styleValue } } };
      }
      default:
         return newState
   }
}