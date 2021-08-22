import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      const url = "http://localhost:3000/users/";
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };

    getUsers();
  }, []);

  return (
    <div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
