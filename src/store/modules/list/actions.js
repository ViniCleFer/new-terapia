export function getUsersHighRisk() {
  return {
    type: "@lists/GET_USERS_HIGH_RISK",
    payload: {},
  };
}

export function setUsersByHighRisk(data) {
  return {
    type: "@lists/SET_USERS_HIGH_RISK",
    payload: { data },
  };
}

export function getUsersWithoutMonitoring() {
  return {
    type: "@lists/GET_USERS_WITHOUT_MONITORING",
    payload: {},
  };
}

export function setUsersWithoutMonitoring(data) {
  return {
    type: "@lists/SET_USERS_WITHOUT_MONITORING",
    payload: { data },
  };
}

export function getHistoryCalls(userId) {
  return {
    type: "@lists/GET_HISTORY_CALLS",
    payload: { userId },
  };
}

export function setHistoryCalls(data) {
  return {
    type: "@lists/SET_HISTORY_CALLS",
    payload: { data },
  };
}

export function getProfileById(userId) {
  return {
    type: "@lists/GET_PROFILE_BY_ID",
    payload: { userId },
  };
}

export function setProfileById(data) {
  return {
    type: "@lists/SET_PROFILE_BY_ID",
    payload: { data },
  };
}

export function clearProfileById(data) {
  return {
    type: "@lists/CLEAR_PROFILE_BY_ID",
  };
}
