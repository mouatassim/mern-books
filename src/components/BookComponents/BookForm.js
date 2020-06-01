import React, { useContext , useState } from 'react'
import { BookContext } from '../../contexts/BookContext';
import { ADD_BOOK_TYPE } from '../../reducers/BookReducer/bookActions'
function BookForm() {
    const { dispatch } = useContext(BookContext)
    const [title , setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type:ADD_BOOK_TYPE , book:{title,author}});
        setTitle('');
        setAuthor('');
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Book title"
            onChange={(e)=>setTitle(e.target.value)}></input><br />
            <input type="text" value={author} placeholder="Book author"
            onChange={(e)=>setAuthor(e.target.value)}></input><br />
            <input type="submit" value="add book" />
        </form>
            
        
    )
}

export default BookForm
