import 'bootstrap/dist/css/bootstrap.min.css';
import "./Conteudo.scss"
import Carrossel from "../../Components/Carrossel/Carrossel.jsx"
import Solucao from "../../Components/Solucao/Solucao.jsx"
import Acao from "../../Components/Acao/Acao.jsx"
import Funcao from "../../Components/Funcao/Funcao.jsx"
import Vantagem from '../../Components/Vantagem/Vantagem.jsx';

function Conteudo() {


  return (
    <>
        <Carrossel />
        <Solucao />
        <Acao />
        <Funcao />
        <Vantagem />
 
    </>

  );
}

export default Conteudo;
