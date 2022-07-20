// import '../../styles/components/pages/about.css';
import CV from '../../assets/CV_Matias.pdf'

const Cta = (props) => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};

export default Cta;