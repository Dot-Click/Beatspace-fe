import custAxios from '../../configs/axios.config';
import { ADMIN_CONSTANTS } from '../constants/adminConstants';

export const dashboard = () => async (dispatch) => {
  dispatch({
    type: ADMIN_CONSTANTS.DASHBOARD_REQUEST,
  });
  try {
    const res = await custAxios.get("/admin/dashboard");
    if (res?.data?.data) {
      dispatch({
        type: ADMIN_CONSTANTS.DASHBOARD_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: ADMIN_CONSTANTS.DASHBOARD_FAILURE,
      payload: error?.response?.data?.message || "Server Error",
    });
    return error?.response?.data;
  }
};

export const createMerch = (formData) => async (dispatch) => {
  dispatch({
    type: ADMIN_CONSTANTS.CREATE_MERCH_REQUEST,
  });
  try {
    const res = await custAxios.post('/admin/addMerch', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res?.data?.success) {
      dispatch({
        type: ADMIN_CONSTANTS.CREATE_MERCH_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: ADMIN_CONSTANTS.CREATE_MERCH_FAILURE,
      payload: error?.response?.data?.message || 'Server Error',
    });
    return error?.response?.data;
  }
};

export const getMerchs = () => async (dispatch) => {
  dispatch({
    type: ADMIN_CONSTANTS.GET_MERCHS_REQUEST,
  });
  try {
    const res = await custAxios.get('/admin/getMerchs');
    if (res?.data?.success) {
      dispatch({
        type: ADMIN_CONSTANTS.GET_MERCHS_SUCCESS,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: ADMIN_CONSTANTS.GET_MERCHS_FAILURE,
      payload: error?.response?.data?.message || 'Server Error',
    });
    return error?.response?.data;
  }
};

export const deleteMerch = (id) => async (dispatch) => {
  dispatch({
    type: ADMIN_CONSTANTS.DELETE_MERCH_REQUEST,
  });
  try {
    const res = await custAxios.delete(`/admin/deleteMerch/${id}`);
    if (res?.data?.success) {
      dispatch({
        type: ADMIN_CONSTANTS.DELETE_MERCH_SUCCESS,
        payload: id,
      });
    }
    return res?.data;
  } catch (error) {
    dispatch({
      type: ADMIN_CONSTANTS.DELETE_MERCH_FAILURE,
      payload: error?.response?.data?.message || 'Server Error',
    });
    return error?.response?.data;
  }
};
