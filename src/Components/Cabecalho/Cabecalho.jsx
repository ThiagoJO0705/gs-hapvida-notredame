import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import "./Cabecalho.scss"
import { useState } from 'react';


export default function Cabecalho() {

    const [openLogout, setOpenLogout] = useState(false)

    const handleClick = () => {
        setOpenLogout(!openLogout)
    }

    return(
        <div className='cabecalho'>
            <header>
                <img src="" alt="" />
                <nav>
                    <ul>
                        <li>
                        <Link to="#solucao">Solução</Link>
                        <Link to="#funcao">Função</Link>
                        <Link to="#">Função</Link>
                        <Link to="#funcao">Função</Link>
                        </li>
                    </ul>
                </nav>
                <div className='perfil'>
                    <div className='info-usuario'>
                        <p>Nome</p>
                        <FaUserCircle cursor={"pointer"} size={60} onClick={handleClick}/>
                    </div>
                    <div className={`logout ${openLogout ? "logout-aberto" : "logout-fechado"}`}>
                        <p>Logout</p>
                    </div>
                </div>
            </header>
        </div>
    )
}