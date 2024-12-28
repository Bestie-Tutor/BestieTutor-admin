import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
    Col,
    Button
} from "reactstrap";
import {getAll} from "../../network/ApiAxios";
import {useHistory} from "react-router-dom";

const TopicsTable = () => {
    const history = useHistory();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setTopics(data.users);
            }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Topics</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            onClick={() => history.push('/admin/topic-management', { add: true })}
                                            size="sm"
                                        >
                                            Add
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Step</th>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Difficulty</th>
                                </tr>
                                </thead>
                                <tbody>
                                {topics.map(topic => (
                                    <tr class="click-th" key={topic.email} onClick={() => history.push('/admin/topic-management', { topic })}>
                                        <th scope="row">
                                            {topic.name}
                                        </th>
                                        <td>{topic.email}</td>
                                        <td>{topic.email}</td>
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
}

export default TopicsTable;
