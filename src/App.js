import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookContextProvider from './contexts/BookContext';
import Navbare from './components/Navbare/Navbare';
import BookList from './components/BookComponents/BookList';
import BookForm from './components/BookComponents/BookForm';

function App() {
  return (
    <div className="App">
      <Router>
        <BookContextProvider>
          <Navbare branding="Librery"/>
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
