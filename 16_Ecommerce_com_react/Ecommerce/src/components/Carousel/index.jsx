import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import CarouselItem from 'react-bootstrap/CarouselItem'
import styles from './Carouselll.module.css'


function Carousell() {
  return (
    <section>
      <div>
        <Carousel>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="../public/Image/curso1.jpg"
              alt="Primeira imagem"
            />
            <CarouselCaption>
              <h3 className="text-dark fs-4 ">Curso JavaScript</h3>
              <p className="text-dark fs-5 ">Curso voltado para quem esta iniciando, ou quer melhorar suas habilidades.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="../public/Image/curso2.jpg"
              alt="Segunda imagem"
            />
            <CarouselCaption>
              <h3 className="text-dark fs-4">Curso React</h3>
              <p className="text-dark fs-5">Curso voltado para melhorar a sua abordagem no front end.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="../public/Image/curso3.jpg"
              alt="Terceira imagem"
            />
            <CarouselCaption>
              <h3 className="text-dark fs-4">Curso Node.js</h3>
              <p className="text-dark fs-5">Curso voltado para quem deseja ser um desenvolvedor web completo.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="../public/Image/curso4.jpg"
              alt="Quarta imagem"
            />
            <CarouselCaption>
              <h3 className="text-dark fs-4">Curso TypeScript</h3>
              <p className="text-dark fs-5">Voltado para quem deseja aprender outra abordagem no uso do JavaScript.</p>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
}

export default Carousell;
