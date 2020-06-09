import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';
import BookDetail from './BookDetail';
import {  Grid, Paper } from '@material-ui/core';
import AddBook from './AddBook';



const BookList = () => {
    const { books } = useContext(BookContext)
    const style = {
        Paper: {
            padding: 20,
            margin: 30

        }
    }
    return (
        <Grid container item sm={12}>

            <Grid item sm={2}>

            </Grid>

            <Grid item sm={6}>


                <Paper style={style.Paper}>
                
                    <AddBook style={{padding: 20}}/>
                    <div className="row">
                        <div className="col-sm-12">
                            {books.map(book => {
                                return (<BookDetail book={book} key={book.id} />);
                            })}
                        </div>
                    </div>
                </Paper>
            </Grid>

        </Grid>
    )
}

export default BookList;