import React,{useContext} from 'react'
import { BookContex } from '../contexts/BookContext';

const NavBar = () => {
  const { books } =  useContext(BookContex)
    return (
        <div className="navbar">
      <h1>My Books</h1>
      <p>Currently you have {books.length} book  </p>
      </div>

    )
}

export default NavBar
