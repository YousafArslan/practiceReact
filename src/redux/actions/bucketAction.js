import { uploadFileAsync, uploadFile, downloadBucketFile } from "../api";
import { request, success, failure, BUCKET } from "./utilities";

export function UploadFileAsync(fileData) {
  return (dispatch) => {
    dispatch(request(BUCKET.UPLOAD_FILE_ASYNC_REQUEST));
    uploadFileAsync(fileData).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(BUCKET.UPLOAD_FILE_ASYNC_SUCCESS, response.data.data)
          );
        } else {
          dispatch(
            failure(BUCKET.UPLOAD_FILE_ASYNC_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            BUCKET.UPLOAD_FILE_ASYNC_FAILURE,
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
}

export function UploadFile(fileData, onSuccess, onFail) {
  return (dispatch) => {
    dispatch(request(BUCKET.UPLOAD_FILE_REQUEST));
    uploadFile(fileData).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(success(BUCKET.UPLOAD_FILE_SUCCESS, response.data));
          // DownloadBucketFile(response.data.data, onSuccess, onFail)
          if (onSuccess) {
            onSuccess(response.data.data)
          }
        } else {
          dispatch(failure(BUCKET.UPLOAD_FILE_FAILURE, response.data.message));
          if (onFail) {
            onFail(response.data.message)
          }
        }
      },
      (error) => {
        dispatch(
          failure(
            BUCKET.UPLOAD_FILE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
        if (onFail) {
          onFail(error &&
            error.response &&
            error.response.data &&
            error.response.data.message
            ? error.response.data.message
            : error.message)
        }
      }
    );
  };
}


export function DownloadBucketFile(key, onSuccess, onFail) {
  downloadBucketFile(key).then((response) => {
    if (response.status === 200) {
      if (onSuccess) {
        onSuccess(response.data)
      }
    } else {
      if (onFail) {
        onFail(response.data.message)
      }
    }
  }, (error) => {
    if (onFail) {
      onFail(error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }
  )
}
