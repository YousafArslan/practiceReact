import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function uploadFileAsync(fileData) {
  return axios.post(
    `${APP_SETTINGS.API_PATH.S3_BUCKET.uploadFileAsync}?BucketName=${fileData.bucketName}&Prefix=${fileData.prefix}`,
    { file: fileData.file }
  );
}

export function uploadFile(fileData) {
  return axios.post(`${APP_SETTINGS.API_PATH.S3_BUCKET.uploadFile}`, fileData);
}

export function downloadBucketFile(key) {
  return axios.get(`${APP_SETTINGS.API_PATH.S3_BUCKET.getFile}?key=${key}`)
}