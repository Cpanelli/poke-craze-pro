import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BestSellingCardsSection from "./BestSellingCardsSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import AboutSection from "./AboutSection";
import SearchBar from "./SearchBar";
import CategoryNavigation from "./CategoryNavigation";
import Footer from "./Footer";
import { Container, Typography } from "@mui/material";
import RegistrationForm from "./RegistrationForm";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to PokeCraze!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {" "}
          Your ultimate destination for all things Pokemon.{" "}
        </Typography>
        <HeroSection />
        <BestSellingCardsSection />
        <FeaturedProductsSection />
        <AboutSection />
        <SearchBar />
        <CategoryNavigation />
        <RegistrationForm />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
