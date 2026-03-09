import { ADMIN_CONSTANTS } from '../constants/adminConstants';

const initialState = {
  dashboardData: null,
  isLoading: false,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_CONSTANTS.DASHBOARD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ADMIN_CONSTANTS.DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardData: action.payload,
        isLoading: false,
        error: null,
      };

    case ADMIN_CONSTANTS.DASHBOARD_FAILURE:
      return {
        ...state,
        dashboardData: null,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;