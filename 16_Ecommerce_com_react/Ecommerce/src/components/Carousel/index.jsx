import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import styles from './Carousel.module.css'

import img1 from '../Image/curso1.jpg'
import img2 from '../Image/curso2.jpg'
import img3 from '../Image/curso3.jpg'

function Carousell() {
  return (
    <div>
        <style type='text/css'>
            {`
                .Carousel-Caption, h3, p {
                    color: black;
                }
                .Carousel.Item, img {
                    width: 100%;
                }
            `}
        </style>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src={img2}
                    alt="primeiro curso"
                    className="d-block w-100"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src={img3} 
                    alt="primeiro curso"
                    className="d-block w-100"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Carousell;
