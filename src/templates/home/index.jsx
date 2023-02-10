import "./Home.css"


import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {AiFillDatabase} from 'react-icons/ai'
import {AiFillApi} from 'react-icons/ai'


import foto from "../../images/Home/foto.png"
import { RProjects } from "../../util/array"



export const Home = () =>{
  const projects = RProjects();
  console.log(projects)
  return(
    <div className="Hcontainer">

      <div className="Htop">
        <h1>LeonardoSilva </h1>
        <div className="Hicons">
          <a href="https://instagram.com/leonardohenri15?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer noopener"><AiFillInstagram size='30px' color="black"/></a>
          <a href="https://www.linkedin.com/in/leonardo-henrique-da-silva-32110815a/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin size='30px' color="black"/></a>
          <a href="https://github.com/leonardohenri" target="_blank" rel="noreferrer noopener"><AiFillGithub size='30px' color="black"/></a>
          <a href="https://www.facebook.com/leonardo.henriquedasilva.92/" target="_blank" rel="noopener noreferrer"><AiFillFacebook size='30px' color="black"/></a>
        </div>
      </div>
      <div className="Hcontent">
        <div className="HcontentText">
          <h2>prazer em conhecer! <br/>
              eu sou <u className="Hsublinhado">Leonardo Henrique da Silva</u>.</h2>
              <p>sou brasileiro, estudante de engenharia da computação 9°periodo com foco em me torna desenvolvedor front-end apaixonado por tecnologia e em busca de migrar para
              área  de programação</p>
            
            <a className="Hsublinhado" href="https://api.whatsapp.com/send?phone=5517997262808&text=Ol%C3%A1.%20venho%20pelo%20seu%20portf%C3%B3lio." target="_blank" rel="noopener noreferrer">contact me <BsWhatsapp size='30px' color='green'/></a>
        </div>
          <img src={foto} alt="Foto do Leonardo" className="Hphoto" />
      </div>

      <div className="Hlanguage">
      <IoLogoJavascript color="hsl(38, 100%, 50%)" size='100px' />
      <DiReact size="100px" color="hsl(181, 100%, 50%)"/>
      <AiFillHtml5 size="100px" color="hsl(38, 100%, 50%)"/>
      <IoLogoCss3 size="100px" color="hsl(221, 100%, 50%)"/>
      <AiFillDatabase size="100px"/>
      <AiFillApi size="100px"/>
      </div>

      <div className="HcontainerProjects">
        <h2>Projects</h2>
        
        <div className="HgridProjects">
          {projects.map((project) =>
            <div key={project.id} className="Hproject">
              <a href={project.path}><img src={project.photo} alt={project.name}/></a>
              <div className="HtextProject">
                <p>{project.name}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="Hsublinhado">codigo</a>
              </div>
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
}