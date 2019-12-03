import * as types from "./constants";

const initialState = {
  all: []
};

function operatorReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_OPERATORS_PENDING:
    case types.ADD_OPERATORS_PENDING:
    case types.REMOVE_OPERATORS_PENDING:
      return state;

    case types.FETCH_ALL_OPERATORS_FAILED:
    case types.ADD_OPERATORS_FAILED:
    case types.REMOVE_OPERATORS_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_OPERATORS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_OPERATORS_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_OPERATORS_SUCCESS:
      return {
        ...state,
        all: state.all.filter(operator => operator.id === action.payload.id)
      };

    default:
      return state;
  }
}
export default operatorReducer;
