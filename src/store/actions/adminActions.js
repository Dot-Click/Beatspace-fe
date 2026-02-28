import custAxios from '../../configs/axios.config';
import { ADMIN_CONSTANTS } from '../constants/adminConstants';

export const dashboard = () => async (dispatch) => {
    dispatch({
      type: ADMIN_CONSTANTS.DASHBOARD_REQUEST,
    });
    try {
      const res = await custAxios.get("/admin/dashboard");
  
      if (res?.data?.data) {
        await dispatch({
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

  export const getBeats = () => async (dispatch) => {
    dispatch({
      type: ADMIN_CONSTANTS.GET_BEATS_REQUEST,
    });
    try {
      const res = await custAxios.get("/admin/beats");
      if (res?.data?.data) {
        dispatch({
          type: ADMIN_CONSTANTS.GET_BEATS_SUCCESS,
          payload: res?.data?.data,
        });
      }
      return res?.data;
    } catch (error) {
      return error?.response?.data;
    }
  };

  export const getBeatById = (id) => async (dispatch) => {
    dispatch({
      type: ADMIN_CONSTANTS.GET_BEAT_BY_ID_REQUEST,
    });
    try {
      const res = await custAxios.get(`/admin/beats/${id}`);
      if (res?.data?.data) {
        dispatch({
          type: ADMIN_CONSTANTS.GET_BEAT_BY_ID_SUCCESS,
          payload: res?.data?.data,
        });
      }
      return res?.data;
    }
    catch (error) {
      return error?.response?.data;
    }
  };
