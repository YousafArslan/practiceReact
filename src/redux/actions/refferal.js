import { createUpdateRefferalCallTime,getRefferalCallTime } from "../api";
import { REFFERAL_TEMPLATE, request, success, failure } from "./utilities";

export function CreateUpdateReferralCallTime(data) {
    return dispatch => {
        dispatch(request(REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_REQUEST))
        createUpdateRefferalCallTime(data).then((response) => {
            if (response.data.succeeded === true) {
                dispatch(success(REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_SUCCESS, response.data.data))
            } else {
                dispatch(failure(REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_FAILURE, response.data.message))
            }
        }, (error) => {
            dispatch(
                failure(
                    REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_FAILURE,
                    error &&
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                        ? error.response.data.message
                        : error.message
                )
            );
        })
    }
}

export function GetReferralCallTime(data) {
    return dispatch => {
        dispatch(request(REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_REQUEST))
        getRefferalCallTime(data).then((response) => {
            if (response.data.succeeded === true) {
                dispatch(success(REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_SUCCESS, response.data.data))
            } else {
                dispatch(failure(REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_FAILURE, response.data.message))
            }
        }, (error) => {
            dispatch(
                failure(
                    REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_FAILURE,
                    error &&
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                        ? error.response.data.message
                        : error.message
                )
            );
        })
    }
}