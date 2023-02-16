import { failure, FAX, request, success } from "./utilities";
import { Notification } from "../../assets/genericAction/index";
import { createFaxApi, getFaxByIdApi, resendFax } from "../api/FaxApi";

export const CreateFax = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(FAX.CREATE_FAX_LOADING));
    createFaxApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(success(FAX.CREATE_FAX_SUCCESS, response.data.data));
          if (moveToNext) {
            moveToNext();
          }
          Notification(response.data.message, response.data.succeeded);
        } else {
          dispatch(failure(FAX.CREATE_FAX_FAILURE, response.data.message));
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            FAX.CREATE_FAX_FAILURE,
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

export const GetFaxById = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(FAX.GET_FAX_BY_ID_LOADING));
    getFaxByIdApi(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(success(FAX.GET_FAX_BY_ID_SUCCESS, response.data.data));
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(failure(FAX.GET_FAX_BY_ID_FAILURE, response.data.message));
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        Notification("Cannot Get Record", false);
        dispatch(
          failure(
            FAX.GET_FAX_BY_ID_FAILURE,
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

export const ResendFax = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(FAX.RESEND_FAX_LOADING));
    resendFax(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(success(FAX.RESEND_FAX_SUCCESS, response.data.data));
          Notification(response.data.message, response.data.succeeded);
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(failure(FAX.RESEND_FAX_FAILURE, response.data.message));
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
            FAX.RESEND_FAX_FAILURE,
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
