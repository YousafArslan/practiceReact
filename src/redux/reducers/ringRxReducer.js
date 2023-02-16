import { RING_RX } from "../actions/utilities";

const INITIAL_STATE = {
  getRingRXTokenLoading: false,
  getRingRXTokenSuccess: false,
  getRingRXTokenFailure: false,
  getRingRXToken: null,
  getRingRXTokenError: null,

  sendMessageLoading: false,
  sendMessageSuccess: false,
  sendMessageFailure: false,
  sendMessage: null,
  sendMessageError: null,

  createCallLoading: false,
  createCallSuccess: false,
  createCallFailure: false,
  createCall: null,
  createCallError: null,

  terminateCallLoading: false,
  terminateCallSuccess: false,
  terminateCallFailure: false,
  terminateCall: null,
  terminateCallError: null,
};

export const ringRXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_LOADING:
      return {
        ...state,
        getRingRXTokenLoading: true,
        getRingRXTokenSuccess: false,
        getRingRXTokenFailure: false,
        getRingRXTokenError: null,
      };
    case RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_SUCCESS:
      return {
        ...state,
        getRingRXTokenLoading: false,
        getRingRXTokenSuccess: true,
        getRingRXTokenFailure: false,
        getRingRXToken: action.payload,
        getRingRXTokenError: null,
      };
    case RING_RX.CREATE_TOKEN_FROM_CREDENTIALS_FAILURE:
      return {
        ...state,
        getRingRXTokenLoading: false,
        getRingRXTokenSuccess: false,
        getRingRXTokenFailure: true,
        getRingRXToken: null,
        getRingRXTokenError: action.payload,
      };

    case RING_RX.SEND_MESSAGE_LOADING:
      return {
        ...state,
        sendMessageLoading: true,
        sendMessageSuccess: false,
        sendMessageFailure: false,
        sendMessageError: null,
      };
    case RING_RX.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        sendMessageLoading: false,
        sendMessageSuccess: true,
        sendMessageFailure: false,
        sendMessage: action.payload,
        sendMessageError: null,
      };
    case RING_RX.SEND_MESSAGE_FAILURE:
      return {
        ...state,
        sendMessageLoading: false,
        sendMessageSuccess: false,
        sendMessageFailure: true,
        sendMessage: null,
        sendMessageError: action.payload,
      };

    case RING_RX.TERMINATE_CALL_LOADING:
      return {
        ...state,
        terminateCallLoading: true,
        terminateCallSuccess: false,
        terminateCallFailure: false,
        terminateCallError: null,
      };
    case RING_RX.TERMINATE_CALL_SUCCESS:
      return {
        ...state,
        terminateCallLoading: false,
        terminateCallSuccess: true,
        terminateCallFailure: false,
        terminateCall: action.payload,
        terminateCallError: null,
      };
    case RING_RX.TERMINATE_CALL_FAILURE:
      return {
        ...state,
        terminateCallLoading: false,
        terminateCallSuccess: false,
        terminateCallFailure: true,
        terminateCall: null,
        terminateCallError: action.payload,
      };

    default:
      return state;
  }
};
