export function getAllProfessionalsRequest() {
  return {
    type: "@professionals/GET_ALL_PROFESSIONALS_REQUEST",
    payload: {},
  };
}

export function getAllProfessionalsSuccess(professionals) {
  return {
    type: "@professionals/GET_ALL_PROFESSIONALS_SUCCESS",
    payload: { professionals },
  };
}

export function setChangeProfessionalStatus(professionalId, professionalStatus) {
  return {
    type: "@professionals/SET_CHANGE_PROFESSIONAL_STATUS",
    payload: { professionalId, professionalStatus },
  };
}
