import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import list from "./list/sagas";
import specialty from "./specialty/sagas";
import professionals from "./professionals/sagas";

export default function* rootSaga() {
  return yield all([auth, list, specialty, professionals]);
}
