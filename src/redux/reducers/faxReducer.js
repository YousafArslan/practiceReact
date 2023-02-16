import { FAX } from "../actions/utilities";

const INITIAL_STATE = {
  createFaxLoading: false,
  createFaxSuccess: false,
  createFaxFailure: false,
  createFaxError: null,
  createFax: null,
  getFaxByIdLoading: false,
  getFaxByIdSuccess: false,
  getFaxByIdFailure: false,
  getFaxByIdError: null,
  getFaxById: null,
  resendFaxLoading: false,
  resendFaxSuccess: false,
  resendFaxFailure: false,
  resendFaxError: null,
  resendFax: null,
};

export const faxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAX.CREATE_FAX_LOADING:
      return {
        ...state,
        createFaxLoading: true,
        createFaxSuccess: false,
        createFaxFailure: false,
        createFaxError: null,
      };
    case FAX.CREATE_FAX_SUCCESS:
      return {
        ...state,
        createFaxLoading: false,
        createFaxSuccess: true,
        createFaxFailure: false,
        createFaxError: null,
        createFax: action.payload,
      };
    case FAX.CREATE_FAX_FAILURE:
      return {
        ...state,
        createFaxLoading: false,
        createFaxSuccess: false,
        createFaxFailure: true,
        createFaxError: action.payload,
        createFax: null,
      };

    case FAX.GET_FAX_BY_ID_LOADING:
      return {
        ...state,
        getFaxByIdLoading: true,
        getFaxByIdSuccess: false,
        getFaxByIdFailure: false,
        getFaxByIdError: null,
      };
    case FAX.GET_FAX_BY_ID_SUCCESS:
      return {
        ...state,
        getFaxByIdLoading: false,
        getFaxByIdSuccess: true,
        getFaxByIdFailure: false,
        getFaxByIdError: null,
        getFaxById: action.payload,
      };
    case FAX.GET_FAX_BY_ID_FAILURE:
      return {
        ...state,
        getFaxByIdLoading: false,
        getFaxByIdSuccess: false,
        getFaxByIdFailure: true,
        getFaxByIdError: action.payload,
        getFaxById: null,
      };

    case FAX.RESEND_FAX_LOADING:
      return {
        ...state,
        resendFaxLoading: true,
        resendFaxSuccess: false,
        resendFaxFailure: false,
        resendFaxError: null,
      };
    case FAX.RESEND_FAX_SUCCESS:
      return {
        ...state,
        resendFaxLoading: false,
        resendFaxSuccess: true,
        resendFaxFailure: false,
        resendFaxError: null,
        resendFax: action.payload,
      };
    case FAX.RESEND_FAX_FAILURE:
      return {
        ...state,
        resendFaxLoading: false,
        resendFaxSuccess: false,
        resendFaxFailure: true,
        resendFaxError: action.payload,
        resendFax: null,
      };

    default:
      return state;
  }
};
