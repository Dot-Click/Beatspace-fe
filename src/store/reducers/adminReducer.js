  import { ADMIN_CONSTANTS } from '../constants/adminConstants';

  const initialState = {
    dashboardData: null,
    isLoading: false,
    error: null,
  };

  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      // Dashboard Cases
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

      case ADMIN_CONSTANTS.GET_BEATS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
        
      case ADMIN_CONSTANTS.GET_BEATS_SUCCESS:
        return {
          ...state,
          beats: action.payload,
          isLoading: false,
          error: null,
        };
        
      case ADMIN_CONSTANTS.GET_BEATS_FAILURE:
        return {
          ...state,
          beats: null,
          isLoading: false,
          error: action.payload,
        };
        
      case ADMIN_CONSTANTS.GET_BEAT_BY_ID_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
        
      case ADMIN_CONSTANTS.GET_BEAT_BY_ID_SUCCESS:
      return {
        ...state,
        beat: action.payload,
        isLoading: false,
        error: null,
      };
        
      case ADMIN_CONSTANTS.GET_BEAT_BY_ID_FAILURE:
        return {
          ...state,
          beat: null,
          isLoading: false,
          error: action.payload,
        };
        
      case ADMIN_CONSTANTS.CREATE_BEAT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
        
        case ADMIN_CONSTANTS.CREATE_BEAT_SUCCESS:
      default:
        return state;
    }
  };

  export default adminReducer;