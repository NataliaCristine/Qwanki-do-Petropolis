import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { ContainerModal } from "./styles";

const ModalMenu = ({ setOpen }) => {
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <ContainerModal>
      <div className="modal">
        <div className="header-modal">
          <div className="icon-container">
            <IoMdClose onClick={() => setOpen(false)} />
          </div>
        </div>
        <div className="links-menu">
          <Link to="/historia" onClick={handleCloseModal}>
            História
          </Link>
          <Link to="/instrutor" onClick={handleCloseModal}>
            Instrutor
          </Link>
          <Link to="/eventos" onClick={handleCloseModal}>
            Eventos
          </Link>
          <Link to="/contatos" onClick={handleCloseModal}>
            Contatos
          </Link>
        </div>
      </div>
    </ContainerModal>
  );
};

export default ModalMenu;
