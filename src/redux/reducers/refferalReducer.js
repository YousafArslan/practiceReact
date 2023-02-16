import { REFFERAL_TEMPLATE } from "../actions/utilities";

const INITIAL_STATE = {
    getRefferalLoading: false,
    getRefferalSuccess: false,
    getRefferalFailure: false,
    getRefferalError: null,
    callTimesData: [],
    createOrUpdateLoading: false,
    createOrUpdateSuccess: false,
    createOrUpdateFailure: false,
    createOrUpdateError: null,

}

export const referralReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_REQUEST:
            return {
                ...state,
                getRefferalLoading: true,
                getRefferalSuccess: false,
                getRefferalFailure: false,
                getRefferalError: null,
            }
        case REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_SUCCESS:
            return {
                ...state,
                getRefferalLoading: false,
                getRefferalSuccess: true,
                getRefferalFailure: false,
                getRefferalError: null,
                callTimesData: action.payload
            }
        case REFFERAL_TEMPLATE.GET_REFFERAL_CALL_TIME_FAILURE:
            return {
                ...state,
                getRefferalLoading: false,
                getRefferalSuccess: false,
                getRefferalFailure: true,
                getRefferalError: action.payload,
            }

        case REFFERAL_TEMPLATE.CHANGE_IN_REFFERAL_CALL_TIME:
            let allData = state.callTimesData;
            if (action.payload.type === 1) {
                for (let i = 0; i < allData.length; i++) {
                    allData[i] = {
                        ...allData[i], "callHours": action.payload.ishours ? null : 0,
                        "callDays": action.payload.ishours ? 0 : null,
                    }
                }
            }
            if (action.payload.type === 2) {
                for (let i = 0; i < allData.length; i++) {
                    if (action.payload.id === allData[i].callTypeId) {
                        if (action.payload.ishours) {
                            allData[i] = {
                                ...allData[i], "callHours": action.payload.value,
                                "callDays": 0,
                            }
                        }
                        else {
                            allData[i] = {
                                ...allData[i], "callHours": 0,
                                "callDays": action.payload.value,
                            }
                        }
                    }
                }
            }
            if (action.payload.type === 3) {
                for (let i = 0; i < allData.length; i++) {
                    if (allData[i].callTypeId === action.payload.id) {
                        allData.splice(i, 1)
                    }
                }
            }
            if (action.payload.type === 4) {
                allData.push({
                    "callTypeId": action.payload.id,
                    "callHours": null,
                    "callDays": null,
                    callType: action.payload.callType,
                    "clinicId": action.payload.clinicId,
                    "id": 0

                })
            }
            return {
                ...state,
                callTimesData: allData
            }
        case REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_REQUEST:
            return {
                ...state,
                createOrUpdateLoading: true,
                createOrUpdateSuccess: false,
                createOrUpdateFailure: false,
                createOrUpdateError: null,
            }
        case REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_SUCCESS:
            return {
                ...state,
                createOrUpdateLoading: false,
                createOrUpdateSuccess: true,
                createOrUpdateFailure: false,
                createOrUpdateError: null,

            }
        case REFFERAL_TEMPLATE.CREATE_UPDATE_REFFERAL_CALL_TIME_FAILURE:
            return {
                ...state,
                createOrUpdateLoading: false,
                createOrUpdateSuccess: false,
                createOrUpdateFailure: true,
                createOrUpdateError: action.payload,
            }
        default:
            return state;
    }
}