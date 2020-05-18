import React,{createContext,useState} from 'react'


export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books,setBooks]= useState([
        
    ]
    );

    const addBook = (title,author) =>{
        setBooks([...books,{title,author,id:Date.now()} ])
    }
    const  removeBook = (id) =>{
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
