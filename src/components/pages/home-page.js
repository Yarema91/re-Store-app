import React from "react";
import BookList from "../book-list";


const homePage = () => {
    const books = 
        [
            {
                id: 1,
                title: 'Prodaction services',
                author: 'Susan J. Fowler'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michale T. Nygard'
            }
        ]

    
    return (
      
        <BookList  books={books}/>
    )
}

export default homePage
