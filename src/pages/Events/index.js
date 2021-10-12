import { infosEvents } from "../../__utils__";
import { Container, H1 } from "./styles";
import { useHistory } from "react-router";
import Card from "../../components/Card";

const Events = () => {
  const history = useHistory();
  return (
    <Container>
      <H1>Eventos</H1>
      <Card>
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
      </Card>
    </Container>
  );
};

export default Events;
