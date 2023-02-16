import {
  createUpdatePatientInbox,
  createUpdateReferralInbox,
} from "../api/inboxApi";
import { Notification } from "../../assets/genericAction/index";
import { failure, INBOX, request, success } from "./utilities";

export const CreateUpdatePatientInbox = (data, moveToInbox) => {
  return (dispatch) => {
    dispatch(request(INBOX.CREATE_UPDATE_PATIENT_INBOX_LOADING));
    createUpdatePatientInbox(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              INBOX.CREATE_UPDATE_PATIENT_INBOX_SUCCESS,
              response.data.data
            )
          );
          Notification(response.data.message, response.data.succeeded);
          moveToInbox();
        } else {
          dispatch(
            failure(
              INBOX.CREATE_UPDATE_PATIENT_INBOX_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            INBOX.CREATE_UPDATE_PATIENT_INBOX_FAILURE,
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

export const CreateUpdateReferralInbox = (data, moveToInbox) => {
  return (dispatch) => {
    dispatch(request(INBOX.CREATE_UPDATE_REFERRAL_INBOX_LOADING));
    createUpdateReferralInbox(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              INBOX.CREATE_UPDATE_REFERRAL_INBOX_SUCCESS,
              response.data.data
            )
          );
          Notification(response.data.message, response.data.succeeded);
          moveToInbox();
        } else {
          dispatch(
            failure(
              INBOX.CREATE_UPDATE_REFERRAL_INBOX_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            INBOX.CREATE_UPDATE_REFERRAL_INBOX_FAILURE,
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
