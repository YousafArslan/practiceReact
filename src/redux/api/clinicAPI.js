import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function addclinic(data) {
  return axios.post(`${APP_SETTINGS.API_PATH.CLINIC.addclinic}`, data);
}
export function getAllClinic(data) {
  return axios.post(`${APP_SETTINGS.API_PATH.CLINIC.getAllClinic}`, data);
}
export function getSingleClinic(id) {
  return axios.get(`${APP_SETTINGS.API_PATH.CLINIC.getSingleClinic}/${id}`, {
    id: id,
  });
}
export function editclinic(data) {
  return axios.put(`${APP_SETTINGS.API_PATH.CLINIC.getEditClincic}`, data);
}
