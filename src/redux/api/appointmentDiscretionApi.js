import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllAppointmentsByTherapistAndDate(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT_DISCRETION.getAllAppointmentsByTherapistAndDate}?ScheduleAppointmentDate=${data.date}&TherapistId=${data.therapistId}`
  );
}
export function upatePatientAppointment(data) {
  return axios.put(
    APP_SETTINGS.API_PATH.APPOINTMENT_DISCRETION.upatePatientAppointment,
    data
  );
}

export function patientAppointmentDetail(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT_DISCRETION.patientAppointmentDetail}?AppointmnetScheduleId=${data.AppointmnetScheduleId}&ScheduleTherapistId=${data.ScheduleTherapistId}&PatientId=${data.PatientId}`,
    data
  );
}

export function getAllAppointmentsCxNoShow(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT_DISCRETION.getAllAppointmentsCxNoShow,
    data
  );
}
