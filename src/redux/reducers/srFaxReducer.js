import { SR_FAX } from "../actions/utilities";

const INITIAL_STATE = {
  getSrFaxInboxLoading: false,
  getSrFaxInboxSuccess: false,
  getSrFaxInboxFailure: false,
  getSrFaxInbox: null,
  retrieveFaxLoading: false,
  retrieveFaxSuccess: false,
  retrieveFaxFailure: false,
  retrieveFax: null,
  queueFaxLoading: false,
  queueFaxSuccess: false,
  queueFaxFailure: false,
  queueFax: null,
};

export const srFaxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SR_FAX.GET_SR_FAX_INBOX_LOADING:
      return {
        ...state,
        getSrFaxInboxLoading: true,
        getSrFaxInboxSuccess: false,
        getSrFaxInboxFailure: false,
        getSrFaxInboxError: null,
      };
    case SR_FAX.GET_SR_FAX_INBOX_SUCCESS:
      return {
        ...state,
        getSrFaxInboxLoading: false,
        getSrFaxInboxSuccess: true,
        getSrFaxInboxFailure: false,
        getSrFaxInboxError: null,
        getSrFaxInbox: action.payload,
      };
    case SR_FAX.GET_SR_FAX_INBOX_FAILURE:
      return {
        ...state,
        getSrFaxInboxLoading: false,
        getSrFaxInboxSuccess: false,
        getSrFaxInboxFailure: true,
        getSrFaxInboxError: action.payload,
        getSrFaxInbox: null,
      };

    case SR_FAX.RETRIEVE_FAX_LOADING:
      return {
        ...state,
        retrieveFaxLoading: true,
        retrieveFaxSuccess: false,
        retrieveFaxFailure: false,
        retrieveFaxError: null,
        retrieveFax: null,
      };
    case SR_FAX.RETRIEVE_FAX_SUCCESS:
      return {
        ...state,
        retrieveFaxLoading: false,
        retrieveFaxSuccess: true,
        retrieveFaxFailure: false,
        retrieveFaxError: null,
        retrieveFax: action.payload,
      };
    case SR_FAX.RETRIEVE_FAX_FAILURE:
      return {
        ...state,
        retrieveFaxLoading: false,
        retrieveFaxSuccess: false,
        retrieveFaxFailure: true,
        retrieveFaxError: action.payload,
        retrieveFax: null,
      };

    case SR_FAX.QUEUE_FAX_LOADING:
      return {
        ...state,
        queueFaxLoading: true,
        queueFaxSuccess: false,
        queueFaxFailure: false,
        queueFaxError: null,
        queueFax: null,
      };
    case SR_FAX.QUEUE_FAX_SUCCESS:
      return {
        ...state,
        queueFaxLoading: false,
        queueFaxSuccess: true,
        queueFaxFailure: false,
        queueFaxError: null,
        queueFax: action.payload,
      };
    case SR_FAX.QUEUE_FAX_FAILURE:
      return {
        ...state,
        queueFaxLoading: false,
        queueFaxSuccess: false,
        queueFaxFailure: true,
        queueFaxError: action.payload,
        queueFax: null,
      };

    default:
      return state;
  }
};
