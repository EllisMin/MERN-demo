import React, { useState } from "react";

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

  return (
    <form className="form-add-user">
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
      <button className="btn-custom">Add</button>
    </form>
  );
};

export default UserAddForm;
