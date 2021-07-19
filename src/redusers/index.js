const initualState = {
    book: []
};

const reduser = (state = initualState, action) => {
    switch (action.type) {
        case 'BOOK_LOADED' :
            return {
                book: action.payload
            }
    default:
        return state;
    } 
};

export default reduser;

