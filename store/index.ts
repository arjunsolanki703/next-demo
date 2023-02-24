import { combineReducers } from "redux";

import {supplierReducer} from "./reducer";

const reducers = combineReducers({
    supplier: supplierReducer
})

export default reducers;