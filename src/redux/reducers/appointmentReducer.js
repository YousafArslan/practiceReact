import { APPOINTMENT } from "../actions/utilities";

const INITIAL_STATE = {
  getAppointmentByidLoading: false,
  getAppointmentByidSuccess: false,
  getAppointmentByidFailure: false,
  getAppointmentByidError: null,
  getAppointmentByid: null,

  getAllAppointmentsByPatientIdLoading: false,
  getAllAppointmentsByPatientIdSuccess: false,
  getAllAppointmentsByPatientIdFailure: false,
  getAllAppointmentsByPatientIdError: null,
  getAllAppointmentsByPatientId: undefined,

  updateAppointmentStatusLoading: false,
  updateAppointmentStatusSuccess: false,
  updateAppointmentStatusFailure: false,
  updateAppointmentStatusError: null,
  updateAppointmentStatus: undefined,

  createReasonStatusLoading: false,
  createReasonStatusSuccess: false,
  createReasonStatusFailure: false,
  createReasonStatusError: null,
  createReasonStatus: undefined,

  getAllSchedulePaymentsLoading: false,
  getAllSchedulePaymentsSuccess: false,
  getAllSchedulePaymentsFailure: false,
  getAllSchedulePaymentsError: null,
  getAllSchedulePayments: undefined,

  createUpdateSchedulePaymentLoading: false,
  createUpdateSchedulePaymentSuccess: false,
  createUpdateSchedulePaymentFailure: false,
  createUpdateSchedulePaymentError: null,
  createUpdateSchedulePayment: undefined,

  saveCallRecordDetailsLoading: false,
  saveCallRecordDetailsSuccess: false,
  saveCallRecordDetailsFailure: false,
  saveCallRecordDetailsError: null,
  saveCallRecordDetails: undefined,

  getCancelationPercentageLoading: false,
  getCancelationPercentageSuccess: false,
  getCancelationPercentageFailure: false,
  getCancelationPercentageError: null,
  getCancelationPercentage: undefined,
  createUpdatePaymentNotesLoading: false,
  createUpdatePaymentNotesSuccess: false,
  createUpdatePaymentNotesFailure: false,
  createUpdatePaymentNotesError: null,
  createUpdatePaymentNotes: undefined,
};

export const appointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPOINTMENT.GET_APPOINTMENT_BY_ID_REQUEST:
      return {
        ...state,
        getAppointmentByidLoading: true,
        getAppointmentByidSuccess: false,
        getAppointmentByidFailure: false,
        getAppointmentByidError: null,
      };
    case APPOINTMENT.GET_APPOINTMENT_BY_ID_SUCCESS:
      return {
        ...state,
        getAppointmentByidLoading: false,
        getAppointmentByidSuccess: true,
        getAppointmentByidFailure: false,
        getAppointmentByidError: null,
        getAppointmentByid: action.payload,
      };
    case APPOINTMENT.GET_APPOINTMENT_BY_ID_FAILURE:
      return {
        ...state,
        getAppointmentByidLoading: false,
        getAppointmentByidSuccess: false,
        getAppointmentByidFailure: true,
        getAppointmentByidError: action.payload,
        getAppointmentByid: null,
      };

    case APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_REQUEST:
      return {
        ...state,
        getAllAppointmentsByPatientIdLoading: true,
        getAllAppointmentsByPatientIdSuccess: false,
        getAllAppointmentsByPatientIdFailure: false,
        getAllAppointmentsByPatientIdError: null,
      };
    case APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_SUCCESS:
      return {
        ...state,
        getAllAppointmentsByPatientIdLoading: false,
        getAllAppointmentsByPatientIdSuccess: true,
        getAllAppointmentsByPatientIdFailure: false,
        getAllAppointmentsByPatientIdError: null,
        getAllAppointmentsByPatientId: action.payload,
      };
    case APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_FAILURE:
      return {
        ...state,
        getAllAppointmentsByPatientIdLoading: false,
        getAllAppointmentsByPatientIdSuccess: false,
        getAllAppointmentsByPatientIdFailure: true,
        getAllAppointmentsByPatientIdError: action.payload,
        getAllAppointmentsByPatientId: undefined,
      };

    case APPOINTMENT.UPDATE_APPOINTMENT_STATUS_REQUEST:
      return {
        ...state,
        updateAppointmentStatusLoading: true,
        updateAppointmentStatusSuccess: false,
        updateAppointmentStatusFailure: false,
        updateAppointmentStatusError: null,
      };
    case APPOINTMENT.UPDATE_APPOINTMENT_STATUS_SUCCESS:
      return {
        ...state,
        updateAppointmentStatusLoading: false,
        updateAppointmentStatusSuccess: true,
        updateAppointmentStatusFailure: false,
        updateAppointmentStatusError: null,
        updateAppointmentStatus: action.payload,
        getAppointmentByid: action.payload,
      };
    case APPOINTMENT.UPDATE_APPOINTMENT_STATUS_FAILURE:
      return {
        ...state,
        updateAppointmentStatusLoading: false,
        updateAppointmentStatusSuccess: false,
        updateAppointmentStatusFailure: true,
        updateAppointmentStatusError: action.payload,
        updateAppointmentStatus: undefined,
      };

    case APPOINTMENT.CREATE_REASON_STATUS_REQUEST:
      return {
        ...state,
        createReasonStatusLoading: true,
        createReasonStatusSuccess: false,
        createReasonStatusFailure: false,
        createReasonStatusError: null,
      };
    case APPOINTMENT.CREATE_REASON_STATUS_SUCCESS:
      return {
        ...state,
        createReasonStatusLoading: false,
        createReasonStatusSuccess: true,
        createReasonStatusFailure: false,
        createReasonStatusError: null,
        createReasonStatus: action.payload,
      };
    case APPOINTMENT.CREATE_REASON_STATUS_FAILURE:
      return {
        ...state,
        createReasonStatusLoading: false,
        createReasonStatusSuccess: false,
        createReasonStatusFailure: true,
        createReasonStatusError: action.payload,
        createReasonStatus: undefined,
      };

    case APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_REQUEST:
      return {
        ...state,
        getAllSchedulePaymentsLoading: true,
        getAllSchedulePaymentsSuccess: false,
        getAllSchedulePaymentsFailure: false,
        getAllSchedulePaymentsError: null,
      };
    case APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_SUCCESS:
      return {
        ...state,
        getAllSchedulePaymentsLoading: false,
        getAllSchedulePaymentsSuccess: true,
        getAllSchedulePaymentsFailure: false,
        getAllSchedulePaymentsError: null,
        getAllSchedulePayments: action.payload,
      };
    case APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_FAILURE:
      return {
        ...state,
        getAllSchedulePaymentsLoading: false,
        getAllSchedulePaymentsSuccess: false,
        getAllSchedulePaymentsFailure: true,
        getAllSchedulePaymentsError: action.payload,
        getAllSchedulePayments: undefined,
      };

    case APPOINTMENT.CREATE_UPDATE_SCHEDULE_PAYMENT_REQUEST:
      return {
        ...state,
        createUpdateSchedulePaymentLoading: true,
        createUpdateSchedulePaymentSuccess: false,
        createUpdateSchedulePaymentFailure: false,
        createUpdateSchedulePaymentError: null,
      };
    case APPOINTMENT.CREATE_SCHEDULE_PAYMENT_SUCCESS:
      let updatedAppointments = state.getAllSchedulePayments.schedulePayment;
      updatedAppointments.push(action.payload);
      return {
        ...state,
        createUpdateSchedulePaymentLoading: false,
        createUpdateSchedulePaymentSuccess: true,
        createUpdateSchedulePaymentFailure: false,
        createUpdateSchedulePaymentError: null,
        createUpdateSchedulePayment: action.payload,
        getAllSchedulePayments: {
          ...state.getAllSchedulePayments,
          schedulePayment: updatedAppointments,
        },
      };
    case APPOINTMENT.UPDATE_SCHEDULE_PAYMENT_SUCCESS:
      let temp = state.getAllSchedulePayments.schedulePayment;
      temp.forEach((item, index) => {
        if (item.id === action.payload.id)
          state.getAllSchedulePayments.schedulePayment[index] = action.payload;
      });
      return {
        ...state,
        createUpdateSchedulePaymentLoading: false,
        createUpdateSchedulePaymentSuccess: true,
        createUpdateSchedulePaymentFailure: false,
        createUpdateSchedulePaymentError: null,
        createUpdateSchedulePayment: action.payload,
        getAllSchedulePayments: {
          ...state.getAllSchedulePayments,
          schedulePayment: temp,
        },
      };
    case APPOINTMENT.CREATE_UPDATE_SCHEDULE_PAYMENT_FAILURE:
      return {
        ...state,
        createUpdateSchedulePaymentLoading: false,
        createUpdateSchedulePaymentSuccess: false,
        createUpdateSchedulePaymentFailure: true,
        createUpdateSchedulePaymentError: action.payload,
        createUpdateSchedulePayment: undefined,
      };

    case APPOINTMENT.GET_CANCELATION_PERCENTAGE_REQUEST:
      return {
        ...state,
        getCancelationPercentageLoading: true,
        getCancelationPercentageSuccess: false,
        getCancelationPercentageFailure: false,
        getCancelationPercentageError: null,
      };
    case APPOINTMENT.GET_CANCELATION_PERCENTAGE_SUCCESS:
      return {
        ...state,
        getCancelationPercentageLoading: false,
        getCancelationPercentageSuccess: true,
        getCancelationPercentageFailure: false,
        getCancelationPercentageError: null,
        getCancelationPercentage: action.payload,
      };
    case APPOINTMENT.GET_CANCELATION_PERCENTAGE_FAILURE:
      return {
        ...state,
        getCancelationPercentageLoading: false,
        getCancelationPercentageSuccess: false,
        getCancelationPercentageFailure: true,
        getCancelationPercentageError: action.payload,
        getCancelationPercentage: undefined,
      };

    case APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_REQUEST:
      return {
        ...state,
        createUpdatePaymentNotesLoading: true,
        createUpdatePaymentNotesSuccess: false,
        createUpdatePaymentNotesFailure: false,
        createUpdatePaymentNotesError: null,
      };
    case APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_SUCCESS:
      return {
        ...state,
        createUpdatePaymentNotesLoading: false,
        createUpdatePaymentNotesSuccess: true,
        createUpdatePaymentNotesFailure: false,
        createUpdatePaymentNotesError: null,
        createUpdatePaymentNotes: action.payload,
      };
    case APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_FAILURE:
      return {
        ...state,
        createUpdatePaymentNotesLoading: false,
        createUpdatePaymentNotesSuccess: false,
        createUpdatePaymentNotesFailure: true,
        createUpdatePaymentNotesError: action.payload,
        createUpdatePaymentNotes: undefined,
      };

    case APPOINTMENT.SAVE_CALL_RECORD_DETAILS_REQUEST:
      return {
        ...state,
        saveCallRecordDetailsLoading: true,
        saveCallRecordDetailsSuccess: false,
        saveCallRecordDetailsFailure: false,
        saveCallRecordDetailsError: null,
      };
    case APPOINTMENT.SAVE_CALL_RECORD_DETAILS_SUCCESS:
      return {
        ...state,
        saveCallRecordDetailsLoading: false,
        saveCallRecordDetailsSuccess: true,
        saveCallRecordDetailsFailure: false,
        saveCallRecordDetailsError: null,
        saveCallRecordDetails: action.payload,
      };
    case APPOINTMENT.SAVE_CALL_RECORD_DETAILS_FAILURE:
      return {
        ...state,
        saveCallRecordDetailsLoading: false,
        saveCallRecordDetailsSuccess: false,
        saveCallRecordDetailsFailure: true,
        saveCallRecordDetailsError: action.payload,
        saveCallRecordDetails: null,
      };

    default:
      return state;
  }
};
