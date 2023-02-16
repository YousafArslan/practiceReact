import { request, success, failure } from "./utilities";
import { AbstractApi } from "../api";

export function AbstractAction(props) {
  return (dispatch) => {
    dispatch(
      request(`${props.type}_REQUEST`, {
        data: null,
        checkType: props.type,
        REDUCER_STATE_NAME: props.name,
      })
    );
    AbstractApi(props.data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(`${props.type}_SUCCESS`, {
              data: response.data.data,
              checkType: props.type,
              REDUCER_STATE_NAME: props.name,
            })
          );

          props?.functionOnSuccess && props.functionOnSuccess(response.data);
          if (props?.setCookiesforUser) {
            props.setCookiesforUser(response.data.data);
          }
          if (props?.Notification) {
            props.Notification(response.data.message, "success");
          }
          props?.functionToGetTotalRecords &&
            props.functionToGetTotalRecords(
              response.data.totalData ? response.data.totalData : null
            );
        } else {
          dispatch(
            failure(`${props.type}_FAILURE`, {
              data: response.data.data,
              checkType: props.type,
              REDUCER_STATE_NAME: props.name,
            })
          );
          props?.functionOnFailureOnResponse &&
            props.functionOnFailureResponse();
          if (props?.Notification) {
            props.Notification(response.data.message, "error");
          }
        }
      },
      (error) => {
        dispatch(
          failure(
            `${props.type}_FAILURE`,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? {
                  data: error.response.data.message,
                  checkType: props.type,
                  REDUCER_STATE_NAME: props.name,
                }
              : {
                  data: error.message,
                  checkType: props.type,
                  REDUCER_STATE_NAME: props.name,
                }
          )
        );
        props?.functionOnFailureOnError && props.functionOnFailureError();
        if (props?.Notification) {
          props.Notification(error.response.data.message, "error");
        }
      }
    );
  };
}
