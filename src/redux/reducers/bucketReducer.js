import { BUCKET } from "../actions/utilities";

const INITIAL_STATE = {
  uploadFileLoading: false,
  uploadFileSuccess: false,
  uploadFileFailure: false,
  uploadFile: null,
  uploadFileError: null,
  uploadFileAsyncLoading: false,
  uploadFileAsyncSuccess: false,
  uploadFileAsyncFailure: false,
  uploadFileAsyncError: null,
};

export const bucketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUCKET.UPLOAD_FILE_REQUEST:
      return {
        ...state,
        uploadFileLoading: true,
        uploadFileSuccess: false,
        uploadFileFailure: false,
        uploadFileError: null,
      };
    case BUCKET.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        uploadFileLoading: false,
        uploadFileSuccess: true,
        uploadFileFailure: false,
        uploadFile: action.payload,
        uploadFileError: null,
      };
    case BUCKET.UPLOAD_FILE_FAILURE:
      return {
        ...state,
        uploadFileLoading: false,
        uploadFileSuccess: false,
        uploadFileFailure: true,
        uploadFile: null,
        uploadFileError: action.payload,
      };

    case BUCKET.UPLOAD_FILE_ASYNC_REQUEST:
      return {
        ...state,
        uploadFileAsyncLoading: true,
        uploadFileAsyncSuccess: false,
        uploadFileAsyncFailure: false,
        uploadFileAsyncError: null,
      };
    case BUCKET.UPLOAD_FILE_ASYNC_SUCCESS:
      return {
        ...state,
        uploadFileAsyncLoading: false,
        uploadFileAsyncSuccess: true,
        uploadFileAsyncFailure: false,
        uploadFileAsyncError: null,
      };
    case BUCKET.UPLOAD_FILE_ASYNC_FAILURE:
      return {
        ...state,
        uploadFileAsyncLoading: false,
        uploadFileAsyncSuccess: false,
        uploadFileAsyncFailure: true,
        uploadFileAsyncError: action.payload,
      };
    default:
      return state;
  }
};
