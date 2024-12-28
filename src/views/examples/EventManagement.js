import React, {useEffect, useState} from "react";

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
    Table
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import { useLocation, useHistory } from "react-router-dom";

const EventManagement = () => {

    const history = useHistory();
    const location = useLocation();
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        const { state } = location || {};

        if(state?.add){
            setInputValue('');
        } else if(state?.event){
            const { event } = location.state || {};
            setInputValue(event || '');
        }
    }, [location]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

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
                                        <h3 className="mb-0">Event</h3>
                                    </Col>
                                    {inputValue ? (
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            href="#"
                                            onClick={() => history.push('#')}
                                            size="sm"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            color="danger"
                                            href="#"
                                            onClick={() => history.push('#')}
                                            size="sm"
                                        >
                                            Delete
                                        </Button>
                                    </Col>
                                    ) : (
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            href="#"
                                            onClick={() => history.push('#')}
                                            size="sm"
                                        >
                                            Add
                                        </Button>
                                    </Col>
                                    )}
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="9">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-title"
                                                >
                                                    Title
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={inputValue.email}
                                                    id="input-title"
                                                    placeholder="Title"
                                                    type="text"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        {inputValue ? (
                                            <Col lg="3">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-createdAt"
                                                    >
                                                    CreatedAt
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={inputValue.email}
                                                    id="input-createdAt"
                                                    placeholder="CreatedAt"
                                                    type="text"
                                                    disabled
                                                    />
                                            </FormGroup>
                                        </Col>
                                        ) : ''}
                                    </Row>
                                </div>
                                <div className="pl-lg-4">
                                    <FormGroup>
                                        <label>Content</label>
                                        <Input
                                            className="form-control-alternative"
                                            placeholder="Content"
                                            rows="4"
                                            defaultValue={inputValue.email}
                                            type="textarea"
                                        />
                                    </FormGroup>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EventManagement;
