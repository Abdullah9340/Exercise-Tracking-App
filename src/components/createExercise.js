import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

function CreateExercise() {
  const [usernameState, setUsername] = useState("");
  const [descriptionState, setDescription] = useState("");
  const [durationState, setDuration] = useState(0);
  const [dateState, setDate] = useState(new Date());
  const [usersState, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
        setUsername(res.data[0].username);
      }
    });
  }, []);

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  function onChangeDuration(e) {
    setDuration(e.target.value);
  }

  function onChangeDate(date) {
    setDate(date);
  }

  function onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: usernameState,
      description: descriptionState,
      duration: durationState,
      date: dateState,
      users: usersState,
    };

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={usernameState}
            onChange={onChangeUsername}
          >
            {usersState.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={descriptionState}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={durationState}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={dateState} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;
