
import React, { useContext, Fragment, useState } from 'react'
import { BookContext } from '../../contexts/BookContext';
import { EDIT_BOOK_TYPE } from '../../reducers/BookReducer/bookActions'
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditBook = ({book}) => {

    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: EDIT_BOOK_TYPE, book: { id:book.id ,title, author } });
        setOpen(false);
    }

    return (
        <Fragment>

            <Button
                variant="contained"
                onClick={handleClickOpen}>
                <EditIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle color="secondary" id="alert-dialog-title">
                    <EditIcon />{'Edit Book'}
                </DialogTitle>
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
                    <Button variant="contained" startIcon={<EditIcon />} onClick={handleSubmit}>
                        Edit
                        </Button>
                </DialogActions>
            </Dialog>

        </Fragment>
    )
}

export default EditBook
