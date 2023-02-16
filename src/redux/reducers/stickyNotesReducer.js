import { STICKY_NOTES } from "../actions/utilities";

const INITIAL_STATE = {
  createUpdateStickyNotesLoading: false,
  createUpdateStickyNotesSuccess: false,
  createUpdateStickyNotesFailure: false,
  createUpdateStickyNotesError: null,
  createUpdateStickyNotes: undefined,
};

export const appointmentDiscretionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_REQUEST:
      return {
        ...state,
        createUpdateStickyNotesLoading: true,
        createUpdateStickyNotesSuccess: false,
        createUpdateStickyNotesFailure: false,
        createUpdateStickyNotesError: null,
      };
    case STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_SUCCESS:
      return {
        ...state,
        createUpdateStickyNotesLoading: false,
        createUpdateStickyNotesSuccess: true,
        createUpdateStickyNotesFailure: false,
        createUpdateStickyNotesError: null,
        createUpdateStickyNotes: action.payload,
      };
    case STICKY_NOTES.CREATE_UPDATE_STICKY_NOTES_FAILURE:
      return {
        ...state,
        createUpdateStickyNotesLoading: false,
        createUpdateStickyNotesSuccess: false,
        createUpdateStickyNotesFailure: true,
        createUpdateStickyNotesError: action.payload,
        createUpdateStickyNotes: undefined,
      };

    default:
      return state;
  }
};
