import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//BLOCO DAS ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Erro404 from './Routes/Erro404.jsx';
import Login from "./Routes/Login.jsx/Login.jsx"
import Conteudo from "./Routes/Conteudo/Conteudo.jsx"


//BLOCO DAS ROTAS
const router = createBrowserRouter([
  {path:"/",element: <App/>,errorElement:<Erro404/>,
   children:[
    {path:"/login", element:<Login />},
    {path:"/", element:<Conteudo />}
   ]
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
