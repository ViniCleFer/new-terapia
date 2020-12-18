import {takeLatest, put, all, select} from 'redux-saga/effects';
import axios from 'axios';
import baseUrl from '../../../services/baseUrl';

import {
  getSpecialtiesSuccess,
  getCategoriesSuccess,
  getSubjectsSuccess,
  getTabButtonsSuccess,
  getButtonsActionsSuccess,
} from './actions';

export function* getSpecialties() {
  try {
    const tokenn = (state) => state.auth.token;

    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield axios.get(`${baseUrl.BELLA}/specialty`);

    if (response.status === 200) {
      yield put(getSpecialtiesSuccess({specialties: response.data}));
    }
  } catch (error) {
    // // console.tron.log(error.response, 'getSpecialties');
  }
}

export function* getCategories({payload}) {
  try {
    const tokenn = (state) => state.auth.token;
    const {userId} = payload;

    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield axios.get(`${baseUrl.BELLA}/category/${userId}`);

    if (response.status === 200) {
      yield put(getCategoriesSuccess({categories: response.data}));
    }
  } catch (error) {
    // console.tron.log(error.response, 'getCategories');
  }
}

export function* getSubjects() {
  try {
    const tokenn = (state) => state.auth.token;

    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield axios.get(`${baseUrl.TERAPIA_BELLA}/specialty`);

    if (response.status === 200) {
      yield put(getSubjectsSuccess({subjects: response.data}));
    }
  } catch (error) {
    // console.tron.log(error.response, 'getSubjects');
  }
}

export function* getTabButtons({payload}) {
  try {
    const tokenn = (state) => state.auth.token;
    const {userId} = payload;

    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield axios.get(`${baseUrl.BELLA}/action/${userId}`);

    if (response.status === 200) {
      yield put(getTabButtonsSuccess({tabButtons: response.data}));
    }
  } catch (error) {
    // console.tron.log(error.response, 'getTabButtons');
  }
}

export function* getButtonsActions({payload}) {
  try {
    const tokenn = (state) => state.auth.token;
    const {userId, buttonId} = payload;

    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield axios.post(
      `${baseUrl.BELLA}/action/${buttonId}/user/${userId}`,
    );

    if (response.status === 200) {
      yield put(getButtonsActionsSuccess({buttonActions: response.data}));
    }
  } catch (error) {
    // console.tron.log(error.response, 'getButtonsActions');
  }
}

export function* setSpecialtySelected({payload}) {
  try {
    const tokenn = (state) => state.auth.token;
    const {userId, specialtyId} = payload;

    const token = yield select(tokenn);

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    yield axios.post(
      `${baseUrl.BELLA}/specialty/${specialtyId}/user/${userId}`,
    );
  } catch (error) {
    // console.tron.log(error.response, 'setSpecialtySelected');
  }
}

export default all([
  takeLatest('@specialty/GET_SPECIALTIES_REQUEST', getSpecialties),
  takeLatest('@specialty/GET_CATEGORIES_REQUEST', getCategories),
  takeLatest('@specialty/GET_SUBJECTS_REQUEST', getSubjects),
  takeLatest('@specialty/GET_TABBUTTONS_REQUEST', getTabButtons),
  takeLatest('@specialty/GET_BUTTONS_ACTIONS_REQUEST', getButtonsActions),
  takeLatest('@specialty/SET_SPECIALTY_SELECTED_REQUEST', setSpecialtySelected),
]);
