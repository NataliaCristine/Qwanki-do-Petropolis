import { ContainerHome } from "./styles";
import videos from "../../asserts/Video/videos.mp4";
import { images } from "../../__utils__/imageshome";
import Carousel from "react-elastic-carousel";

const Home = () => {
  return (
    <ContainerHome>
      <div className="container-main">
        <div className="text">
          <h1> Venha treinar conosco! </h1>
          <p>
            Disciplina, foco, auto-controle mais que uma arte marcial é um
            estilo vida!
            <br />
            <strong>Venha fazer parte da Família Qwan Ki Do!</strong>
          </p>
        </div>
        <div className="imagens">
          <Carousel>
            {images.map((item, index) => (
              <div key={index}>
                <img src={item} alt="equipe" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <article className="video-container">
        <h2>Você pode treinar em casa também!</h2>
        <video width="200" height="400" controls="controls" muted>
          <source src={videos} />
        </video>
      </article>
    </ContainerHome>
  );
};

export default Home;
