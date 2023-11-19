import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carrossel.scss"
import ImagemCarrosel1 from '../../assets/smartwatch-1.png';
import ImagemCarrosel2 from '../../assets/smartwatch-2.png';
import ImagemCarrosel3 from '../../assets/smartwatch-3.png';

export default function Carrossel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <>
        <main>
            <Carousel className='carrossel' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={3000}>
                <img className='imagem-carrossel' src={ImagemCarrosel1} alt="First slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className='imagem-carrossel' src={ImagemCarrosel3} alt="Second slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className='imagem-carrossel' src={ImagemCarrosel2} alt="Third slide" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </main>
      </>
    )
}