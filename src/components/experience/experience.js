import "../../styles/components/pages/experience.css";
import {
  SiReact,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSap,
  SiMicrosoftsqlserver,
  SiOracle,
  SiPowerbi,
  SiMicrosoftteams,
  SiMicrosoftsharepoint,
  SiHandlebarsdotjs,
  SiVisualstudio,
  SiAdobedreamweaver,
  SiPhp
} from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import {
  AiOutlineForm,
  AiOutlineAppstore,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { TbBrandBootstrap } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import {DiPhotoshop,DiDatabase} from 'react-icons/di';
import {MdOutlineDraw} from 'react-icons/md';

const Experience = (props) => {
  return (
    <section id="experience">
      <h5>Que habilidades tengo</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__item">
              <ImHtmlFive2 className="experience__item-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiCss3 className="experience__item-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiJavascript className="experience__item-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <TbBrandBootstrap className="experience__item-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiReact className="experience__item-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiHandlebarsdotjs className="experience__item-icon"/>
              <div>
                <h4>Handlebars</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className="experience__item">
              <SiNodedotjs className="experience__item-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <GrMysql className="experience__item-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiExpress className="experience__item-icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiSap className="experience__item-icon"/>
              <div>
                <h4>SAP Service Layer</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiMicrosoftsqlserver className="experience__item-icon"/>
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiOracle className="experience__item-icon"/>
              <div>
                <h4>Oracle</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__microsoft">
          <h3>Microsoft 365</h3>
          <div className="experience__content">
            <article className="experience__item">
              <SiPowerbi className="experience__item-icon"/>
              <div>
                <h4>Power BI</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <AiOutlineDoubleRight className="experience__item-icon"/>
              <div>
                <h4>Power Automate</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <AiOutlineAppstore className="experience__item-icon"/>
              <div>
                <h4>Power Apps</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <AiOutlineForm className="experience__item-icon"/>
              <div>
                <h4>Forms</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiMicrosoftteams className="experience__item-icon"/>
              <div>
                <h4>Teams</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiMicrosoftsharepoint className="experience__item-icon"/>
              <div>
                <h4>SharePoint</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <DiDatabase className="experience__item-icon"/>
              <div>
                <h4>Dataverse</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__other">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__item">
              <SiPhp className="experience__item-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__item">
              <SiVisualstudio className="experience__item-icon"/>
              <div>
                <h4>Visual Basic 6.0</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiVisualstudio className="experience__item-icon"/>
              <div>
                <h4>Visual Basic .NET</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiAdobedreamweaver className="experience__item-icon"/>
              <div>
                <h4>Dreamweaver</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__item">
              <DiPhotoshop className="experience__item-icon"/>
              <div>
                <h4>Photoshop</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <MdOutlineDraw className="experience__item-icon"/>
              <div>
                <h4>Corel Draw</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiSap className="experience__item-icon"/>
              <div>
                <h4>SAP Business One</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
