import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="row container">
            <div className="col-sm-9">
                <div className="row">
                    <div className="col-sm-12">
                        {books.map(book => {
                            return (<BookDetail book={book} key={book.id} />);
                        })}
                    </div>
                </div>
            </div>
        </div>
    ) : (
            <div className="a">No books to read</div>
        )
}

export default BookList;