import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';
import { REMOVE_BOOK_TYPE } from '../../reducers/BookReducer/bookActions';
import cover from '../../temp/the-fault-in-our-stars.png';
import Remove from '../Dialogs/Remove';
import EditBook from './EditBook';






const BookDetail = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    return (

        <div className="list-group-item clearfix" >
            <div className="float-left">
                <h4 className="list-group-item-heading">{book.title}</h4>
                <p className="list-group-item-text">{book.author}</p>
            </div>
            <div className="float-right">
                <div className="row">
                    <div className="col-sm-12">
                        <img src={cover} alt="" className="img-responsive" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <Remove removeItem={() => dispatch({ type: REMOVE_BOOK_TYPE, id: book.id })} title ={'Delte Book'} desciption = {'Do you really wnat to delete the book'} />
                    </div>
                    <div className="col-sm-4">
                        <EditBook  book={book} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BookDetail
