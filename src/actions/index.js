export const add_date = (day) => {
    return {
        type: 'ADD_DATE',
        payload: day
    }
}

export const reset_calendar = (day) => {
    return {
        type: 'RESET_CALENDAR',
        payload: day
    }
}

export const adult = (number) => {
    return {
        type: 'ADULT',
        payload: number
    }
}

export const children = (number) => {
    return {
        type: 'CHILDREN',
        payload: number
    }
}

export const reset_table = () => {
    return {
        type: 'RESET_TABLE'
    }
}

export const add_room = (room) => {
    return {
        type: 'ADD_ROOM',
        payload: room
    }
}