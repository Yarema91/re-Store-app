import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer >
                {
                    (bookstoreServise) => {
                        return (<Wrapped {...props} bookstoreServise={bookstoreServise} />
                        )
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
}

export default withBookstoreService
