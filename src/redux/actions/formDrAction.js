import {
  getForms,
  getPractice,
  getSubmissions,
  getSubmissionsFile,
  getToken,
} from "../api/FormDrApi";
import { FORM_DR, failure, request, success } from "./utilities";

export const GetToken = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(FORM_DR.GET_FORM_DR_TOKEN_LOADING));
    getToken(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(FORM_DR.GET_FORM_DR_TOKEN_SUCCESS, response.data));
          moveToNext(response.data.accessToken);
        } else {
          dispatch(failure(FORM_DR.GET_FORM_DR_TOKEN_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            FORM_DR.GET_FORM_DR_TOKEN_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const GetPractice = (data, getFormDrForms) => {
  return (dispatch) => {
    dispatch(request(FORM_DR.GET_PRACTICE_LOADING));
    getPractice(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(FORM_DR.GET_PRACTICE_SUCCESS, response.data));
          getFormDrForms(response.data);
        } else {
          dispatch(failure(FORM_DR.GET_PRACTICE_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            FORM_DR.GET_PRACTICE_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const GetForms = (data, token) => {
  return (dispatch) => {
    dispatch(request(FORM_DR.GET_FORMS_LOADING));
    getForms(data, token).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(FORM_DR.GET_FORMS_SUCCESS, response.data));
        } else {
          dispatch(failure(FORM_DR.GET_FORMS_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            FORM_DR.GET_FORMS_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const GetSubmissionFile = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(FORM_DR.GET_SUBMISSION_FILE_LOADING));
    getSubmissionsFile(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(FORM_DR.GET_SUBMISSION_FILE_SUCCESS, response.data));
          if (moveToNext) {
            moveToNext(response.data);
          }
        } else {
          dispatch(failure(FORM_DR.GET_SUBMISSION_FILE_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            FORM_DR.GET_SUBMISSION_FILE_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const GetSubmissions = (data) => {
  return (dispatch) => {
    dispatch(request(FORM_DR.GET_SUBMISSIONS_LOADING));
    getSubmissions(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(FORM_DR.GET_SUBMISSIONS_SUCCESS, response.data));
        } else {
          dispatch(failure(FORM_DR.GET_SUBMISSIONS_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            FORM_DR.GET_SUBMISSIONS_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};
