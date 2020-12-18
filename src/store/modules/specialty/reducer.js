import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  specialties: [],
  categories: [],
  subjects: [],
  tabButtons: [],
};

export default function specialty(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@specialty/GET_SPECIALTIES_SUCCESS': {
        draft.specialties = action.payload.specialties;
        break;
      }
      case '@specialty/GET_CATEGORIES_REQUEST': {
        draft.loading = true;
        draft.categories = action.payload.categories;
        break;
      }
      case '@specialty/GET_CATEGORIES_SUCCESS': {
        draft.loading = false;
        draft.categories = action.payload.categories;
        break;
      }
      case '@specialty/GET_SUBJECTS_SUCCESS': {
        draft.subjects = action.payload.subjects;
        break;
      }
      case '@specialty/GET_TABBUTTONS_SUCCESS': {
        draft.tabButtons = action.payload.tabButtons;
        break;
      }
      default:
        break;
    }
  });
}
