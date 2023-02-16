import { createUpdateStickyNotes } from "../api";
import { STICKY_NOTES, request, success, failure } from "./utilities";
import { Notification } from "../../assets/genericAction/index";

export function CreateUpdateStickyNotes(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_REQUEST));
    createUpdateStickyNotes(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_FAILURE,
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
