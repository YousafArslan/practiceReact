import axios from "axios";
import { APP_SETTINGS } from "../../config";

export function addBusinessOperatingHours(data) {
    return axios.post(`${APP_SETTINGS.API_PATH.CLINIC_SETTINGS.addBusinessOperatingHours}`, data);
}

export function editBusinessOperatingHours(data) {
    return axios.put(`${APP_SETTINGS.API_PATH.CLINIC_SETTINGS.editBusinessOperatingHours}`, data);
}

export function getAllBusinessOperatingHours(clinicId) {
    return axios.get(`${APP_SETTINGS.API_PATH.CLINIC_SETTINGS.getAllBusinessOperatingHours}?clinicId=${clinicId}`);
}