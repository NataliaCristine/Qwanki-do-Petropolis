import { infosEvents } from "../../__utils__";
import { Ul, Container, H1 } from "./styles";

const Events = () => {
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
            <button>Saiba mais!</button>
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Events;
