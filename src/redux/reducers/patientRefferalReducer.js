import { REFFERAL } from "../actions/utilities";

const INITIAL_STATE = {
  getAllRefferalsLoading: false,
  getAllRefferalsSuccess: false,
  getAllRefferalsFailure: false,
  getAllRefferalsError: null,
  getAllRefferals: [],
  patientRefferalLoading: false,
  patientRefferalSucess: false,
  patientRefferalFailure: false,
  patientRefferalError: null,
  getRefferalByIdLoading: false,
  getRefferalByIdSuccess: false,
  getRefferalByIdFailure: false,
  getRefferalByIdError: false,
  getRefferalById: {},
  getRefferalDefaultSpecialities: null,
  updateRefferalLoading: false,
  updateRefferalSucess: false,
  updateRefferalFailure: false,
  updateRefferalError: false,
  getReferralDropDownLoading: false,
  getReferralDropDownSuccess: false,
  getReferralDropDownFailure: false,
  getReferralDropDownError: null,
  getReferralDropDown: [],
};

export const patientRefferalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFFERAL.GET_ALL_REFFERALS_LOADING:
      return {
        ...state,
        getAllRefferalsLoading: true,
        getAllRefferalsSuccess: false,
        getAllRefferalsFailure: false,
        getAllRefferalsError: null,
        getAllRefferals: [],
      };
    case REFFERAL.GET_ALL_REFFERALS_SUCCESS:
      return {
        ...state,
        getAllRefferalsLoading: false,
        getAllRefferalsSuccess: true,
        getAllRefferalsFailure: false,
        getAllRefferalsError: null,
        getAllRefferals: action.payload,
      };
    case REFFERAL.GET_ALL_REFFERALS_FAILURE:
      return {
        ...state,
        getAllRefferalsLoading: false,
        getAllRefferalsSuccess: false,
        getAllRefferalsFailure: true,
        getAllRefferalsError: action.payload,
        getAllRefferals: [],
      };

    case REFFERAL.CREATE_PATIENT_REFFERAL_LOADING:
      return {
        ...state,
        patientRefferalLoading: true,
        patientRefferalSucess: false,
        patientRefferalFailure: false,
        patientRefferalError: null,
      };
    case REFFERAL.CREATE_PATIENT_REFFERAL_SUCCESS:
      return {
        ...state,
        patientRefferalLoading: false,
        patientRefferalSucess: true,
        patientRefferalFailure: false,
        patientRefferalError: null,
        getRefferalById: action.payload,
      };
    case REFFERAL.CREATE_PATIENT_REFFERAL_FAILURE:
      return {
        ...state,
        patientRefferalLoading: false,
        patientRefferalSucess: false,
        patientRefferalFailure: true,
        patientRefferalError: action.payload.response.data.message,
      };

    case REFFERAL.GET_REFFERAL_BY_ID_LOADING:
      return {
        ...state,
        getRefferalByIdLoading: true,
        getRefferalByIdSuccess: false,
        getRefferalByIdFailure: false,
        getRefferalByIdError: false,
        getRefferalDefaultSpecialities: null,
      };
    case REFFERAL.GET_REFFERAL_BY_ID_SUCCESS:
      let temp = [];
      action.payload.refferalTypeGetList.forEach((item) =>
        temp.push(item.specialityId)
      );
      return {
        ...state,
        getRefferalByIdLoading: false,
        getRefferalByIdSuccess: true,
        getRefferalByIdFailure: false,
        getRefferalByIdError: false,
        getRefferalById: action.payload,
        getRefferalDefaultSpecialities: temp,
      };
    case REFFERAL.GET_REFFERAL_BY_ID_FAILURE:
      return {
        ...state,
        getRefferalByIdLoading: false,
        getRefferalByIdSuccess: false,
        getRefferalByIdFailure: true,
        getRefferalByIdError: action.payload,
        getRefferalDefaultSpecialities: null,
      };

    case REFFERAL.UPDATE_REFFERAL_LOADING:
      return {
        ...state,
        updateRefferalLoading: true,
        updateRefferalSucess: false,
        updateRefferalFailure: false,
        updateRefferalError: false,
      };
    case REFFERAL.UPDATE_REFFERAL_SUCCESS:
      return {
        ...state,
        updateRefferalLoading: false,
        updateRefferalSucess: true,
        updateRefferalFailure: false,
        updateRefferalError: false,
        getRefferalById: action.payload,
      };
    case REFFERAL.UPDATE_REFFERAL_FAILURE:
      return {
        ...state,
        updateRefferalLoading: false,
        updateRefferalSucess: false,
        updateRefferalFailure: true,
        updateRefferalError: action.payload,
      };

    case REFFERAL.GET_REFERRAL_DROPDOWN_LOADING:
      return {
        ...state,
        getReferralDropDownLoading: true,
        getReferralDropDownSuccess: false,
        getReferralDropDownFailure: false,
        getReferralDropDownError: null,
        getReferralDropDown: [],
      };
    case REFFERAL.GET_REFERRAL_DROPDOWN_SUCCESS:
      let tempData = action.payload;
      tempData.forEach((element) => {
        element.value = element.id;
        element.label = `${element.firstName} ${element.lastName}`;
      });
      return {
        ...state,
        getReferralDropDownLoading: false,
        getReferralDropDownSuccess: true,
        getReferralDropDownFailure: false,
        getReferralDropDownError: null,
        getReferralDropDown: tempData,
      };
    case REFFERAL.GET_REFERRAL_DROPDOWN_FAILURE:
      return {
        ...state,
        getReferralDropDownLoading: false,
        getReferralDropDownSuccess: false,
        getReferralDropDownFailure: true,
        getReferralDropDownError: action.payload,
        getReferralDropDown: [],
      };

    default:
      return state;
  }
};
