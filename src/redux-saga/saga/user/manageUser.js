import { call, put } from "redux-saga/effects";
import { get_user, post_user } from "../../user/api/api";
import { GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "../../user/action/action";

function* handle_get_user(action) {
  // console.log(action, "action from manage");
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


function* handle_post_user(action) {
  console.log(action, "action manage file");

  try {
    let { data, status } = yield call(post_user, action)
    console.log(data, status, "this is from post manage");
    if (status == 201 || status == 200) {
      yield put({ type: POST_USER_SUCCESS, data })
    } else {
      yield put({ type: POST_USER_ERROR, data })
    }

  } catch (err) {
    yield put({ type: POST_USER_ERROR, err })
  }

}

export { handle_get_user, handle_post_user };
