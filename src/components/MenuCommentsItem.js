import { Fragment } from "react";
import CommentForm from "./CommentForm";

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
      <h4 className="mt-5 mb-4">Add comment</h4>
      <CommentForm dishId={dishId} />
    </Fragment>
  );
}

export default MenuCommentsItem;
