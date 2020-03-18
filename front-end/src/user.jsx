import React from "react";
import CustomButton from "./custom-button";

const User = ({ name, age, occupation, attr }) => {
  return (
    <li className={`${attr ? "attr" : ""} user`}>
      <div>{name}</div>
      <div>{age}</div>
      <div>{occupation}</div>
      {!attr && <CustomButton remove>Delete</CustomButton>}
    </li>
  );
};

export default User;
