import "./Vantagem.scss"
import { BsHeartPulseFill } from "react-icons/bs";
import { MdOutlineSendToMobile } from "react-icons/md";
import { GiFalling } from "react-icons/gi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoPulseSharp } from "react-icons/io5";

export default function Vantagem() {



    return(
        <>
           <section className="vantagem" id="vantagem">
                <div>
                    <div className="titulo">
                        <h1>Vantagens</h1>
                    </div>


                    <div className="container-cards-vantagem">
                        <div className="e-card playing">
                            <div className="image"></div>
                        
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        

                            <div className="infotop">

                                <IoPulseSharp size={90}  className="icon"/>
      
                                <h2>Monitoramento Contínuo</h2>
                        
                                <div className="name">Acesso em tempo real aos dados vitais, permitindo detecção precoce de problemas de saúde.</div>
                            </div>
                        </div>
                    


                        <div className="e-card playing">
                            <div className="image"></div>
                        
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        

                            <div className="infotop">

                                <HiMiniBellAlert size={90}  className="icon"/>
      
                                <h2>Alertas Personalizados</h2>
                        
                                <div className="name">Algoritmos adaptáveis geram alertas direcionados, incentivando ações preventivas específicas.</div>
                            </div>
                        </div>


                    
                        <div className="e-card playing">
                            <div className="image"></div>
                        
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        

                            <div className="infotop">

                                <BsHeartPulseFill size={90}  className="icon"/>
      
                                <h2>Eletrocardiograma Móvel</h2>
                        
                                <div className="name">Realização de exames cardíacos móveis para diagnóstico antecipado de problemas cardíacos.</div>
                            </div>
                        </div>
                    


                
                        <div className="e-card playing">
                            <div className="image"></div>
                        
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        

                            <div className="infotop">

                                <GiFalling size={90}  className="icon"/>
      
                                <h2>Assistência em Emergências</h2>
                        
                                <div className="name">Detecção automática de quedas e eventos de emergência, acionando ajuda imediata.</div>
                            </div>
                        </div>
               




                   
                        <div className="e-card playing">
                            <div className="image"></div>
                        
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        

                            <div className="infotop">

                                <MdOutlineSendToMobile size={90}  className="icon"/>
      
                                <h2>Telemonitoramento Pós-Consulta</h2>
                        
                                <div className="name">Envio automático de dados para profissionais de saúde, facilitando ajustes rápidos nos planos de tratamento.</div>
                            </div>
                        </div>
                    </div>
                  



                </div>
           </section>
        </>
    )
}