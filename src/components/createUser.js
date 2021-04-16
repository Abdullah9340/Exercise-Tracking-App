import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [usernameState, setUsername] = useState("");

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: usernameState,
    };
    console.log(user);

    axios.post("http://localhost:5000/users/add",user)
    .then(res => console.log(res.data));

    setUsername("");
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={usernameState}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
