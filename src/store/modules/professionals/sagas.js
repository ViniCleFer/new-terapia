import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import axios from "axios";

import baseUrl from "../../../services/baseUrl";

import { getAllProfessionalsSuccess, getAllProfessionalsRequest } from "./actions";

export function* getProfessionals({ payload }) {

  try {
    const tokenn = (state) => state.auth.token;
    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(
      axios.get,
      `${baseUrl.TERAPIA_BELLA}/professional/all`,
    );

    if (response.status === 200) {
      const professionals = response.data;

      yield put(getAllProfessionalsSuccess(professionals));
    }
  } catch (error) {
    if (error.response) {
      // console.tron.log(error.response, 'Erro getProfessionals');
      toast.error("Falha na autenticaçao, verifique seus dados");
    }
  }
}

export function* changeProfessionalsStatus({ payload }) {

  try {
    const tokenn = (state) => state.auth.token;
    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    // console.tron.log(payload, 'PAYLOAD');

    yield call(
      axios.put,
      `${baseUrl.TERAPIA_BELLA}/professional/status?professionalId=${payload.professionalId}&active=${payload.professionalStatus}`,
    );
    yield put(getAllProfessionalsRequest())
    // window.location.reload();
  } catch (error) {
    if (error.response) {
      // console.tron.log(error.response, 'Erro getProfessionals');
      toast.error("Falha na autenticaçao, verifique seus dados");
    }
  }
}

export default all([
  takeLatest("@professionals/GET_ALL_PROFESSIONALS_REQUEST", getProfessionals),
  takeLatest("@professionals/SET_CHANGE_PROFESSIONAL_STATUS", changeProfessionalsStatus),
]);
