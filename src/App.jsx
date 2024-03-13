// App.jsx

import React from 'react';
import Header from './Header';
import CardDisplay from './components/CardDisplay';
import Footer from './Footer';
import { Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        {/*  main content goes here */}
        <CardDisplay/>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
