import Carrousel from "../../components/Carousel";
import { Container } from "./styles";
import Julio from "../../asserts/Professor/Julio.jpeg";
import Milton from "../../asserts/Professor/Milton.jpeg";
import Card from "../../components/Card";

const Professor = () => {
  const instructores = [
    { image: Julio, name: "Julio", graducao: "Faixa-Preta" },
    { image: Milton, name: "Milton", graducao: "Faixa-Preta" },
  ];

  return (
    <Container>
      <h1 className="eventos-carousel"> Comissão Técnica em Eventos </h1>
      <div className="carousel">
        <Carrousel />
      </div>
      <h2> Comissão Técnica: </h2>
      <Card>
        {instructores.map((item, index) => (
          <li className="conteiner-cart" key={index}>
            <figure>
              <img src={item.image} alt="Instrutores" />
            </figure>
            <div>
              <strong>{item.name}</strong>
              <p>
                <strong>{item.graducao}</strong>
              </p>
            </div>
          </li>
        ))}
      </Card>
    </Container>
  );
};

export default Professor;
