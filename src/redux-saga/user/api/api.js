import axios from "axios";
import { GET_USER, POST_USER, base_url } from "../../constant";

let get_user = (action) => {
  // console.log(action, "action from api");
  return axios.get(base_url + GET_USER).then((res) => {
    // console.log(res, "api");
    let data = res.data;
    let status = res.status;
    return { data, status };
  });
};


let post_user = (action) => {
  console.log(action, "action api ");
  return axios.post(base_url + POST_USER, action.payload).then((res) => {
    console.log(res, "res from api");
    let data = res.data
    let status = res.status
    return { data, status }
  })

}

export { get_user, post_user };
