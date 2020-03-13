import React from 'react'
import SingleCard from './SingleCard';
import cardData from '../data/cardData.js';


export default function CardDeck() {
    


    const SingleCards = cardData.map(data => {
        return (<SingleCard className="" key={data.id} image={data.image} title={data.title} text={data.text} />)
        }  
    );
    
    return (
        <div>
            {SingleCards}
        </div>
    )
}
