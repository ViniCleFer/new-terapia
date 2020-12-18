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
      // case "@professionals/SET_CHANGE_PROFESSIONAL_STATUS": {
      //   // professionalId, professionalStatus
      //   console.log(action.payload.professionalId)
      //   // console.log(draft.professionals.map(idd => idd.id))

      //   const profIndex = draft.professionals.filter(
      //     profis => profis.professional.id === action.payload.professionalId
      //   );

      //   // console.log(profIndex.length, action.payload.professionalId)

      //   if (profIndex.length > 0) {
      //     draft.professionals.professional.active === action.payload.professionalStatus
      //   }
      //   break;
      // }
      default:
    }
  });
}
