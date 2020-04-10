const roomsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ROOM':
            let rows = state
            rows.push(action.payload)
            return rows;
        case 'RESET_TABLE':
            return {};
        default:
            return state
    }
}

export default roomsReducer