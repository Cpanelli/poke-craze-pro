import React from 'react';
import {Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
    media: {
        height: 190,
    },
}));

const CardComponent = ({ card }) => {
    const classes = useStyles();

    const handelBuyClick = () => {
        window.open(card.externalLink, '_blank', 'noopener noreferrer');
    }

    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.media}
            image={card.image}
            title={card.name}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {card.name}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handelBuyClick}>
                        Buy Now
                        </Button>
                        </CardContent>
                        </Card>
    );
};
export default CardComponent;