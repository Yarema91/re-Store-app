const bookLoaded = () => {
    return{
        type: 'BOOK_LOADED',
        payload: newBooks
    }
}

export {
    bookLoaded
};