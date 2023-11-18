import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagemCarrosel1 from '../../assets/smartwatch-1.png';
import ImagemCarrosel2 from '../../assets/smartwatch-2.png';
import ImagemCarrosel3 from '../../assets/smartwatch-3.png';
import ImagemFundo from '../../assets/cool-background.svg';
import "./Conteudo.scss"

function Conteudo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
        <main>
            <Carousel className='carrossel' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className='imagem-carrossel' src={ImagemCarrosel1} alt="First slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imagem-carrossel' src={ImagemCarrosel3} alt="Second slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='imagem-carrossel' src={ImagemCarrosel2} alt="Third slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </main>

        <section className='solucao'>
            <div className='container-solucao'>
                <div className='texto-solucao'>
                    <h1>HealthTrackr</h1>
                    <p>A nossa solução é uma plataforma de saúde digital integrada, centrada em um smartwatch e seus aplicativos associados. Este dispositivo inovador utiliza tecnologias avançadas para oferecer um monitoramento contínuo da saúde, proporcionando uma abordagem proativa para a prevenção de doenças e promoção do bem-estar. Com sensores específicos e algoritmos sofisticados, a solução visa revolucionar a maneira como as pessoas cuidam da sua saúde, oferecendo informações precisas e personalizadas em tempo real.</p>
                </div>
                <img src={ImagemFundo} alt="Imagem de fundo" />
            </div>
        </section>
    </>

  );
}

export default Conteudo;
