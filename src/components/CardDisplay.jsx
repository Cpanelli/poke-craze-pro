import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';


const CardDisplay =() => {

    const[cards, setCards] =useState([]);

    const fetchPokemonCards = async () => {
try {
    const response = await axios.get('https://api.pokemontcg.io/v2/cards');
    const { data } = response.data;

    setCards(data);
} catch (error){
    console.error('Error fetching Pokemon cards:', error);
}

const fetchPokemonCards = async () => {
    try {
      const response = await axios.get('https://api.pokemontcg.io/v2/cards');
      const { data } = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching Pokémon cards:', error);
      return [];
    }
  };
    };
    useEffect(() => {
        fetchPokemonCards();
      }, []); 
    
      return (
        <Grid container spacing={2}>
          {/* Map over the fetched cards and render them */}
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
                  {/* Additional card details can be displayed here */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    };
    
    export default CardDisplay;