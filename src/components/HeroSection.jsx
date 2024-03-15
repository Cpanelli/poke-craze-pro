import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroImage from "../images/hero-image.png";

const useStyles = makeStyles((theme) => ({
    heroSection:{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: theme.spacing(8, 0),
        textAlign: 'center',
        color: '#fff',
        boxShadow: 'inset 0 0 0 100vw rgba(0, 0, 0, 0.5)',
        '& h2': {
            fontSize: '1.25rem',
            marginBottom: theme.spacing(4),
        },
        '& p': {
            fontSize: '1.25rem',
            marginBottom: theme.spacing(4),
    },
},
}));


const HeroSection = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.heroSection}>
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
                <Typography variant="h2" gutterBottom>
                    Welcome To PokeCraze!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Your ultimate destination for all things Pokemon.
                </Typography>
                <Button variant="contained" color="primary">
                    Explore Now
                </Button>
            </Grid>
        </Grid>
    </Box>

  );
};

export default HeroSection;