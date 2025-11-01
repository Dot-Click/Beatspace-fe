import { AUTH_CONSTANTS } from '../constants/authConstants';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: null,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login Cases
    case AUTH_CONSTANTS.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case AUTH_CONSTANTS.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
      };

    case AUTH_CONSTANTS.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
        error: action.payload,
      };

    // Logout Cases
    case AUTH_CONSTANTS.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_CONSTANTS.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
        error: null,
      };

    case AUTH_CONSTANTS.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // Token Cases
    case AUTH_CONSTANTS.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: !!action.payload,
      };

    case AUTH_CONSTANTS.CLEAR_TOKEN:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    // User Cases
    case AUTH_CONSTANTS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case AUTH_CONSTANTS.CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    // Check Auth Cases
    case AUTH_CONSTANTS.CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_CONSTANTS.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        error: null,
      };

    case AUTH_CONSTANTS.CHECK_AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
        error: action.payload || null,
      };

    default:
      return state;
  }
};

export default authReducer;

