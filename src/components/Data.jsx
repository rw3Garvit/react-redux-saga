import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_USER_PENDING } from "../redux-saga/user/action/action";

const Data = () => {

  let email = useRef()
  let password = useRef()

  //selector
  let user = useSelector((state) => state.userReducer);

  let dispatch = useDispatch()

  let addUser = () => {

    let data = {
      email: email.current.value,
      password: password.current.value
    }

    console.log(data);

    dispatch({ type: POST_USER_PENDING, payload: data })

  }

  return (
    <>

      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={addUser}>Save</button>

      <div>
        {user.user.map((val, index) => (
          <h1>{val.email}</h1>
        ))}
      </div>

    </>
  );
};

export default Data;
