import { failure, REFERRAL_MANAGEMENT, request, success } from "./utilities";
import { Notification } from "../../assets/genericAction/index";
import {
  getAllDatabyRefferalPatientId,
  getClericalDropdownbyClinicId,
  getRefferalPatientBySpecialityId,
  getSpecialityPatientsCount,
  createCall,
  createMessage,
  updateCallLog,
  updateRefferalDetails,
  createCallBack,
} from "../api/ReferralManagementsApi";

export const GetSpecialityPatientCount = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(
      request(REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_LOADING)
    );
    getSpecialityPatientsCount(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.GET_SPECIALITY_PATIENTS_COUNT_FAILURE,
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

export const GetReferralPatientBySpecialityId = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(
      request(REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_LOADING)
    );
    getRefferalPatientBySpecialityId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.GET_REFERRAL_PATIENT_BY_SPECIALITY_ID_FAILURE,
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

export const GetAllDatabyRefferalPatientId = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(
      request(REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_LOADING)
    );
    getAllDatabyRefferalPatientId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.GET_ALL_DATA_BY_REFERRAL_PATIENT_ID_FAILURE,
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

export const GetClericalDropdownbyClinicId = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(
      request(REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_LOADING)
    );
    getClericalDropdownbyClinicId(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.GET_CLERICAL_DROPDOWN_BY_CLINIC_ID_FAILURE,
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

export const CreateCall = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFERRAL_MANAGEMENT.CREATE_CALL_LOADING));
    createCall(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(REFERRAL_MANAGEMENT.CREATE_CALL_SUCCESS, response.data.data)
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.CREATE_CALL_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.CREATE_CALL_FAILURE,
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
export const CreateMessage = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFERRAL_MANAGEMENT.CREATE_MESSAGE_LOADING));
    createMessage(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.CREATE_MESSAGE_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.CREATE_MESSAGE_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.CREATE_MESSAGE_FAILURE,
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

export const UpdateCallLog = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_LOADING));
    updateCallLog(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_SUCCESS,
              response.data.data
            )
          );
          Notification(response.data.message, response.data.succeeded);
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.UPDATE_CALL_LOG_FAILURE,
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

export const UpdateReferralDetails = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_LOADING));
    updateRefferalDetails(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_SUCCESS,
              response.data.data
            )
          );
          Notification(response.data.message, response.data.succeeded);
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.UPDATE_REFERRAL_DETAILS_FAILURE,
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

export const CreateCallBack = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFERRAL_MANAGEMENT.CREATE_CALL_BACK_LOADING));
    createCallBack(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFERRAL_MANAGEMENT.CREATE_CALL_BACK_SUCCESS,
              response.data.data
            )
          );
          Notification(response.data.message, response.data.succeeded);
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              REFERRAL_MANAGEMENT.CREATE_CALL_BACK_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
        dispatch(
          failure(
            REFERRAL_MANAGEMENT.CREATE_CALL_BACK_FAILURE,
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
