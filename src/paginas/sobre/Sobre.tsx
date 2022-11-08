import React from "react";
import "./Sobre.css";
import { Box, Typography, Button, TextField } from "@material-ui/core";

function Sobre() {
  return (
    <>
      <Box className="titulos">
        <Typography>Sobre</Typography>
        <Typography>Serra da Capivara</Typography>
      </Box>
      <Box className="boxFoto1">
        <Typography>
          Você sabia que a Serra da Capivara, no Piauí, tem a maior concentração
          de sítios arqueológicos do mundo? Nós, da CapiJava, por meio de nosso
          projeto sem fins lucrativos,buscamos a preservação desse patrimônio
          cultural.
        </Typography>
        <img
          className="imgBox1"
          src="https://i.imgur.com/oet0gl6.jpg"
          alt="imagem da Serra da Capivara"
        />
      </Box>

      <Box className="boxFoto2">
        <Typography>
        O Parque Nacional Serra da Capivara foi criado em 1979, para preservar vestígios arqueológicos da mais remota presença do homem na América do Sul. Sua demarcação foi concluída em 1990 e o parque é subordinado ao Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). Por sua importância, a Unesco o inscreveu na Lista do Patrimônio Mundial em 13 de dezembro de 1991, e também na Lista Indicativa brasileira como patrimônio misto. 
        </Typography>
        <img
          className="imgBox2"
          src="https://i.imgur.com/C0ZLn4c.jpg"
          alt="Foto de uma onça pintada"
        />
      </Box>

      <Box>
        <Typography className="titulo">Equipe</Typography>
        <img src="https://i.imgur.com/S6oCZsT.jpg" className="imgEquipe" />
        <img src="https://i.imgur.com/NF0fZ8i.jpg" className="imgEquipe" />
        <img src="https://i.imgur.com/NF0fZ8i.jpg" className="imgEquipe" />
        <img src="https://i.imgur.com/NF0fZ8i.jpg" className="imgEquipe" />
        <img src="https://i.imgur.com/NF0fZ8i.jpg" className="imgEquipe" />
        <img src="https://i.imgur.com/NF0fZ8i.jpg" className="imgEquipe" />
        <img src="https://i.imgur.com/NF0fZ8i.jpg" className="imgEquipe" />
      </Box>
    </>
  );
}

export default Sobre;
