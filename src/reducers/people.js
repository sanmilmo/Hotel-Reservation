const peopleReducer = (state = {"adults": 1, "children": 0}, action) => {
    switch (action.type) {
        case 'ADULT':
            state.adults = action.payload;
            return state;
        case 'CHILDREN':
            state.children = action.payload;
            return state;
        case 'RESET_PEOPLE':
            return {"adults": 1, "children": 0};
    default:
        return state;
    }
}

export default peopleReducer