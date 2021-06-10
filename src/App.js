import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleReceivedUser = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevUserList,
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={handleReceivedUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
