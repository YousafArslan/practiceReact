import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function createUpdateStickyNotes(data) {
  return axios.post(
    APP_SETTINGS.API_PATH.STICKY_NOTES.createUpdateStickyNotes,
    data
  );
}
