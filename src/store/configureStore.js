import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk))
  );
}