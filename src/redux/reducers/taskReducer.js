import { TASK } from "../actions/utilities";

const INITIAL_STATE = {
  getAllProductsLoading: false,
  getAllProductsSuccess: false,
  getAllProductsFailure: false,
  getAllProductsError: null,
  getAllProducts: null,
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        getAllProductsLoading: true,
        getAllProductsSuccess: false,
        getAllProductsFailure: false,
        getAllProductsError: null,
      };
    case TASK.GET_ALL_PRODUCTS_SUCCESS:
      //   debugger;
      return {
        ...state,
        getAllProductsLoading: false,
        getAllProductsSuccess: true,
        getAllProductsFailure: false,
        getAllProductsError: null,
        getAllProducts: action.payload,
      };
    case TASK.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        getAllProductsLoading: false,
        getAllProductsSuccess: false,
        getAllProductsFailure: true,
        getAllProductsError: action.payload,
        getAllProducts: null,
      };

    default:
      return state;
  }
};
