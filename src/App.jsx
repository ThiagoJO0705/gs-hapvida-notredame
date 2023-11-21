
import { Outlet } from 'react-router-dom'
import './Styles/main.scss'
import Cabecalho from "./Components/Cabecalho/Cabecalho.jsx"
import Rodape from './Components/Rodape/Rodape.jsx'


function App() {
  document.title = "HealthTrackr"

  return (
    <>
      <div className='container-grid'>        
        <Cabecalho />
        <Outlet/>
        <Rodape />
      </div> 
    </>
  )
}

export default App
