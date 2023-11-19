import { Link as ScrollLink } from 'react-scroll';
import { FaUserCircle } from "react-icons/fa";
import "./Cabecalho.scss"
import { useState } from 'react';
import logo from "../../assets/logo.png"


export default function Cabecalho() {

    const [openLogout, setOpenLogout] = useState(false)

    const handleClick = () => {
        setOpenLogout(!openLogout)
    }

    return(
        <div className='cabecalho'>
            <header>
                <img className='logo' src={logo} alt="Logo HealthTrackr" />
                <nav>
                    <ul>
                        <li>
                        <ScrollLink to="solucao" smooth={true} duration={0}>Solução</ScrollLink>
                        <ScrollLink to="acao" smooth={true} duration={0}>Ação</ScrollLink>
                        <ScrollLink to="funcao" smooth={true} duration={0}>Função</ScrollLink>
                        <ScrollLink to="vantagem" smooth={true} duration={0}>Vantagens</ScrollLink>
                        <ScrollLink to="desafio" smooth={true} duration={0}>Desafios</ScrollLink>
                        </li>
                    </ul>
                </nav>
                <div className='titulo'>
                    <h1>HealthTrackr</h1>
                </div>
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