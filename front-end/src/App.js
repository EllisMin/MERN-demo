import React, { useState } from "react";
import User from "./user";
import UserAddForm from "./user-add-form";
import "./App.css";

const App = () => {
  const [btnLoading, setBtnLoading] = useState(false);

  const handleAdd = async formData => {
    setBtnLoading(true);

    try {
      const res = await fetch(process.env.REACT_APP_FETCH_URL + "/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          occupation: formData.occupation
        })
      });

      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Adding user failed");
      }
      const resData = await res.json();
  
      // TODO: Update state
    } catch (err) {
      console.log(err); ///
    }

    setBtnLoading(false);
  };

  return (
    <div className="App">
      <header>
        <h1>MERN Stack App Demo</h1>
      </header>
      <main>
        <h2>Add User:</h2>
        <UserAddForm loading={btnLoading} handleAdd={handleAdd} />
        <h2>Users:</h2>
        <ul className="user-list">
          <User name={"Name"} age={"Age"} occupation={"Occupation"} attr />
          <User name="Nick" age={3} occupation="cook" />
          <User name="Nick" age={7} occupation="cook" />
        </ul>
      </main>
    </div>
  );
};

export default App;
