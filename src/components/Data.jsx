import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_PENDING, POST_USER_PENDING } from "../redux-saga/user/action/action";

const Data = () => {

  let email = useRef()
  let password = useRef()

  //selector
  let user = useSelector((state) => state.userReducer);

  let dispatch = useDispatch()

  //add user
  let addUser = () => {

    let data = {
      email: email.current.value,
      password: password.current.value
    }

    console.log(data);

    dispatch({ type: POST_USER_PENDING, payload: data })

  }

  //delete user
  let handleDelete = (id) => {

    console.log(id);

    dispatch({ type: DELETE_USER_PENDING, payload: id })
  }

  return (
    <>

      <input type="text" ref={email} />
      <input type="text" ref={password} />
      <button onClick={addUser}>Save</button>

      <div>
        {user.user?.map((val, index) => (
          <>
            <p>{val.id}</p>
            <h1>{val.email}</h1>
            <button onClick={() => handleDelete(val.id)}>delete</button>
          </>
        ))}
      </div>

    </>
  );
};

export default Data;
