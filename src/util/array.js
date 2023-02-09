import dropdown from "../images/dropdown.png"
import faq from "../images/faq.png"
import formulario from "../images/formulario.png"
import homepage from "../images/homepage.png"
import tipcalculator from "../images/tip-calculator.png"
import qrcode from "../images/qrcode.png"

const projects = [
    {id:1, 
        photo:dropdown,
        name:"Menu dropdown",
        path:"",
        github:"https://github.com/leonardohenri/dropdown-navigation"
    },
    {id:2, 
        photo:faq,
        name:"Faq sanfona",
        path:"",
        github:"https://github.com/leonardohenri/cart-o-sanfona-faq/tree/master/src"
    },
    {id:3, 
        photo:formulario,
        name:"Formulário",
        path:"",
        github:"https://github.com/leonardohenri/formulario"
    },
    {id:4, 
        photo:homepage,
        name:"Homepage",
        path:"",
        github:"https://github.com/leonardohenri/homepage"
    },
    {id:5, 
        photo:tipcalculator,
        name:"Tip calculator",
        path:"",
        github:"https://github.com/leonardohenri/tip-calculator"
    },
    {id:6, 
        photo:qrcode,
        name:"Qrcode",
        path:"",
        github:"https://github.com/leonardohenri/card-qrcode"
    }
]
export const RProjects = () =>{
    return projects;
}