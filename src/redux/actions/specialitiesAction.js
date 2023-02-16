import { request, success, failure, SPECIALITIES_TYPE } from "./utilities";
import { addspeciality, getAllSpecialitiesByClinicId, getById, editspeciality } from "../api";

export function GetAllClinicSpecialties(clinicId) {
    return (dispatch) => {
        dispatch(request(SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_LOADING))
        getAllSpecialitiesByClinicId(clinicId).then((response) => {
            if (response.data.succeeded === true) {
                dispatch(success(SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_SUCCESS, response.data.data))
            } else {
                dispatch(failure(SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_FAILURE, response.data.message))
            }
        }, (error) => {
            dispatch(
                failure(
                    SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_FAILURE,
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

export function AddSpecialityAction(specialityData) {
    return (dispatch) => {
        dispatch(request(SPECIALITIES_TYPE.ADD_SPECIALITY_LOADING))
        addspeciality(specialityData).then((response) => {
            if (response.data.succeeded === true) {
                dispatch(success(SPECIALITIES_TYPE.ADD_SPECIALITY_SUCCESS, response.data.data))
            } else {
                dispatch(failure(SPECIALITIES_TYPE.ADD_SPECIALITY_FAILURE, response.data.message))
            }
        }, (error) => {
            dispatch(failure(SPECIALITIES_TYPE.ADD_SPECIALITY_FAILURE, error &&
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
export function EditSpecialityAction(specialityData, onAddedSuccess) {
    return (dispatch) => {
        dispatch(request(SPECIALITIES_TYPE.ADD_SPECIALITY_LOADING))
        editspeciality(specialityData).then((response) => {
            if (response.data.succeeded === true) {
                dispatch(success(SPECIALITIES_TYPE.ADD_SPECIALITY_SUCCESS, response.data.data))
                if (onAddedSuccess) {
                    onAddedSuccess()
                }
            } else {
                dispatch(failure(SPECIALITIES_TYPE.ADD_SPECIALITY_FAILURE, response.data.message))
            }
        }, (error) => {
            dispatch(failure(SPECIALITIES_TYPE.ADD_SPECIALITY_FAILURE, error &&
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
export function GetByID(id) {
    return dispatch => {
        dispatch(request(SPECIALITIES_TYPE.GET_BY_ID_LOADING))
        getById(id).then(
            (response) => {
                if (response.data.succeeded === true) {
                    dispatch(success(SPECIALITIES_TYPE.GET_BY_ID_SUCCESS, response.data.data))
                } else {
                    dispatch(failure(SPECIALITIES_TYPE.GET_BY_ID_FAILURE, response.data.message))
                }
            }, (error) => {
                dispatch(failure(SPECIALITIES_TYPE.GET_BY_ID_FAILURE, error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                    ? error.response.data.message
                    : error.message
                ))
            }
        )
    }
}