const initialState = localStorage.getItem("permissions")
  ? JSON.parse(localStorage.getItem("permissions"))
  : [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PERMISSIONS":
      return payload;
    default:
      return state;
  }
};

export default reducer;
