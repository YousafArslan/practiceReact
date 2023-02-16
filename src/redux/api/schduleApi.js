import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getDefaultAppointmentDurationAPI(userId) {
  
  return axios.get(
    `${APP_SETTINGS.API_PATH.SCHEDULE.getAppointmentDurationByUserId}?id=${userId}`
  );
}
