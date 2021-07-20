import axios from "axios";
import { requestParam } from "../types/Request";

export default async function ({ type, endPoint, state }: requestParam) {
  if (type === "get") {
    axios
      .get(`http://localhost:8000${endPoint}`)
      .then((res) => (state.value = res.data));
  } else {
    return false;
  }
}
