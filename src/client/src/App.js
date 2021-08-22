import React, { useState } from "react";
import UserList from "./components/UserList";
import Button from "./components/Button";
import AgeList from "./components/AgeList";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [item, setItem] = useState("");

  return (
    <div>
      <h2>All Users</h2>
      <p>Users and their age</p>
      <UserList />
      <h2>Age Demographic of Users With ___</h2>
      <Button onChange={setItem} />
      <AgeList item={item} />
    </div>
  );
};

export default App;
