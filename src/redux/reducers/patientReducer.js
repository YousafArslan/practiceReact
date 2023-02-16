import { PATIENTS } from "../actions/utilities";

const INITIAL_STATE = {
  getAllPatientLoading: false,
  getAllPatientSuccess: false,
  getAllPatientFailure: false,
  getAllPatientError: null,
  getAllPatientList: [],
  getAllPatientDropDownLoading: false,
  getAllPatientDropDownSuccess: false,
  getAllPatientDropDownFailure: false,
  getAllPatientDropDownError: null,
  getAllPatientDropDownList: [],
  getPatientCaseDropDownLoading: false,
  getPatientCaseDropDownSuccess: false,
  getPatientCaseDropDownFailure: false,
  getPatientCaseDropDownError: null,
  getPatientCaseDropDownList: [],
  getCaseByCaseIdLoading: false,
  getCaseByCaseIdSuccess: false,
  getCaseByCaseIdFailure: false,
  getCaseByCaseIdError: null,
  getCaseByCaseIdList: [],
  createPatientCaseFileLoading: false,
  createPatientCaseFileSuccess: false,
  createPatientCaseFileFailure: false,
  createPatientCaseFileError: null,
  getReferralFilesByIdLoading: false,
  getReferralFilesByIdSuccess: false,
  getReferralFilesByIdFailure: false,
  getReferralFilesByIdError: null,
  getReferralFilesByIdList: [],
  getCaseFilesByCaseIdLoading: false,
  getCaseFilesByCaseIdSuccess: false,
  getCaseFilesByCaseIdFailure: false,
  getCaseFilesByCaseIdError: null,
  getCaseFilesByCaseIdList: [],
};
export const patientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PATIENTS.GET_ALL_PATIENT_LOADING:
      return {
        ...state,
        getAllPatientLoading: true,
        getAllPatientSuccess: false,
        getAllPatientFailure: false,
        getAllPatientError: null,
      };
    case PATIENTS.GET_ALL_PATIENT_SUCCESS:
      return {
        ...state,
        getAllPatientLoading: false,
        getAllPatientSuccess: true,
        getAllPatientFailure: false,
        getAllPatientError: null,
        getAllPatientList: action.payload,
      };
    case PATIENTS.GET_ALL_PATIENT_FAILURE:
      return {
        ...state,
        getAllPatientLoading: false,
        getAllPatientSuccess: false,
        getAllPatientFailure: true,
        getAllPatientError: action.payload,
      };

    case PATIENTS.GET_ALL_PATIENT_DROPDOWN_LOADING:
      return {
        ...state,
        getAllPatientDropDownLoading: true,
        getAllPatientDropDownSuccess: false,
        getAllPatientDropDownFailure: false,
        getAllPatientDropDownError: null,
      };
    case PATIENTS.GET_ALL_PATIENT_DROPDOWN_SUCCESS:
      let temp = action.payload;
      temp.forEach((element) => {
        element.value = element.id;
        element.label = `${element.firstName} ${element.lastName}`;
      });
      return {
        ...state,
        getAllPatientDropDownLoading: false,
        getAllPatientDropDownSuccess: true,
        getAllPatientDropDownFailure: false,
        getAllPatientDropDownError: null,
        getAllPatientDropDownList: temp,
      };
    case PATIENTS.GET_ALL_PATIENT_DROPDOWN_FAILURE:
      return {
        ...state,
        getAllPatientDropDownLoading: false,
        getAllPatientDropDownSuccess: false,
        getAllPatientDropDownFailure: true,
        getAllPatientDropDownError: action.payload,
      };

    case PATIENTS.GET_PATIENT_CASE_DROPDOWN_LOADING:
      return {
        ...state,
        getPatientCaseDropDownLoading: true,
        getPatientCaseDropDownSuccess: false,
        getPatientCaseDropDownFailure: false,
        getPatientCaseDropDownError: null,
      };
    case PATIENTS.GET_PATIENT_CASE_DROPDOWN_SUCCESS:
      let tempData = action.payload;
      tempData.forEach((element) => {
        element.value = element.id;
        element.label = element.caseName;
      });
      return {
        ...state,
        getPatientCaseDropDownLoading: false,
        getPatientCaseDropDownSuccess: true,
        getPatientCaseDropDownFailure: false,
        getPatientCaseDropDownError: null,
        getPatientCaseDropDownList: tempData,
      };
    case PATIENTS.GET_PATIENT_CASE_DROPDOWN_FAILURE:
      return {
        ...state,
        getPatientCaseDropDownLoading: false,
        getPatientCaseDropDownSuccess: false,
        getPatientCaseDropDownFailure: true,
        getPatientCaseDropDownError: action.payload,
      };

    case PATIENTS.GET_CASE_BY_CASE_ID_LOADING:
      return {
        ...state,
        getCaseByCaseIdLoading: true,
        getCaseByCaseIdSuccess: false,
        getCaseByCaseIdFailure: false,
        getCaseByCaseIdError: null,
        getCaseByCaseIdList: [],
      };
    case PATIENTS.GET_CASE_BY_CASE_ID_SUCCESS:
      return {
        ...state,
        getCaseByCaseIdLoading: false,
        getCaseByCaseIdSuccess: true,
        getCaseByCaseIdFailure: false,
        getCaseByCaseIdError: null,
        getCaseByCaseIdList: action.payload,
      };
    case PATIENTS.GET_CASE_BY_CASE_ID_FAILURE:
      return {
        ...state,
        getCaseByCaseIdLoading: false,
        getCaseByCaseIdSuccess: false,
        getCaseByCaseIdFailure: true,
        getCaseByCaseIdError: action.payload,
        getCaseByCaseIdList: [],
      };

    case PATIENTS.CREATE_PATIENT_CASE_FILE_LOADING:
      return {
        ...state,
        createPatientCaseFileLoading: true,
        createPatientCaseFileSuccess: false,
        createPatientCaseFileFailure: false,
        createPatientCaseFileError: null,
      };
    case PATIENTS.CREATE_PATIENT_CASE_FILE_SUCCESS:
      return {
        ...state,
        createPatientCaseFileLoading: false,
        createPatientCaseFileSuccess: true,
        createPatientCaseFileFailure: false,
        createPatientCaseFileError: null,
      };
    case PATIENTS.CREATE_PATIENT_CASE_FILE_FAILURE:
      return {
        ...state,
        createPatientCaseFileLoading: false,
        createPatientCaseFileSuccess: false,
        createPatientCaseFileFailure: true,
        createPatientCaseFileError: action.payload,
      };

    case PATIENTS.GET_REFERRAL_FILES_BY_ID_LOADING:
      return {
        ...state,
        getReferralFilesByIdLoading: true,
        getReferralFilesByIdSuccess: false,
        getReferralFilesByIdFailure: false,
        getReferralFilesByIdError: null,
        getReferralFilesByIdList: [],
      };
    case PATIENTS.GET_REFERRAL_FILES_BY_ID_SUCCESS:
      return {
        ...state,
        getReferralFilesByIdLoading: false,
        getReferralFilesByIdSuccess: true,
        getReferralFilesByIdFailure: false,
        getReferralFilesByIdError: null,
        getReferralFilesByIdList: action.payload,
      };
    case PATIENTS.GET_REFERRAL_FILES_BY_ID_FAILURE:
      return {
        ...state,
        getReferralFilesByIdLoading: false,
        getReferralFilesByIdSuccess: false,
        getReferralFilesByIdFailure: true,
        getReferralFilesByIdError: action.payload,
        getReferralFilesByIdList: [],
      };

    case PATIENTS.GET_CASE_FILES_BY_CASE_ID_LOADING:
      return {
        ...state,
        getCaseFilesByCaseIdLoading: true,
        getCaseFilesByCaseIdSuccess: false,
        getCaseFilesByCaseIdFailure: false,
        getCaseFilesByCaseIdError: null,
        getCaseFilesByCaseIdList: [],
      };
    case PATIENTS.GET_CASE_FILES_BY_CASE_ID_SUCCESS:
      let tempArr = action.payload;
      tempArr.forEach((item) => {
        item.value = item.url;
        item.label = item.caseFile;
      });
      return {
        ...state,
        getCaseFilesByCaseIdLoading: false,
        getCaseFilesByCaseIdSuccess: true,
        getCaseFilesByCaseIdFailure: false,
        getCaseFilesByCaseIdError: null,
        getCaseFilesByCaseIdList: tempArr,
      };
    case PATIENTS.GET_CASE_FILES_BY_CASE_ID_FAILURE:
      return {
        ...state,
        getCaseFilesByCaseIdLoading: false,
        getCaseFilesByCaseIdSuccess: false,
        getCaseFilesByCaseIdFailure: true,
        getCaseFilesByCaseIdError: action.payload,
        getCaseFilesByCaseIdList: [],
      };

    default:
      return state;
  }
};
