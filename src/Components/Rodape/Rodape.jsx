import { Link } from 'react-scroll';
import "./Rodape.scss";


export default function Rodape() {
  return (
    <>
      <footer>
        <div className="container-rodape">
          <div className="informacoes-contato">
            <h3>Contato</h3>
            <p>Nikolas Rodrigues Moura dos Santos - RM551566 </p>
            <p>rm551566@fiap.com.br</p>
            <p>Thiago Jardim De Oliveira - RM551624</p>
            <p>rm551624@fiap.com.br</p>
          </div>

          <div className="links-importantes">
            <h3>Links</h3>
            <ul>
                <li><Link to="solucao" smooth={true} duration={0}>Solução</Link></li>
                <li><Link to="acao" smooth={true} duration={0}>Ação</Link></li>
                <li><Link to="funcao" smooth={true} duration={0}>Função</Link></li>
                <li><Link to="#">Termos de Privacidade</Link></li>
                <li><Link to="#">Termos de Uso</Link></li>
            </ul>
            
            
            
            
          </div>

          <div className='faq'>
            <h3>FAQ</h3>
            <p>Como posso devolver ou trocar um produto?</p>
            <p>Como posso entrar em contato com o suporte?</p>
            <p>Posso acessar o site em dispositivos móveis?</p>
            <p>Como faço para acompanhar o status do meu pedido?</p>
          </div>

          <div className="direitos-autorais">
            <p>
              &copy; {new Date().getFullYear()} HealthTrackr. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
