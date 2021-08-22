import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const AgeList = ({ item }) => {
  const [usersAge, setUsersAge] = useState({});

  useEffect(() => {
    const getUsersAge = () => {
      const url = "http://localhost:3000/users/age/" + item;

      if (url === "http://localhost:3000/users/age/") {
        return;
      }
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUsersAge(data));
    };
    getUsersAge();
  }, [item]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(usersAge).map((age) => (
            <tr>
              <td>{age}</td>
              <td>{usersAge[age]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AgeList;
