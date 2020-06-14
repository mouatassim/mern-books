import React,{createContext,useReducer} from 'react'
import { bookReducer } from '../reducers/BookReducer/bookReducer';


export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books,dispatch]= useReducer(bookReducer,[{
        id: 0,
        title: "the fault in our stars",
        author: "Jhon Green"
    }]);


    return (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
