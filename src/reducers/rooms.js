const roomsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ROOM':
            return state.concat(action.payload);
        case 'RESET_TABLE':
            return [];
        default:
            return state
    }
}

export default roomsReducer