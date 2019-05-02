import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import APIreducer from "./people-reducers.js";

let reducers = combineReducers({
  api: APIreducer
});

export default () => createStore(reducers, applyMiddleware(thunk));
