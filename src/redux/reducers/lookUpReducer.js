import { LOOKUP_REQUEST } from "../actions/utilities";
const INITIAL_STATE = {
  getAllLookupLoading: false,
  getAllLookupSuccess: false,
  getAllLookupFailure: false,
  getAllLookupError: null,
  getAllLookup: [],

  getAllLookupKeysLoading: false,
  getAllLookupKeysSuccess: false,
  getAllLookupKeysFailure: false,
  getAllLookupKeysError: null,
  getAllLookupKeys: [],

  getLookupByTypeLoading: false,
  getLookupByTypeSuccess: false,
  getLookupByTypeFailure: false,
  getLookupByTypeError: null,
  getLookupByType: [],
};

export const LookUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOOKUP_REQUEST.GET_ALL_LOOKUP_REQUEST:
      return {
        ...state,
        getAllLookupLoading: true,
        getAllLookupSuccess: false,
        getAllLookupFailure: false,
        getAllLookupError: null,
        getAllLookup: [],
      };
    case LOOKUP_REQUEST.GET_ALL_LOOKUP_SUCCESS:
      return {
        ...state,
        getAllLookupLoading: false,
        getAllLookupSuccess: true,
        getAllLookupFailure: false,
        getAllLookupError: null,
        getAllLookup: action.payload,
      };
    case LOOKUP_REQUEST.GET_ALL_LOOKUP_FAILURE:
      return {
        ...state,
        getAllLookupLoading: false,
        getAllLookupSuccess: false,
        getAllLookupFailure: true,
        getAllLookupError: action.payload,
      };
    case LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_REQUEST:
      return {
        ...state,
        getLookupByTypeLoading: true,
        getLookupByTypeSuccess: false,
        getLookupByTypeFailure: false,
        getLookupByTypeError: null,
      };
    case LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_SUCCESS:
      return {
        ...state,
        getLookupByTypeLoading: false,
        getLookupByTypeSuccess: true,
        getLookupByTypeFailure: false,
        getLookupByTypeError: null,
        getLookupByType: action.payload,
      };
    case LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_FAILURE:
      return {
        ...state,
        getLookupByTypeLoading: false,
        getLookupByTypeSuccess: true,
        getLookupByTypeFailure: false,
        getLookupByTypeError: action.payload,
      };
    case LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_REQUEST:
      return {
        ...state,
        getAllLookupKeysLoading: true,
        getAllLookupKeysSuccess: false,
        getAllLookupKeysFailure: false,
        getAllLookupKeysError: null,
      };
    case LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_SUCCESS:
      return {
        ...state,
        getAllLookupKeysLoading: false,
        getAllLookupKeysSuccess: true,
        getAllLookupKeysFailure: false,
        getAllLookupKeysError: null,
        getAllLookupKeys: action.payload,
      };
    case LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_FAILURE:
      return {
        ...state,
        getAllLookupKeysLoading: false,
        getAllLookupKeysSuccess: false,
        getAllLookupKeysFailure: true,
        getAllLookupKeysError: action.payload,
      };
    default:
      return state;
  }
};
