import "../../styles/components/pages/about.css";
import aboutMe from "../../assets/me-about.jpeg";
import { BsAward, BsFolderCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const About = (props) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eaque
            deleniti fugit labore, id consequatur repellendus hic voluptates
            ipsam debitis neque voluptate nemo cupiditate voluptas! Sit quaerat
            numquam libero dolore.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
