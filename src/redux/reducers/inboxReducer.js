import { INBOX } from "../actions/utilities";

const INITIAL_STATE = {
  createUpdatePatientInboxLoading: false,
  createUpdatePatientInboxSuccess: false,
  createUpdatePatientInboxFailure: false,
  createUpdatePatientInboxError: null,
  createUpdatePatientInbox: [],
  createUpdateReferralInboxLoading: false,
  createUpdateReferralInboxSuccess: false,
  createUpdateReferralInboxFailure: false,
  createUpdateReferralInboxError: null,
  createUpdateReferralInbox: [],
};
export const inboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INBOX.CREATE_UPDATE_PATIENT_INBOX_LOADING:
      return {
        ...state,
        createUpdatePatientInboxLoading: true,
        createUpdatePatientInboxSuccess: false,
        createUpdatePatientInboxFailure: false,
        createUpdatePatientInboxError: null,
        createUpdatePatientInbox: [],
      };
    case INBOX.CREATE_UPDATE_PATIENT_INBOX_SUCCESS:
      return {
        ...state,
        createUpdatePatientInboxLoading: false,
        createUpdatePatientInboxSuccess: true,
        createUpdatePatientInboxFailure: false,
        createUpdatePatientInboxError: null,
        createUpdatePatientInbox: action.payload,
      };
    case INBOX.CREATE_UPDATE_PATIENT_INBOX_FAILURE:
      return {
        ...state,
        createUpdatePatientInboxLoading: false,
        createUpdatePatientInboxSuccess: false,
        createUpdatePatientInboxFailure: true,
        createUpdatePatientInboxError: action.payload,
        createUpdatePatientInbox: [],
      };

    case INBOX.CREATE_UPDATE_REFERRAL_INBOX_LOADING:
      return {
        ...state,
        createUpdateRefferalInboxLoading: true,
        createUpdateRefferalInboxSuccess: false,
        createUpdateRefferalInboxFailure: false,
        createUpdateRefferalInboxError: null,
        createUpdateRefferalInbox: [],
      };
    case INBOX.CREATE_UPDATE_REFERRAL_INBOX_SUCCESS:
      return {
        ...state,
        createUpdateRefferalInboxLoading: false,
        createUpdateRefferalInboxSuccess: true,
        createUpdateRefferalInboxFailure: false,
        createUpdateRefferalInboxError: null,
        createUpdateRefferalInbox: action.payload,
      };
    case INBOX.CREATE_UPDATE_REFERRAL_INBOX_FAILURE:
      return {
        ...state,
        createUpdateRefferalInboxLoading: false,
        createUpdateRefferalInboxSuccess: false,
        createUpdateRefferalInboxFailure: true,
        createUpdateRefferalInboxError: action.payload,
        createUpdateRefferalInbox: [],
      };

    default:
      return state;
  }
};
