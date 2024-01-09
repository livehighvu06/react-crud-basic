import { Table, Button } from "reactstrap";

const UserTable = ({ users, editRow, deleteUser }) => (
  <Table striped>
    <thead>
      <tr>
        <th style={{ width: "33%" }}>Name</th>
        <th style={{ width: "33%" }}>Username</th>
        <th style={{ width: "33%" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <Button
                className="mb-1 mb-sm-0 me-3"
                outline
                onClick={() => editRow(user)}
              >
                Edit
              </Button>
              <Button color="danger" onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
);
export default UserTable;
