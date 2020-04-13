import roomsReducer from './rooms'
import loggedReducer from './isLogged'
import calendarReducer from './calendar'
import peopleReducer from './people'
import {combinedReducers, combineReducers} from 'redux'

const allReducers = combineReducers({
    rooms: roomsReducer,
    isLogged: loggedReducer,
    calendar: calendarReducer,
    people: peopleReducer
})

export default allReducers