import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carouselll.module.css'


function Carousell() {
  return (
    <section>
      <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../public/Image/curso1.jpg"
                alt="Primeira imagem"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../public/Image/curso2.jpg"
                alt="Segunda imagem"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../public/Image/curso3.jpg"
                alt="Terceira imagem"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../public/Image/curso4.jpg"
                alt="Quarta imagem"
              />
            </Carousel.Item>
          </Carousel>
        </div>
    </section>
  );
}

export default Carousell;
