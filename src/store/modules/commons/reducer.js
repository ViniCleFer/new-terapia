import produce from 'immer';

const INITIAL_STATE = {
  availableButtons: true,
};

export default function commons(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@commons/AVAILABLE_BUTTONS': {
        draft.availableButtons = action.payload.status;
        break;
      }
      default:
    }
  });
}
