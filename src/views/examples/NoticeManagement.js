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
import {
  createNotice,
  updateNotice,
  deleteNotice,
} from "../../network/ApiAxios";

const NoticeManagement = () => {
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
    createdAt: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const { state } = location || {};
    if (state?.notice) {
      setInputValue(state.notice);
      setIsEditMode(true);
    } else {
      setInputValue({ title: "", content: "", createdAt: "" });
      setIsEditMode(false);
    }
  }, [location]);

  const handleChange = (name, value) => {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (isEditMode) {
        const result = await updateNotice(inputValue._id, {
          title: inputValue.title,
          content: inputValue.content,
        });
        console.log(result);
        alert("공지가 성공적으로 수정되었습니다!");
      } else {
        await createNotice({
          title: inputValue.title,
          content: inputValue.content,
        });
        alert("공지가 성공적으로 등록되었습니다.");
      }
      history.goBack();
    } catch (error) {
      console.error("Error saving notice:", error);
      alert("Failed to save the notice.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNotice(inputValue._id);
      alert("공지가 성공적으로 삭제되었습니다.");
      history.goBack();
    } catch (error) {
      console.error("Error deleting notice:", error);
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
                    <h3 className="mb-0">
                      {isEditMode ? "Edit Notice" : "Add Notice"}
                    </h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="primary" size="sm" onClick={handleSave}>
                      {isEditMode ? "Update" : "Add"}
                    </Button>
                    {isEditMode && (
                      <Button
                        color="danger"
                        size="sm"
                        className="ml-2"
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    )}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-title">
                      Title
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-title"
                      type="text"
                      placeholder="Enter Title"
                      value={inputValue.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                    />
                  </FormGroup>
                  {isEditMode && (
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-createdAt"
                      >
                        Created At
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-createdAt"
                        type="text"
                        value={inputValue.createdAt}
                        disabled
                      />
                    </FormGroup>
                  )}
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-content"
                    >
                      Content
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-content"
                      type="textarea"
                      rows="4"
                      placeholder="Enter Content"
                      value={inputValue.content}
                      onChange={(e) => handleChange("content", e.target.value)}
                    />
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

export default NoticeManagement;
