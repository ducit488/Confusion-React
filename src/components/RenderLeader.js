import { Media } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";

function RenderLeader({ leaders }) {
  return (
    <Media list>
      <Stagger in>
        {leaders.map((leader, id) => (
          <Fade in>
            <Media key={id} className="m-5">
              <Media left href="" className="mr-4">
                <Media
                  object
                  src={leader.image}
                  alt={leader.name + " avatar"}
                />
              </Media>
              <Media body>
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>

                <p>{leader.description}</p>
              </Media>
            </Media>
          </Fade>
        ))}
      </Stagger>
    </Media>
  );
}

export default RenderLeader;
