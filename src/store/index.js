import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const store = createStore(Reducers, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);
export {store, persistor}