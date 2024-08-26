import { combineReducers } from "redux";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
  // Add other reducers here
});

export default rootReducer;
