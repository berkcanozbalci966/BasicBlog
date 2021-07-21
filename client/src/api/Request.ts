import axios from "axios";
import { requestParam } from "../types/Request";

export default async function ({
  type,
  endPoint,
  state,
  postData,
}: requestParam) {
  if (type === "get") {
    axios
      .get(`http://localhost:8000${endPoint}`)
      .then((res) => (state.value = res.data));
  } else if (type === "post") {
    await axios.post(
      `http://localhost:8000${endPoint}`,
      JSON.stringify(postData)
    );
  }
}
