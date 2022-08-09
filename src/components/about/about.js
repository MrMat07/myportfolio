import "../../styles/components/pages/about.css";
import aboutMe from "../../assets/me-about.jpeg";
import { BsAward, BsFolderCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const About = (props) => {
  return (
    <section id="about">
      <h5>Les comento un poco</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img alt="About Image" src={aboutMe}></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experiencia Laboral</h5>
              <small>4+ Año en sistemas</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>3+ En Argentina</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Proyectos</h5>
              <small>10+ Completos</small>
            </article>
          </div>

          <p>
          Soy Matias Emanuel Monti, tengo 26 años. Actualmente soy Analista de Comunicación y Colaboración en CONO S.A., donde me dedico a desarrollar aplicaciones con la suite de Microsoft 365.<br/>
          En mi tiempo libre me dedico a realizar proyectos personales como desarrollador Fullstack.
          </p>
          <a href="#contact" className='btn btn-primary'>Contáctame</a>
        </div>
      </div>
    </section>
  );
};

export default About;
