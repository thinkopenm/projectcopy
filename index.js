// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import count from "./counter";
import savedMenu from "./menu";

const arexons = combineReducers({
    savedMenu
});

export default arexons;

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
