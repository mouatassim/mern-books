import React,{createContext,useState} from 'react'


export const BookContex = createContext()

const BookContextProvider = (props) => {
    const [books,setBooks]= useState([
        {title : "Nos etoiles contraire",author:"john green" ,id:1}
    ]
    );

    const addBook = (title,author) =>{
        setBooks(...books,{title,author,id:Date.now()})
    }
    const  removeBook = (id) =>{
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <BookContex.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContex.Provider>
    )
}

export default BookContextProvider
