import "../../styles/components/layout/header.css";
import Cta from "../cta/cta";
import Me from '../../assets/me__.png'
import HeaderSocial from "./headerSocial";

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Matias Monti</h1>
        <h5 className="text-light">Desarrollador Fullstack</h5>
        <Cta />
        <HeaderSocial/>

        <div className="me">
          <img src={Me} alt="me"></img>
        </div>

        <a href="#contact" className="scroll__down">Desplazarse hacia abajo</a>
      </div>
    </header>
  );
};

export default Header;
