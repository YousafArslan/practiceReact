import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAppointmentByAppointmentId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT.getAppointmentByAppointmentId}?Id=${data}`
  );
}
export function getAllAppointmentsByPatientId(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT.getAllAppointmentsByPatientId,
    data
  );
}
export function appointmentStatusUpdate(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT.appointmentStatusUpdate,
    data
  );
}
export function createReasonStatus(data) {
  return axios.post(APP_SETTINGS.API_PATH.APPOINTMENT.createReasonStatus, data);
}
export function getAllSchedulePayments(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT.getAllSchedulePayments}?ScheduleAppointmentId=${data}`
  );
}
export function createUpdateSchedulePayment(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT.createUpdateSchedulePayment,
    data
  );
}
export function getCancelationPercentage(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT.getCancelationPercentage}?CaseId=${data.caseId}&ScheduleTherapistId=${data.scheduleTherapistId}&PatientId=${data.patientId}`
  );
}
export function createUpdatePaymentNotes(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT.createUpdatePaymentNotes,
    data
  );
}


export function saveCallRecordDetailsAPI(data) {
  return axios.post(APP_SETTINGS.API_PATH.APPOINTMENT.saveCallRecordDetails, data);
}