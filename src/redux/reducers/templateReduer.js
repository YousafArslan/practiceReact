import { TEMPLATES, IMAGES_TEMPLATES } from "../actions/utilities";
import { v4 as uuid } from "uuid";
import { UPDATE_TEMPLATE_IMAGE_KEY } from "../../config";
const INITIAL_STATE = {
  getAllTemplatesLoading: false,
  getAllTemplatesSuccess: false,
  getAllTemplatesFailure: false,
  getAllTemplatesError: null,
  getAllTemplates: [],
  templateCreateLoading: false,
  templateCreateSuccess: false,
  templateCreateFailure: false,
  templateCreateError: null,
  templateUpdateLoading: false,
  templateUpdateSuccess: false,
  templateUpdateFailure: false,
  templateUpdateError: null,
  templateFormCreateLoading: false,
  templateFormCreateSuccess: false,
  templateFormCreateFailure: false,
  templateFormCreateError: null,
  getTemplateFormByTemplateIdLoading: false,
  getTemplateFormByTemplateIdSuccess: false,
  getTemplateFormByTemplateIdFailure: false,
  getTemplateFormByTemplateIdError: null,
  getTemplateFormByTemplateIdStatic: [],
  getTemplateFormByTemplateIdNonStatic: [],
  getSectionListIds: [],
  templateFormUpdateLoading: false,
  templateFormUpdateSuccess: false,
  templateFormUpdateFailure: false,
  templateFormUpdateError: null,
  templateGeneralData: [],
  templateData: [],
  assignAndCopyTemplateLoading: false,
  assignAndCopyTemplateSuccess: false,
  assignAndCopyTemplateFailure: false,
  assignAndCopyTemplateError: null,
  therapistAppointmentNoteTemplatesLoading: false,
  therapistAppointmentNoteTemplatesSuccess: false,
  therapistAppointmentNoteTemplatesFailure: false,
  therapistAppointmentNoteTemplatesError: null,
  therapistAppointmentNoteTemplates: undefined,
  addTemplateForAppointmentNotesLoading: false,
  addTemplateForAppointmentNotesSuccess: false,
  addTemplateForAppointmentNotesFailure: false,
  addTemplateForAppointmentNotesError: null,
  addTemplateForAppointmentNotes: undefined,
  updateTemplateForAppointmentNotesLoading: false,
  updateTemplateForAppointmentNotesSuccess: false,
  updateTemplateForAppointmentNotesFailure: false,
  updateTemplateForAppointmentNotesError: null,
  updateTemplateForAppointmentNotes: undefined,
};
const INITIAL_STATE_IMAGES = {
  imageList: [{ id: uuid() }],
  imagesDataList: [],
  editImagesDataList: [],
  imageButtonList: [],
  imageStatementList: [],
};
export const templateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEMPLATES.RESET_TEMPLATE:
      return {
        ...state,
        templateCreateLoading: false,
        templateCreateSuccess: false,
        templateCreateFailure: false,
        templateCreateError: null,
        templateUpdateLoading: false,
        templateUpdateSuccess: false,
        templateUpdateFailure: false,
        templateUpdateError: null,
        getTemplateFormByTemplateIdLoading: false,
        getTemplateFormByTemplateIdSuccess: false,
        getTemplateFormByTemplateIdFailure: false,
        getTemplateFormByTemplateIdError: null,
        templateFormUpdateLoading: false,
        templateFormUpdateSuccess: false,
        templateFormUpdateFailure: false,
        templateFormUpdateError: null,
        templateFormCreateLoading: false,
        templateFormCreateSuccess: false,
        templateFormCreateFailure: false,
        templateFormCreateError: null,
      };
    case TEMPLATES.GET_ALL_TEMPLATES_LOADING:
      return {
        ...state,
        getAllTemplatesLoading: true,
        getAllTemplatesSuccess: false,
        getAllTemplatesFailure: false,
        getAllTemplatesError: null,
        getAllTemplates: [],
      };
    case TEMPLATES.GET_ALL_TEMPLATES_SUCCESS:
      return {
        ...state,
        getAllTemplatesLoading: false,
        getAllTemplatesSuccess: true,
        getAllTemplatesFailure: false,
        getAllTemplatesError: null,
        getAllTemplates: action.payload,
      };
    case TEMPLATES.GET_ALL_TEMPLATES_FAILURE:
      return {
        ...state,
        getAllTemplatesLoading: false,
        getAllTemplatesSuccess: false,
        getAllTemplatesFailure: true,
        getAllTemplatesError: action.payload,
        getAllTemplates: [],
      };
    case TEMPLATES.UPDATE_TEMPLATE_LOADING:
      return {
        ...state,
        templateUpdateLoading: true,
        templateUpdateSuccess: false,
        templateUpdateFailure: false,
        templateUpdateError: null,
      };
    case TEMPLATES.UPDATE_TEMPLATE_SUCCESS:
      return {
        ...state,
        templateUpdateLoading: false,
        templateUpdateSuccess: true,
        templateUpdateFailure: false,
        templateUpdateError: null,
      };
    case TEMPLATES.UPDATE_TEMPLATE_FAILURE:
      return {
        ...state,
        templateUpdateLoading: false,
        templateUpdateSuccess: false,
        templateUpdateFailure: true,
        templateUpdateError: action.payload,
      };
    case TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_LOADING:
      return {
        ...state,
        assignAndCopyTemplateLoading: true,
        assignAndCopyTemplateSuccess: false,
        assignAndCopyTemplateFailure: false,
        assignAndCopyTemplateError: null,
      };
    case TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_SUCCESS:
      let newList = state.getAllTemplates;
      newList.resp = [action.payload[0], ...newList.resp];
      return {
        ...state,
        assignAndCopyTemplateLoading: false,
        assignAndCopyTemplateSuccess: true,
        assignAndCopyTemplateFailure: false,
        assignAndCopyTemplateError: null,
      };
    case TEMPLATES.ASSIGN_AND_COPY_TEMPLATE_FAILURE:
      return {
        ...state,
        assignAndCopyTemplateLoading: false,
        assignAndCopyTemplateSuccess: false,
        assignAndCopyTemplateFailure: true,
        assignAndCopyTemplateError: action.payload,
      };
    case TEMPLATES.CREATE_TEMPLATE_LOADING:
      return {
        ...state,
        templateCreateLoading: true,
        templateCreateSuccess: false,
        templateCreateFailure: false,
        templateCreateError: null,
      };
    case TEMPLATES.CREATE_TEMPLATE_SUCCESS:
      return {
        ...state,
        templateCreateLoading: false,
        templateCreateSuccess: true,
        templateCreateFailure: false,
        templateCreateError: null,
      };
    case TEMPLATES.CREATE_TEMPLATE_FAILURE:
      return {
        ...state,
        templateCreateLoading: false,
        templateCreateSuccess: false,
        templateCreateFailure: true,
        templateCreateError: action.payload,
      };
    case TEMPLATES.CREATE_TEMPLATE_FORM_LOADING:
      return {
        ...state,
        templateFormCreateLoading: true,
        templateFormCreateSuccess: false,
        templateFormCreateFailure: false,
        templateFormCreateError: null,
      };
    case TEMPLATES.CREATE_TEMPLATE_FORM_SUCCESS:
      return {
        ...state,
        templateFormCreateLoading: false,
        templateFormCreateSuccess: true,
        templateFormCreateFailure: false,
        templateFormCreateError: null,
      };
    case TEMPLATES.CREATE_TEMPLATE_FORM_FAILURE:
      return {
        ...state,
        templateFormCreateLoading: false,
        templateFormCreateSuccess: false,
        templateFormCreateFailure: true,
        templateFormCreateError: action.payload,
      };
    case TEMPLATES.GET_TEMPLATE_FORM_LOADING:
      return {
        ...state,
        getTemplateFormByTemplateIdLoading: true,
        getTemplateFormByTemplateIdSuccess: false,
        getTemplateFormByTemplateIdFailure: false,
        getTemplateFormByTemplateIdError: null,
        getTemplateFormByTemplateIdStatic: [],
        getTemplateFormByTemplateIdNonStatic: [],
      };
    case TEMPLATES.GET_TEMPLATE_FORM_FAILURE:
      return {
        ...state,
        getTemplateFormByTemplateIdLoading: false,
        getTemplateFormByTemplateIdSuccess: false,
        getTemplateFormByTemplateIdFailure: true,
        getTemplateFormByTemplateIdError: action.payload,
        getTemplateFormByTemplateIdStatic: [],
        getTemplateFormByTemplateIdNonStatic: [],
      };
    case TEMPLATES.GET_TEMPLATE_FORM_SUCCESS:
      let static_arr = [],
        nonStatic_arr = [];
      let sectionList = [];
      action.payload.res[0].templateSectionList.forEach((item) => {
        sectionList.push({ formTypeId: item.formTypeId, id: item.id });
        item.templateFormList.forEach((itm) => {
          if (itm.isStatic) {
            static_arr.push(itm);
          } else {
            nonStatic_arr.push(itm);
          }
        });
      });
      let generalData = {};
      generalData = {
        ...generalData,
        clinicId: action.payload.res[0].clinicId,
        id: action.payload.res[0].id,
        isPublish: action.payload.res[0].isPublish,
        templateCategoryId: action.payload.res[0].templateCategoryId,
        templateName: action.payload.res[0].templateName,
      };
      return {
        ...state,
        getTemplateFormByTemplateIdLoading: false,
        getTemplateFormByTemplateIdSuccess: true,
        getTemplateFormByTemplateIdFailure: false,
        getTemplateFormByTemplateIdError: null,
        getTemplateFormByTemplateId: action.payload.res[0].templateSectionList,
        getTemplateFormByTemplateIdStatic: static_arr,
        getTemplateFormByTemplateIdNonStatic: nonStatic_arr,
        getSectionListIds: sectionList,
        templateGeneralData: generalData,
        templateData: action.payload.res[0],
      };
    case TEMPLATES.UPDATE_TEMPLATE_FORM_LOADING:
      return {
        ...state,
        templateFormUpdateLoading: true,
        templateFormUpdateSuccess: false,
        templateFormUpdateFailure: false,
        templateFormUpdateError: null,
      };
    case TEMPLATES.UPDATE_TEMPLATE_FORM_SUCCESS:
      return {
        ...state,
        templateFormUpdateLoading: false,
        templateFormUpdateSuccess: true,
        templateFormUpdateFailure: false,
        templateFormUpdateError: null,
      };
    case TEMPLATES.UPDATE_TEMPLATE_FORM_FAILURE:
      return {
        ...state,
        templateFormUpdateLoading: false,
        templateFormUpdateSuccess: false,
        templateFormUpdateFailure: true,
        templateFormUpdateError: action.payload,
      };

    case TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_LOADING:
      return {
        ...state,
        therapistAppointmentNoteTemplatesLoading: true,
        therapistAppointmentNoteTemplatesSuccess: false,
        therapistAppointmentNoteTemplatesFailure: false,
        therapistAppointmentNoteTemplatesError: null,
      };
    case TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_SUCCESS:
      return {
        ...state,
        therapistAppointmentNoteTemplatesLoading: false,
        therapistAppointmentNoteTemplatesSuccess: true,
        therapistAppointmentNoteTemplatesFailure: false,
        therapistAppointmentNoteTemplatesError: null,
        therapistAppointmentNoteTemplates: action.payload,
      };
    case TEMPLATES.THERAPIST_APPOINTMENT_NOTE_TEMPLATES_FAILURE:
      return {
        ...state,
        therapistAppointmentNoteTemplatesLoading: false,
        therapistAppointmentNoteTemplatesSuccess: false,
        therapistAppointmentNoteTemplatesFailure: true,
        therapistAppointmentNoteTemplatesError: action.payload,
        therapistAppointmentNoteTemplates: undefined,
      };

    case TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_LOADING:
      return {
        ...state,
        addTemplateForAppointmentNotesLoading: true,
        addTemplateForAppointmentNotesSuccess: false,
        addTemplateForAppointmentNotesFailure: false,
        addTemplateForAppointmentNotesError: null,
      };
    case TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_SUCCESS:
      return {
        ...state,
        addTemplateForAppointmentNotesLoading: false,
        addTemplateForAppointmentNotesSuccess: true,
        addTemplateForAppointmentNotesFailure: false,
        addTemplateForAppointmentNotesError: null,
        addTemplateForAppointmentNotes: action.payload,
      };
    case TEMPLATES.ADD_TEMPLATE_FOR_APPOINTMENT_NOTES_FAILURE:
      return {
        ...state,
        addTemplateForAppointmentNotesLoading: false,
        addTemplateForAppointmentNotesSuccess: false,
        addTemplateForAppointmentNotesFailure: true,
        addTemplateForAppointmentNotesError: action.payload,
        addTemplateForAppointmentNotes: undefined,
      };
    case TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_LOADING:
      return {
        ...state,
        updateTemplateForAppointmentNotesLoading: true,
        updateTemplateForAppointmentNotesSuccess: false,
        updateTemplateForAppointmentNotesFailure: false,
        updateTemplateForAppointmentNotesError: null,
      };
    case TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_SUCCESS:
      return {
        ...state,
        updateTemplateForAppointmentNotesLoading: false,
        updateTemplateForAppointmentNotesSuccess: true,
        updateTemplateForAppointmentNotesFailure: false,
        updateTemplateForAppointmentNotesError: null,
        updateTemplateForAppointmentNotes: action.payload,
      };
    case TEMPLATES.UPDATE_TEMPLATE_FOR_APPOINTMENT_NOTES_FAILURE:
      return {
        ...state,
        updateTemplateForAppointmentNotesLoading: false,
        updateTemplateForAppointmentNotesSuccess: false,
        updateTemplateForAppointmentNotesFailure: true,
        updateTemplateForAppointmentNotesError: action.payload,
        updateTemplateForAppointmentNotes: undefined,
      };
    default:
      return state;
  }
};
export const imagesReducer = (state = INITIAL_STATE_IMAGES, action) => {
  switch (action.type) {
    case TEMPLATES.GET_TEMPLATE_FORM_SUCCESS:
      let { res, sectionId } = action.payload;
      let idsList = [];
      let imageData = [];
      let sections = res[0].templateSectionList;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].formTypeId === +sectionId) {
          imageData = sections[i].templateImageList;
          for (let i = 0; i < imageData.length; i++) {
            imageData[i] = { ...imageData[i], myId: imageData[i].id };
          }
          for (let j = 0; j < sections[i].templateImageList.length; j++) {
            idsList.push({ id: sections[i].templateImageList[j].id });
          }
        }
      }
      if (idsList.length <= 0) {
        idsList = state.imageList;
      }

      let imageButton = [],
        imageStatement = [],
        images = [];
      for (let i = 0; i < imageData.length; i++) {
        let abc = {
          id: imageData[i].id,
          image: imageData[i].image,
          imageHeight: imageData[i].imageHeight,
          imageWidth: imageData[i].imageWidth,
          isDeleted: imageData[i].isDeleted,
          myId: imageData[i].myId,
          templateSectionId: imageData[i].templateSectionId,
          url: imageData[i].url,
        };
        images.push(abc);
        if (imageData[i].imageButtonList) {
          imageButton.push(imageData[i].imageButtonList);
        }
        if (imageData[i].imageButtonList) {
          imageStatement.push(imageData[i].imageStatementList);
        }
      }
      return {
        ...state,
        imageList: idsList,
        imagesDataList: imageData,
        editImagesDataList: images,
        imageButtonList: imageButton,
        imageStatementList: imageStatement,
      };
    case IMAGES_TEMPLATES.ADD_REMOVE_IMAGE:
      //1 mean remove
      //2 mean add
      let myImageList = state.imageList;
      let editImage = state.editImagesDataList;
      let imgButton = state.imageButtonList;
      let imgStatment = state.imageStatementList;
      if (action.payload.type === 1) {
        for (let i = 0; i < myImageList.length; i++) {
          if (myImageList[i].id === action.payload.id) {
            myImageList.splice(i, 1);
            // editImagesDataList: [],
            // imageButtonList: [],
            // imageStatementList: []
            editImage.splice(i, 1);
            imgButton.splice(i, 1);
            imgStatment.splice(i, 1);
          }
        }
      } else {
        myImageList.push({ id: uuid() });
        editImage.push({ id: uuid() });
        imgButton.push([]);
        imgStatment.push([]);
      }
      return {
        ...state,
        imageList: myImageList,
        editImagesDataList: editImage,
        imageButtonList: imgButton,
        imageStatementList: imgStatment,
      };

    case IMAGES_TEMPLATES.ADD_UPDATE_IMAGE:
      let all_images = state.imagesDataList;
      let includes = -2;
      for (let i = 0; i < state.imageList.length; i++) {
        if (state.imageList[i].id === action.payload.myId) {
          includes = i;
        }
      }
      if (includes < 0) {
        all_images.push(action.payload);
      } else {
        all_images[includes] = action.payload;
      }
      return {
        ...state,
        imagesDataList: all_images,
      };

    case IMAGES_TEMPLATES.UPDATE_IMAGE:
      let myImages = state.editImagesDataList;
      let buttonList = state.imageButtonList; //on Image
      let statementList = state.imageStatementList; //above Image
      if (action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_SIZE_CHANGE) {
        if (myImages[action.payload.index]) {
          myImages[action.payload.index] = action.payload.data;
          buttonList[action.payload.index] = [];
        }
      }
      if (
        action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_BUTTON_CHANGE
      ) {
        if (buttonList[action.payload.index]) {
          buttonList[action.payload.index][action.payload.buttonIndex] = {
            ...buttonList[action.payload.index][action.payload.buttonIndex],
            buttonDescription: action.payload.data.buttonDescription,
          };
        }
      }
      if (action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_BUTTON_ADD) {
        if (buttonList[action.payload.index]) {
          buttonList[action.payload.index].push(action.payload.data);
        }
      }
      if (
        action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_BUTTON_REMOVE
      ) {
        if (buttonList[action.payload.index]) {
          buttonList[action.payload.index].splice(
            action.payload.buttonIndex,
            1
          );
        }
      }
      if (
        action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_STATEMENT_REMOVE
      ) {
        if (statementList[action.payload.index]) {
          statementList[action.payload.index] = action.payload.data;
        }
      }
      if (
        action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_STATEMENT_CHANGE
      ) {
        if (statementList[action.payload.index]) {
          statementList[action.payload.index][action.payload.statementIndex] =
            action.payload.data;
        }
      }
      if (
        action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_STATEMENT_ADD
      ) {
        if (statementList[action.payload.index]) {
          statementList[action.payload.index].push(action.payload.data);
        }
      }
      if (action.payload.type === UPDATE_TEMPLATE_IMAGE_KEY.IMAGE_ADD) {
        if (myImages[action.payload.index]) {
          myImages[action.payload.index] = action.payload.data;
          buttonList[action.payload.index] = [];
        }
      }

      return {
        ...state,
        editImagesDataList: myImages,
        imageButtonList: buttonList,
        imageStatementList: statementList,
      };
    default:
      return state;
  }
};
