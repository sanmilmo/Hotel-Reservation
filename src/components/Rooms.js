import React from 'react';
import roomsData from '../data/roomsData';
import CarouselItem from './CarouselItem';
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'


export default function Rooms() {
    const carousel = roomsData.map(carouselData => {
        return (
            <CarouselItem key={carouselData.id} title={carouselData.title} images={carouselData.images} />
        )}
        
        )

    return (
        // <hr /><div


        <Carousel>
            {carousel}
        </Carousel>
    )
}

