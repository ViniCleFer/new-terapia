export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}

export function setSigned() {
  return {
    type: "@auth/SET_SIGNED",
  };
}

export function saveProfile(profile) {
  return {
    type: "@auth/SAVE_PROFILE",
    payload: { profile },
  };
}

export function setActiveCallData(data) {
  return {
    type: "@auth/SET_ACTIVE_CALL_DATA",
    payload: { data },
  };
}

export function requestCreateProfile({
  name,
  doc,
  email,
  birthDate,
  phoneNumber,
  avatar,
  address,
  number,
  complement,
  neighborhood,
  state,
  city,
  cep,
  description,
  docValue,
  docDescription,
  value,
  pageUrl,
  videoUrl,
  graduates,
  experiences,
  specialties,
}) {
  return {
    type: '@auth/REQUEST_CREATE_PROFILE',
    payload: {
      name,
      doc,
      email,
      birthDate,
      phoneNumber,
      avatar,
      address,
      number,
      complement,
      neighborhood,
      state,
      city,
      cep,
      description,
      docValue,
      docDescription,
      value,
      pageUrl,
      videoUrl,
      graduates,
      experiences,
      specialties,
    },
  };
}

export function requestUpdateProfile(profile) {
  return {
    type: '@auth/REQUEST_UPDATE_PROFILE',
    payload: { profile },
  };
}

export function clearDocError() {
  return {
    type: '@auth/CLEAR_DOC_ERROR',
    payload: {},
  };
}

export function setValidDoc(status) {
  return {
    type: '@auth/SET_VALID_DOC',
    payload: {status},
  };
}

export function setBirthError() {
  return {
    type: '@auth/SET_BIRTH_ERROR',
    payload: {},
  };
}

export function clearBirthError() {
  return {
    type: '@auth/CLEAR_BIRTH_ERROR',
    payload: {},
  };
}

export function setValidEmail(status) {
  return {
    type: '@auth/SET_VALID_EMAIL',
    payload: {status},
  };
}

// export function requestCreateProfessionalProfile({
//   description,
//   docValue,
//   docDescription,
//   value,
//   pageUrl,
//   videoUrl,
//   profileId,
//   graduates,
//   experiences,
//   specialties,
// }) {
//   return {
//     type: '@auth/REQUEST_CREATE_PROFESSIONAL_PROFILE',
//     payload: {
//       description,
//       docValue,
//       docDescription,
//       value,
//       pageUrl,
//       videoUrl,
//       profileId,
//       graduates,
//       experiences,
//       specialties,
//     },
//   };
// }

export function clearEmailError() {
  return {
    type: '@auth/CLEAR_EMAIL_ERROR',
    payload: {},
  };
}

export function cancelLoading() {
  return {
    type: '@CANCEL_LOADING',
    payload: {},
  };
}

export function docError() {
  return {
    type: '@auth/DOC_ERROR',
    payload: {},
  };
}

export function emailError() {
  return {
    type: '@auth/EMAIL_ERROR',
    payload: {},
  };
}

export function failureAutenticationCode(status) {
  return {
    type: '@auth/FAILURE_AUTENTICATION_CODE',
    payload: {status},
  };
}

export function setFCMToken(fcmToken, userId) {
  return {
    type: '@auth/SET_FCM_TOKEN',
    payload: {fcmToken, userId},
  };
}

export function setUserId(token, userId) {
  return {
    type: '@auth/SET_USERID',
    payload: {userId, token},
  };
}

export function setPhoneError() {
  return {
    type: '@auth/SET_PHONE_ERROR',
    payload: {},
  };
}

export function clearPhoneError() {
  return {
    type: '@auth/CLEAR_PHONE_ERROR',
    payload: {},
  };
}
