import {
  addOrUpdateGoalNotes,
  getGoalNotes,
  getGoalTemplates,
  updateAppointmentNoteForms,
  updateAppointmentNoteImages,
  updateGoalValue,
  removeGoalRow,
} from "../api";
import { APPOINTMENT_NOTES, request, success, failure } from "./utilities";
import { Notification } from "../../assets/genericAction/index";

export function UpdateAppointmentNoteImages(data, moveToNext) {
  return (dispatch) => {
    dispatch(
      request(APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_REQUEST)
    );
    updateAppointmentNoteImages(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}

export function UpdateAppointmentNoteForms(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_REQUEST));
    updateAppointmentNoteForms(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}

export function GetGoalTemplates(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_REQUEST));
    getGoalTemplates(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}

export function AddOrUpdateGoalNotes(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_REQUEST));
    addOrUpdateGoalNotes(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}

export function GetGoalNotes(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT_NOTES.GET_GOAL_NOTES_REQUEST));
    getGoalNotes(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_NOTES.GET_GOAL_NOTES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.GET_GOAL_NOTES_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.GET_GOAL_NOTES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}

export function UpdateGoalValue(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_REQUEST));
    updateGoalValue(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_FAILURE,
              response.data.message
            )
          );
          Notification(response.data.message, response.data.succeeded);
        }
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}

export function RemoveGoalRow(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(APPOINTMENT_NOTES.REMOVE_GOAL_ROW_REQUEST));
    removeGoalRow(data.row).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(APPOINTMENT_NOTES.REMOVE_GOAL_ROW_SUCCESS, {
              response: response.data.data,
              rowIndex: data.rowIndex,
            })
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              APPOINTMENT_NOTES.REMOVE_GOAL_ROW_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            APPOINTMENT_NOTES.REMOVE_GOAL_ROW_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
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
}
