import {
  getAllAppointmentsByTherapistAndDate,
  getAllAppointmentsCxNoShow,
  patientAppointmentDetail,
  upatePatientAppointment,
} from "../api";
import { APPOINTMENT_DISCRETION, request, success, failure } from "./utilities";
import { Notification } from "../../assets/genericAction/index";

export function GetAllAppointmentsByTherapistAndDate(data, moveToNext) {
  return (dispatch) => {
    dispatch(
      request(
        APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_REQUEST
      )
    );
    getAllAppointmentsByTherapistAndDate(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_BY_THERAPIST_AND_DATE_FAILURE,
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

export function UpatePatientAppointment(data, moveToNext) {
  return (dispatch) => {
    dispatch(
      request(APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_REQUEST)
    );
    upatePatientAppointment(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_DISCRETION.UPDATE_PATIENT_APPOINTMENT_FAILURE,
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

export function PatientAppointmentDetail(data, moveToNext) {
  return (dispatch) => {
    dispatch(
      request(APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_REQUEST)
    );
    patientAppointmentDetail(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_DISCRETION.PATIENT_APPOINTMENT_DETIAL_FAILURE,
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

export function GetAllAppointmentsCxNoShow(data, moveToNext) {
  return (dispatch) => {
    dispatch(
      request(APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_REQUEST)
    );
    getAllAppointmentsCxNoShow(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_SUCCESS,
              response.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_DISCRETION.GET_ALL_APPOINTMENT_CX_NO_SHOW_FAILURE,
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
