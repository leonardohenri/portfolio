
import QrCode from "../../images/Qrcode/qrcode.png"
import './styles.css';

export const Qrcode = () =>{
 return(
 <div className='QRbody'>
    <div className="QRcontainer">
      <div className="QRcard">
      <img src={QrCode} alt="qrcode"></img>
        <div className="QRtext">
          <h2>Melhore suas habilidades de front-end criando projetos</h2>
          <p>Escaneie o código QR para visitar o Frontend Mentor e leve suas habilidades de codificação para o próximo nível</p>
        </div>
      </div>
    </div>
  </div>);
}

