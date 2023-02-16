import axios from "axios";
import { APP_SETTINGS } from "../../config";

export const getToken = (data) => {
  return axios.post(APP_SETTINGS.API_PATH.FORM_DR.getToken, data, {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
};

export const getPractice = (data) => {
  return axios.get(APP_SETTINGS.API_PATH.FORM_DR.getPractice, {
    headers: {
      Authorization: `Bearer ${data}`,
    },
  });
};

export const getForms = (data, token) => {
  return axios.get(`${APP_SETTINGS.API_PATH.FORM_DR.getForms}/${data}/forms`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSubmissions = (data) => {
  return axios.post(APP_SETTINGS.API_PATH.FORM_DR.getSubmissions, data);
};

export const getSubmissionsFile = (data, token) => {
  return axios.get(
    `${APP_SETTINGS.API_PATH.FORM_DR.getSubmissionsFile}/?practiceId=${data.practiceId}&submissionId=${data.submissionId}`
  );
};
