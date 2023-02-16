import { combineReducers } from "redux";
import { AllReducer } from "./AbstractReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
  all: AllReducer,
  task: taskReducer,
});
