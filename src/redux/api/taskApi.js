import axios from "axios";

export function getAllProducts(clinicId) {
  return axios.get(
    "https://run.mocky.io/v3/7c1910d4-d1e8-40dc-9823-3057be13327d"
  );
}
