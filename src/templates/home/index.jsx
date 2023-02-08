import "./styles.css"

import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

export const Home = () =>{
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

    </div>
  );
}