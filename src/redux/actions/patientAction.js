import {
  createPatientCaseFile,
  getAllPatientApi,
  getAllPatientDropDownApi,
  getCaseByCaseId,
  getCaseFilesByCaseId,
  getPatientCaseDropDownApi,
  getReferralFilesByReferralId,
} from "../api/patientApi";
import { failure, PATIENTS, request, success } from "./utilities";
import { Notification } from "../../assets/genericAction/index";

export const GetAllPatientAction = (data) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.GET_ALL_PATIENT_LOADING));
    getAllPatientApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(PATIENTS.GET_ALL_PATIENT_SUCCESS, response.data.data)
          );
        } else {
          dispatch(
            failure(PATIENTS.GET_ALL_PATIENT_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.GET_ALL_PATIENT_FAILURE,
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

export const GetAllPatientDropDown = (data) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.GET_ALL_PATIENT_DROPDOWN_LOADING));
    getAllPatientDropDownApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              PATIENTS.GET_ALL_PATIENT_DROPDOWN_SUCCESS,
              response.data.data
            )
          );
        } else {
          dispatch(
            failure(
              PATIENTS.GET_ALL_PATIENT_DROPDOWN_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.GET_ALL_PATIENT_DROPDOWN_FAILURE,
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

export const GetPatientCaseDropDown = (data) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.GET_PATIENT_CASE_DROPDOWN_LOADING));
    getPatientCaseDropDownApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              PATIENTS.GET_PATIENT_CASE_DROPDOWN_SUCCESS,
              response.data.data
            )
          );
        } else {
          dispatch(
            failure(
              PATIENTS.GET_PATIENT_CASE_DROPDOWN_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.GET_PATIENT_CASE_DROPDOWN_FAILURE,
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

export const GetCaseByCaseId = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.GET_CASE_BY_CASE_ID_LOADING));
    getCaseByCaseId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(PATIENTS.GET_CASE_BY_CASE_ID_SUCCESS, response.data.data)
          );
          if (moveToNext) {
            moveToNext(response.data.data);
          }
        } else {
          dispatch(
            failure(PATIENTS.GET_CASE_BY_CASE_ID_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.GET_CASE_BY_CASE_ID_FAILURE,
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

export const CreatePatientCaseFile = (data, getAllPatienCases) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.CREATE_PATIENT_CASE_FILE_LOADING));
    createPatientCaseFile(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              PATIENTS.CREATE_PATIENT_CASE_FILE_SUCCESS,
              response.data.data
            )
          );
          if (getAllPatienCases) {
            getAllPatienCases(response.data);
          }
          Notification(response.data.message, response.data.succeeded);
        } else {
          dispatch(
            failure(
              PATIENTS.CREATE_PATIENT_CASE_FILE_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.CREATE_PATIENT_CASE_FILE_FAILURE,
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

export const getReferralFilesById = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.GET_REFERRAL_FILES_BY_ID_LOADING));
    getReferralFilesByReferralId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              PATIENTS.GET_REFERRAL_FILES_BY_ID_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              PATIENTS.GET_REFERRAL_FILES_BY_ID_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.GET_REFERRAL_FILES_BY_ID_FAILURE,
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

export const GetCaseFilesByCaseId = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(PATIENTS.GET_CASE_FILES_BY_CASE_ID_LOADING));
    getCaseFilesByCaseId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              PATIENTS.GET_CASE_FILES_BY_CASE_ID_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              PATIENTS.GET_CASE_FILES_BY_CASE_ID_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            PATIENTS.GET_CASE_FILES_BY_CASE_ID_FAILURE,
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
