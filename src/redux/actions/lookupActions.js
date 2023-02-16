// import { request, success, failure } from "./utilities";
// import { getAllLookup, getLookupByType, getAllLookUpKeys } from "../api";
// export function allLookup() {
//   return (dispatch) => {
//     dispatch(request(LOOKUP_REQUEST.GET_ALL_LOOKUP_REQUEST));
//     getAllLookup().then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(LOOKUP_REQUEST.GET_ALL_LOOKUP_SUCCESS, response.data.data)
//           );
//         } else {
//           dispatch(
//             failure(
//               LOOKUP_REQUEST.GET_ALL_LOOKUP_FAILURE,
//               response.data.message
//             )
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             LOOKUP_REQUEST.GET_ALL_LOOKUP_FAILURE,
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

// export function lookupByType(type) {
//   return (dispatch) => {
//     dispatch(request(LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_REQUEST));

//     getLookupByType(type).then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(
//               LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_SUCCESS,
//               response.data.data
//             )
//           );
//         } else {
//           dispatch(
//             failure(
//               LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_FAILURE,
//               response.data.message
//             )
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             LOOKUP_REQUEST.GET_LOOKUP_BY_TYPE_FAILURE,
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
// export function allLookupKeys() {
//   return (dispatch) => {
//     dispatch(request(LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_REQUEST));
//     getAllLookUpKeys().then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(
//               LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_SUCCESS,
//               response.data.data
//             )
//           );
//         } else {
//           dispatch(
//             failure(
//               LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_FAILURE,
//               response.data.message
//             )
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             LOOKUP_REQUEST.GET_ALL_LOOKUP_KEYS_FAILURE,
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
