import { APPOINTMENT_DISCRETION } from "../actions/utilities";

const INITIAL_STATE = {
  getAllAppointmentsByTherapistAndDateLoading: false,
  getAllAppointmentsByTherapistAndDateSuccess: false,
  getAllAppointmentsByTherapistAndDateFailure: false,
  getAllAppointmentsByTherapistAndDateError: null,
  getAllAppointmentsByTherapistAndDate: undefined,

  upatePatientAppointmentLoading: false,
  upatePatientAppointmentSuccess: false,
  upatePatientAppointmentFailure: false,
  upatePatientAppointmentError: null,
  upatePatientAppointment: undefined,

  patientAppointmentDetailLoading: false,
  patientAppointmentDetailSuccess: false,
  patientAppointmentDetailFailure: false,
  patientAppointmentDetailError: null,
  patientAppointmentDetail: undefined,

  getAllAppointmentsCxNoShowLoading: false,
  getAllAppointmentsCxNoShowSuccess: false,
  getAllAppointmentsCxNoShowFailure: false,
  getAllAppointmentsCxNoShowError: null,
  getAllAppointmentsCxNoShow: undefined,
};

export const appointmentDiscretionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_REQUEST:
      return {
        ...state,
        getAllAppointmentsByTherapistAndDateLoading: true,
        getAllAppointmentsByTherapistAndDateSuccess: false,
        getAllAppointmentsByTherapistAndDateFailure: false,
        getAllAppointmentsByTherapistAndDateError: null,
      };
    case APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_SUCCESS:
      return {
        ...state,
        getAllAppointmentsByTherapistAndDateLoading: false,
        getAllAppointmentsByTherapistAndDateSuccess: true,
        getAllAppointmentsByTherapistAndDateFailure: false,
        getAllAppointmentsByTherapistAndDateError: null,
        getAllAppointmentsByTherapistAndDate: action.payload,
      };
    case APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_FAILURE:
      return {
        ...state,
        getAllAppointmentsByTherapistAndDateLoading: false,
        getAllAppointmentsByTherapistAndDateSuccess: false,
        getAllAppointmentsByTherapistAndDateFailure: true,
        getAllAppointmentsByTherapistAndDateError: action.payload,
        getAllAppointmentsByTherapistAndDate: undefined,
      };

    case APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_REQUEST:
      return {
        ...state,
        upatePatientAppointmentLoading: true,
        upatePatientAppointmentSuccess: false,
        upatePatientAppointmentFailure: false,
        upatePatientAppointmentError: null,
      };
    case APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        upatePatientAppointmentLoading: false,
        upatePatientAppointmentSuccess: true,
        upatePatientAppointmentFailure: false,
        upatePatientAppointmentError: null,
        upatePatientAppointment: action.payload,
      };
    case APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_FAILURE:
      return {
        ...state,
        upatePatientAppointmentLoading: false,
        upatePatientAppointmentSuccess: false,
        upatePatientAppointmentFailure: true,
        upatePatientAppointmentError: action.payload,
        upatePatientAppointment: undefined,
      };

    case APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_REQUEST:
      return {
        ...state,
        patientAppointmentDetailLoading: true,
        patientAppointmentDetailSuccess: false,
        patientAppointmentDetailFailure: false,
        patientAppointmentDetailError: null,
      };
    case APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_SUCCESS:
      return {
        ...state,
        patientAppointmentDetailLoading: false,
        patientAppointmentDetailSuccess: true,
        patientAppointmentDetailFailure: false,
        patientAppointmentDetailError: null,
        patientAppointmentDetail: action.payload,
      };
    case APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_FAILURE:
      return {
        ...state,
        patientAppointmentDetailLoading: false,
        patientAppointmentDetailSuccess: false,
        patientAppointmentDetailFailure: true,
        patientAppointmentDetailError: action.payload,
        patientAppointmentDetail: undefined,
      };
    case APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_REQUEST:
      return {
        ...state,
        getAllAppointmentsCxNoShowLoading: true,
        getAllAppointmentsCxNoShowSuccess: false,
        getAllAppointmentsCxNoShowFailure: false,
        getAllAppointmentsCxNoShowError: null,
      };
    case APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_SUCCESS:
      return {
        ...state,
        getAllAppointmentsCxNoShowLoading: false,
        getAllAppointmentsCxNoShowSuccess: true,
        getAllAppointmentsCxNoShowFailure: false,
        getAllAppointmentsCxNoShowError: null,
        getAllAppointmentsCxNoShow: action.payload,
      };
    case APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_FAILURE:
      return {
        ...state,
        getAllAppointmentsCxNoShowLoading: false,
        getAllAppointmentsCxNoShowSuccess: false,
        getAllAppointmentsCxNoShowFailure: true,
        getAllAppointmentsCxNoShowError: action.payload,
        getAllAppointmentsCxNoShow: undefined,
      };

    default:
      return state;
  }
};
