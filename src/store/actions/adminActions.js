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
