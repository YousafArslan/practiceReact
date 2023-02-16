import {  SCHEDULE } from "../actions/utilities";

const INITIAL_STATE = {
  getDefaultAppointmentDurationLoading: false,
  getDefaultAppointmentDurationSuccess: false,
  getDefaultAppointmentDurationFailure: false,
  getDefaultAppointmentDuration: null,
  getDefaultAppointmentDurationError: null,

};

export const scheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_REQUEST:
      return {
        ...state,
        getDefaultAppointmentDurationLoading: true,
        getDefaultAppointmentDurationSuccess: false,
        getDefaultAppointmentDurationFailure: false,
        getDefaultAppointmentDurationError: null,
      };
    case SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_SUCCESS:
      return {
        ...state,
        getDefaultAppointmentDurationLoading: false,
        getDefaultAppointmentDurationSuccess: true,
        getDefaultAppointmentDurationFailure: false,
        getDefaultAppointmentDuration: action.payload,
        getDefaultAppointmentDurationError: null,
      };
    case SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_FAILURE:
      return {
        ...state,
        getDefaultAppointmentDurationLoading: false,
        getDefaultAppointmentDurationSuccess: false,
        getDefaultAppointmentDurationFailure: true,
        getDefaultAppointmentDuration: null,
        getDefaultAppointmentDurationError: action.payload,
      };

    default:
      return state;
  }
};
