import {
  AddPatientRefferaApi,
  getRefferalById,
  EditPatientRefferaApi,
  getAllReferrals,
  referralDropDown,
} from "../api/patientRefferalApi";
import { Notification } from "../../assets/genericAction/index";
import { request, success, failure, REFFERAL } from "./utilities";
export const AddPatientRefferaAction = (data, movetoNext) => {
  return (dispatch) => {
    dispatch(request(REFFERAL.CREATE_PATIENT_REFFERAL_LOADING));
    AddPatientRefferaApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              REFFERAL.CREATE_PATIENT_REFFERAL_SUCCESS,
              response.data.data
            )
          );

          movetoNext(response);
        } else {
          dispatch(
            failure.REFFERAL.CREATE_PATIENT_REFFERAL_FAILURE,
            response.data.message
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        debugger;
        dispatch(
          failure(
            REFFERAL.CREATE_PATIENT_REFFERAL_FAILURE,
            error,
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
      }
    );
  };
};
export const UpdateRefferal = (data, movetoNext) => {
  return (dispatch) => {
    dispatch(request(REFFERAL.UPDATE_REFFERAL_LOADING));
    EditPatientRefferaApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(REFFERAL.UPDATE_REFFERAL_SUCCESS, response.data.data)
          );
          movetoNext();
        } else {
          dispatch(
            failure.REFFERAL.UPDATE_REFFERAL_FAILURE,
            response.data.message
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            REFFERAL.UPDATE_REFFERAL_FAILURE,
            error,
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
};

export const GetRefferalById = (data) => {
  return (dispatch) => {
    dispatch(request(REFFERAL.GET_REFFERAL_BY_ID_LOADING));
    getRefferalById(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(REFFERAL.GET_REFFERAL_BY_ID_SUCCESS, response.data.data)
          );
        } else {
          dispatch(
            failure(REFFERAL.GET_REFFERAL_BY_ID_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            REFFERAL.GET_REFFERAL_BY_ID_FAILURE,
            error,
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
};

export const GetAllReferrals = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFFERAL.GET_ALL_REFFERALS_LOADING));
    getAllReferrals(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(REFFERAL.GET_ALL_REFFERALS_SUCCESS, {
              resp: response.data.data,
              total: response.data.totalData,
            })
          );
        } else {
          dispatch(
            failure(REFFERAL.GET_ALL_REFFERALS_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            REFFERAL.GET_ALL_REFFERALS_FAILURE,
            error,
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
};

export const GetReferralDropDown = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(REFFERAL.GET_REFERRAL_DROPDOWN_LOADING));
    referralDropDown(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(REFFERAL.GET_REFERRAL_DROPDOWN_SUCCESS, response.data.data)
          );
        } else {
          dispatch(
            failure(
              REFFERAL.GET_REFERRAL_DROPDOWN_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            REFFERAL.GET_REFERRAL_DROPDOWN_FAILURE,
            error,
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
};
