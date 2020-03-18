import React from "react";
import CustomButton from "./custom-button";

const User = ({ name, age, occupation, attr }) => {
  return (
    <li className={`${attr ? "attr" : ""} user`}>
      <span>{name}</span>
      <span>{age}</span>
      <span>{occupation}</span>
      {!attr && <CustomButton remove>X</CustomButton>}
    </li>
  );
};

export default User;
