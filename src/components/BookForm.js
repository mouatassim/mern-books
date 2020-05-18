import React, { useContext , useState } from 'react'
import { BookContext } from '../contexts/BookContext';

function BookForm() {
    const { addBook } = useContext(BookContext)
    const [title , setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addBook(title,author);
        setTitle('');
        setAuthor('');
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Book title"
            onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="text" value={author} placeholder="Book author"
            onChange={(e)=>setAuthor(e.target.value)}></input>
            <input type="submit" value="add book" />
        </form>
            
        
    )
}

export default BookForm
