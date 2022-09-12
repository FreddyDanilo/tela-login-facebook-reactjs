import "./Info.css";
import LogotipoFacebook from "../assets/logotipo-facebook.png";

const Info = () => {
  return (
    <>
      <div className="info-container">
        <img src={LogotipoFacebook} alt="Logotipo Facebook" />
        <h2>
          O Facebook ajuda você a se conectar e compartilhar com as pessoas que
          fazem parte da sua vida.
        </h2>
      </div>
    </>
  );
};

export default Info;
