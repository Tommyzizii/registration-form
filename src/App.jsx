import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [hobbie, setHobbies] = useState([]);
  const [role, setRole] = useState("general staff");

  function onUserNameUpdate(event) {
    setUserName(event.target.value);
  }

  function onFirstNameUpdate(event) {
    setFirstName(event.target.value);
  }

  function onLastNameUpdate(event) {
    setLastName(event.target.value);
  }

  function onGenderChange(event) {
    setGender(event.target.value);
  }

  function onHobbieChange(event) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      // setHobbies(prev => [...prev, value]);
      setHobbies((prev) => {
        return [...prev, value];
      });
    } else {
      // setHobbies(prev => prev.filter(hobbie => hobbie != value));
      setHobbies((prev) => {
        return prev.filter((hobbie) => {
          return hobbie != value;
        });
      });
    }
  }

  function onRoleChange(event) {
    setRole(event.target.value);
  }

  return (
    <div className="page">
      <div className="card">
        <label>Username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={onUserNameUpdate}
        />

        <label>Firstname</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={onFirstNameUpdate}
        />

        <label>Lastname</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={onLastNameUpdate}
        />

        <h4>Gender</h4>
        <div className="option">
          <input
            type="radio"
            name="gender"
            value="male"
            id="g_male"
            checked={gender === "male"}
            onChange={onGenderChange}
          />
          <label htmlFor="g_male">Male</label>
        </div>

        <div className="option">
          <input
            type="radio"
            name="gender"
            value="female"
            id="g_female"
            checked={gender === "female"}
            onChange={onGenderChange}
          />
          <label htmlFor="g_female">Female</label>
        </div>

        <div className="option">
          <input
            type="radio"
            name="gender"
            value="other"
            id="g_other"
            checked={gender === "other"}
            onChange={onGenderChange}
          />
          <label htmlFor="g_other">Other</label>
        </div>

        <h4>Hobbies</h4>
        <div className="option">
          <input
            type="checkbox"
            name="hobbie"
            value="Music"
            id="h_music"
            checked={hobbie.includes("Music")}
            onChange={onHobbieChange}
          />
          <label htmlFor="h_music">Music</label>
        </div>

        <div className="option">
          <input
            type="checkbox"
            name="hobbie"
            value="Movies"
            id="h_movie"
            checked={hobbie.includes("Movies")}
            onChange={onHobbieChange}
          />
          <label htmlFor="h_movie">Movies</label>
        </div>

        <div className="option">
          <input
            type="checkbox"
            name="hobbie"
            value="Plastic Model"
            id="h_model"
            checked={hobbie.includes("Plastic Model")}
            onChange={onHobbieChange}
          />
          <label htmlFor="h_model">Plastic Model</label>
        </div>

        <h4>Role</h4>
        <select value={role} onChange={onRoleChange}>
          <option value="general staff">General Staff</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>

        <hr />

        <div className="preview">
          <div>
            Username: <span className="red">{userName || "-"}</span>
          </div>
          <div>
            Firstname: <span className="red">{firstName || "-"}</span>
          </div>
          <div>
            Lastname: <span className="red">{lastName || "-"}</span>
          </div>
          <div>
            Gender: <span className="red">{gender || "-"}</span>
          </div>
          <div>
            Hobbies:{" "}
            <span className="red">
              {hobbie.length ? hobbie.join(", ") : "-"}
            </span>
          </div>
          <div>
            Role: <span className="red">{role || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
