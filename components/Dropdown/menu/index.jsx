import { useState } from "react"
import "./styles.css"

import {BsChevronCompactDown} from 'react-icons/bs'; 
import {BsChevronCompactUp} from "react-icons/bs" 
import { Calendar, MenuIcon, Planning, Reminders, Todo } from "../icons/icons";


export const Menu = () =>{
    const [features,setFeatures] = useState(false);
    const [campany,setCampany] = useState(false);
    const [openClose, setOpenClose] = useState(false);
    const [featuresM,setFeaturesM] = useState(false);
    const [campanyM,setCampanyM] = useState(false);

    const handleClick = (e) =>{
        if(!features){
            document.getElementById('2').classList.remove('ativo');
            setCampany(false)
            setFeatures(!features)
            document.getElementById('ul1').classList.add('ativo');
            
        }
        else{
            setFeatures(!features)
            document.getElementById('ul1').classList.remove('ativo');
            
        }
    }
    const handleClick2 = () =>{
        if(!campany){
            document.getElementById('ul1').classList.remove('ativo');
            setFeatures(false)
            setCampany(!campany)
            document.getElementById('2').classList.add('ativo');
           
        }
        else{
            setCampany(!campany)
            document.getElementById('2').classList.remove('ativo');
            
        }
    }
    const openCloseMenu = () =>{
        console.log('teste');
        if (!openClose){
            document.getElementById('3').classList.add('ativo')
            document.getElementById('3').classList.remove('menuMobile')
            setOpenClose(!openClose)
        }
        else{
            document.getElementById('3').classList.add('menuMobile')
            document.getElementById('3').classList.remove('ativo')
            setOpenClose(!openClose)
        }
    }

    const handleMenuF = () =>{
        if(!featuresM){
        document.getElementById('5').classList.add('ulativo');
        document.getElementById('5').classList.remove('menudbM');
            setFeaturesM(!featuresM);
        }
        else{
            document.getElementById('5').classList.add('menudbM');
            document.getElementById('5').classList.remove('ulativo');
                setFeaturesM(!featuresM);
        }
    }

    const handleMenuC = () =>{
        if(!campanyM){
        document.getElementById('6').classList.add('ulativo');
        document.getElementById('6').classList.remove('menudbM');
            setCampanyM(!campanyM);
        }
        else{
            document.getElementById('6').classList.add('menudbM');
            document.getElementById('6').classList.remove('ulativo');
                setCampanyM(!campanyM);
        }
    }

    return(
        <div className="menuContainer">
            <div className="m1">
                <p className="title">snap</p>
                <nav className="menu">
                <ul className="list">
                    <li id="menu1" onClick={()=>handleClick()}>Features <i>{features ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}</i>
                    <ul id="ul1" className="menudb">
                        <div className="menuIcons">
                            <Todo/>
                            <Calendar/>
                            <Reminders/>
                            <Planning/>
                        </div>
                        <div className="menutext">
                            <li><a href="/"> todo list</a></li>
                            <li><a href="/"> calendar</a></li>
                            <li><a href="/"> reminders</a></li>
                            <li><a href="/"> planning</a></li>
                        </div>
                    </ul></li>
                    <li className="menu2" onClick={()=> handleClick2()}>Campany <i>{campany ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}</i>
                    <ul className="menudb" id="2">
                        <li><a href="/">history</a></li>
                        <li><a href="/">our team</a></li>
                        <li><a href="/">blog</a></li>
                    </ul> </li>
                    <a href="/">careers</a>
                    <a href="/">about</a>
                </ul>
                </nav>
            </div>
            <div className="login">
            <button className="btnM" id="login">Login</button>
            <button className="btnM">Register</button>
            </div>
            <div className="menuResposivo" >
                <div className="iconMenu" onClick={()=>openCloseMenu()}>
                    <MenuIcon/>
                </div>
                <nav className="menuMobile" id="3">
                    <ul className="menuContent">
                    <li id="menu1" onClick={()=>handleMenuF()}>Features <i>{featuresM ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}</i>
                        <ul id="5" className="menudbM">
                            <li><a href="/">todo list</a></li>
                            <li><a href="/">calendar</a></li>
                            <li><a href="/">reminders</a></li>
                            <li><a href="/">planning</a></li>
                        </ul> 
                    </li>

                    <li className="menu2" onClick={()=> handleMenuC()}>Campany <i>{campanyM ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}</i>
                      <ul id="6" className="menudbM" >
                        <li><a href="/">history</a></li>
                        <li><a href="/">our team</a></li>
                        <li><a href="/">blog</a></li>
                         </ul> </li>

                         <a href="/">careers</a>
                        <a href="/">about</a>
                    </ul>
                </nav>
            </div>
        </div>
    )
}