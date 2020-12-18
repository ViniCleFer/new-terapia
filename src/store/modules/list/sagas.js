import { all, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import history from "../../../services/history";
import {
  setUsersByHighRisk,
  setUsersWithoutMonitoring,
  setHistoryCalls,
  setProfileById,
} from "./actions";

import baseUrl from "../../../services/baseUrl";

export function* getUsersHighRisk() {
  try {
    const response = yield call(axios.get, `${baseUrl.BELLA}/profile/highRisk`);

    yield put(setUsersByHighRisk(response.data));
  } catch (error) {}
}

export function* getUsersWithoutMonitoring() {
  try {
    const response = yield call(
      axios.get,
      `${baseUrl.BELLA}/profile/pendingMonitoring`
    );

    yield put(setUsersWithoutMonitoring(response.data));
  } catch (err) {}
}

export function* getHistoryCalls({ payload }) {
  try {
    const response = yield call(
      axios.get,
      `${baseUrl.BELLA}/history/${payload.userId}`
    );

    if (response.status === 200) {
      console.tron.log(response, payload);
      yield put(setHistoryCalls(response.data));
    }
  } catch (err) {}
}

export function* getProfileById({ payload }) {
  console.tron.log(payload);
  try {
    const response = yield call(
      axios.get,
      `${baseUrl.TERAPIA_BELLA}/profile/${payload.userId}`
    );

    if (response.status === 200) {
      yield put(setProfileById(response.data));
      history.push('add-contacts');
    }
  } catch (err) {}
}

export default all([
  takeLatest("@lists/GET_USERS_HIGH_RISK", getUsersHighRisk),
  takeLatest("@lists/GET_USERS_WITHOUT_MONITORING", getUsersWithoutMonitoring),
  takeLatest("@lists/GET_HISTORY_CALLS", getHistoryCalls),
  takeLatest("@lists/GET_PROFILE_BY_ID", getProfileById),
]);
