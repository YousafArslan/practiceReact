import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getAllPhysicianGroup(data) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.PHYSICIAN_GROUP.getAllGroups}`,
    data
  );
}

export function addGroup(data) {
  return axios.post(`${APP_SETTINGS.API_PATH.PHYSICIAN_GROUP.addGroup}`, data);
}

export function getSingleGroup(id) {
  return axios.get(
    `${APP_SETTINGS.API_PATH.PHYSICIAN_GROUP.getSingleGroup}/${id}`,
    {
      id: id,
    }
  );
}
