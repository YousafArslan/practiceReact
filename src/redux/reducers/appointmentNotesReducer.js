/* eslint-disable */
import { APPOINTMENT_NOTES } from "../actions/utilities";

const INITIAL_STATE = {
  updateAppointmentNoteImagesLoading: false,
  updateAppointmentNoteImagesSuccess: false,
  updateAppointmentNoteImagesFailure: false,
  updateAppointmentNoteImagesError: null,
  updateAppointmentNoteImages: undefined,
  updateAppointmentNoteFormsLoading: false,
  updateAppointmentNoteFormsSuccess: false,
  updateAppointmentNoteFormsFailure: false,
  updateAppointmentNoteFormsError: null,
  updateAppointmentNoteForms: undefined,
  getGoalTemplatesLoading: false,
  getGoalTemplatesSuccess: false,
  getGoalTemplatesFailure: false,
  getGoalTemplatesError: null,
  getGoalTemplates: undefined,
  addOrUpdateGoalNotesLoading: false,
  addOrUpdateGoalNotesSuccess: false,
  addOrUpdateGoalNotesFailure: false,
  addOrUpdateGoalNotesError: null,
  addOrUpdateGoalNotes: undefined,
  getGoalNotesLoading: false,
  getGoalNotesSuccess: false,
  getGoalNotesFailure: false,
  getGoalNotesError: null,
  getGoalNotes: undefined,
  updateGoalValueLoading: false,
  updateGoalValueSuccess: false,
  updateGoalValueFailure: false,
  updateGoalValueError: null,
  updateGoalValue: undefined,
  removeGoalRowLoading: false,
  removeGoalRowSuccess: false,
  removeGoalRowFailure: false,
  removeGoalRowError: null,
  removeGoalRow: undefined,
};

export const appointmentNotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_REQUEST:
      return {
        ...state,
        updateAppointmentNoteImagesLoading: true,
        updateAppointmentNoteImagesSuccess: false,
        updateAppointmentNoteImagesFailure: false,
        updateAppointmentNoteImagesError: null,
      };
    case APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_SUCCESS:
      return {
        ...state,
        updateAppointmentNoteImagesLoading: false,
        updateAppointmentNoteImagesSuccess: true,
        updateAppointmentNoteImagesFailure: false,
        updateAppointmentNoteImagesError: null,
        updateAppointmentNoteImages: action.payload,
      };
    case APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_IMAGES_FAILURE:
      return {
        ...state,
        updateAppointmentNoteImagesLoading: false,
        updateAppointmentNoteImagesSuccess: false,
        updateAppointmentNoteImagesFailure: true,
        updateAppointmentNoteImagesError: action.payload,
        updateAppointmentNoteImages: undefined,
      };

    case APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_REQUEST:
      return {
        ...state,
        updateAppointmentNoteFormsLoading: true,
        updateAppointmentNoteFormsSuccess: false,
        updateAppointmentNoteFormsFailure: false,
        updateAppointmentNoteFormsError: null,
      };
    case APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_SUCCESS:
      return {
        ...state,
        updateAppointmentNoteFormsLoading: false,
        updateAppointmentNoteFormsSuccess: true,
        updateAppointmentNoteFormsFailure: false,
        updateAppointmentNoteFormsError: null,
        updateAppointmentNoteForms: action.payload,
      };
    case APPOINTMENT_NOTES.UPDATE_APPOINTMENT_NOTES_FORMS_FAILURE:
      return {
        ...state,
        updateAppointmentNoteFormsLoading: false,
        updateAppointmentNoteFormsSuccess: false,
        updateAppointmentNoteFormsFailure: true,
        updateAppointmentNoteFormsError: action.payload,
        updateAppointmentNoteForms: undefined,
      };

    case APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_REQUEST:
      return {
        ...state,
        getGoalTemplatesLoading: true,
        getGoalTemplatesSuccess: false,
        getGoalTemplatesFailure: false,
        getGoalTemplatesError: null,
      };
    case APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_SUCCESS:
      let temp = action.payload;
      temp &&
        temp.forEach((goalBank, goalBankIndex) => {
          goalBank.goalSectionsList.forEach((section, sectionIndex) => {
            section.headers.push({
              headerName: "Default Term",
              isDropDown: true,
              fieldTypeId: 1301,
            });
            section.headers.push({
              headerName: "Default Duration",
              isDropDown: true,
              fieldTypeId: 1301,
            });

            section.values.forEach((goalRow, goalRowIndex) => {
              goalRow.push({
                rowNum: goalRowIndex,
                valueDropDown: section.defaultTerms,
                headerName: "Default Term",
                valueName: "Default Term",
                headerDropdown: true,
                isSelected: false,
              });
              goalRow.push({
                rowNum: goalRowIndex + 1,
                valueDropDown: section.defaultDuration,
                headerName: "Default Duration",
                valueName: "Default Term",
                headerDropdown: true,
                isSelected: false,
              });
            });
          });
        });

      return {
        ...state,
        getGoalTemplatesLoading: false,
        getGoalTemplatesSuccess: true,
        getGoalTemplatesFailure: false,
        getGoalTemplatesError: null,
        getGoalTemplates: temp,
      };
    case APPOINTMENT_NOTES.GET_GOAL_TEMPLATES_FAILURE:
      return {
        ...state,
        getGoalTemplatesLoading: false,
        getGoalTemplatesSuccess: false,
        getGoalTemplatesFailure: true,
        getGoalTemplatesError: action.payload,
        getGoalTemplates: undefined,
      };

    case APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_REQUEST:
      return {
        ...state,
        addOrUpdateGoalNotesLoading: true,
        addOrUpdateGoalNotesSuccess: false,
        addOrUpdateGoalNotesFailure: false,
        addOrUpdateGoalNotesError: null,
      };
    case APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_SUCCESS:
      return {
        ...state,
        addOrUpdateGoalNotesLoading: false,
        addOrUpdateGoalNotesSuccess: true,
        addOrUpdateGoalNotesFailure: false,
        addOrUpdateGoalNotesError: null,
        addOrUpdateGoalNotes: action.payload,
      };
    case APPOINTMENT_NOTES.ADD_UPDATE_GOAL_NOTES_FAILURE:
      return {
        ...state,
        addOrUpdateGoalNotesLoading: false,
        addOrUpdateGoalNotesSuccess: false,
        addOrUpdateGoalNotesFailure: true,
        addOrUpdateGoalNotesError: action.payload,
        addOrUpdateGoalNotes: undefined,
      };

    case APPOINTMENT_NOTES.GET_GOAL_NOTES_REQUEST:
      return {
        ...state,
        getGoalNotesLoading: true,
        getGoalNotesSuccess: false,
        getGoalNotesFailure: false,
        getGoalNotesError: null,
      };
    case APPOINTMENT_NOTES.GET_GOAL_NOTES_SUCCESS:
      return {
        ...state,
        getGoalNotesLoading: false,
        getGoalNotesSuccess: true,
        getGoalNotesFailure: false,
        getGoalNotesError: null,
        getGoalNotes: action.payload,
      };
    case APPOINTMENT_NOTES.GET_GOAL_NOTES_FAILURE:
      return {
        ...state,
        getGoalNotesLoading: false,
        getGoalNotesSuccess: false,
        getGoalNotesFailure: true,
        getGoalNotesError: action.payload,
        getGoalNotes: undefined,
      };
    case APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_REQUEST:
      return {
        ...state,
        updateGoalValueLoading: true,
        updateGoalValueSuccess: false,
        updateGoalValueFailure: false,
        updateGoalValueError: null,
      };
    case APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_SUCCESS:
      return {
        ...state,
        updateGoalValueLoading: false,
        updateGoalValueSuccess: true,
        updateGoalValueFailure: false,
        updateGoalValueError: null,
        updateGoalValue: action.payload,
      };
    case APPOINTMENT_NOTES.UPDATE_GOAL_VALUE_FAILURE:
      return {
        ...state,
        updateGoalValueLoading: false,
        updateGoalValueSuccess: false,
        updateGoalValueFailure: true,
        updateGoalValueError: action.payload,
        updateGoalValue: undefined,
      };

    case APPOINTMENT_NOTES.REMOVE_GOAL_ROW_REQUEST:
      return {
        ...state,
        removeGoalRowLoading: true,
        removeGoalRowSuccess: false,
        removeGoalRowFailure: false,
        removeGoalRowError: null,
      };
    case APPOINTMENT_NOTES.REMOVE_GOAL_ROW_SUCCESS:
      let updatedGoals = state.getGoalNotes.values.filter((item, index) => {
        if (index !== action.payload.rowIndex) return item;
      });
      return {
        ...state,
        removeGoalRowLoading: false,
        removeGoalRowSuccess: true,
        removeGoalRowFailure: false,
        removeGoalRowError: null,
        removeGoalRow: action.payload.response,
        getGoalNotes: { ...state.getGoalNotes, values: updatedGoals },
      };
    case APPOINTMENT_NOTES.REMOVE_GOAL_ROW_FAILURE:
      return {
        ...state,
        removeGoalRowLoading: false,
        removeGoalRowSuccess: false,
        removeGoalRowFailure: true,
        removeGoalRowError: action.payload,
        removeGoalRow: undefined,
      };

    default:
      return state;
  }
};
