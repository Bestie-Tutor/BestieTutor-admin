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

const CharacterManagement = () => {

    const history = useHistory();
    const location = useLocation();
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        const { state } = location || {};

        if(state?.add){
            setInputValue('');
        } else if(state?.character){
            const { character } = location.state || {};
            setInputValue(character || '');
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
                                        <h3 className="mb-0">Character</h3>
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
                                        <Col lg="6">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-name"
                                                >
                                                    Name
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={inputValue.name}
                                                    id="input-name"
                                                    placeholder="Name"
                                                    type="text"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-appearance"
                                                >
                                                    Appearance
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={inputValue.name}
                                                    id="input-appearance"
                                                    placeholder="appearance"
                                                    type="text"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-personality"
                                                >
                                                    Personality
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={inputValue.name}
                                                    id="input-personality"
                                                    placeholder="personality"
                                                    type="text"
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-tone"
                                                >
                                                    Tone
                                                </label>
                                                <Input
                                                    className="form-control-alternative"
                                                    defaultValue={inputValue.name}
                                                    id="input-tone"
                                                    placeholder="tone"
                                                    type="text"
                                                    onChange={handleChange}
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

export default CharacterManagement;
