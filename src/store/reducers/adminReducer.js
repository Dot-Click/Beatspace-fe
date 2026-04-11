import { ADMIN_CONSTANTS } from '../constants/adminConstants';

const initialState = {
  dashboardData: null,
  merchs: [],
  isLoading: false,
  isLoadingMerchs: false,
  isCreatingMerch: false,
  isDeletingMerch: false,
  error: null,
  merchsError: null,
  createMerchError: null,
  deleteMerchError: null,
  isUpdatingMerch: false,
  updateMerchError: null,
  comics: [],
  isLoadingComics: false,
  isCreatingComic: false,
  isDeletingComic: false,
  isUpdatingComic: false,
  comicsError: null,
  createComicError: null,
  deleteComicError: null,
  updateComicError: null,
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

    case ADMIN_CONSTANTS.CREATE_MERCH_REQUEST:
      return {
        ...state,
        isCreatingMerch: true,
        createMerchError: null,
      };

    case ADMIN_CONSTANTS.CREATE_MERCH_SUCCESS:
      return {
        ...state,
        isCreatingMerch: false,
        createMerchError: null,
      };

    case ADMIN_CONSTANTS.CREATE_MERCH_FAILURE:
      return {
        ...state,
        isCreatingMerch: false,
        createMerchError: action.payload,
      };

    case ADMIN_CONSTANTS.GET_MERCHS_REQUEST:
      return {
        ...state,
        isLoadingMerchs: true,
        merchsError: null,
      };

    case ADMIN_CONSTANTS.GET_MERCHS_SUCCESS:
      return {
        ...state,
        merchs: action.payload,
        isLoadingMerchs: false,
        merchsError: null,
      };

    case ADMIN_CONSTANTS.GET_MERCHS_FAILURE:
      return {
        ...state,
        isLoadingMerchs: false,
        merchsError: action.payload,
      };

    case ADMIN_CONSTANTS.DELETE_MERCH_REQUEST:
      return {
        ...state,
        isDeletingMerch: true,
        deleteMerchError: null,
      };

    case ADMIN_CONSTANTS.DELETE_MERCH_SUCCESS:
      return {
        ...state,
        merchs: state.merchs.filter((m) => m._id !== action.payload),
        isDeletingMerch: false,
        deleteMerchError: null,
      };

    case ADMIN_CONSTANTS.DELETE_MERCH_FAILURE:
      return {
        ...state,
        isDeletingMerch: false,
        deleteMerchError: action.payload,
      };

    case ADMIN_CONSTANTS.UPDATE_MERCH_REQUEST:
      return {
        ...state,
        isUpdatingMerch: true,
        updateMerchError: null,
      };

    case ADMIN_CONSTANTS.UPDATE_MERCH_SUCCESS:
      return {
        ...state,
        isUpdatingMerch: false,
        updateMerchError: null,
        merchs: state.merchs.map((m) => (m._id === action.payload._id ? action.payload : m)),
      };

    case ADMIN_CONSTANTS.UPDATE_MERCH_FAILURE:
      return {
        ...state,
        isUpdatingMerch: false,
        updateMerchError: action.payload,
      };

    case ADMIN_CONSTANTS.GET_COMICS_REQUEST:
      return {
        ...state,
        isLoadingComics: true,
        comicsError: null,
      };

    case ADMIN_CONSTANTS.GET_COMICS_SUCCESS:
      return {
        ...state,
        comics: action.payload,
        isLoadingComics: false,
        comicsError: null,
      };

    case ADMIN_CONSTANTS.GET_COMICS_FAILURE:
      return {
        ...state,
        isLoadingComics: false,
        comicsError: action.payload,
      };

    case ADMIN_CONSTANTS.CREATE_COMIC_REQUEST:
      return {
        ...state,
        isCreatingComic: true,
        createComicError: null,
      };

    case ADMIN_CONSTANTS.CREATE_COMIC_SUCCESS:
      return {
        ...state,
        isCreatingComic: false,
        createComicError: null,
        comics: [action.payload, ...state.comics],
      };

    case ADMIN_CONSTANTS.CREATE_COMIC_FAILURE:
      return {
        ...state,
        isCreatingComic: false,
        createComicError: action.payload,
      };

    case ADMIN_CONSTANTS.DELETE_COMIC_REQUEST:
      return {
        ...state,
        isDeletingComic: true,
        deleteComicError: null,
      };

    case ADMIN_CONSTANTS.DELETE_COMIC_SUCCESS:
      return {
        ...state,
        comics: state.comics.filter((c) => c._id !== action.payload),
        isDeletingComic: false,
        deleteComicError: null,
      };

    case ADMIN_CONSTANTS.DELETE_COMIC_FAILURE:
      return {
        ...state,
        isDeletingComic: false,
        deleteComicError: action.payload,
      };

    case ADMIN_CONSTANTS.UPDATE_COMIC_REQUEST:
      return {
        ...state,
        isUpdatingComic: true,
        updateComicError: null,
      };

    case ADMIN_CONSTANTS.UPDATE_COMIC_SUCCESS:
      return {
        ...state,
        isUpdatingComic: false,
        updateComicError: null,
        comics: state.comics.map((c) => (c._id === action.payload._id ? action.payload : c)),
      };

    case ADMIN_CONSTANTS.UPDATE_COMIC_FAILURE:
      return {
        ...state,
        isUpdatingComic: false,
        updateComicError: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;