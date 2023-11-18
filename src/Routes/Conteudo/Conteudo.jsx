import Carrossel from "../../Components/Carrossel/Carrossel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Conteudo.scss"

function Conteudo() {


  return (
    <>
        <Carrossel />

        <section id='solucao' className='solucao'>
            <div className='container-solucao'>
                <div className='texto-solucao'>
                    <h1>HealthTrackr</h1>
                    <p>A nossa solução é uma plataforma de saúde digital integrada, centrada em um smartwatch e seus aplicativos associados. Este dispositivo inovador utiliza tecnologias avançadas para oferecer um monitoramento contínuo da saúde, proporcionando uma abordagem proativa para a prevenção de doenças e promoção do bem-estar. Com sensores específicos e algoritmos sofisticados, a solução visa revolucionar a maneira como as pessoas cuidam da sua saúde, oferecendo informações precisas e personalizadas em tempo real.</p>
                </div>
            </div>
        </section>

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
