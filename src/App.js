import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookComponents/BookList';
import Header from './Layout/Header'
import { Grid } from '@material-ui/core';
import MenuLeftSide from './Layout/MenuLeftSide';
import Profil from './components/Profil/Profil';
import WriterList from './components/Writers/WriterList';

function App() {
  return (
    <div className="App">


      <Router>
        < Header />

        <Grid container item sm={12}>

          <Grid item sm={3}>
            <MenuLeftSide  height="100%"/>
          </Grid>
          <Grid item sm={9}>
            <BookContextProvider>

              <Switch>
                <Route exact path='/' component={BookList} />
                <Route exact path='/profil' component={Profil} />
                <Route exact path='/writers' component={WriterList} />
              </Switch>
            </BookContextProvider>

          </Grid>

        </Grid>
      </Router>
    </div>
  );
}

export default App;
