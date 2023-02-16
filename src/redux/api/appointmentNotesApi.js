import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function updateAppointmentNoteImages(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.updateAppointmentNoteImages,
    data
  );
}
export function updateAppointmentNoteForms(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.updateAppointmentNoteForms,
    data
  );
}
export function getGoalTemplates(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.getGoalTemplates}?clinicId=${data}`
  );
}
export function addOrUpdateGoalNotes(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.addOrUpdateGoalNotes,
    data
  );
}
export function getGoalNotes(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.getGoalNotes}?AppointmentNoteSectionId=${data}`
  );
}
export function updateGoalValue(data) {
  return axios.put(
    APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.updateGoalValue,
    data
  );
}
export function removeGoalRow(data) {
  return axios.put(APP_SETTINGS.API_PATH.APPOINTMENT_NOTES.removeGoalRow, data);
}
