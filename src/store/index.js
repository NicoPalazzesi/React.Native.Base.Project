// @flow

import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import {type TLoginStore} from './reducers/login';

export type TStore = {
  login: TLoginStore
};

const store = createStore(Reducers, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);
export {store, persistor}