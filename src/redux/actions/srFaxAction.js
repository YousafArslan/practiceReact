import { getSrFaxInbox, queueFax, retrieveFax } from "../api/SrFaxApi";
import { SR_FAX, failure, request, success } from "./utilities";

export const GetSrFaxInbox = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(SR_FAX.GET_SR_FAX_INBOX_LOADING));
    getSrFaxInbox(data).then(
      (response) => {
        if (response.data.data.status === "Success") {
          // let temp = JSON.parse(response.data.data);
          dispatch(success(SR_FAX.GET_SR_FAX_INBOX_SUCCESS, response.data));

          if (moveToNext) {
            moveToNext(response.data.totalData);
          }
        } else {
          dispatch(
            failure(SR_FAX.GET_SR_FAX_INBOX_FAILURE, response.data.data)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            SR_FAX.GET_SR_FAX_INBOX_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const RetrieveFax = (data, moveToNext) => {
  return (dispatch) => {
    dispatch(request(SR_FAX.RETRIEVE_FAX_LOADING));
    retrieveFax(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          let temp = JSON.parse(response.data.data);
          dispatch(success(SR_FAX.RETRIEVE_FAX_SUCCESS, temp.Result));
          moveToNext(temp.Result);
        } else {
          dispatch(failure(SR_FAX.RETRIEVE_FAX_FAILURE, response.data.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            SR_FAX.RETRIEVE_FAX_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const QueueFax = (data) => {
  return (dispatch) => {
    dispatch(request(SR_FAX.QUEUE_FAX_LOADING));
    queueFax(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          let temp = JSON.parse(response.data.data);
          dispatch(success(SR_FAX.QUEUE_FAX_SUCCESS, temp.Result));
        } else {
          dispatch(failure(SR_FAX.QUEUE_FAX_FAILURE, response.data.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            SR_FAX.QUEUE_FAX_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};
