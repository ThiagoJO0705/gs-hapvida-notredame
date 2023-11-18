
import { Outlet } from 'react-router-dom'
import './App.css'
import Cabecalho from "./Components/Cabecalho/Cabecalho.jsx"


function App() {
  return (
    <>
        
        <Cabecalho />
        <Outlet/>
    </>
  )
}

export default App
