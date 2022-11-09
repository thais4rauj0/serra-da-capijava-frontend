import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import { Box, Grid, Typography } from "@mui/material";
import "./Footer.css"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="body1" align="center" gutterBottom className="textoRedes">Nos acompanhe no Instagram:</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.instagram.com/capijavageneration/" target="_blank">
                                <InstagramIcon className="redes"/>
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}  display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright:</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">Serra da CapiJava - Grupo 2</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;