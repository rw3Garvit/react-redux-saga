import { takeLatest } from "redux-saga/effects";
import { GET_USER_PENDING, POST_USER_PENDING } from "../../user/action/action";
import { handle_get_user, handle_post_user } from "../user/ManageUser";

function* handle_get_user_saga() {
  yield takeLatest(GET_USER_PENDING, handle_get_user);
}

function* handle_post_user_saga() {
  yield takeLatest(POST_USER_PENDING, handle_post_user)
}

export { handle_get_user_saga, handle_post_user_saga };
