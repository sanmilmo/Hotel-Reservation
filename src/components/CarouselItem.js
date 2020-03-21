import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


// export default function CarouselItem(props) {
//     console.log(props.images)
// //     const carouselImages = props.images.map(carouselData => {
// //         return (
// //             <hr/>
// //             // <img
// //             //     className="d-block w-100"
// //             //     src={carouselData}
// //             //     alt="First slide"
// //             // />
// //         // <SingleCard key={SingleCardData.id} image={SingleCardData.image} title={SingleCardData.title} text={SingleCardData.text} />
// //         );
// //     }
// // )
//     return ( 
//         <hr />
//         // <Carousel.Item>
            
//         //     {carouselImages}
//         //     <Carousel.Caption>
//         //         <h3>{props.title}</h3>
//         //         <p>{props.subTitle}</p>
//         //         <Button variant="info">BOOK IT</Button>
//         //     </Carousel.Caption>
//         // </Carousel.Item>
//     )
// }


export default function CarouselItem(props) {
    // const carouselImages = 
console.log(props)
return props.images.map(image => {
    console.log(image)
    return (
        <Carousel.Item>
            <img
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