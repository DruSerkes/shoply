import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({ data: dataReducer, cart: cartReducer });

export default rootReducer;
