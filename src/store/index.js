import { createStore, combineReducers, applyMiddleware } from "redux";
import schedulesReducer from "./schedules/reducer";
import operatorsReducer from "./operators/reducer";
import supervisorsReducer from "./supervisors/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  supervisors: supervisorsReducer,
  operators: operatorsReducer,
  schedules: schedulesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
