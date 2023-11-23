import 'bootstrap/dist/css/bootstrap.min.css';
import "./Conteudo.scss"
import Carrossel from "../../Components/Carrossel/Carrossel.jsx"
import Solucao from "../../Components/Solucao/Solucao.jsx"
import Acao from "../../Components/Acao/Acao.jsx"
import Funcao from "../../Components/Funcao/Funcao.jsx"
import Vantagem from '../../Components/Vantagem/Vantagem.jsx';
import Desafio from '../../Components/Desafio/Desafio.jsx';

export default function Conteudo() {

  if(sessionStorage.getItem("token-user") || localStorage.getItem("token-user")){
    return (
      <>
          <Carrossel />
          <Solucao />
          <Acao />
          <Funcao />
          <Vantagem />
          <Desafio />
   
      </>
  
    );
  } else {
    return (
      <>
          <Carrossel />
          <Solucao />
          <Acao />
   
      </>
  
    );
  }
}

