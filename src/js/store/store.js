import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { wapReducer } from './wap.reducer.js';
import { editorReducer } from './editor.reducer.js';
import { systemReducer } from './system.reducer.js';
import { userReducer } from './user.reducer.js';

const rootReducer = combineReducers({
    wapModule: wapReducer,
    editorModule: editorReducer,
    systemModule: systemReducer,
    userModule: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));