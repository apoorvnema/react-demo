import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const users = [];
  return (
    <div>
      <AddUser />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
