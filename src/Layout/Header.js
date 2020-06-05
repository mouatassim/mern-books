import React from 'react';
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'



const Header = props => {


  return (
    <AppBar position="static" >
      <Toolbar>

        <Typography variant="h6" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" component={Link} >
          Librery
        </Typography>

      </Toolbar>
    </AppBar>
  )
}

export default Header;

