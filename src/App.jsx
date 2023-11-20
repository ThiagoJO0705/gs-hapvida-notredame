
import { Outlet } from 'react-router-dom'
import './App.scss'
import Cabecalho from "./Components/Cabecalho/Cabecalho.jsx"
import Rodape from './Components/Rodape/Rodape.jsx'


function App() {
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
