import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllOperators = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_OPERATORS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_OPERATORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_OPERATORS_FAILED,
      payload: err
    });
  }
};

export const fetchOneOperator = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_OPERATORS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_OPERATORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_OPERATORS_FAILED,
      payload: err
    });
  }
};

export const addOperator = newOperator => async dispatch => {
  dispatch({
    type: types.ADD_OPERATORS_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newOperator);
    dispatch({
      type: types.ADD_OPERATORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_OPERATORS_FAILED,
      payload: err
    });
  }
};

export const removeOperator = id => async dispatch => {
  dispatch({
    type: types.REMOVE_OPERATORS_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_OPERATORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_OPERATORS_FAILED,
      payload: err
    });
  }
};
