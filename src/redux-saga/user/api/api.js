import axios from "axios";
import { GET_USER, base_url } from "../../constant";

let get_user = (action) => {
  console.log(action, "action from api");
  return axios.get(base_url + GET_USER).then((res) => {
    console.log(res, "api");
    let data = res.data;
    let status = res.status;
    return { data, status };
  });
};

export { get_user };
