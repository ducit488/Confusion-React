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
} from "reactstrap";

import { addComment } from "../store";
import { useDispatch } from "react-redux";

function CommentForm({ dishId }) {
  const dispatch = useDispatch();

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;

  const handleSubmit = (values) => {
    let data = { ...values, dishId: dishId };
    if (!data.rating) data.rating = 3;
    dispatch(addComment(data));
  };

  return (
    <LocalForm onSubmit={(values) => handleSubmit(values)}>
      <Row className="form-group">
        <Label htmlFor="author" md={2}>
          Author
        </Label>
        <Col md={10}>
          <Control.text
            model=".author"
            id="author"
            name="author"
            placeholder="Name of author"
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
        <Label htmlFor="rating" md={2}>
          Rating
        </Label>
        <Col md={{ size: 3 }}>
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
        <Label htmlFor="comment" md={2}>
          Comment
        </Label>
        <Col md={10}>
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
        <Col md={{ size: 10, offset: 2 }}>
          <Button type="submit" color="primary">
            Send
          </Button>
        </Col>
      </Row>
    </LocalForm>
  );
}

export default CommentForm;
