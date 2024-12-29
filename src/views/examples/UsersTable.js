import React, { useEffect, useState } from "react";
import Header from "../../components/Headers/Header";
import { Card, CardHeader, Container, Row, Table } from "reactstrap";
import { getAll } from "../../network/ApiAxios";
import { useHistory } from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const runAsync = async () => {
      const response = await getAll();
      if (response.data.success) {
        setUsers(response.data.users.filteredUsers);
      }
    };
    runAsync();
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="bg-secondary shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Users</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Nickname</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                    <th scope="col">CreatedAt</th>
                    <th scope="col">Preferences</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      class="click-th"
                      key={user.email}
                      onClick={() =>
                        history.push("/admin/user-management", { user })
                      }
                    >
                      <th scope="row">{user.email}</th>
                      <td>{user.nickname}</td>
                      <td>{user.phone}</td>
                      <td>{user.gender}</td>
                      <td>{user.address}</td>
                      <td>{user.create_date}</td>
                      <td>{user.preferences}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default UsersTable;
