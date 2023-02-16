import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getAllSpecialitiesByClinicId(clinicId) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.SPECIALITIES.GET_ALL_By_CLICNICID}`, {
    "clinicId": clinicId
  }
  );
}
export function addspeciality(specialityData) {
  return axios.post(
    APP_SETTINGS.API_PATH.SPECIALITIES.ADD_SPECIALITY,
    specialityData
  );
}
export function editspeciality(specialityData) {
  return axios.put(
    APP_SETTINGS.API_PATH.SPECIALITIES.EDIT_SPECIALITY,
    specialityData
  );
}
export function getById(id) {
  return axios.get(`${APP_SETTINGS.API_PATH.SPECIALITIES.GET_BY_ID}?SpecialityId=${id}`)
}
