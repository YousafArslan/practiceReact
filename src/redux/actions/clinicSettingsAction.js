import { Notification } from "../../assets";
import { addBusinessOperatingHours, editBusinessOperatingHours, getAllBusinessOperatingHours } from "../api/clinicSettingsApi";
import { CLINIC_SETTINGS, failure, request, success } from "./utilities";



export const AddBusinessOperatingHours = (data) => {
    return (dispatch) => {
        dispatch(request(CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_LOADING));
        addBusinessOperatingHours(data).then(
            (response) => {
                if (response.data.succeeded === true) {
                    dispatch(
                        success(
                            CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_SUCCESS,
                            response.data.data
                        )
                    );
                    Notification(response.data.message, response.data.succeeded);
                } else {
                    dispatch(
                        failure(
                            CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_FAILURE,
                            response.data.message
                        )
                    );
                    Notification(response.data.message, response.data.succeeded);
                }
            },
            (error) => {
                dispatch(
                    failure(
                        CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_FAILURE,
                        error &&
                            error.response &&
                            error.response.data &&
                            error.response.data.message
                            ? error.response.data.message
                            : error.message
                    )
                );
            }
        );
    };
};
export const EditBusinessOperatingHours = (data) => {
    return (dispatch) => {
        dispatch(request(CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_LOADING));
        editBusinessOperatingHours(data).then(
            (response) => {
                if (response.data.succeeded === true) {
                    dispatch(
                        success(
                            CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_SUCCESS,
                            response.data.data
                        )
                    );
                    Notification(response.data.message, response.data.succeeded);
                } else {
                    dispatch(
                        failure(
                            CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_FAILURE,
                            response.data.message
                        )
                    );
                    Notification(response.data.message, response.data.succeeded);
                }
            },
            (error) => {
                dispatch(
                    failure(
                        CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_FAILURE,
                        error &&
                            error.response &&
                            error.response.data &&
                            error.response.data.message
                            ? error.response.data.message
                            : error.message
                    )
                );
            }
        );
    };
};


export const getAllBusinessOperatingHoursAction = (clinicId) => {
    return (dispatch) => {
        dispatch(request(CLINIC_SETTINGS.GET_ALL_BUSINESS_OPERATING_HOURS_LOADING));
        getAllBusinessOperatingHours(clinicId).then(
            (response) => {
                if (response.data.succeeded === true) {
                    dispatch(
                        success(
                            CLINIC_SETTINGS.GET_ALL_BUSINESS_OPERATING_HOURS_SUCCESS,
                            response.data.data
                        )
                    );
                } else {
                    dispatch(
                        failure(
                            CLINIC_SETTINGS.GET_ALL_BUSINESS_OPERATING_HOURS_FAILURE,
                            response.data.message
                        )
                    );
                }
            },
            (error) => {
                dispatch(
                    failure(
                        CLINIC_SETTINGS.GET_ALL_BUSINESS_OPERATING_HOURS_FAILURE,
                        error &&
                            error.response &&
                            error.response.data &&
                            error.response.data.message
                            ? error.response.data.message
                            : error.message
                    )
                );
            }
        );
    };
};