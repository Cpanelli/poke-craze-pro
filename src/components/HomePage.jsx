// HomePage.jsx

import React from "react";
import { Container, Typography } from "@mui/material";
import BestSellingCardSection from "./BestSellingCardSection";
import HeroSection from "./HeroSection";
import RegistrationForm from "./RegistrationForm";
// import SetSelectionSection from "./SetSelectionSection";

const HomePage = () => {
  // Your existing HomePage content here

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to PokeCraze!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Your ultimate destination for all things Pokemon.
      </Typography>
      <BestSellingCardSection />
      <HeroSection />
       {/* <SetSelectionSection /> */}
      <RegistrationForm />
    </Container>
  );
};

export default HomePage;
