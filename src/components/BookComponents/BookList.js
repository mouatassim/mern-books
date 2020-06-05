import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';
import BookDetail from './BookDetail';
import { Button, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';



const BookList = () => {
    const { books } = useContext(BookContext)
    const style = {
        Paper: {
            padding: 20,
            margin: 30

        }
    }
    return (
        <Grid container sm={12}>

            <Grid item sm={2}>

            </Grid>

            <Grid item sm={6}>


                <Paper style={style.Paper}>
                    <Link to="/add-book">
                        <Button renderAs="button" style={style.Paper}>
                            <span></span>
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<AddIcon />}
                        >
                            New Book
                    </Button>
                    </Link>
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