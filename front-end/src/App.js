import React, { useState, useEffect } from "react";
import User from "./user";
import UserAddForm from "./user-add-form";
import "./App.css";

const App = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_FETCH_URL + "/user", {
        method: "GET"
      });
      if (res.status !== 200) {
        throw new Error("Fetching user failed");
      }
      const resData = await res.json();
      setUsers(resData.users);
    } catch (err) {}
  };

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
      const updatedUsers = [...users, resData.user];
      setUsers(updatedUsers);
    } catch (err) {}

    setBtnLoading(false);
  };

  return (
    <div className="App">
      <header>
        <h1>MERN Stack App Demo</h1>
        <hr/>
      </header>
      <main>
        <h2>Add User:</h2>
        <UserAddForm loading={btnLoading} handleAdd={handleAdd} />
        <h2>Users:</h2>
        <ul className="user-list">
          <User name={"Name"} age={"Age"} occupation={"Occupation"} attr />
          {users.length > 0 ? (
            <>
              {users.map(user => (
                <User
                  key={user._id}
                  name={user.name}
                  age={user.age}
                  occupation={user.occupation}
                />
              ))}
            </>
          ) : (
            <h2>Loading users..</h2>
          )}
        </ul>
      </main>
    </div>
  );
};

export default App;
