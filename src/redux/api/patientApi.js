import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllPatientApi(data) {
  return axios.post(APP_SETTINGS.API_PATH.PATIENT.patientGetAll, data);
}

export function getAllPatientDropDownApi(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PATIENT.patientGetAllDropDown}?ClinicId=${data}`
  );
}
export function getPatientCaseDropDownApi(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PATIENT.patientCaseDropDown}?PatientId=${data}`
  );
}

export function getCaseByCaseId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PATIENT.patientCasebyCaseId}?CaseId=${data}`
  );
}

export function createPatientCaseFile(data) {
  return axios.post(APP_SETTINGS.API_PATH.PATIENT.createPatientCaseFile, data);
}
export function getReferralFilesByReferralId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PATIENT.getReferralFiles}?RefferalPatientId=${data}`
  );
}

export function getCaseFilesByCaseId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PATIENT.getPatientCaseFiles}?CaseId=${data}`
  );
}
