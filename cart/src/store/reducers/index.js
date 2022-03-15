import { combineReducers } from "redux";
import cartReducer from './cartReducer'
import homeReducer from "./homeReducer";
export default combineReducers({
    homeReducer,
    cartReducer,
})