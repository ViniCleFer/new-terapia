import produce from "immer";

// import TokenSchema from "../../../schemas/TokenSchema";

const INITIAL_STATE = {
  token: null,
  signed: null,
  loading: false,
  uid: "",
  FCMToken: "",
  refresh_token: "",
  autorizationCode: "",
  campaign: "",
  autorizationCodeError: false,
  userId: 1,
  profile: [],
  allProfile: "",
  validDoc: true,
  validEmail: true,
  birthError: false,
  emailError: false,
  passwordError: false,
  docError: false,
  phoneError: false,
  domain: "",
  tenant: "",
  activationCodeId: "",
  requiredQuiz: false,
  babyProfile: "",
  babyId: "",
  birthBaby: "",
  autorizationUserError: false,
  activeCallData: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        draft.FCMToken = action.payload.fmcToken;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.refresh_token = action.payload.refresh_token;
        draft.loading = false;
        break;
      }
      case "@auth/SET_USERID": {
        draft.userId = action.payload.userId;
        draft.token = action.payload.token;
        break;
      }
      case "@auth/SET_AUTH_ERROR": {
        draft.autorizationUserError = action.payload.autorizationUserError;
        break;
      }
      case "@auth/SET_BABY_ID": {
        draft.babyId = action.payload.babyId;
        break;
      }
      case "@auth/SET_BABY_BIRTH": {
        draft.birthBaby = action.payload.birthBaby;
        break;
      }
      case "@auth/SIGN_IN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.token = null;
        draft.refresh_token = null;
        draft.signed = false;
        draft.autorizationCode = null;
        draft.userId = "";
        // draft.profile = '';
        draft.FCMToken = "";
        draft.uid = "";
        break;
      }
      case "@auth/SET_TEST_UID": {
        draft.uid = action.payload.uid;
        break;
      }

      case "@auth/SET_SIGNED": {
        draft.signed = true;
        break;
      }

      case "@auth/SET_ACTIVE_CALL_DATA": {
        draft.activeCallData = action.payload.data;
        break;
      }

      case "@auth/REQUEST_AUTENTICATION_CODE": {
        draft.loading = true;
        break;
      }
      case "@auth/REQUEST_CREATE_PROFILE": {
        draft.loading = true;
        break;
      }
      case "@auth/REQUEST_CREATE_BABY_PROFILE": {
        draft.loading = true;
        break;
      }
      case "@auth/CLEAR_ACTIVATION_CODE": {
        draft.autorizationCodeError = false;
        draft.userId = null;
        draft.validDoc = true;
        draft.validEmail = true;
        draft.emailError = false;
        draft.passwordError = false;
        draft.docError = false;
        draft.loading = false;

        break;
      }
      case "@auth/SUCCESS_AUTENTICATION_CODE": {
        draft.autorizationCode = action.payload.autorizationCode;
        draft.autorizationCodeError = false;
        draft.loading = false;
        draft.domain = action.payload.domainId;
        draft.tenant = action.payload.tenantId;
        draft.activationCodeId = action.payload.activationCodeId;
        draft.requiredQuiz = action.payload.requiredQuiz;
        draft.campaign = action.payload.campaign;
        break;
      }
      case "@auth/FAILURE_AUTENTICATION_CODE": {
        draft.autorizationCodeError = action.payload.status;
        draft.loading = false;
        break;
      }
      case "@auth/SAVE_PROFILE": {
        draft.profile = action.payload.profile;
        break;
      }
      case "@auth/SAVE_ALL_PROFILES": {
        draft.allProfile = action.payload.allProfiles;
        break;
      }
      case "@profile/GET_PROFILE_SUCCESS": {
        draft.profile = {
          ...draft.profile,
          ...action.payload.profile,
        };
        break;
      }
      case "@auth/REQUEST_PASSWORD_TEMPORARY": {
        draft.loading = true;
        break;
      }
      case "@auth/REQUEST_UPDATE_PASSWORD": {
        draft.loading = true;
        break;
      }
      case "@CANCEL_LOADING": {
        draft.loading = false;
        break;
      }
      case "@auth/SET_VALID_DOC": {
        draft.validDoc = action.payload.status;
        break;
      }
      case "@auth/SET_VALID_EMAIL": {
        draft.validEmail = action.payload.status;
        break;
      }
      case "@auth/EMAIL_ERROR": {
        draft.emailError = true;
        break;
      }
      case "@auth/CLEAR_EMAIL_ERROR": {
        draft.emailError = false;
        break;
      }
      case '@auth/SET_BIRTH_ERROR': {
        draft.birthError = true;
        break;
      }
      case '@auth/CLEAR_BIRTH_ERROR': {
        draft.birthError = false;
        break;
      }
      case '@auth/SET_PHONE_ERROR': {
        draft.phoneError = true;
        break;
      }
      case '@auth/CLEAR_PHONE_ERROR': {
        draft.phoneError = false;
        break;
      }
      case "@auth/CLEAR_BABY_ID": {
        draft.babyId = "";
        break;
      }
      case "@auth/CLEAR_BABY_BIRTH": {
        draft.birthBaby = "";
        break;
      }
      case "@auth/PASSWORD_ERROR": {
        draft.passwordError = true;
        break;
      }
      case "@auth/CLEAR_PASSWORD_ERROR": {
        draft.passwordError = false;
        break;
      }
      case "@auth/DOC_ERROR": {
        draft.docError = true;
        break;
      }
      case "@auth/CLEAR_DOC_ERROR": {
        draft.docError = false;
        break;
      }
      case "@auth/SET_FCM": {
        draft.FCMToken = action.payload.fcmToken;
        break;
      }
      default:
    }
  });
}
