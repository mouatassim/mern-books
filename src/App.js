import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookComponents/BookList';
import BookForm from './components/BookComponents/BookForm';
import  Header from './Layout/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <BookContextProvider>
          < Header />
          <Switch>
            <Route exact path='/' component= { BookList  } />
            <Route exact path='/add-book' component={ BookForm } />
          </Switch>
        </BookContextProvider>
      </Router>
    </div>
  );
}

export default App;
