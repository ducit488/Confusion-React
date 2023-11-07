import { Media } from "reactstrap";

function RenderLeader({ leaders }) {
  console.log(leaders);
  return (
    <Media list>
      {leaders.map((leader, id) => (
        <Media key={id} className="m-5">
          <Media left href="" className="mr-4">
            <Media object src={leader.image} alt={leader.name + " avatar"} />
          </Media>
          <Media body>
            <Media heading>{leader.name}</Media>
            <p>{leader.designation}</p>

            <p>{leader.description}</p>
          </Media>
        </Media>
      ))}
    </Media>
  );
}

export default RenderLeader;
