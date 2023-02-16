import { getDefaultAppointmentDurationAPI } from "../api/schduleApi";
import { failure, request, SCHEDULE, success } from "./utilities";

export function getDefaultAppointmentDurationAction(
  userId,
  onAppointmentDurationSuccess,
  onAppointmentDurationFailure
) {
  return (dispatch) => {
    
    dispatch(request(SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_REQUEST));

    getDefaultAppointmentDurationAPI(userId).then(
      (response) => {
        if (response.data.succeeded === true) {
          dispatch(
            success(
              SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_SUCCESS,
              response.data.data
            )
          );
          if (response.data.data.length > 0) {
            if (onAppointmentDurationSuccess) {
              onAppointmentDurationSuccess(
                response.data.data[0].appointmentDurationId
              );
            }
          } else {
            onAppointmentDurationFailure();
          }
        } else {
          dispatch(
            failure(
              SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_FAILURE,
              response.data.message
            )
          );

          if (onAppointmentDurationFailure) {
            onAppointmentDurationFailure();
          }
        }
      },
      (error) => {
        dispatch(
          failure(
            SCHEDULE.GET_DEFAULT_APPOINTMENT_DURATION_FAILURE,
            error &&
              error.response &&
              error.response.data &&
              error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );

        if (onAppointmentDurationFailure) {
          onAppointmentDurationFailure();
        }
      }
    );
  };
}
