import { createStore, applyMiddleware, compose } from 'redux';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      offline(offlineConfig))
  );
}