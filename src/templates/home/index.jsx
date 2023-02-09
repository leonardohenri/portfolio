import "./styles.css"


import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

import foto from "../../images/retrato-de-uma-cabeça-do-leão-em-um-fundo-preto-124061955.jpg"
import { RProjects } from "../../util/array"



export const Home = () =>{
  const projects = RProjects();
  console.log(projects)
  return(
    <div className="container">

      <div className="top">
        <h1>LeonardoSilva </h1>
        <div className="icons">
          <a href="https://instagram.com/leonardohenri15?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer noopener"><AiFillInstagram size='30px' color="black"/></a>
          <a href="https://www.linkedin.com/in/leonardo-henrique-da-silva-32110815a/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin size='30px' color="black"/></a>
          <a href="https://github.com/leonardohenri" target="_blank" rel="noreferrer noopener"><AiFillGithub size='30px' color="black"/></a>
          <a href="https://www.facebook.com/leonardo.henriquedasilva.92/" target="_blank" rel="noopener noreferrer"><AiFillFacebook size='30px' color="black"/></a>
        </div>
      </div>
      <div className="content">
        <div className="contentText">
          <h2>prazer em conhecer! <br/>
              eu sou <u className="sublinhado">Leonardo Henrique da Silva</u>.</h2>
              <p>sou brasileiro, estudante de engenharia da computação 9°periodo com foco em me torna desenvolvedor front-end apaixonado por tecnologia e em busca de migrar para
              área  de programação</p>
            
            <a className="sublinhado" href="https://api.whatsapp.com/send?phone=5517997262808&text=Ol%C3%A1.%20venho%20pelo%20seu%20portf%C3%B3lio." target="_blank" rel="noopener noreferrer">contact me <BsWhatsapp size='30px' color='green'/></a>
        </div>
          <img src={foto} alt="eu e oxossi" className="photo" />
      </div>
      <div className="projects">
        <h2>Projects</h2>
      </div>
    
    </div>
  );
}