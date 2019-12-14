import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllSupervisors = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_SUPERVISORS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_SUPERVISORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_SUPERVISORS_FAILED,
      payload: err
    });
  }
};

export const fetchOneSupervisor = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_SUPERVISORS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_SUPERVISORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_SUPERVISORS_FAILED,
      payload: err
    });
  }
};

export const addSupervisor = newSupervisor => async dispatch => {
  dispatch({
    type: types.ADD_SUPERVISORS_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newSupervisor);
    dispatch({
      type: types.ADD_SUPERVISORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_SUPERVISORS_FAILED,
      payload: err
    });
  }
};

export const removeSupervisor = id => async dispatch => {
  dispatch({
    type: types.REMOVE_SUPERVISORS_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_SUPERVISORS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_SUPERVISORS_FAILED,
      payload: err
    });
  }
};
export const editSupervisor = (updatedSupervisor, id) => async dispatch => {
  dispatch({
    type: types.EDIT_SUPERVISOR_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedSupervisor);
    dispatch({
      type: types.EDIT_SUPERVISOR_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_SUPERVISOR_FAILED,
      payload: err
    });
  }
};
