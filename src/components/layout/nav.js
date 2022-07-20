// import { NavLink } from "react-router-dom";

import '../../styles/components/layout/nav.css';
import {GoHome} from 'react-icons/go';
import {AiOutlineUser, AiOutlineBook} from 'react-icons/ai';
import {RiServiceLine, RiFolderUserLine} from 'react-icons/ri';
import {MdOutlineAssessment, MdOutlineMessage} from 'react-icons/md'; 
import { useState } from 'react';

const Nav = (props) => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#portafolio' onClick={()=> setActiveNav('#portafolio')}  className={activeNav === '#portafolio' ? 'active' : ''}><RiFolderUserLine/></a>
      <a href='#testimonials' onClick={()=> setActiveNav('#testimonials')}  className={activeNav === '#testimonials' ? 'active' : ''}><MdOutlineAssessment/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/></a>
    </nav>
  );
};

export default Nav;