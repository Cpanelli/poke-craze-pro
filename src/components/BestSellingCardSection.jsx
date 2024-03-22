import React from 'react';
import {Box, Typography, Grid } from '@mui/material';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(8, 0),
        backgroundColor: "#f9f9f9",
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    cardContainter: {
        display: 'flex',
        jusitfyContent: 'center',
    },
    card: {
        maxWidth: 300,
        margin: theme.spacing(0, 2),
        padding: theme.spacing(2),
        backGroundColor: '#fff',
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease',
        '&;hover': {
            transfrom: 'scale(1.05',
        },
    },
}));

const BestSellingCardsSection = () => {
     const clsees = useStyles();

     returen (
        <Box className={classes.section}>
            <Typography variant = "h4" align="center" className={classes.title}>
                Best Selling Cards
            </Typography>
            <Grid container className={classes.cardContainter}>
                </Grid>
        </Box>
     );
};


export default BestSellingCardsSection;