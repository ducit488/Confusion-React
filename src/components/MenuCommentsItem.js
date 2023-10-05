function MenuCommentsItem({ comments }) {
  return (
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
  );
}

export default MenuCommentsItem;
