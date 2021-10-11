import { useParams } from "react-router";
import { infosEvents } from "../../__utils__";
import { Container } from "./styles";
const IndividualEvent = () => {
  const { id } = useParams();
  const event = infosEvents.find((item) => item.id === parseInt(id));
  console.log(event);
  return (
    <Container>
      <header>
        <h1>{event.name.toUpperCase()}</h1>
        <img src={event.img} alt="404"></img>
      </header>
      <ul>
        <li className="description">{event.description}</li>
        <li>
          <strong>Dia </strong>: {event.date}
        </li>
        <li>
          <strong>Pais: </strong>: {event.pais}
        </li>
        <li>
          <strong>Região </strong>: {event.regiao}
        </li>
      </ul>
    </Container>
  );
};

export default IndividualEvent;
