import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReduce';
import { addToken } from '../../../store/tokens/Action';

function Navbar() {
  const token = useSelector<TokenState,TokenState["tokens"]>((state)=> state.tokens);
  const dispatch = useDispatch();
   let history = useNavigate();
 
   function goLogout() {
 dispatch(addToken(''));
     alert("Usuário deslogado");
     history("/login");
   }
 
   var navbarComponent;
   if (token !== ""){
    navbarComponent = <AppBar position="static">
    <Toolbar variant="dense">
      <Box style={{ cursor: "pointer" }} >
        <Typography variant="h5" color="inherit">
          Serra da Capivara
        </Typography>
      </Box>

      <Box display="flex" justifyContent="start">
        <Box mx={1} style={{ cursor: "pointer" }}>
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
        </Box>
        <Box mx={1} style={{ cursor: "pointer" }}>
          <Typography variant="h6" color="inherit">
            Produtos
          </Typography>
        </Box>
        <Box mx={1} style={{ cursor: "pointer" }}>
          <Typography variant="h6" color="inherit">
            Cadastrar Produtos
          </Typography>
        </Box>
        <Box mx={1} style={{ cursor: "pointer" }}>
          <Typography variant="h6" color="inherit">
            Categorias
          </Typography>
        </Box>
        <Box mx={1} style={{ cursor: "pointer" }}>
          <Typography variant="h6" color="inherit">
            Cadastrar Categoria
          </Typography>
        </Box>
        <Box mx={1} style={{ cursor: "pointer" }}>
          <Typography variant="h6" color="inherit">
           Sobre
          </Typography>
        </Box>
        <Link to="/login" className="text-decorator-none"  >
          <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
              Sair
            </Typography>
          </Box>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
   }
  return (

    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;