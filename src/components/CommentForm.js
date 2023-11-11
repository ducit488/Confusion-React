/* eslint-disable react/jsx-pascal-case */
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import PenIcon from "../icons/PenIcon";

import { useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import { fetchComments } from "../store";

function CommentForm({ dishId, addComment, commentsLen }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  const handleSubmit = async (values) => {
    toggle();
    let data = {
      id: commentsLen,
      dishId: dishId,
      ...values,

      date: new Date().toISOString(),
    };

    if (!data.rating) data.rating = 3;

    await dispatch(addComment(data));
    dispatch(fetchComments());
  };

  return (
    <Fragment>
      <Button
        outline
        className="d-flex align-items-center justify-content-between"
        onClick={toggle}
      >
        <PenIcon /> <span className="ml-2">Submit Comment</span>
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="rating" md={12} className="h5">
                Rating
              </Label>

              <Col md={{ size: 12 }}>
                <Control.select
                  model=".rating"
                  name="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option selected>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="author" md={12} className="h5">
                Your Name
              </Label>
              <Col md={12}>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="comment" md={12} className="h5">
                Comment
              </Label>
              <Col md={12}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  placeholder="Comment"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                  rows="5"
                />
                <Errors
                  className="text-danger"
                  model=".comment"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10 }}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default CommentForm;
