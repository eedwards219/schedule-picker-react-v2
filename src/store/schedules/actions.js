import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllSchedules = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_SCHEDULES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_SCHEDULES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_SCHEDULES_FAILED,
      payload: err
    });
  }
};

export const fetchOneSchedule = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_SCHEDULES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_SCHEDULES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_SCHEDULES_FAILED,
      payload: err
    });
  }
};

export const addSchedule = newSchedule => async dispatch => {
  dispatch({
    type: types.ADD_SCHEDULES_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newSchedule);
    dispatch({
      type: types.ADD_SCHEDULES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_SCHEDULES_FAILED,
      payload: err
    });
  }
};

export const removeSchedule = id => async dispatch => {
  dispatch({
    type: types.REMOVE_SCHEDULES_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_SCHEDULES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_SCHEDULES_FAILED,
      payload: err
    });
  }
};
export const editSchedule = (updatedSchedule, id) => async dispatch => {
  dispatch({
    type: types.EDIT_SCHEDULES_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedSchedule);
    dispatch({
      type: types.EDIT_SCHEDULES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_SCHEDULES_FAILED,
      payload: err
    });
  }
};
