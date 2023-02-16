import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function createUpdateRefferalCallTime(data) {
    return axios.post(`${APP_SETTINGS.API_PATH.REFFERAL_CALL_TIME.createUpdateRefferalCallTime}`, data)
}

export function getRefferalCallTime(clinicId) {
    return axios.get(`${APP_SETTINGS.API_PATH.REFFERAL_CALL_TIME.getRefferalCallTime}?ClinicId=${clinicId}`)
}