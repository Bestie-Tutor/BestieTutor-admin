import React, { useEffect, useState } from "react";
import Header from "../../components/Headers/Header";
import {
  Card,
  CardHeader,
  Container,
  Row,
  Table,
  Col,
  Button,
} from "reactstrap";
import { getAllTopics } from "../../network/ApiAxios";
import { useHistory } from "react-router-dom";

const TopicsTable = () => {
  const history = useHistory();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const runAsync = async () => {
      const response = await getAllTopics();
      const topics = response.data;
      console.log(topics);
      if (response.status === 200) {
        setTopics(topics);
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
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Topics</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      onClick={() =>
                        history.push("/admin/topic-management", { add: true })
                      }
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
                  {topics.map((topic) =>
                    topic.subTopics.map((subTopic) => (
                      <tr
                        className="click-th"
                        key={subTopic._id}
                        onClick={() =>
                          history.push("/admin/topic-management", {
                            topic,
                            subTopic: subTopic.name,
                            difficulties: subTopic.difficulties,
                          })
                        }
                      >
                        <th scope="row">{topic.mainTopic}</th>
                        <td>{subTopic.name}</td>
                        <td>
                          {subTopic.difficulties.map((difficulty) => (
                            <div key={difficulty._id}>
                              <strong>{difficulty.difficulty}</strong>:{" "}
                              {difficulty.description}
                            </div>
                          ))}
                        </td>{" "}
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default TopicsTable;
