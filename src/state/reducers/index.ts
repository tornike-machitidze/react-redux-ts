import { combineReducers } from "redux";
import packagesReducer from "./packagesReducer";

const reducers = combineReducers({
  packages: packagesReducer,
});

export default reducers;

// tell ts that it will be a type of useSelector returned state
export type RootState = ReturnType<typeof reducers>;
