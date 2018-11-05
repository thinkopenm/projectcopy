import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger"

import { thunk } from './middleware';
import { handlePromise } from './redux/middlewares';
import arexons from './redux/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './redux/reducers/index'

import * as storage from 'redux-storage'

const reducer = storage.reducer(combineReducers(reducers));

import createEngine from 'redux-storage-engine-localstorage';

const engine = createEngine('my-save-key');

const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(middleware))(createStore);
const store = createStoreWithMiddleware(reducer);
/* eslint-disable no-underscore-dangle */
/*let store = createStore(
    arexons,
    composeWithDevTools(applyMiddleware(thunk))
);*/
/* eslint-enable */

const load = storage.createLoader(engine);
load(store);

load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));

export default store;