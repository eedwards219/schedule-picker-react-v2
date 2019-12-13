import * as types from "./constants";

const initialState = {
  all: []
};

function schedulesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_SCHEDULES_PENDING:
    case types.ADD_SCHEDULES_PENDING:
    case types.REMOVE_SCHEDULES_PENDING:
      return state;

    case types.FETCH_ALL_SCHEDULES_FAILED:
    case types.ADD_SCHEDULES_FAILED:
    case types.REMOVE_SCHEDULES_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_SCHEDULES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_SCHEDULES_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_SCHEDULES_SUCCESS:
      return {
        ...state,
        all: state.all.filter(schedule => schedule.id === action.payload.id)
      };
    case types.EDIT_SCHEDULES_SUCCESS:
      return {
        ...state,
        all: [
          action.payload,
          ...state.all.filter(schedule => schedule.id !== action.payload.id)
        ]
      };

    default:
      return state;
  }
}
export default schedulesReducer;
