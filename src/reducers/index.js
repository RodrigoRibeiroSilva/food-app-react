import { combineReducers } from 'redux';
import { shoppingCartReducer } from './ShoppingCartReducer'

export const Reducers = combineReducers({
  shoppingCart: shoppingCartReducer
})