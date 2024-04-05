import { takeLatest } from "redux-saga/effects";
import { GET_USER_PENDING } from "../../user/action/action";
import { handle_get_user } from "../user/ManageUser";

function* handle_get_user_saga() {
  yield takeLatest(GET_USER_PENDING, handle_get_user);
}

export { handle_get_user_saga };
