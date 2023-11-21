import { Link } from 'react-scroll';
import { FaUserCircle } from "react-icons/fa";
import "./Cabecalho.scss"
import { useState } from 'react';
import logo from "../../assets/logo.png"


export default function Cabecalho() {

    const [openLogout, setOpenLogout] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenLogout(!openLogout)
    }

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)

    }

    return(
        <div className='cabecalho'>
            <header>
                <img className='logo' src={logo} alt="Logo HealthTrackr" />

                <nav className='menu'>
                    <ul>
                        <li>
                        <Link to="solucao" smooth={true} duration={0}>Solução</Link>
                        <Link to="acao" smooth={true} duration={0}>Ação</Link>
                        <Link to="funcao" smooth={true} duration={0}>Função</Link>
                        <Link to="vantagem" smooth={true} duration={0}>Vantagens</Link>
                        <Link to="desafio" smooth={true} duration={0}>Desafios</Link>
                        </li>
                    </ul>
                </nav>


                <div className='titulo'>
                    <h1>HealthTrackr</h1>
                </div>

                <label  className="burger" htmlFor="burger">
                    <input onClick={handleClickMenu} type="checkbox" id="burger"/>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>


                <nav className={openMenu ? "menu-aparecendo" : "menu-mobile"}>
                    <ul>
                        <li>
                        <Link to="solucao" smooth={true} duration={0}>Solução</Link>
                        <Link to="acao" smooth={true} duration={0}>Ação</Link>
                        <Link to="funcao" smooth={true} duration={0}>Função</Link>
                        <Link to="vantagem" smooth={true} duration={0}>Vantagens</Link>
                        <Link to="desafio" smooth={true} duration={0}>Desafios</Link>
                        </li>
                    </ul>
                </nav>

                
                <div className='perfil'>
                    <div className='info-usuario'>
                        <p>Nome</p>
                        <FaUserCircle cursor={"pointer"} size={60} onClick={handleClick}/>
                    </div>
                    <div className={openLogout ? "logout" : "logout-fechado"}>
                        <p>Logout</p>
                    </div>
                </div>
            </header>
        </div>
    )
}