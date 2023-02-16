import { REFERRAL_MANAGEMENT } from "../actions/utilities";

const INITIAL_STATE = {
  getSpecialityPatientsCountLoading: false,
  getSpecialityPatientsCountSuccess: false,
  getSpecialityPatientsCountFailure: false,
  getSpecialityPatientsCountError: null,
  getSpecialityPatientsCount: null,
  getRefferalPatientBySpecialityIdLoading: false,
  getRefferalPatientBySpecialityIdSuccess: false,
  getRefferalPatientBySpecialityIdFailure: false,
  getRefferalPatientBySpecialityIdError: null,
  getRefferalPatientBySpecialityId: null,
  getAllDatabyRefferalPatientIdLoading: false,
  getAllDatabyRefferalPatientIdSuccess: false,
  getAllDatabyRefferalPatientIdFailure: false,
  getAllDatabyRefferalPatientIdError: null,
  getAllDatabyRefferalPatientId: null,
  getClericalDropdownbyClinicIdLoading: false,
  getClericalDropdownbyClinicIdSuccess: false,
  getClericalDropdownbyClinicIdFailure: false,
  getClericalDropdownbyClinicIdError: null,
  getClericalDropdownbyClinicId: null,
  createCallLoading: false,
  createCallSuccess: false,
  createCallFailure: false,
  createCallError: null,
  createCall: null,
  createMessageLoading: false,
  createMessageSuccess: false,
  createMessageFailure: false,
  createMessageError: null,
  createMessage: null,
  updateCallLogLoading: false,
  updateCallLogSuccess: false,
  updateCallLogFailure: false,
  updateCallLogError: null,
  updateCallLog: null,

  updateRefferalDetailsLoading: false,
  updateRefferalDetailsSuccess: false,
  updateRefferalDetailsFailure: false,
  updateRefferalDetailsError: null,
  updateRefferalDetails: null,

  createCallBackLoading: false,
  createCallBackSuccess: false,
  createCallBackFailure: false,
  createCallBackError: null,
  createCallBack: null,
};

export const referralManagementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_LOADING:
      return {
        ...state,
        getSpecialityPatientsCountLoading: true,
        getSpecialityPatientsCountSuccess: false,
        getSpecialityPatientsCountFailure: false,
        getSpecialityPatientsCountError: null,
      };
    case REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_SUCCESS:
      return {
        ...state,
        getSpecialityPatientsCountLoading: false,
        getSpecialityPatientsCountSuccess: true,
        getSpecialityPatientsCountFailure: false,
        getSpecialityPatientsCountError: null,
        getSpecialityPatientsCount: action.payload,
      };
    case REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_FAILURE:
      return {
        ...state,
        getSpecialityPatientsCountLoading: false,
        getSpecialityPatientsCountSuccess: false,
        getSpecialityPatientsCountFailure: true,
        getSpecialityPatientsCountError: action.payload,
        getSpecialityPatientsCount: null,
      };

    case REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_LOADING:
      return {
        ...state,
        getRefferalPatientBySpecialityIdLoading: true,
        getRefferalPatientBySpecialityIdSuccess: false,
        getRefferalPatientBySpecialityIdFailure: false,
        getRefferalPatientBySpecialityIdError: null,
      };
    case REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_SUCCESS:
      return {
        ...state,
        getRefferalPatientBySpecialityIdLoading: false,
        getRefferalPatientBySpecialityIdSuccess: true,
        getRefferalPatientBySpecialityIdFailure: false,
        getRefferalPatientBySpecialityIdError: null,
        getRefferalPatientBySpecialityId: action.payload,
      };
    case REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_FAILURE:
      return {
        ...state,
        getRefferalPatientBySpecialityIdLoading: false,
        getRefferalPatientBySpecialityIdSuccess: false,
        getRefferalPatientBySpecialityIdFailure: true,
        getRefferalPatientBySpecialityIdError: action.payload,
        getRefferalPatientBySpecialityId: null,
      };

    case REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_LOADING:
      return {
        ...state,
        getAllDatabyRefferalPatientIdLoading: true,
        getAllDatabyRefferalPatientIdSuccess: false,
        getAllDatabyRefferalPatientIdFailure: false,
        getAllDatabyRefferalPatientIdError: null,
      };
    case REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_SUCCESS:
      return {
        ...state,
        getAllDatabyRefferalPatientIdLoading: false,
        getAllDatabyRefferalPatientIdSuccess: true,
        getAllDatabyRefferalPatientIdFailure: false,
        getAllDatabyRefferalPatientIdError: null,
        getAllDatabyRefferalPatientId: action.payload,
      };
    case REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_FAILURE:
      return {
        ...state,
        getAllDatabyRefferalPatientIdLoading: false,
        getAllDatabyRefferalPatientIdSuccess: false,
        getAllDatabyRefferalPatientIdFailure: true,
        getAllDatabyRefferalPatientIdError: action.payload,
        getAllDatabyRefferalPatientId: null,
      };

    case REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_LOADING:
      return {
        ...state,
        getClericalDropdownbyClinicIdLoading: true,
        getClericalDropdownbyClinicIdSuccess: false,
        getClericalDropdownbyClinicIdFailure: false,
        getClericalDropdownbyClinicIdError: null,
      };
    case REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_SUCCESS:
      return {
        ...state,
        getClericalDropdownbyClinicIdLoading: false,
        getClericalDropdownbyClinicIdSuccess: true,
        getClericalDropdownbyClinicIdFailure: false,
        getClericalDropdownbyClinicIdError: null,
        getClericalDropdownbyClinicId: action.payload,
      };
    case REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_FAILURE:
      return {
        ...state,
        getClericalDropdownbyClinicIdLoading: false,
        getClericalDropdownbyClinicIdSuccess: false,
        getClericalDropdownbyClinicIdFailure: true,
        getClericalDropdownbyClinicIdError: action.payload,
        getClericalDropdownbyClinicId: null,
      };

    case REFERRAL_MANAGEMENT.CREATE_CALL_LOADING:
      return {
        ...state,
        createCallLoading: true,
        createCallSuccess: false,
        createCallFailure: false,
        createCallError: null,
      };
    case REFERRAL_MANAGEMENT.CREATE_CALL_SUCCESS:
      return {
        ...state,
        createCallLoading: false,
        createCallSuccess: true,
        createCallFailure: false,
        createCallError: null,
        createCall: action.payload,
        getAllDatabyRefferalPatientId: {
          ...state.getAllDatabyRefferalPatientId,
          callLogList: [
            ...state.getAllDatabyRefferalPatientId.callLogList,
            action.payload.rfL_CallLogs[0],
          ],
        },
      };
    case REFERRAL_MANAGEMENT.CREATE_CALL_FAILURE:
      return {
        ...state,
        createCallLoading: false,
        createCallSuccess: false,
        createCallFailure: true,
        createCallError: action.payload,
        createCall: null,
      };

    case REFERRAL_MANAGEMENT.CREATE_MESSAGE_LOADING:
      return {
        ...state,
        createMessageLoading: true,
        createMessageSuccess: false,
        createMessageFailure: false,
        createMessageError: null,
      };
    case REFERRAL_MANAGEMENT.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        createMessageLoading: false,
        createMessageSuccess: true,
        createMessageFailure: false,
        createMessageError: null,
        createMessage: action.payload,
      };
    case REFERRAL_MANAGEMENT.CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        createMessageLoading: false,
        createMessageSuccess: false,
        createMessageFailure: true,
        createMessageError: action.payload,
        createMessage: null,
      };

    case REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_LOADING:
      return {
        ...state,
        updateCallLogLoading: true,
        updateCallLogSuccess: false,
        updateCallLogFailure: false,
        updateCallLogError: null,
      };
    case REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_SUCCESS:
      return {
        ...state,
        updateCallLogLoading: false,
        updateCallLogSuccess: true,
        updateCallLogFailure: false,
        updateCallLogError: null,
        updateCallLog: action.payload,
      };
    case REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_FAILURE:
      return {
        ...state,
        updateCallLogLoading: false,
        updateCallLogSuccess: false,
        updateCallLogFailure: true,
        updateCallLogError: action.payload,
        updateCallLog: null,
      };

    case REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_LOADING:
      return {
        ...state,
        updateRefferalDetailsLoading: true,
        updateRefferalDetailsSuccess: false,
        updateRefferalDetailsFailure: false,
        updateRefferalDetailsError: null,
      };
    case REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_SUCCESS:
      return {
        ...state,
        updateRefferalDetailsLoading: false,
        updateRefferalDetailsSuccess: true,
        updateRefferalDetailsFailure: false,
        updateRefferalDetailsError: null,
        updateRefferalDetails: action.payload,
      };
    case REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_FAILURE:
      return {
        ...state,
        updateRefferalDetailsLoading: false,
        updateRefferalDetailsSuccess: false,
        updateRefferalDetailsFailure: true,
        updateRefferalDetailsError: action.payload,
        updateRefferalDetails: null,
      };

    case REFERRAL_MANAGEMENT.CREATE_CALL_BACK_LOADING:
      return {
        ...state,
        createCallBackLoading: true,
        createCallBackSuccess: false,
        createCallBackFailure: false,
        createCallBackError: null,
      };
    case REFERRAL_MANAGEMENT.CREATE_CALL_BACK_SUCCESS:
      return {
        ...state,
        createCallBackLoading: false,
        createCallBackSuccess: true,
        createCallBackFailure: false,
        createCallBackError: null,
        createCallBack: action.payload,
      };
    case REFERRAL_MANAGEMENT.CREATE_CALL_BACK_FAILURE:
      return {
        ...state,
        createCallBackLoading: false,
        createCallBackSuccess: false,
        createCallBackFailure: true,
        createCallBackError: action.payload,
        createCallBack: null,
      };
    default:
      return state;
  }
};
