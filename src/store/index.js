import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import connect from '../middlewares/connect';

import reducer from '../reducers';

const middlewares = [connect]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;