import { request, success, failure, TEMPLATES } from "./utilities";
import {
  createTemplate,
  createTemplateForm,
  getTemplateFormByTemplateId,
  updateTemplateForm,
  updateTemplate,
  getAllTemplates,
  assignAndCopyTemplate,
  copyTemplate,
  createAndUpdateImage,
  therapistAppointmentNoteTemplates,
  addTemplateForAppointmentNotes,
  updateTemplateForAppointmentNotes,
} from "../api";
import { Notification } from "../../assets/genericAction/index";

export function GetAllTemplates(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.GET_ALL_TEMPLATES_LOADING));
    getAllTemplates(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.GET_ALL_TEMPLATES_SUCCESS, {
              resp: response.data.data,
              total: response.data.totalData,
            })
          );
          if (moveToNext) {
            moveToNext(response.data.data);
          }
        } else {
          dispatch(
            failure(TEMPLATES.GET_TEMPLATE_FORM_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.GET_TEMPLATE_FORM_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}
export function CreateTemplate(data, MoveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.CREATE_TEMPLATE_LOADING));
    createTemplate(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.CREATE_TEMPLATE_SUCCESS, response.data.data)
          );
          MoveToNext(response.data.data, data.templateCategoryId);
        } else {
          dispatch(
            failure(TEMPLATES.CREATE_TEMPLATE_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.CREATE_TEMPLATE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}
export function CreateTemplateForm(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.CREATE_TEMPLATE_FORM_LOADING));
    createTemplateForm(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.CREATE_TEMPLATE_FORM_SUCCESS, response.data.data)
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              TEMPLATES.CREATE_TEMPLATE_FORM_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.CREATE_TEMPLATE_FORM_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}
export function UpdateTemplateForm(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.UPDATE_TEMPLATE_FORM_LOADING));
    updateTemplateForm(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.UPDATE_TEMPLATE_FORM_SUCCESS, response.data.data)
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              TEMPLATES.UPDATE_TEMPLATE_FORM_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.UPDATE_TEMPLATE_FORM_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function CopyTemplate(data, hideModal) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_LOADING));
    copyTemplate(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_SUCCESS,
              response.data.data
            )
          );
          hideModal();
        } else {
          dispatch(
            failure(
              TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function UpdateTemplate(data, MoveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.UPDATE_TEMPLATE_LOADING));
    updateTemplate(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.UPDATE_TEMPLATE_SUCCESS, response.data.data)
          );
          MoveToNext();
        } else {
          dispatch(
            failure(TEMPLATES.UPDATE_TEMPLATE_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.UPDATE_TEMPLATE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}
export function GetTemplateFormByTemplateId(templateId, sectionId) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.GET_TEMPLATE_FORM_LOADING));
    getTemplateFormByTemplateId(templateId).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.GET_TEMPLATE_FORM_SUCCESS, {
              sectionId: sectionId,
              res: response.data.data,
            })
          );
        } else {
          dispatch(
            failure(TEMPLATES.GET_TEMPLATE_FORM_FAILURE, response.data.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.GET_TEMPLATE_FORM_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}
export function AssignAndCopyTemplate(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.ASSIGN_TEMPLATE_LOADING));
    assignAndCopyTemplate(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.ASSIGN_TEMPLATE_SUCCESS, response.data.data)
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(TEMPLATES.ASSIGN_TEMPLATE_FAILURE, response.data.failure)
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.ASSIGN_TEMPLATE_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}
export function CreateAndUpdateTemplateFormImage(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.CREATE_TEMPLATE_FORM_LOADING));
    createAndUpdateImage(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(TEMPLATES.CREATE_TEMPLATE_FORM_SUCCESS, response.data.data)
          );
          if (moveToNext) {
            moveToNext();
          }
        } else {
          dispatch(
            failure(
              TEMPLATES.CREATE_TEMPLATE_FORM_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.CREATE_TEMPLATE_FORM_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function TherapistAppointmentNoteTemplates(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_LOADING));
    therapistAppointmentNoteTemplates(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext(response.data.data);
          }
        } else {
          dispatch(
            failure(
              TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_FAILURE,
              response.data.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    );
  };
}

export function AddTemplateForAppointmentNotes(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_LOADING));
    addTemplateForAppointmentNotes(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext(response.data.data);
          }
        } else {
          dispatch(
            failure(
              TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );

        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
      }
    );
  };
}

export function UpdateTemplateForAppointmentNotes(data, moveToNext) {
  return (dispatch) => {
    dispatch(request(TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_LOADING));
    updateTemplateForAppointmentNotes(data).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_SUCCESS,
              response.data.data
            )
          );
          if (moveToNext) {
            moveToNext(response.data.data);
          }
        } else {
          dispatch(
            failure(
              TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_FAILURE,
              response.data.message
            )
          );
        }
        Notification(response.data.message, response.data.succeeded);
      },
      (error) => {
        dispatch(
          failure(
            TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );

        Notification(
          error.response.data.message,
          error.response.data.succeeded
        );
      }
    );
  };
}
