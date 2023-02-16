import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function createUpdatePatientInbox(data) {
  return axios.post(APP_SETTINGS.API_PATH.INBOX.createUpdatePatientInbox, data);
}

export function createUpdateReferralInbox(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.INBOX.createUpdateReferralInbox,
    data
  );
}
