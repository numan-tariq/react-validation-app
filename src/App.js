import React, { useState } from "react";
import AddUser from "./components/Users/add-user/AddUser";
import UserList from "./components/Users/user-list/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
