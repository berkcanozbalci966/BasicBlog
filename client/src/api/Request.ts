import axios from "axios";
import { requestParam } from "../types/Request";

export default async function ({
  type,
  endPoint,
  state,
  postData,
}: requestParam) {
  if (type === "get") {
    try {
      const result = await axios.get(`http://localhost:8000${endPoint}`);
      state.value = result.data;
    } catch (err) {
      console.log(err);
    }
  } else if (type === "post") {
    try {
      const result = await axios.post(
        `http://localhost:8000${endPoint}`,
        postData
      );
      console.log(result);
    } catch (err) {
      console.log(err.response);
    }
  }
}
