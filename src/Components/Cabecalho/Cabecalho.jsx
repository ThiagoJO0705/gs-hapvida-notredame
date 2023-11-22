import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import "./Cabecalho.scss"
import { useEffect, useState } from 'react';
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';


export default function Cabecalho() {

    const [openLogout, setOpenLogout] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const navigate = useNavigate()

    const handleClick = () => {
        setOpenLogout(!openLogout)
    }

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu)
    }

    const logoClick = () => {
        navigate("/")
    }




    const [storedData, setStoredData] = useState({
        nome: "",
        email: "",
    })
    
    
    useEffect(() => {
        async function fetchData() {
            const dataFromStorage =
                JSON.parse(sessionStorage.getItem("data-user")) ||
                JSON.parse(localStorage.getItem("data-user"));
    
            console.log("Data from storage:", dataFromStorage);
    
            if (dataFromStorage) {
                setStoredData(dataFromStorage);
            }
        }
    
        fetchData();
    }, []);
    

    const handleClickLogout = ()=> {
        sessionStorage.removeItem("token-user") || localStorage.removeItem("token-user")
        sessionStorage.removeItem("data-user") || localStorage.removeItem("data-user")
        window.location.reload()
    }
    if(sessionStorage.getItem("token-user") || localStorage.getItem("token-user")){

        return(
            <div className='cabecalho'>
                <header>
                        
                    <img className='logo' src={logo} alt="Logo HealthTrackr" onClick={logoClick}/>
    
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
                            <div className='nome-email'>
                                <p className='nome-desk'>{storedData.nome}</p>
                                <p className='email-desk'>{storedData.email}</p>
                            </div>
                            <FaUserCircle cursor={"pointer"} size={60} onClick={handleClick}/>
                        </div>
                        <div className={openLogout ? "logout" : "logout-fechado"}>
                            <p onClick={handleClickLogout} className='btn-logout'>Logout</p>
                            <p className='nome-logout'>{storedData.nome}</p>
                            <p className='email-logout'>{storedData.email}</p>
                        </div>
                    </div>
                </header>
            </div>
        )
    } else {
        return (
            <div className='cabecalho'>
            <header>
                    
                <img className='logo' src={logo} alt="Logo HealthTrackr" onClick={logoClick}/>

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

                <div className='container-btn'>
                    <LinkRouter to="/login">
                        <button className="btn">Login</button>
                    </LinkRouter>
                </div>
                

            </header>
        </div>
        )
    }
}