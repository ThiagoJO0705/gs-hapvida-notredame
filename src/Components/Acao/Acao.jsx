import "./Acao.scss";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Acao() {

  if(sessionStorage.getItem("token-user") || localStorage.getItem("token-user")){

    return (
      <section className="acao">
        <div>
          <h1 className="titulo" >O Que Ele Fará ?</h1>
          <div className="container-cards">
            <div className="card">
              <div className="content" >
                <div className="back">
                  <div className="back-content">
                    <TbDeviceHeartMonitor size={100} />
                    <h1>Monitoramento Contínuo</h1>
                    <p>Passe o Mouse Aqui</p>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>
                            Sensores integrados acompanham sinais vitais e
                            atividade física em tempo real, fornecendo dados
                            cruciais para entender a saúde do usuário
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="card abaixar">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                  <IoAlertCircleOutline size={100} />
                    <h1>Alertas Personalizados</h1>
                    <p>Passe o Mouse Aqui</p>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>
                          Algoritmos de machine learning geram alertas personalizados, incentivando hábitos saudáveis com sugestões de movimentação e lembretes de hidratação.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                  <FaRunning size={100} />
                    <h1>IA para Atividade Física</h1>
                    <p>Passe o Mouse Aqui</p>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>
                          Algoritmos de IA analisam dados de atividade física, proporcionando insights e recomendações personalizadas para otimizar o exercício.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="card abaixar">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <MdLocalHospital size={100} />
                    <h1>Assistência em Emergências</h1>
                    <p>Passe o Mouse Aqui</p>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>
                          Acelerômetros e giroscópios detectam quedas e emergências, acionando serviços e notificando contatos designados automaticamente.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <RiMentalHealthFill size={100} />
                    <h1>Integração de Dados de Saúde Mental</h1>
                    <p>Passe o Mouse Aqui</p>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>
                          Sensores de bem-estar emocional capturam dados, oferecendo suporte quando necessário para avaliação do estado mental.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="card abaixar">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <IoGameController size={100} />
                    <h1>Gamificação da Saúde</h1>
                    <p>Passe o Mouse Aqui</p>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong>
                          Desenvolvimento de aplicativos de gamificação utiliza dados do smartwatch para tornar a manutenção da saúde envolvente e divertida.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="acao">
        <div className="container-modal">
          <div>
            <p>Para acessar o restante do conteúdo é necessário fazer:</p>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>

        <div>
          <h1 className="titulo" >O Que Ele Fará ?</h1>
        </div>

      </section>
    );
  }
}
