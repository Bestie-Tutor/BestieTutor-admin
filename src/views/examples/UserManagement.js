import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import { useLocation, useHistory } from "react-router-dom";
import { getAll } from "../../network/ApiAxios";

const UserManagement = () => {
  const history = useHistory();
  const location = useLocation();
  const { user } = location.state || {};
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    const runAsync = async () => {
      const response = await getAll();
      if (response.data.success) {
        setDescriptions(response.data.users.filteredUsers);
      }
    };
    runAsync();
  }, []);

  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">User account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="danger"
                      href="#pablo"
                      onClick={() => history.push("#")}
                      size="sm"
                    >
                      Ban Account
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Nickname
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={user.nickname}
                          id="input-nickname"
                          placeholder="Nickname"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          defaultValue={user.email}
                          type="email"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-phone"
                        >
                          Phone
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={user.phone}
                          id="input-phone"
                          placeholder="Phone"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-gender"
                        >
                          Gender
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-gender"
                          defaultValue={user.gender}
                          placeholder="Gender"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Address
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={user.address}
                          id="input-address"
                          placeholder="Address"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-createdAt"
                        >
                          CreatedAt
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue={user.create_date}
                          id="input-createdAt"
                          placeholder="CreatedAt"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Description</h6>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Language</th>
                        <th scope="col">Character</th>
                        <th scope="col">StartTime</th>
                        <th scope="col">EndTime</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={user.email}>
                        <th scope="row">{user.language}</th>
                        <td>{user.name}</td>
                        <td>{user.name}</td>
                        <td>{user.name}</td>
                        <td>{user.name}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserManagement;
