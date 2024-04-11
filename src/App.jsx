// App.jsx

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // Import the HomePage component

const App = () => {
  return (
    <div>
      <Header />
      <HomePage /> {/* Render the HomePage component */}
      <Footer />
    </div>
  );
};

export default App;
