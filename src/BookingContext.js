import React, { useState, createContext } from 'react'

export const BookingContext = createContext()

export const BookingProvider = props => {
    const [rooms, setRooms] = useState({
            selection: { 
            from: "",
            to: "",
            adults: 0,
            children: 0
            },
            rooms:[],
            price: ""
    })

    return (
        <BookingContext.Provider  value={[rooms, setRooms]}>
            {props.children}
        </BookingContext.Provider>

    )
}