const loggedReducer = (state = {sign_in: false, username: ""}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            state.username= action.payload;
            state.sign_in= true;
            return state;
        case 'SIGN_OUT':
            state.username= "";
            state.sign_in= false;
            return state;
    default:
        return state;
    }
}

export default loggedReducer