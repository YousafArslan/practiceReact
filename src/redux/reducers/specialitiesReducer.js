import { SPECIALITIES_TYPE } from "../actions/utilities";

const INITIAL_STATE = {
    getClinicSpecailitesLoading: false,
    getClinicSpecailitesSuccess: false,
    getClinicSpecailitesFailure: false,
    getClinicSpecailitesError: null,
    getClinicSpecailites: [],
    addLoading: false,
    addFailure: false,
    addSucces: false,
    addError: null,
    codesList: [],
    getByIdLoading: false,
    getByIdSuccess: false,
    getByIdFailure: false,
    getByIdError: null,
    getById: []

}

export const specialitiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SPECIALITIES_TYPE.CHANGE_IN_FORM:
            let data = state.getById
            if (!action.payload.type) {
                data = { ...data, [action.payload.name]: action.payload.value }
            } else if (action.payload.type === "cptBillingList") {
                data = {
                    ...data,
                    cptBillingList: [
                        {
                            ...data.cptBillingList[0],
                            [action.payload.name]: action.payload.value
                        }
                    ]
                }
            } else if (action.payload.type === "supervisorySettingList") {
                data = {
                    ...data,
                    supervisorySettingList: [
                        {
                            ...data.supervisorySettingList[0],
                            [action.payload.name]: action.payload.value
                        }
                    ]
                }
            }

            return {
                ...state,
                getById: data
            }
        case SPECIALITIES_TYPE.GET_BY_ID_LOADING:
            return {
                ...state,
                getByIdLoading: true,
                getByIdSuccess: false,
                getByIdFailure: false,
                getByIdError: null,
                getById: []
            }
        case SPECIALITIES_TYPE.GET_BY_ID_SUCCESS:
            let codes = action.payload.cptForBillingForm

            return {
                ...state,
                getByIdLoading: false,
                getByIdSuccess: true,
                getByIdFailure: false,
                getByIdError: null,
                getById: action.payload,
                codesList: codes
            }
        case SPECIALITIES_TYPE.GET_BY_ID_FAILURE:
            return {
                ...state,
                getByIdLoading: false,
                getByIdSuccess: false,
                getByIdFailure: true,
                getByIdError: action.payload
            }
        case 'GETCPTCODE_FEESCHEDULE_SUCCESS':

            let list = action.payload.data.cptCodesList
            let codeList = []
            for (let i = 0; i < list.length; i++) {
                codeList.push({
                    ...list[i],
                    "cptCodeId": list[i].id,
                    "isBannerList": true,
                    "isOther": false
                })
            }
            // console.log("Sddssd ---", codeList)
            return {
                ...state,
                codesList: codeList
            }
        case SPECIALITIES_TYPE.CHANGE_IN_CODE:
            let codesList = state.codesList
            if (action.payload.item) {

                for (let i = 0; i < codesList.length; i++) {
                    if (action.payload.item.cptCodeId === codesList[i].cptCodeId) {
                        codesList[i] = { ...codesList[i], isBannerList: !codesList[i].isBannerList, isOther: !codesList[i].isOther }
                    }
                }
            } else {
                for (let i = 0; i < codesList.length; i++) {
                    if (action.payload.id === codesList[i].cptCodeId) {
                        codesList[i] = { ...codesList[i], isBannerList: !codesList[i].isBannerList, isOther: !codesList[i].isOther }
                    }
                }
            }


            return {
                ...state,
                codesList: codesList
            }
        case SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_LOADING:
            return {
                ...state,
                getClinicSpecailitesLoading: true,
                getClinicSpecailitesSuccess: false,
                getClinicSpecailitesFailure: false,
                getClinicSpecailitesError: null,

            }
        case SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_SUCCESS:
            return {
                ...state,
                getClinicSpecailitesLoading: false,
                getClinicSpecailitesSuccess: true,
                getClinicSpecailitesFailure: false,
                getClinicSpecailitesError: null,
                getClinicSpecailites: action.payload
            }
        case SPECIALITIES_TYPE.GET_ALL_CLINIC_SPECIALITIES_FAILURE:
            return {
                ...state,
                getClinicSpecailitesLoading: false,
                getClinicSpecailitesSuccess: false,
                getClinicSpecailitesFailure: true,
                getClinicSpecailitesError: action.payload,
                getClinicSpecailites: []
            }
        case SPECIALITIES_TYPE.ADD_SPECIALITY_LOADING:
            return {
                ...state,
                addLoading: true,
                addFailure: false,
                addSucces: false,
                addError: null
            }
        case SPECIALITIES_TYPE.ADD_SPECIALITY_SUCCESS:
            return {
                ...state,
                addLoading: false,
                addFailure: false,
                addSucces: true,
                addError: null
            }
        case SPECIALITIES_TYPE.ADD_SPECIALITY_FAILURE:
            return {
                ...state,
                addLoading: false,
                addFailure: true,
                addSucces: false,
                addError: action.payload
            }
        default:
            return state
    }
}