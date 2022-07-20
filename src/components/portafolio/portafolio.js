import "../../styles/components/pages/portafolio.css";
import portafolio1 from "../../assets/portfolio1.jpg";
import portafolio2 from "../../assets/portfolio2.jpg";
import portafolio3 from "../../assets/portfolio3.jpg";
import portafolio4 from "../../assets/portfolio4.jpg";
import portafolio5 from "../../assets/portfolio5.png";
import portafolio6 from "../../assets/portfolio6.jpg";

const data = require('../../assets/data_portafolio.json');

const Portafolio = (props) => {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          ); 
        })}
      </div>
    </section>
  );
};

export default Portafolio;
