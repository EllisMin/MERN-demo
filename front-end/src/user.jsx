import React from "react";

const User = ({ name, age, occupation, attr }) => {
  return (
    <li className={`${attr ? "attr" : ""} user`}>
      <div>{name}</div>
      <div>{age}</div>
      <div>{occupation}</div>
      {!attr && <button className="btn-custom btn-delete">Delete</button>}
    </li>
  );
};

export default User;
