import { combineReducers } from "redux";
import charactersReducer from "./Characters";

const rootReducers = combineReducers({
  characters: charactersReducer,
});

export default rootReducers;
