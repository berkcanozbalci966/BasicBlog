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
      return result.data;
    } catch (err) {
      return err.response.data;
    }
  } else if (type === "post") {
    try {
      const result = await axios.post(
        `http://localhost:8000${endPoint}`,
        postData
      );
      return result.data;
    } catch (err) {
      return err.response.data;
    }
  }
}
