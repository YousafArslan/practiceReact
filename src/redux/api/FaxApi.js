import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function createFaxApi(data) {
  return axios.post(APP_SETTINGS.API_PATH.FAX.createFax, data);
}
export function getFaxByIdApi(data) {
  return axios.get(`${APP_SETTINGS.API_PATH.FAX.getFaxById}?Id=${data}`);
}

export function resendFax(data) {
  return axios.put(APP_SETTINGS.API_PATH.FAX.resendFax, data);
}
