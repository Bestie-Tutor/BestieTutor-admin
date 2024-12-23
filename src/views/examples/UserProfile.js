import React from "react";

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
    Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useLocation, useHistory } from "react-router-dom";

const UserProfile = () => {

    const history = useHistory();
    const location = useLocation();
    const { user } = location.state || {};

    return (
        <>
            <UserHeader/>
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
                                            color="primary"
                                            href="#pablo"
                                            onClick={() => history.push('#')}
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
                                                    defaultValue={user.name}
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
                                <hr className="my-4"/>
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
                                                    defaultValue={user.name}
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
                                                    defaultValue={user.name}
                                                    placeholder="Gender"
                                                    type="text"
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <hr className="my-4"/>
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
                                                    defaultValue={user.name}
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
                                                    defaultValue={user.name}
                                                    id="input-createdAt"
                                                    placeholder="CreatedAt"
                                                    type="text"
                                                    disabled
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserProfile;
