import '../../styles/components/pages/contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {HiMail} from 'react-icons/hi';
import {BsWhatsapp,BsMessenger} from 'react-icons/bs';

const Contact = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7961nxi', 'template_xazogf8', form.current, 'gpTgRvMhsQ73qXJrS')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className="contact__option-icon"/>
            <h3>Email</h3>
            <h4>matimonti24@gmail.com</h4>
            <a href="mailto:matimonti24@gmail.com"  target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h3>Messenger</h3>
            <h4>Matias Emanuel Monti</h4>
            <a href="https://m.me/matias-emanuel-monti-87b795128"  target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h3>WhatsApp</h3>
            <h4>+54 3537-320999</h4>
            <a href="https://api.whatsapp.com/send?phone=543537320999"  target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;