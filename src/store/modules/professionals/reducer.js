import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  professionals: [],
};

export default function professionals(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@professionals/GET_ALL_PROFESSIONALS_REQUEST": {
        break;
      }
      case "@professionals/GET_ALL_PROFESSIONALS_SUCCESS": {
        draft.professionals = action.payload.professionals;
        break;
      }
      default:
    }
  });
}
