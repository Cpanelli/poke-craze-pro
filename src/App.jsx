// App.jsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        {/*  main content goes here */}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
