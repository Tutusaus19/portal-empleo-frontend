import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            KAIZEN
          </Typography>
                <Link to="/login"><Button color="inherit" sx={{border:'1px solid #4CB1E3',  backgroundColor:'#4CB1E3'}}>Login</Button></Link>
                <Link to="/register"><Button sx={{ color:'#756464', border: '1px solid #2ebdbb'}}>Register</Button></Link>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}