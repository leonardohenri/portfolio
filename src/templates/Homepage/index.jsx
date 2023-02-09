import img1 from "../../images/Homepage/image-retro-pcs.jpg"
import img2 from "../../images/Homepage/image-top-laptops.jpg"
import img3 from "../../images/Homepage/image-gaming-growth.jpg"

import { Content } from '../../components/Homepage/content';
import { Menu } from '../../components/Homepage/menu';
import './styles.css';

export const Homepage= () => {
  const top = [
    {   
        img:img1,
        id:1,
        titulo:'Reviving Retro PCs',
        paragrafo:'What happens when old PCs are given modern upgrades?'
    },
    {   
        img:img2,
        id:2,
        titulo:'Top 10 Laptops of 2022',
        paragrafo:' Our best picks for various needs and budgets.'
    },
    {   
        img:img3,
        id:3,
        titulo:'The Growth of Gaming',
        paragrafo:'How the pandemic has sparked fresh opportunities.'
    }
]
  return (

    <div className="Hpbody">
      <div className='tela'>
        <div className='topo'>
          <h1>W.</h1>
          <Menu/>
        </div>
      <Content/>
      <div className="top3">
        {top.map((obj)=>
        <div className="post" key={obj.id}>
          <img src={obj.img} alt="" />
          <div className="pContent">
            <p className="id">0{obj.id}</p>
            <h2>{obj.titulo}</h2>
            <p>{obj.paragrafo}</p>
          </div>
       </div>
        )}
      </div>
      </div>
    </div>
  );
}


