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
import { Fade, Stagger } from "react-animation-components";

function MenuCommentsItem({ comments, commentsLen, dishId, addComment }) {
  return (
    <Fragment>
      <ul className="list-unstyled">
        <Stagger in>
          {comments.map((item) => (
            <Fade in>
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
            </Fade>
          ))}
        </Stagger>
      </ul>

      <CommentForm
        dishId={dishId}
        addComment={addComment}
        commentsLen={commentsLen}
      />
    </Fragment>
  );
}

export default MenuCommentsItem;
