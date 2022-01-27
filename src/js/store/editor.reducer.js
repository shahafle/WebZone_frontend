const initialState = {
   currElement: null,
   boardSize: 'desktop'
}

export function editorReducer(state = initialState, action) {
   let newState = state;

   switch (action.type) {

      case 'SET_CURR_ELEMENT': {
         let { element } = action;
         return newState = { ...state, currElement: { ...element } };
      }

      case 'UPDATE_CURR_ELEMENT': {
         return newState = { ...state, currElement: { ...action.updatedElement } };
      }

      case 'SET_BOARD_SIZE': {
         return newState = { ...state, boardSize: action.boardSize }
      };
      default:
         return newState
   }
}
