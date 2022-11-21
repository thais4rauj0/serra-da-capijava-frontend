import "./Inicial.css";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="fundo"
    >
      <Grid alignItems="center" xs={6}>
        <Box
          paddingX={20}
          className="corFundo"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop={2}
          >
            <Box marginRight={1}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="titulo"
              >
                Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                className="titulo"
              >
                Conheça nossa loja!
              </Typography>
              <Link to="/login">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="cadastroBtn"
                >
                  Entre em nosso site
                </Typography>
              </Link>
            </Box>
          </Box>
          <div className="logo-login">
            <img src="https://i.imgur.com/8GPmvfT.png" alt="" />
          </div>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center"></Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Home;
