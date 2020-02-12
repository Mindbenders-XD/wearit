import { combineReducers } from 'redux'
import products from './productReducer';

const rootReducers = combineReducers({
    products
})

export default rootReducers;