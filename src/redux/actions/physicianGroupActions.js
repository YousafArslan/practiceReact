// import { request, success, failure } from "./utilities";
// import {
//   getAllPhysicianGroup,
//   addGroup,
//   getSingleGroup,
// } from "../api/physicianGroup";

// export function getAllPhysicianGroupList(data) {
//   return (dispatch) => {
//     dispatch(request(PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_REQUEST));
//     getAllPhysicianGroup(data).then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(
//               PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_SUCCESS,
//               response.data.data
//             )
//           );
//         } else {
//           dispatch(
//             failure(
//               PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_FAILURE,
//               response.data.message
//             )
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }

// export function addPhysicianGroup(data, GroupListing) {
//   return (dispatch) => {
//     dispatch(request(PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_REQUEST));
//     addGroup(data).then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(
//               PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_SUCCESS,
//               response.data.data
//             )
//           );
//           GroupListing();
//         } else {
//           dispatch(
//             failure(
//               PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_FAILURE,
//               response.data.message
//             )
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }

// export function getSingleGroupdata(id, setShow) {
//   return (dispatch) => {
//     dispatch(request(PHYSICIAN_GROUP.GETSINGLE_GROUP_REQUEST));

//     getSingleGroup(id).then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(PHYSICIAN_GROUP.GETSINGLE_GROUP_SUCCESS, response.data.data)
//           );
//           setShow(true);
//         } else {
//           dispatch(
//             failure(
//               PHYSICIAN_GROUP.GETSINGLE_GROUP_FAILURE,
//               response.data.message
//             )
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             PHYSICIAN_GROUP.GETSINGLE_GROUP_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }
