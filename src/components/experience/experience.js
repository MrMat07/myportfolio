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
} from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import {
  AiOutlineForm,
  AiOutlineAppstore,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { TbBrandBootstrap } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

const Experience = (props) => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className="experience__item">
              <ImHtmlFive2 className="experience__item-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiCss3 className="experience__item-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiJavascript className="experience__item-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <TbBrandBootstrap className="experience__item-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiReact className="experience__item-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiHandlebarsdotjs className="experience__item-icon"/>
              <div>
                <h4>Handlebars</h4>
                <small className="text-light">Experienced</small>
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
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <GrMysql className="experience__item-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiExpress className="experience__item-icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiSap className="experience__item-icon"/>
              <div>
                <h4>SAP Service Layer</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiMicrosoftsqlserver className="experience__item-icon"/>
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiOracle className="experience__item-icon"/>
              <div>
                <h4>Oracle</h4>
                <small className="text-light">Experienced</small>
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
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <AiOutlineDoubleRight className="experience__item-icon"/>
              <div>
                <h4>Power Automate</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <AiOutlineAppstore className="experience__item-icon"/>
              <div>
                <h4>Power Apps</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <AiOutlineForm className="experience__item-icon"/>
              <div>
                <h4>Microsoft Forms</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiMicrosoftteams className="experience__item-icon"/>
              <div>
                <h4>Microsoft Teams</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__item">
              <SiMicrosoftsharepoint className="experience__item-icon"/>
              <div>
                <h4>Microsoft SharePoint</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
