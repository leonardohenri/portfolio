import dropdown from "../images/Home/dropdown.png"
import faq from "../images/Home/faq.png"
import formulario from "../images/Home/formulario.png"
import homepage from "../images/Home/homepage.png"
import tipcalculator from "../images/Home/tip-calculator.png"
import qrcode from "../images/Home/qrcode.png"
import pokeapi from "../images/Home/PokeApi.png"
import cadastroClient from "../images/Home/cadastroCliente.png"
import ControleFinanceiro from "../images/Home/controleFinanceiro.png"

const projects = [
    {id:1, 
        photo:dropdown,
        name:"Menu dropdown",
        path:"https://effervescent-baklava-1bdd48.netlify.app/",
        data:'06/02/2023',
        github:"https://github.com/leonardohenri/dropdown-navigation"
    },
    {id:2, 
        photo:faq,
        name:"Faq sanfona",
        path:"/faq",
        data:'28/12/2022',
        github:"https://github.com/leonardohenri/cart-o-sanfona-faq/tree/master/src"
    },
    {id:3, 
        photo:formulario,
        name:"Formulário",
        path:"/form",
        data:'03/01/2023',
        github:"https://github.com/leonardohenri/formulario"
    },
    {id:4, 
        photo:homepage,
        name:"Homepage",
        path:"https://joyful-chaja-ae5eb8.netlify.app/",
        data:'16/01/2023',
        github:"https://master--joyful-chaja-ae5eb8.netlify.app/"
    },
    {id:5, 
        photo:tipcalculator,
        name:"Tip calculator",
        path:"calculator",
        data:'30/01/2023',
        github:"https://github.com/leonardohenri/tip-calculator"
    },
    {id:6, 
        photo:qrcode,
        name:"Qrcode",
        path:"qrcode",
        data:'28/12/2022',
        github:"https://github.com/leonardohenri/card-qrcode"
    },
    {id:7, 
        photo:pokeapi,
        name:"Pokedex",
        path:"pokedex",
        data:'23/02/2023',
        github:"https://github.com/leonardohenri/pokedex"
    },
    {id:8,
        photo:cadastroClient,
        name:"Crud",
        path:"https://venerable-raindrop-743fce.netlify.app/",
        data:'21/03/2023',
        github:"https://github.com/leonardohenri/cadastro-cliente" 
},
{id:9,
    photo:ControleFinanceiro,
    nome:'Controle financeiro',
    path:"https://master--superb-treacle-f67f73.netlify.app/",
    data:'20/04/2023',
    github:"https://github.com/leonardohenri/controle-financeiro-crud"

}
]
export const RProjects = () =>{
    return projects;
}
