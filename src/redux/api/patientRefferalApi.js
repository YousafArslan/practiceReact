import axios from "axios";
import { APP_SETTINGS } from "../../config";
export const AddPatientRefferaApi = (data) => {
  return axios.post(
    APP_SETTINGS.API_PATH.PATIENT_REFFERAL.createpatientrefferal,
    data
  );
};
export const EditPatientRefferaApi = (data) => {
  return axios.put(APP_SETTINGS.API_PATH.PATIENT_REFFERAL.updateRefferal, data);
};
export const getRefferalById = (data) => {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PATIENT_REFFERAL.getRefferalById}?id=${data}`
  );
};

export const getAllReferrals = (data) => {
  return axios.post(
    APP_SETTINGS.API_PATH.PATIENT_REFFERAL.getAllRefferals,
    data
  );
};

export const referralDropDown = (data) => {
  return axios.post(
    `${APP_SETTINGS.API_PATH.PATIENT_REFFERAL.referralDropDown}?ClinicId=${data}`
  );
};
