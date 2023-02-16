import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllLookup() {
  return axios.get(`${APP_SETTINGS.API_PATH.LOOKUP.getAllLookup}`);
}
export function getAllLookUpKeys() {
  return axios.get(`${APP_SETTINGS.API_PATH.LOOKUP.getAllLookUpKeys}`);
}
export function getLookupByType(type) {
  return axios.get(`${APP_SETTINGS.API_PATH.LOOKUP.getLookupByType}/${type}`);
}
