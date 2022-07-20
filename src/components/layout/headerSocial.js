// import '../../styles/components/pages/about.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import {ImFacebook2} from 'react-icons/im';

const HeaderSocial = (props) => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/matias-emanuel-monti-87b795128/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MrMat07" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/matiiemg/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/MatyMonti/" target="_blank"><ImFacebook2/></a>
    </div>
  );
};

export default HeaderSocial;