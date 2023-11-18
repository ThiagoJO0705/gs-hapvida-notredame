import Carrossel from "../../Components/Carrossel/Carrossel.jsx"
import Solucao from "../../Components/Solucao/Solucao.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Conteudo.scss"

function Conteudo() {


  return (
    <>
        <Carrossel />
        <Solucao />
        {/* <section className='acao'>
            <div>
                    <h1>O Que Ele Fará ?</h1>
                <div>
    <div className="card">
    <div className="content">
        <div className="back">
        <div className="back-content">
        
            imagem
        
            <h3>Monitoramento Contínuo</h3>
            <strong>Hover Me</strong>
        </div>
        </div>
        <div className="front">
      
        <div className="img">
            <div className="circle">
            </div>
            <div className="circle" id="right">
            </div>
            <div className="circle" id="bottom">
            </div>
        </div>

        <div className="front-content">
            <div className="description">
            <div className="title">
                <p className="title">
                <strong>Sensores integrados acompanham sinais vitais e atividade física em tempo real, fornecendo dados cruciais para entender a saúde do usuário</strong>
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
                </div>
            </div>
        </section> */}
    </>

  );
}

export default Conteudo;
