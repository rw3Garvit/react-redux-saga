import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
  let user = useSelector((state) => state.userReducer);

  console.log(user, "aaaaaaaaaaaaaaaaaa");

  return (
    <div>
      {user.user.map((val, index) => (
        <h1>{val.email}</h1>
      ))}
    </div>
  );
};

export default Data;
