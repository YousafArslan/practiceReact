import axios from "axios";
import { APP_SETTINGS } from "../../config";
export function GetTemplateData() {}

export function getAllTemplates(data) {
  return axios.post(APP_SETTINGS.API_PATH.TEMPLATES.getAllTemplates, data);
}
export function assignAndCopyTemplate(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.TEMPLATES.assignAndCopyTemplate,
    data
  );
}
export function createTemplate(data) {
  return axios.post(APP_SETTINGS.API_PATH.TEMPLATES.createTemplate, data);
}
export function copyTemplate(data) {
  return axios.post(APP_SETTINGS.API_PATH.TEMPLATES.copyTemplate, data);
}
export function createTemplateForm(data) {
  return axios.post(APP_SETTINGS.API_PATH.TEMPLATES.createTemplateForm, data);
}
export function updateTemplateForm(data) {
  return axios.put(APP_SETTINGS.API_PATH.TEMPLATES.updateTemplateForm, data);
}
export function updateTemplate(data) {
  return axios.put(APP_SETTINGS.API_PATH.TEMPLATES.updateTemplate, data);
}
export function getTemplateFormByTemplateId(templateId) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.TEMPLATES.getTemplateFormByTemplateId}?TemplateId=${templateId}`
  );
}

export function createAndUpdateImage(data) {
  return axios.post(APP_SETTINGS.API_PATH.TEMPLATES.createAndUpdateImage, data);
}

export function therapistAppointmentNoteTemplates(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.TEMPLATES.therapistAppointmentNoteTemplates}?TherapistId=${data}`
  );
}
export function addTemplateForAppointmentNotes(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.TEMPLATES.addTemplateForAppointmentNotes,
    data
  );
}

export function updateTemplateForAppointmentNotes(data) {
  return axios.put(
    APP_SETTINGS.API_PATH.TEMPLATES.updateTemplateForAppointmentNotes,
    data
  );
}
