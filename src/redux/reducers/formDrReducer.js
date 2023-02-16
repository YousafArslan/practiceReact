import { FORM_DR } from "../actions/utilities";

const INITIAL_STATE = {
  getFormDrTokenLoading: false,
  getFormDrTokenSuccess: false,
  getFormDrTokenFailure: false,
  getFormDrTokenError: null,
  getFormDrToken: null,
  getPracticeLoading: false,
  getPracticeSuccess: false,
  getPracticeFailure: false,
  getPracticeError: null,
  getPractice: null,
  getFormsLoading: false,
  getFormsSuccess: false,
  getFormsFailure: false,
  getFormsError: null,
  getForms: [],

  getSubmissionsFileLoading: false,
  getSubmissionsFileSuccess: false,
  getSubmissionsFileFailure: false,
  getSubmissionsFileError: null,
  getSubmissionsFile: undefined,

  getSubmissionsLoading: false,
  getSubmissionsSuccess: false,
  getSubmissionsFailure: false,
  getSubmissionsError: null,
  getSubmissions: undefined,
};

export const formDrReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_DR.GET_FORM_DR_TOKEN_LOADING:
      return {
        ...state,
        getFormDrTokenLoading: true,
        getFormDrTokenSuccess: false,
        getFormDrTokenFailure: false,
        getFormDrTokenError: null,
        getFormDrToken: null,
      };
    case FORM_DR.GET_FORM_DR_TOKEN_SUCCESS:
      return {
        ...state,
        getFormDrTokenLoading: false,
        getFormDrTokenSuccess: true,
        getFormDrTokenFailure: false,
        getFormDrTokenError: null,
        getFormDrToken: action.payload,
      };
    case FORM_DR.GET_FORM_DR_TOKEN_FAILURE:
      return {
        ...state,
        getFormDrTokenLoading: false,
        getFormDrTokenSuccess: false,
        getFormDrTokenFailure: true,
        getFormDrTokenError: action.payload,
        getFormDrToken: null,
      };
    case FORM_DR.GET_PRACTICE_LOADING:
      return {
        ...state,
        getPracticeLoading: true,
        getPracticeSuccess: false,
        getPracticeFailure: false,
        getPracticeError: null,
        getPractice: null,
      };
    case FORM_DR.GET_PRACTICE_SUCCESS:
      return {
        ...state,
        getPracticeLoading: false,
        getPracticeSuccess: true,
        getPracticeFailure: false,
        getPracticeError: null,
        getPractice: action.payload,
      };
    case FORM_DR.GET_PRACTICE_FAILURE:
      return {
        ...state,
        getPracticeLoading: false,
        getPracticeSuccess: false,
        getPracticeFailure: true,
        getPracticeError: action.payload,
        getPractice: null,
      };

    case FORM_DR.GET_FORMS_LOADING:
      return {
        ...state,
        getFormsLoading: true,
        getFormsSuccess: false,
        getFormsFailure: false,
        getFormsError: null,
        getForms: [],
      };
    case FORM_DR.GET_FORMS_SUCCESS:
      return {
        ...state,
        getFormsLoading: false,
        getFormsSuccess: true,
        getFormsFailure: false,
        getFormsError: null,
        getForms: action.payload,
      };
    case FORM_DR.GET_FORMS_FAILURE:
      return {
        ...state,
        getFormsLoading: false,
        getFormsSuccess: false,
        getFormsFailure: true,
        getFormsError: action.payload,
        getForms: [],
      };
    case FORM_DR.GET_SUBMISSION_FILE_LOADING:
      return {
        ...state,
        getSubmissionsFileLoading: true,
        getSubmissionsFileSuccess: false,
        getSubmissionsFileFailure: false,
        getSubmissionsFileError: null,
        getSubmissionsFile: [],
      };
    case FORM_DR.GET_SUBMISSION_FILE_SUCCESS:
      return {
        ...state,
        getSubmissionsFileLoading: false,
        getSubmissionsFileSuccess: true,
        getSubmissionsFileFailure: false,
        getSubmissionsFileError: null,
        getSubmissionsFile: action.payload,
      };
    case FORM_DR.GET_SUBMISSION_FILE_FAILURE:
      return {
        ...state,
        getSubmissionsFileLoading: false,
        getSubmissionsFileSuccess: false,
        getSubmissionsFileFailure: true,
        getSubmissionsFileError: action.payload,
        getSubmissionsFile: undefined,
      };

    case FORM_DR.GET_SUBMISSIONS_LOADING:
      return {
        ...state,
        getSubmissionsLoading: true,
        getSubmissionsSuccess: false,
        getSubmissionsFailure: false,
        getSubmissionsError: null,
      };
    case FORM_DR.GET_SUBMISSIONS_SUCCESS:
      return {
        ...state,
        getSubmissionsLoading: false,
        getSubmissionsSuccess: true,
        getSubmissionsFailure: false,
        getSubmissionsError: null,
        getSubmissions: action.payload,
      };
    case FORM_DR.GET_SUBMISSIONS_FAILURE:
      return {
        ...state,
        getSubmissionsLoading: false,
        getSubmissionsSuccess: false,
        getSubmissionsFailure: true,
        getSubmissionsError: action.payload,
        getSubmissions: undefined,
      };
    default:
      return state;
  }
};
