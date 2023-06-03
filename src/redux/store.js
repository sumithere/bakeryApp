import cartReducer from './cartReducer';
import {createStore} from 'redux';



let store=createStore(cartReducer)
export default store;