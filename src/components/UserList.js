import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  console.log(listOfUsers);

  return (
    <div>
     
      <div className="user-list-container">
      <h1>Liste des utilisateurs</h1>
        {listOfUsers.map((user) => (
          <div key={user.id}>
            <ul>
              <li>
                <strong>id:</strong>
                <span>{user.id}</span>
              </li>
              <li>
                <strong>Name:</strong> <span>{user.name}</span>
              </li>
              <li>
                <strong>Username:</strong> <span>{user.username}</span>
              </li>
              <li>
                <strong>Email:</strong> <span>{user.email}</span>
              </li>
              <li>
                <strong>Phone:</strong> <span>{user.phone}</span>
              </li>
              <li>
                <strong>Website:</strong> <span>{user.website}</span>
              </li>
              <li>
                <strong>Company:</strong> <span>{user.company.name}</span>
              </li>
              <li>
                <strong>City:</strong>
                <span> {user.address.city}</span>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
