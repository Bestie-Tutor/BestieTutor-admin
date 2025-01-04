import React, { useEffect, useState } from "react";
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
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import { useLocation, useHistory } from "react-router-dom";
import { createTopic, updateTopic, deleteTopic } from "../../network/ApiAxios";

const TopicManagement = () => {
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState({
    mainTopic: "",
    subTopics: [
      {
        name: "",
        difficulties: [
          {
            difficulty: "",
            description: "",
          },
        ],
      },
    ],
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const { state } = location || {};
    if (state?.topic) {
      setInputValue(state.topic);
      setIsEditMode(true);
    } else {
      setInputValue({
        mainTopic: "",
        subTopics: [
          {
            name: "",
            difficulties: [
              {
                difficulty: "",
                description: "",
              },
            ],
          },
        ],
      });
      setIsEditMode(false);
    }
  }, [location]);

  const handleChangeMainTopic = (e) => {
    setInputValue({
      ...inputValue,
      mainTopic: e.target.value,
    });
  };

  const handleChangeSubTopic = (index, value) => {
    const updatedSubTopics = [...inputValue.subTopics];
    updatedSubTopics[index].name = value;
    setInputValue({ ...inputValue, subTopics: updatedSubTopics });
  };

  const handleChangeDifficulty = (index, value) => {
    const updatedSubTopics = [...inputValue.subTopics];
    const [difficulty, description] = value.split(" - ");
    if (updatedSubTopics[index].difficulties.length > 0) {
      updatedSubTopics[index].difficulties[0].difficulty = difficulty || "";
      updatedSubTopics[index].difficulties[0].description = description || "";
    }
    setInputValue({ ...inputValue, subTopics: updatedSubTopics });
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    try {
      if (isEditMode) {
        const result = await updateTopic(token, inputValue._id, inputValue);
        if (result.status === 200) {
          alert("성공적으로 주제를 수정했습니다!");
        }
      } else {
        const result = await createTopic(token, inputValue);
        if (result.status === 200) {
          alert("성공적으로 주제를 등록했습니다!");
          history.goBack();
        }
      }
    } catch (error) {
      console.error("Error saving topic:", error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await deleteTopic(token, inputValue._id);
      if (result.status === 200) {
        alert("성공적으로 주제를 삭제했습니다!");
      }
    } catch (error) {
      console.error("Error deleting topic:", error);
    }
  };

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
                    <h3 className="mb-0">Topic Management</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {isEditMode && (
                      <Button color="danger" onClick={handleDelete} size="sm">
                        Delete
                      </Button>
                    )}
                    <Button color="primary" onClick={handleSave} size="sm">
                      {isEditMode ? "Update" : "Add"}
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-main-topic"
                    >
                      Main Topic
                    </label>
                    <Input
                      className="form-control-alternative"
                      name="mainTopic"
                      value={inputValue.mainTopic || ""}
                      id="input-main-topic"
                      placeholder="Enter Main Topic"
                      type="text"
                      onChange={handleChangeMainTopic}
                    />
                  </FormGroup>

                  <FormGroup>
                    <label className="form-control-label" htmlFor="subtopics">
                      SubTopics
                    </label>
                    {inputValue.subTopics.map((subTopic, index) => (
                      <Input
                        key={index}
                        className="form-control-alternative mb-3"
                        name={`subTopics[${index}].name`}
                        value={subTopic.name || ""}
                        id={`input-subtopic-${index}`}
                        placeholder={`Enter Sub Topic ${index + 1}`}
                        type="text"
                        onChange={(e) =>
                          handleChangeSubTopic(index, e.target.value)
                        }
                      />
                    ))}
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="difficulties"
                    >
                      Difficulties
                    </label>
                    {inputValue.subTopics.map((subTopic, subIndex) => (
                      <div key={subIndex} className="mb-3">
                        <label
                          className="form-control-label"
                          htmlFor="difficulties"
                        >
                          SubTopic {subIndex + 1}:{" "}
                          {subTopic.name || "Unnamed Sub Topic"}
                        </label>
                        {subTopic.difficulties.map((difficulty, diffIndex) => {
                          // 난이도에 따른 파스텔톤 색상 설정
                          const pastelColors = {
                            easy: "#DFFFD6", // 연한 녹색
                            normal: "#FFF7C2", // 연한 노란색
                            hard: "#FFD6D6", // 연한 빨간색
                            default: "#F5F5F5", // 연한 회색
                          };
                          const backgroundColor =
                            difficulty.difficulty.toLowerCase() === "easy"
                              ? pastelColors.easy
                              : difficulty.difficulty.toLowerCase() === "normal"
                              ? pastelColors.normal
                              : difficulty.difficulty.toLowerCase() === "hard"
                              ? pastelColors.hard
                              : pastelColors.default;

                          return (
                            <div
                              key={diffIndex}
                              className="p-3 mb-2"
                              style={{
                                backgroundColor: backgroundColor,
                                borderRadius: "5px",
                              }}
                            >
                              <Input
                                className="form-control-alternative mb-1"
                                name={`subTopics[${subIndex}].difficulties[${diffIndex}].difficulty`}
                                value={difficulty.difficulty || ""}
                                id={`input-difficulty-${subIndex}-${diffIndex}`}
                                placeholder={`Enter Difficulty (e.g., Easy)`}
                                type="text"
                                onChange={(e) => {
                                  const updatedSubTopics = [
                                    ...inputValue.subTopics,
                                  ];
                                  updatedSubTopics[subIndex].difficulties[
                                    diffIndex
                                  ].difficulty = e.target.value;
                                  setInputValue({
                                    ...inputValue,
                                    subTopics: updatedSubTopics,
                                  });
                                }}
                              />
                              <Input
                                className="form-control-alternative mb-1"
                                name={`subTopics[${subIndex}].difficulties[${diffIndex}].description`}
                                value={difficulty.description || ""}
                                id={`input-description-${subIndex}-${diffIndex}`}
                                placeholder={`Enter Description (e.g., Basic level tasks)`}
                                type="text"
                                onChange={(e) => {
                                  const updatedSubTopics = [
                                    ...inputValue.subTopics,
                                  ];
                                  updatedSubTopics[subIndex].difficulties[
                                    diffIndex
                                  ].description = e.target.value;
                                  setInputValue({
                                    ...inputValue,
                                    subTopics: updatedSubTopics,
                                  });
                                }}
                              />
                              <Input
                                className="form-control-alternative"
                                name={`subTopics[${subIndex}].difficulties[${diffIndex}].detail`}
                                value={difficulty.detail || ""}
                                id={`input-detail-${subIndex}-${diffIndex}`}
                                placeholder={`Enter Detail (e.g., Additional notes or specifics)`}
                                type="text"
                                onChange={(e) => {
                                  const updatedSubTopics = [
                                    ...inputValue.subTopics,
                                  ];
                                  updatedSubTopics[subIndex].difficulties[
                                    diffIndex
                                  ].detail = e.target.value;
                                  setInputValue({
                                    ...inputValue,
                                    subTopics: updatedSubTopics,
                                  });
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopicManagement;
