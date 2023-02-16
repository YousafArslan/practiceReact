import { AbstractAction } from "../actions";

export default function AbstractionLayer(apiList, dispatch) {
  if (Array.isArray(apiList)) {
    let tempObj = [];
    for (var i = 0; i < apiList.length; i++) {
      tempObj.push(apiList[i].name.type);
    }
    let newList = apiList.map((item) => {
      if (item.data === undefined) {
        item.name.data.urlExtension = item.urlExtension;
      } else {
        item.name.data.data = item.data;
      }
      if (item.functionOnSuccess !== undefined) {
        item.name.functionOnSuccess = item.functionOnSuccess;
      }
      if (item.setCookiesforUser !== undefined) {
        item.name.setCookiesforUser = item.setCookiesforUser;
      }
      if (item.Notification !== undefined) {
        item.name.Notification = item.Notification;
      }
      if (item.functionOnFailureResponse !== undefined) {
        item.name.functionOnFailureResponse = item.functionOnFailureResponse;
      }
      if (item.functionOnFailureError !== undefined) {
        item.name.functionOnFailureError = item.functionOnFailureError;
      }
      if (item.headers !== undefined) {
        item.name.data.headers = item.headers;
      }
      return item.name;
    });
    for (var b = 0; b < newList.length; b++) {
      dispatch(AbstractAction(newList[b]));
    }
  }
}
