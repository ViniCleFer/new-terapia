export function getSpecialtiesRequest() {
  return {
    type: '@specialty/GET_SPECIALTIES_REQUEST',
  };
}

export function getSpecialtiesSuccess({specialties}) {
  return {
    type: '@specialty/GET_SPECIALTIES_SUCCESS',
    payload: {specialties},
  };
}

export function getCategoriesRequest({userId}) {
  return {
    type: '@specialty/GET_CATEGORIES_REQUEST',
    payload: {userId},
  };
}

export function getCategoriesSuccess({categories}) {
  return {
    type: '@specialty/GET_CATEGORIES_SUCCESS',
    payload: {categories},
  };
}

export function getSubjectsRequest() {
  return {
    type: '@specialty/GET_SUBJECTS_REQUEST',
  };
}

export function getSubjectsSuccess({subjects}) {
  return {
    type: '@specialty/GET_SUBJECTS_SUCCESS',
    payload: {subjects},
  };
}

export function getTabButtonsRequest({userId}) {
  return {
    type: '@specialty/GET_TABBUTTONS_REQUEST',
    payload: {userId},
  };
}

export function getTabButtonsSuccess({tabButtons}) {
  return {
    type: '@specialty/GET_TABBUTTONS_SUCCESS',
    payload: {tabButtons},
  };
}

export function getButtonsActionsRequest({userId, buttonId}) {
  return {
    type: '@specialty/GET_BUTTONS_ACTIONS_REQUEST',
    payload: {userId, buttonId},
  };
}

export function getButtonsActionsSuccess({buttonActions}) {
  return {
    type: '@specialty/GET_BUTTONS_ACTIONS_SUCCESS',
    payload: {buttonActions},
  };
}

export function setSpecialtySelectedRequest({specialtyId, userId}) {
  return {
    type: '@specialty/SET_SPECIALTY_SELECTED_REQUEST',
    payload: {specialtyId, userId},
  };
}
