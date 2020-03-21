import React from 'react';
import SingleCard from './SingleCard';
import cardData from '../data/cardData.js';
import CardDeck from 'react-bootstrap/CardDeck';

export default function CardRooms() {
    const CardRows = cardData.map(RowData => {
        const CardRowsData = RowData.map(SingleCardData => {
            return (
            <SingleCard key={SingleCardData.id} image={SingleCardData.image} title={SingleCardData.title} text={SingleCardData.text} />
            );
        });
        return ( 
        <div>
            <hr/>
        <CardDeck>
            {CardRowsData}
        </CardDeck>
        </div>
        );
    });
    return (<div>
        {CardRows}
    </div>);
}
