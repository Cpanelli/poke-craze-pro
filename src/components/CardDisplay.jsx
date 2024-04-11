import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardDisplay = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchPokemonCards = async () => {
      try {
        const response = await axios.get('https://api.pokemontcg.io/v2/cards');
        const { data } = response.data;
        setCards(data);
      } catch (error) {
        console.error('Error fetching Pokémon cards:', error);
      }
    };

    fetchPokemonCards();
  }, []);

  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={card.images.small}
              alt={card.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {card.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {`${card.rarity} - ${card.set}`}
              </Typography>
              {/* Add more information about the card */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardDisplay;
