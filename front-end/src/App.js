import React from "react";
import User from "./user";
import UserAddForm from "./user-add-form";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>MERN Stack App Demo</h1>
      </header>
      <main>
        <h2>Add User:</h2>
        <UserAddForm />
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
