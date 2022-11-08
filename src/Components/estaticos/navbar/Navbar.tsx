import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <AppBar position="static">
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
    </>
  )
}

export default Navbar;