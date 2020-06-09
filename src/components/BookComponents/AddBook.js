
import React, { useContext ,Fragment, useState } from 'react'
import { BookContext } from '../../contexts/BookContext';
import { ADD_BOOK_TYPE } from '../../reducers/BookReducer/bookActions'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddBook = () => {

    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_BOOK_TYPE, book: { title, author } });
        setTitle('');
        setAuthor('');
        setOpen(false);
    }

        return (
            <Fragment>
              
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<AddIcon />}
                            onClick={handleClickOpen}
                        >
                            New Book
                    </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle color="secondary" id="alert-dialog-title"><AddIcon />{'Add Book'}</DialogTitle>
                    <DialogContent>
                        <form>
                            <input type="text" value={title} placeholder="Book title"
                                onChange={(e) => setTitle(e.target.value)}></input><br />
                            <input type="text" value={author} placeholder="Book author"
                                onChange={(e) => setAuthor(e.target.value)}></input><br />
                            
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Disagree
          </Button>
                        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleSubmit}>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>

            </Fragment>
        )
    }

    export default AddBook
