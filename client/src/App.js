import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {

  const [listOfUsers, setListofUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListofUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user, i) => {
          return (
            <div key={i}>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>User Name: {user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
