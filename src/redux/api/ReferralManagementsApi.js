import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getSpecialityPatientsCount(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.getSpecialityPatientsCount}?ClinicId=${data}`
  );
}
export function getRefferalPatientBySpecialityId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.getRefferalPatientBySpecialityId}?SpecialityId=${data.specialityId}&ClinicId=${data.clinicId}&CallTypeId=${data.callTypeId}`
  );
}

export function getAllDatabyRefferalPatientId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.getAllDatabyRefferalPatientId}?RefferalPatientId=${data}`
  );
}

export function getClericalDropdownbyClinicId(data) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.getClericalDropdownbyClinicId}?ClinicId=${data}`
  );
}

export function createCall(data) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.createCall}`,
    data
  );
}
export function createMessage(data) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.createMessage}`,
    data
  );
}

export function updateCallLog(data) {
  return axios.put(
    APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.updateCallLog,
    data
  );
}

export function updateRefferalDetails(data) {
  return axios.put(
    APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.updateRefferalDetails,
    data
  );
}

export function createCallBack(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.REFERRAL_MANAGEMENT.createCallBack,
    data
  );
}
