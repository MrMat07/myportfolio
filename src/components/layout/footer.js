import '../../styles/components/layout/footer.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import {ImFacebook2} from 'react-icons/im';

const Footer = (props) => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mat Dev</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portafolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/matias-emanuel-monti-87b795128/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MrMat07" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/matiiemg/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/MatyMonti/" target="_blank"><ImFacebook2/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 - Mat Dev. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;