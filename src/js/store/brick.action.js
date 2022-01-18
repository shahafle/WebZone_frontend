// import { brickService } from '../services/brick.service.js';


export function loadBricks() {
    return (dispatch, getState) => {
        // brickService.query(filterBy)
            // .then(bricks => dispatch({ type: 'SET_BRICKS', bricks }));
    }
}

export function removeBrick(brickId) {
    return (dispatch) => {
        // brickService.remove(brickId)
            // .then(removedBrick => {
                dispatch({ type: 'REMOVE_BRICK', brickId });
                return removedBrick;
            // });
    }
}

export function addBrick(brickToAdd) {
    return (dispatch) => {
        // brickService.save(brickToAdd)
            // .then(addedBrick => {
                dispatch({ type: 'ADD_BRICK', addedBrick })
                return addedBrick;
            // });
    }
}

export function updateBrick(brickToUpdate) {
    return (dispatch) => {
        // brickService.save(brickToUpdate)
            // .then(updatedBrick => {
                dispatch({ type: 'UPDATE_BRICK', updatedBrick })
                return updatedBrick;
            // });
    }
}