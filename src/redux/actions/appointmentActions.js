import {
  appointmentStatusUpdate,
  createReasonStatus,
  createUpdatePaymentNotes,
  createUpdateSchedulePayment,
  getAllAppointmentsByPatientId,
  getAllSchedulePayments,
  getAppointmentByAppointmentId,
  getCancelationPercentage,
  saveCallRecordDetailsAPI,
} from "../api";
import { APPOINTMENT, request, success, failure } from "./utilities";
import { Notification } from "../../assets/genericAction/index";

export function GetAppointmentByAppointmentId(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.GET_APPOINTMENT_BY_ID_REQUEST));
    getAppointmentByAppointmentId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.GET_APPOINTMENT_BY_ID_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.GET_APPOINTMENT_BY_ID_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.GET_APPOINTMENT_BY_ID_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function GetAllAppointmentsByPatientId(data) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_REQUEST));
    getAllAppointmentsByPatientId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_SUCCESS,
              response.data
            )
          );
        } else {
          dispatch(
            failure(
              APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.GET_ALL_APPOINTMENT_BY_PATIENT_ID_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function AppointmentStatusUpdate(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.UPDATE_APPOINTMENT_STATUS_REQUEST));
    appointmentStatusUpdate(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.UPDATE_APPOINTMENT_STATUS_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.UPDATE_APPOINTMENT_STATUS_FAILURE,
              response.data.message
            )
          );
        }
        // Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.UPDATE_APPOINTMENT_STATUS_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        // Notification(
        //   error.response.data.message,
        //   error.response.data.succeeded
        // );
      }
    );
  };
}

export function CreateReasonStatus(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.CREATE_REASON_STATUS_REQUEST));
    createReasonStatus(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.CREATE_REASON_STATUS_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.CREATE_REASON_STATUS_FAILURE,
              response.data.message
            )
          );
        }
        // Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.CREATE_REASON_STATUS_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function GetAllSchedulePayments(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_REQUEST));
    getAllSchedulePayments(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_FAILURE,
              response.data.message
            )
          );
          // Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.GET_ALL_SCHEDULE_PAYMENT_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        // Notification(
        //   error.response.data.message,
        //   error.response.data.succeeded
        // );
      }
    );
  };
}

export function CreateUpdateSchedulePayment(data, moveToNext, id) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.CREATE_UPDATE_SCHEDULE_PAYMENT_REQUEST));
    createUpdateSchedulePayment(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          if (id !== 0) {
            dispatch(
              success(
                APPOINTMENT.UPDATE_SCHEDULE_PAYMENT_SUCCESS,
                response.data.data
              )
            );
          } else {
            dispatch(
              success(
                APPOINTMENT.CREATE_SCHEDULE_PAYMENT_SUCCESS,
                response.data.data,
                id
              )
            );
          }

          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.CREATE_UPDATE_SCHEDULE_PAYMENT_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.CREATE_UPDATE_SCHEDULE_PAYMENT_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        Notification(error.response.data.message, error.data.succeeded);
      }
    );
  };
}

export function GetCancelationPercentage(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.GET_CANCELATION_PERCENTAGE_REQUEST));
    getCancelationPercentage(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.GET_CANCELATION_PERCENTAGE_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.GET_CANCELATION_PERCENTAGE_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.GET_CANCELATION_PERCENTAGE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
      }
    );
  };
}

export function CreateUpdatePaymentNotes(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_REQUEST));
    createUpdatePaymentNotes(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.CREATE_UPDATE_PAYMENT_NOTES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
      }
    );
  };
}

export function saveCallRecordDetails(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT.SAVE_CALL_RECORD_DETAILS_REQUEST));
    saveCallRecordDetailsAPI(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT.SAVE_CALL_RECORD_DETAILS_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT.SAVE_CALL_RECORD_DETAILS_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT.SAVE_CALL_RECORD_DETAILS_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        Notification(error.response.data.message, error.data.succeeded);
      }
    );
  };
}
