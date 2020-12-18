import { combineReducers } from "redux";

import auth from "./auth/reducer";
import list from "./list/reducer";
import specialty from "./specialty/reducer";
import commons from "./commons/reducer";
import professionals from "./professionals/reducer";

export default combineReducers({
  auth,
  list,
  specialty,
  commons,
  professionals,
});
