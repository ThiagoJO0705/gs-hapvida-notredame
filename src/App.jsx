
import { Outlet } from 'react-router-dom'
import './App.scss'
import Cabecalho from "./Components/Cabecalho/Cabecalho.jsx"


function App() {
  return (
    <>
      <div className='container-grid'>        
        <Cabecalho />
        <Outlet/>
      </div> 
    </>
  )
}

export default App
