import { useState } from "react";
import { Row, Col, Form, Label, Input, Button } from "reactstrap";
const AddUserForm = ({ addUser, users }) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        addUser({ ...user, id: users.length + 1 });
        setUser(initialFormState);
      }}
    >
      <Row className="mb-3">
        <Col md="6">
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </Col>
        <Col md="6">
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <Button color="primary">Add new User</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddUserForm;
