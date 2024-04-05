import { call, put } from "redux-saga/effects";
import { get_user } from "../../user/api/api";
import { GET_USER_ERROR, GET_USER_SUCCESS } from "../../user/action/action";

function* handle_get_user(action) {
  console.log(action, "action from manage");
  try {
    let { data, status } = yield call(get_user, action);

    if (status == 200) {
      yield put({ type: GET_USER_SUCCESS, data });
    } else {
      yield put({ type: GET_USER_ERROR, data });
    }
  } catch (err) {
    yield put({ type: GET_USER_ERROR, err });
  }
}

export { handle_get_user };
