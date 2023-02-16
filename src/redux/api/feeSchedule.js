import axios from "axios";
import { APP_SETTINGS } from "../../config";
export function addFeeSchedule(data) {
  return axios.post(`${APP_SETTINGS.API_PATH.CLINIC.addclinic}`, data);
}
