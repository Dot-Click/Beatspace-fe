import custAxios, { formAxios } from '../../configs/axios.config';
import { BEAT_CONSTANTS } from '../constants/beatConstants';

export const getBeats = (category) => async (dispatch) => {
  dispatch({
    type: BEAT_CONSTANTS.GET_BEATS_REQUEST,
  });
  try {
    const url = category ? `/admin/getBeats?category=${category}` : "/admin/getBeats";
    const res = await custAxios.get(url);
    if (res?.data?.data) {
      dispatch({
        type: BEAT_CONSTANTS.GET_BEATS_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: BEAT_CONSTANTS.GET_BEATS_FAILURE,
      payload: error?.response?.data?.message || "Server Error",
    });
    return error?.response?.data;
  }
};

export const getBeatById = (id) => async (dispatch) => {
  dispatch({
    type: BEAT_CONSTANTS.GET_BEAT_BY_ID_REQUEST,
  });
  try {
    const res = await custAxios.get(`/admin/getBeat/${id}`);
    if (res?.data?.data) {
      dispatch({
        type: BEAT_CONSTANTS.GET_BEAT_BY_ID_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: BEAT_CONSTANTS.GET_BEAT_BY_ID_FAILURE,
      payload: error?.response?.data?.message || "Server Error",
    });
    return error?.response?.data;
  }
};

export const createBeat = (formData) => async (dispatch) => {
  dispatch({
    type: BEAT_CONSTANTS.CREATE_BEAT_REQUEST,
  });
  try {
    const res = await formAxios.post("/admin/addBeat", formData);
    if (res?.data?.success) {
      dispatch({
        type: BEAT_CONSTANTS.CREATE_BEAT_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: BEAT_CONSTANTS.CREATE_BEAT_FAILURE,
      payload: error?.response?.data?.message || "Server Error",
    });
    return error?.response?.data;
  }
};

export const deleteBeat = (id) => async (dispatch) => {
  dispatch({
    type: BEAT_CONSTANTS.DELETE_BEAT_REQUEST,
  });
  try {
    const res = await custAxios.delete(`/admin/deleteBeat/${id}`);
    if (res?.data?.success) {
      dispatch({
        type: BEAT_CONSTANTS.DELETE_BEAT_SUCCESS,
        payload: id,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: BEAT_CONSTANTS.DELETE_BEAT_FAILURE,
      payload: error?.response?.data?.message || "Server Error",
    });
    return error?.response?.data;
  }
};

export const updateBeat = (id, formData) => async (dispatch) => {
  dispatch({
    type: BEAT_CONSTANTS.UPDATE_BEAT_REQUEST,
  });
  try {
    const res = await formAxios.patch(`/admin/updateBeat/${id}`, formData);
    if (res?.data?.success) {
      dispatch({
        type: BEAT_CONSTANTS.UPDATE_BEAT_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: BEAT_CONSTANTS.UPDATE_BEAT_FAILURE,
      payload: error?.response?.data?.message || "Server Error",
    });
    return error?.response?.data;
  }
};
