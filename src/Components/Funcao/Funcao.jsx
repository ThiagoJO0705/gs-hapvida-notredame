import "./Funcao.scss"


export default function Funcao() {



    return(
        <section id="funcao" className="funcao">
            <div className="container-funcao">
                <h1>Como Funcionará:</h1>
                <p>A solução funcionará através da integração harmoniosa entre o smartwatch, aplicativos associados e serviços de saúde. O smartwatch coleta dados em tempo real por meio de seus sensores, os quais são processados por algoritmos avançados. Essas informações são então utilizadas para gerar alertas personalizados, insights de saúde e, quando necessário, acionar serviços de emergência. A plataforma também promove a interação entre usuários e profissionais de saúde, facilitando o telemonitoramento pós-consulta.</p>
            </div>

            <div className="loading">
                <svg width="64px" height="48px">
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                </svg>
            </div>
        </section>
    )
}