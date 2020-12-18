import produce from "immer";

const INITIAL_STATE = {
  usersHighRisk: [],
  usersWithoutMonitoring: [],
  historyCalls: [],
  clientProfile: {},
};

export default function list(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@lists/SET_USERS_HIGH_RISK": {
        draft.usersHighRisk = action.payload.data;
        break;
      }
      case "@lists/SET_USERS_WITHOUT_MONITORING": {
        draft.usersWithoutMonitoring = action.payload.data;
        break;
      }
      case "@lists/SET_HISTORY_CALLS": {
        draft.historyCalls = action.payload.data;
        break;
      }
      case "@lists/SET_PROFILE_BY_ID": {
        draft.clientProfile = action.payload.data;
        break;
      }
      case "@lists/CLEAR_PROFILE_BY_ID": {
        draft.clientProfile = '';
        break;
      }
      default:
    }
  });
}
