import React from 'react'
import { Paper, MenuItem, MenuList } from '@material-ui/core';
import { Link,withRouter } from 'react-router-dom';

const style = {
  Paper: {
    padding: 20,
    margin: 10,
    height: '90vh',
  
  }
}

function MenuLeftSide({location}) {
 
  return (
    <div>
      <Paper style={style.Paper} >
        <MenuList>
          <MenuItem component={Link} to='/' selected={'/' === location.pathname}>Books</MenuItem>
          <MenuItem component={Link} to='/profil' selected={'/profil' === location.pathname}>My account</MenuItem>
          <MenuItem component={Link} to='/writers' selected={'/writers' === location.pathname}>Logout</MenuItem>
        </MenuList>
      </Paper>
    </div>
  )
}

export default withRouter(MenuLeftSide)
