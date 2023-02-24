import "./styles.css"
import img from "../../../images/Homepage/icon-menu.svg"
import { openNav, closeNav } from "./script"
import close from "../../../images/Homepage/icon-menu-close.svg"

export const Menu = () =>{
    return(
        <nav >
            <div id="HpbuttonMenu" onClick={openNav}><img src={img} alt="" /> </div>
            <div id="Hpmenu">
                <ul >
                <div id="HpbuttonClose" onClick={closeNav}><img src={close} alt="" /></div>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">new</a></li>
                 <li><a href="/">popular</a></li>
                 <li><a href="/">trending</a></li>
                 <li><a href="/">categories</a></li>
                </ul>
            </div>
        </nav>
    );
}
