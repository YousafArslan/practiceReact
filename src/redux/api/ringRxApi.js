import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function getTokenForRingRXApi(data) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.RING_RX.getRingRXToken}?username=${data.username}&password=${data.password}`
  );

}
export async function sendMessageRingRXApi(data) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.RING_RX.sendMessage}?to=${data.to}&message=${data.message}`,
    null,
  );
}

export function makeCallRingRXApi(data) {
  
  return axios.post(
    `${APP_SETTINGS.API_PATH.RING_RX.makeCall}?to=${data.to}`,
    null,
  );
}

export function terminateCallRingRXApi(uuid, token) {
  return axios.delete(
    `${APP_SETTINGS.API_PATH.RING_RX.makeCall}?uuid=${uuid}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
