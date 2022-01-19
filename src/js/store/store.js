import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { wapElReducer } from './wap-el.reducer.js';
import { editorReducer } from './editor.reducer.js';

const rootReducer = combineReducers({
    wapElModule: wapElReducer,
    editorModule: editorReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));