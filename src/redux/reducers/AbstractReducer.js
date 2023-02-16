const ABSTRACT_STATE = null;

export const AllReducer = (state = ABSTRACT_STATE, action) => {
  if (action?.payload?.checkType) {
    switch (action.type) {
      case `${action.payload.checkType}`:
        return {
          ...(state && { ...state }),
          [`${action.payload.REDUCER_STATE_NAME}Success`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Loading`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Failure`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Error`]: null,
        }
      case `${action.payload.checkType}_REQUEST`:
        return {
          ...(state && { ...state }),
          [`${action.payload.REDUCER_STATE_NAME}Success`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Loading`]: true,
          [`${action.payload.REDUCER_STATE_NAME}Failure`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Error`]: null,
          [`${action.payload.REDUCER_STATE_NAME}`]: null,
        };
      case `${action.payload.checkType}_SUCCESS`:
        return {
          ...(state && { ...state }),
          [`${action.payload.REDUCER_STATE_NAME}Success`]: true,
          [`${action.payload.REDUCER_STATE_NAME}Loading`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Failure`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Error`]: null,
          [`${action.payload.REDUCER_STATE_NAME}`]: action.payload.data,
        };
      case `${action.payload.checkType}_FAILURE`:
        return {
          ...(state && { ...state }),
          [`${action.payload.REDUCER_STATE_NAME}Success`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Loading`]: false,
          [`${action.payload.REDUCER_STATE_NAME}Failure`]: true,
          [`${action.payload.REDUCER_STATE_NAME}Error`]: action.payload.data,
          [`${action.payload.REDUCER_STATE_NAME}`]: null,
        };
      default:
        return state;
    }
  }
  return state;
};
