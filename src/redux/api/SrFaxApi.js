import axios from "axios";
import { APP_SETTINGS } from "../../config";

export const getSrFaxInbox = (data) => {
  return axios.post(APP_SETTINGS.API_PATH.SR_FAX.getSrFaxInbox, data);
};

export const retrieveFax = (data) => {
  return axios.post(APP_SETTINGS.API_PATH.SR_FAX.retrieveFax, data);
};

export const queueFax = (data) => {
  return axios.post(APP_SETTINGS.API_PATH.SR_FAX.queueFax, data);
};
