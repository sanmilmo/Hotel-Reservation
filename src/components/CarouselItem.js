import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import CarouselItem from './CarouselItem';


export default function CarouselItem(props) {
return props.images.map(image => {
    return (
        <Carousel.Item>
            <img
                key={props.id}
                 className="d-block w-100"
                 src={image}
                 alt="First slide"
             />
       
            <Carousel.Caption>
                <h3>props.title</h3>
                <p>props.subTitle</p>
                <Button variant="info">BOOK IT</Button>
            </Carousel.Caption>
        </Carousel.Item>
   )
})
    
}