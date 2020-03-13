import React from 'react'


export default function SingleCard(props) {
    console.log(props)
    return (
        <div>
            <div>
                <img variant="top" src={props.image} alt=""/>
            </div>
             <div>
             <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
