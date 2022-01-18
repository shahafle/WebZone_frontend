

const initialState = {
    bricks: null
}

export function brickReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_BRICKS':
            return newState = { ...state, bricks: [...action.bricks] };
        case 'ADD_BRICK':
            return newState = { ...state, bricks: [...state.bricks, action.addedBrick] };
        case 'REMOVE_BRICK':
            return newState = { ...state, bricks: state.bricks.filter(brick => brick._id !== action.brickId) };
        case 'UPDATE_BRICK':
            return newState = { ...state, bricks: state.bricks.map(brick => (brick._id === action.updatedBrick._id) ? action.updatedBrick : brick) };
        default:
            return newState;
    }
}