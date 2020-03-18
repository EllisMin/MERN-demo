import React, { useState } from "react";
import CustomButton from "./custom-button";

const FormInput = ({ ...otherProps }) => {
  return (
    <div className="group">
      <input
        className={"input-custom"}
        type="text"
        {...otherProps}
        onChange={e => otherProps.onChange(otherProps.id, e.target.value)}
      />
    </div>
  );
};

const USER_FORM = {
  name: "",
  age: "",
  occupation: ""
};

const UserAddForm = () => {
  const [userForm, setUserForm] = useState(USER_FORM);

  const handleChange = (input, value) => {
    const updatedForm = {
      ...userForm,
      [input]: value
    };
    setUserForm(updatedForm);
  };

  const handleAdd = e => {
    e.preventDefault();
  };

  return (
    <form className="form-add-user" onSubmit={e => handleAdd(e)}>
      <FormInput
        id="name"
        name="name"
        placeholder="name"
        value={userForm["name"]}
        onChange={handleChange}
      />
      <FormInput
        id="age"
        name="age"
        placeholder="age"
        value={userForm["age"]}
        onChange={handleChange}
      />
      <FormInput
        name="occupation"
        id="occupation"
        placeholder="occupation"
        value={userForm["occupation"]}
        onChange={handleChange}
      />
      <CustomButton>Add</CustomButton>
    </form>
  );
};

export default UserAddForm;
