import { infosEvents } from "../../__utils__";
import { Ul, Container, H1 } from "./styles";
import { useHistory } from "react-router";
const Events = () => {
  const history = useHistory();
  return (
    <Container>
      <H1>Eventos</H1>
      <Ul>
        {infosEvents.map((event) => (
          <li id={event.id}>
            <div>
              <img src={event.img} alt=""></img>
            </div>
            <div>
              <p>{event.description}</p>
            </div>
            <button onClick={() => history.push(`eventos/${event.id}`)}>
              Saiba mais!
            </button>
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Events;
