import dropdown from "../images/Home/dropdown.png"
import faq from "../images/Home/faq.png"
import formulario from "../images/Home/formulario.png"
import homepage from "../images/Home/homepage.png"
import tipcalculator from "../images/Home/tip-calculator.png"
import qrcode from "../images/Home/qrcode.png"
import pokeapi from "../images/Home/PokeApi.png"
import cadastroClient from "../images/Home/cadastroCliente.png"

const projects = [
    {id:1, 
        photo:dropdown,
        name:"Menu dropdown",
        path:"/dropdown",
        github:"https://github.com/leonardohenri/dropdown-navigation"
    },
    {id:2, 
        photo:faq,
        name:"Faq sanfona",
        path:"/faq",
        github:"https://github.com/leonardohenri/cart-o-sanfona-faq/tree/master/src"
    },
    {id:3, 
        photo:formulario,
        name:"Formulário",
        path:"/form",
        github:"https://github.com/leonardohenri/formulario"
    },
    {id:4, 
        photo:homepage,
        name:"Homepage",
        path:"/homepage",
        github:"https://github.com/leonardohenri/homepage"
    },
    {id:5, 
        photo:tipcalculator,
        name:"Tip calculator",
        path:"calculator",
        github:"https://github.com/leonardohenri/tip-calculator"
    },
    {id:6, 
        photo:qrcode,
        name:"Qrcode",
        path:"qrcode",
        github:"https://github.com/leonardohenri/card-qrcode"
    },
    {id:7, 
        photo:pokeapi,
        name:"Pokedex",
        path:"pokedex",
        github:"https://github.com/leonardohenri/pokedex"
    },
    {id:8,
        photo:cadastroClient,
        name:"Crud",
        path:"crud",
        github:"https://github.com/leonardohenri/cadastro-cliente" 
}
]
export const RProjects = () =>{
    return projects;
}