// import '../../styles/components/pages/about.css';
import CV from '../../assets/CV_Matias.pdf'

const Cta = (props) => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  );
};

export default Cta;