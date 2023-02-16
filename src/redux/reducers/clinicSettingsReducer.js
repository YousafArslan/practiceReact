import { CLINIC_SETTINGS } from "../actions/utilities";

const INITIAL_STATE = {
    addBusinessOperatingHoursLoading: false,
    addBusinessOperatingHoursSuccess: false,
    addBusinessOperatingHoursFailure: false,
    addBusinessOperatingHoursError: null,
    addBusinessOperatingHours: null,


    editBusinessOperatingHoursLoading: false,
    editBusinessOperatingHoursSuccess: false,
    editBusinessOperatingHoursFailure: false,
    editBusinessOperatingHoursError: null,
    editBusinessOperatingHours: null,


    getAllBusinessOperatingHoursLoading: false,
    getAllBusinessOperatingHoursSuccess: false,
    getAllBusinessOperatingHoursFailure: false,
    getAllBusinessOperatingHoursError: null,
    getAllBusinessOperatingHours: [],

};

export const clinicSettingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_LOADING:
            return {
                ...state,
                addBusinessOperatingHoursLoading: true,
                addBusinessOperatingHoursSuccess: false,
                addBusinessOperatingHoursFailure: false,
                addBusinessOperatingHoursError: null,
            };
        case CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_SUCCESS:
            return {
                ...state,
                addBusinessOperatingHoursLoading: false,
                addBusinessOperatingHoursSuccess: true,
                addBusinessOperatingHoursFailure: false,
                addBusinessOperatingHoursError: null,
                addBusinessOperatingHours: action.payload,
            };
        case CLINIC_SETTINGS.ADD_BUSINESS_OPERATING_HOURS_FAILURE:
            return {
                ...state,
                addBusinessOperatingHoursLoading: false,
                addBusinessOperatingHoursSuccess: false,
                addBusinessOperatingHoursFailure: true,
                addBusinessOperatingHoursError: action.payload,
                addBusinessOperatingHours: null,
            };

        case CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_LOADING:
            return {
                ...state,
                editBusinessOperatingHoursLoading: true,
                editBusinessOperatingHoursSuccess: false,
                editBusinessOperatingHoursFailure: false,
                editBusinessOperatingHoursError: null,
            };
        case CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_SUCCESS:
            return {
                ...state,
                editBusinessOperatingHoursLoading: false,
                editBusinessOperatingHoursSuccess: true,
                editBusinessOperatingHoursFailure: false,
                editBusinessOperatingHoursError: null,
                editBusinessOperatingHours: action.payload,
            };
        case CLINIC_SETTINGS.EDIT_BUSINESS_OPERATING_HOURS_FAILURE:
            return {
                ...state,
                editBusinessOperatingHoursLoading: false,
                editBusinessOperatingHoursSuccess: false,
                editBusinessOperatingHoursFailure: true,
                editBusinessOperatingHoursError: action.payload,
                editBusinessOperatingHours: null,
            };

        case CLINIC_SETTINGS.GET_ALL_BUSINESS_OPERATING_HOURS_LOADING:
            return {
                ...state,
                getAllBusinessOperatingHoursLoading: true,
                getAllBusinessOperatingHoursSuccess: false,
                getAllBusinessOperatingHoursFailure: false,
                getAllBusinessOperatingHoursError: null,
            };
        case CLINIC_SETTINGS.GET_ALL_BUSINESS_OPERATING_HOURS_SUCCESS:
            return {
                ...state,
                getAllBusinessOperatingHoursLoading: false,
                getAllBusinessOperatingHoursSuccess: true,
                getAllBusinessOperatingHoursFailure: false,
                getAllBusinessOperatingHoursError: null,
                getAllBusinessOperatingHours: action.payload,
            };
        default:
            return state;
    }
};
