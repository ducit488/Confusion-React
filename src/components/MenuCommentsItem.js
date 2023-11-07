import { Fragment } from "react";
import CommentForm from "./CommentForm";
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

function MenuCommentsItem({ comments, dishId }) {
  return (
    <Fragment>
      <ul className="list-unstyled">
        {comments.map((item) => (
          <li key={item.id}>
            <p>{item.comment}</p>
            <p>
              -- {item.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(item.date)))}
            </p>
          </li>
        ))}
      </ul>

      <CommentForm dishId={dishId} />
    </Fragment>
  );
}

export default MenuCommentsItem;
