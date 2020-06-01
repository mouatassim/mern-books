import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';
import { REMOVE_BOOK_TYPE } from '../../reducers/BookReducer/bookActions';
import cover from '../../temp/the-fault-in-our-stars.png'

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
                    <div classNaùe="col-sm-12">
                        <img src={cover} alt="" className="img-responsive" />
                    </div>

                </div>
                <div className="row">
                    <div classNaùe="col-sm-4">
                        <button className="btn btn-danger" onClick={() => dispatch({ type: REMOVE_BOOK_TYPE, id: book.id })}>Delete</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default BookDetail
