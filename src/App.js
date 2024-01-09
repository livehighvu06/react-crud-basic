import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

const userData = [
  { id: 1, name: "佐助", username: "sasuke" },
  { id: 2, name: "鳴人", username: "naruto" },
  { id: 3, name: "悟空", username: "goku" },
];

function App() {
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    console.log("刪除");
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div className="App">
      <h1 className="text-center mb-4">React CRUD!</h1>
      <Container>
        <Row className="mb-4">
          <Col>
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} users={users} />
              </div>
            )}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h2>View Users</h2>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
