import {
  getTokenForRingRXApi,
  makeCallRingRXApi,
  sendMessageRingRXApi,
  terminateCallRingRXApi,
} from "../api/ringRxApi";
import { failure, request, success, RING_RX } from "./utilities";

export const getTokenForRingRXAction = (data, onSuccess) => {
  return (dispatch) => {
    dispatch(request(RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_LOADING));
    getTokenForRingRXApi(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(
            success(
              RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_SUCCESS,
              response.data
            )
          );
          // moveToNext(response.data.accessToken);
          onSuccess(response.data.access_token);
        } else {
          dispatch(
            failure(
              RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_FAILURE,
              response.data
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const sendMessageAction = (data, messageOnSuccess, messageOnFailure) => {
  return (dispatch) => {
    dispatch(request(RING_RX.SEND_MESSAGE_LOADING));
    sendMessageRingRXApi(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(RING_RX.SEND_MESSAGE_SUCCESS, response.data));
          if (messageOnSuccess) {
            messageOnSuccess()
          }
        } else {
          dispatch(failure(RING_RX.SEND_MESSAGE_FAILURE, response.data));
          if (messageOnFailure) {
            messageOnFailure()
          }
        }
      },
      (error) => {
        dispatch(
          failure(
            RING_RX.SEND_MESSAGE_FAILURE,
            error && error?.response?.data?.message
          )
        );
        if (messageOnFailure) {
          messageOnFailure()
        }
      }
    );
  };
};

export const makeCallRingRXAction = (data, onStartCallSuccess) => {
  return (dispatch) => {
    dispatch(request(RING_RX.MAKE_CALL_LOADING));
    makeCallRingRXApi(data).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(RING_RX.MAKE_CALL_SUCCESS, response.data));
          console.log("Call", response.data);
          onStartCallSuccess(response.data)
        } else {
          dispatch(failure(RING_RX.MAKE_CALL_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            RING_RX.MAKE_CALL_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};

export const terminateCallRingRXAction = (uuid, token) => {
  return (dispatch) => {
    dispatch(request(RING_RX.TERMINATE_CALL_LOADING));
    terminateCallRingRXApi(uuid, token).then(
      (response) => {
        if (response.status === 200) {
          dispatch(success(RING_RX.TERMINATE_CALL_SUCCESS, response.data));
          console.log("Call", response.data);
        } else {
          dispatch(failure(RING_RX.TERMINATE_CALL_FAILURE, response.data));
        }
      },
      (error) => {
        dispatch(
          failure(
            RING_RX.TERMINATE_CALL_FAILURE,
            error && error?.response?.data?.message
          )
        );
      }
    );
  };
};
