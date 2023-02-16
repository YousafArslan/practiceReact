import { getAllProducts } from "../api";
import { TASK, request, success, failure } from "./utilities";

export function GetAllProducts(data) {
  return (dispatch) => {
    dispatch(request(TASK.GET_ALL_PRODUCTS_REQUEST));
    getAllProducts(data).then(
      (response) => {
        if (response.statusText === "OK") {
          dispatch(success(TASK.GET_ALL_PRODUCTS_SUCCESS, response.data));
        } else {
          dispatch(
            failure(TASK.GET_ALL_PRODUCTS_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TASK.GET_ALL_PRODUCTS_FAILURE,
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
