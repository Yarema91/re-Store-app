import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';


const BookList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    )
                })
            }
        </ul>
    );
}
//Conteiner зєднує логіку loading, error компоненти і рендер
class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
        // const {
        //   bookstoreService,
        //   booksLoaded,
        //   booksRequested,
        //   booksError } = this.props;

        // booksRequested();
        // bookstoreService.getBooks()
        //   .then((data) => booksLoaded(data))
        //   .catch((err) => booksError(err));
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }  
        return <BookList books={books} />;
    }
}


const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
    //   booksLoaded,
    //   booksRequested,
    //   booksError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
