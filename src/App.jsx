
import { Outlet, useLocation } from 'react-router-dom'
import './Styles/main.scss'
import Cabecalho from "./Components/Cabecalho/Cabecalho.jsx"
import Rodape from './Components/Rodape/Rodape.jsx'


function App() {
  document.title = "HealthTrackr"


  const location = useLocation();
  const { pathname } = location;


  if (pathname === '/login') {
    return (
      <>
        <div className='container-grid'>        
          <Cabecalho />
          <Outlet/>
        </div> 
      </>
    )
  } else if (pathname === '/cadastro') {
    return (
      <>
        <div className='container-grid'>        
          <Cabecalho />
          <Outlet/>
        </div> 
      </>
    )
  } else if (sessionStorage.getItem("token-user") || localStorage.getItem("token-user")){
    return (
      <>
        <div className='container-grid'>        
          <Cabecalho />
          <Outlet/>
          <Rodape />
        </div> 
      </>
    )
  } else {
    return (
      <>
        <div className='container-grid'>        
          <Cabecalho />
          <Outlet/>
        </div> 
      </>
    )
  }
  }

export default App
