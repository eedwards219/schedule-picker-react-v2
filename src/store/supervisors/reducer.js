import * as types from "./constants";

const initialState = {
  all: []
};

function supervisorsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_SUPERVISORS_PENDING:
    case types.ADD_SUPERVISORS_PENDING:
    case types.REMOVE_SUPERVISORS_PENDING:
      return state;

    case types.FETCH_ALL_SUPERVISORS_FAILED:
    case types.ADD_SUPERVISORS_FAILED:
    case types.REMOVE_SUPERVISORS_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_SUPERVISORS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_SUPERVISORS_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_SUPERVISORS_SUCCESS:
      return {
        ...state,
        all: state.all.filter(teeTime => teeTime.id === action.payload.id)
      };

    default:
      return state;
  }
}
export default supervisorsReducer;
